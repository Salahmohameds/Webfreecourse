import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLanguage } from "@/hooks/use-language";
import { useToast } from "@/hooks/use-toast";
import { 
  SpinnerBorder,
  ButtonGroup,
  ListGroup,
  InfoAlert,
  SuccessAlert,
  WarningAlert
} from "@/components/bootstrap-components";
import Breadcrumb from "@/components/breadcrumb";
import { 
  Search, 
  Clock, 
  User, 
  Heart, 
  Info, 
  Code, 
  Brain, 
  Shield,
  AlertCircle,
  Filter,
  Star,
  Play,
  BookOpen,
  Award,
  Globe,
  Smartphone,
  Database,
  TrendingUp,
  Users,
  ExternalLink,
  Calendar,
  XCircle
} from "lucide-react";

export default function CoursesPage() {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedProvider, setSelectedProvider] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const breadcrumbItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.courses, href: "/courses" }
  ];

  // Updated categories with better organization
  const categories = [
    { value: "all", label: isRTL ? "الكل" : "All", icon: <Globe className="h-4 w-4" /> },
    { value: "strategy", label: isRTL ? "الإستراتيجية" : "Strategy", icon: <TrendingUp className="h-4 w-4" /> },
    { value: "ai", label: isRTL ? "الذكاء الاصطناعي" : "AI/ML", icon: <Brain className="h-4 w-4" /> },
    { value: "data", label: isRTL ? "علم البيانات" : "Data Science", icon: <Database className="h-4 w-4" /> },
    { value: "security", label: isRTL ? "الأمن السيبراني" : "Cybersecurity", icon: <Shield className="h-4 w-4" /> },
    { value: "tools", label: isRTL ? "الأدوات" : "Tools", icon: <Code className="h-4 w-4" /> }
  ];

  const levels = [
    { value: "all", label: isRTL ? "جميع المستويات" : "All Levels", icon: <Filter className="h-4 w-4" /> },
    { value: "beginner", label: isRTL ? "مبتدئ" : "Beginner" },
    { value: "intermediate", label: isRTL ? "متوسط" : "Intermediate" },
    { value: "advanced", label: isRTL ? "متقدم" : "Advanced" }
  ];

  // New provider filter
  const providers = [
    { value: "all", label: isRTL ? "جميع المنصات" : "All Platforms", icon: <Globe className="h-4 w-4" /> },
    { value: "Google", label: "Google", icon: <TrendingUp className="h-4 w-4" /> },
    { value: "IBM", label: "IBM", icon: <Database className="h-4 w-4" /> },
    { value: "Meta", label: "Meta", icon: <Users className="h-4 w-4" /> },
    { value: "Coursera", label: "Coursera", icon: <BookOpen className="h-4 w-4" /> },
    { value: "MIT", label: "MIT", icon: <Award className="h-4 w-4" /> },
    { value: "Harvard", label: "Harvard", icon: <Award className="h-4 w-4" /> },
    { value: "Stanford", label: "Stanford", icon: <Award className="h-4 w-4" /> },
    { value: "Yale", label: "Yale", icon: <Award className="h-4 w-4" /> },
    { value: "Microsoft", label: "Microsoft", icon: <Code className="h-4 w-4" /> },
    { value: "Amazon", label: "Amazon", icon: <TrendingUp className="h-4 w-4" /> },
    { value: "IT Masters", label: "IT Masters", icon: <Shield className="h-4 w-4" /> },
    { value: "Cybrary", label: "Cybrary", icon: <Shield className="h-4 w-4" /> },
    { value: "Skills for All", label: "Skills for All", icon: <Users className="h-4 w-4" /> },
    { value: "Open University", label: "Open University", icon: <BookOpen className="h-4 w-4" /> },
    { value: "Other", label: isRTL ? "أخرى" : "Other", icon: <Globe className="h-4 w-4" /> }
  ];

  // New duration filter
  const durations = [
    { value: "all", label: isRTL ? "جميع المدد" : "All Durations", icon: <Clock className="h-4 w-4" /> },
    { value: "short", label: isRTL ? "قصيرة (1-4 أسابيع)" : "Short (1-4 weeks)", icon: <Clock className="h-4 w-4" /> },
    { value: "medium", label: isRTL ? "متوسطة (5-8 أسابيع)" : "Medium (5-8 weeks)", icon: <Clock className="h-4 w-4" /> },
    { value: "long", label: isRTL ? "طويلة (9+ أسابيع)" : "Long (9+ weeks)", icon: <Clock className="h-4 w-4" /> },
    { value: "months", label: isRTL ? "بالشهور" : "Months", icon: <Calendar className="h-4 w-4" /> }
  ];

  // New rating filter
  const ratings = [
    { value: "all", label: isRTL ? "جميع التقييمات" : "All Ratings", icon: <Star className="h-4 w-4" /> },
    { value: "4.5+", label: "4.5+ Stars", icon: <Star className="h-4 w-4" /> },
    { value: "4.0+", label: "4.0+ Stars", icon: <Star className="h-4 w-4" /> },
    { value: "3.5+", label: "3.5+ Stars", icon: <Star className="h-4 w-4" /> }
  ];

  // New status filter
  const statuses = [
    { value: "all", label: isRTL ? "جميع الحالات" : "All Status", icon: <Filter className="h-4 w-4" /> },
    { value: "free", label: isRTL ? "مجاني" : "Free", icon: <Award className="h-4 w-4" /> },
    { value: "new", label: isRTL ? "جديد" : "New", icon: <TrendingUp className="h-4 w-4" /> },
    { value: "trending", label: isRTL ? "رائج" : "Trending", icon: <TrendingUp className="h-4 w-4" /> }
  ];

  const courses = [
    // Strategy Courses
    {
      id: "1",
      title: "Advanced Strategy",
      provider: "MIT",
      category: "strategy",
      level: "advanced",
      duration: "8 weeks",
      rating: 4.8,
      students: "15K+",
      progress: 0,
      description: "Advanced strategic management and business strategy concepts",
      tags: ["Strategy", "Management", "Business"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/e8pbqGvR"
    },
    {
      id: "2",
      title: "Organizational Analysis",
      provider: "Stanford",
      category: "strategy",
      level: "intermediate",
      duration: "6 weeks",
      rating: 4.7,
      students: "12K+",
      progress: 0,
      description: "Understanding organizational structures and dynamics",
      tags: ["Organizational", "Analysis", "Management"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://lnkd.in/eB26pQUV"
    },
    {
      id: "3",
      title: "Business Strategy",
      provider: "University of Virginia",
      category: "strategy",
      level: "intermediate",
      duration: "7 weeks",
      rating: 4.6,
      students: "18K+",
      progress: 0,
      description: "Comprehensive business strategy and competitive analysis",
      tags: ["Business", "Strategy", "Competitive"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/eJzTfiQ3"
    },
    {
      id: "4",
      title: "Strategic Management",
      provider: "Copenhagen Business School",
      category: "strategy",
      level: "advanced",
      duration: "8 weeks",
      rating: 4.8,
      students: "10K+",
      progress: 0,
      description: "Strategic management principles and practices",
      tags: ["Strategic", "Management", "Leadership"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://lnkd.in/eYJtuvBj"
    },
    {
      id: "5",
      title: "International Business Strategy",
      provider: "University of London",
      category: "strategy",
      level: "advanced",
      duration: "6 weeks",
      rating: 4.7,
      students: "8K+",
      progress: 0,
      description: "Global business strategy and international markets",
      tags: ["International", "Business", "Global"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/eVpd3D45"
    },
    {
      id: "6",
      title: "Strategic Planning and Execution",
      provider: "University of Virginia",
      category: "strategy",
      level: "intermediate",
      duration: "5 weeks",
      rating: 4.6,
      students: "14K+",
      progress: 0,
      description: "Strategic planning methodologies and execution frameworks",
      tags: ["Planning", "Execution", "Strategy"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://lnkd.in/ecBjCQYv"
    },
    {
      id: "7",
      title: "Exercising Leadership: Foundational Principles",
      provider: "Harvard",
      category: "strategy",
      level: "advanced",
      duration: "8 weeks",
      rating: 4.9,
      students: "20K+",
      progress: 0,
      description: "Leadership principles and practices for strategic management",
      tags: ["Leadership", "Management", "Harvard"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/epMQmQjr"
    },
    {
      id: "8",
      title: "Strategic Leadership",
      provider: "Dartmouth College",
      category: "strategy",
      level: "advanced",
      duration: "7 weeks",
      rating: 4.7,
      students: "12K+",
      progress: 0,
      description: "Strategic leadership and organizational change",
      tags: ["Leadership", "Strategic", "Change"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://lnkd.in/evMmPExb"
    },
    {
      id: "9",
      title: "Strategic Leadership and Management",
      provider: "University of Illinois",
      category: "strategy",
      level: "intermediate",
      duration: "6 weeks",
      rating: 4.6,
      students: "15K+",
      progress: 0,
      description: "Leadership and management in strategic contexts",
      tags: ["Leadership", "Management", "Strategic"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://lnkd.in/eHbZZ7p9"
    },
    {
      id: "10",
      title: "Competitive Strategy",
      provider: "Ludwig Maximilian University",
      category: "strategy",
      level: "advanced",
      duration: "8 weeks",
      rating: 4.8,
      students: "11K+",
      progress: 0,
      description: "Competitive strategy and market positioning",
      tags: ["Competitive", "Strategy", "Market"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/eY7ePgw5"
    },
    // AI/ML Courses
    {
      id: "11",
      title: "Applications of AI",
      provider: "Great Learning",
      category: "ai",
      level: "intermediate",
      duration: "6 weeks",
      rating: 4.5,
      students: "25K+",
      progress: 0,
      description: "Practical applications of artificial intelligence",
      tags: ["AI", "Applications", "Practical"],
      isFree: true,
      isNew: true,
      isTrending: true,
      link: "https://drp.li/9Akbb"
    },
    {
      id: "12",
      title: "Introduction to Generative AI",
      provider: "Google",
      category: "ai",
      level: "beginner",
      duration: "4 weeks",
      rating: 4.7,
      students: "35K+",
      progress: 0,
      description: "Introduction to generative AI and its applications",
      tags: ["Generative AI", "Google", "Introduction"],
      isFree: true,
      isNew: true,
      isTrending: true,
      link: "https://lnkd.in/extyHBZk"
    },
    {
      id: "13",
      title: "Prompt Engineering for ChatGPT",
      provider: "Vanderbilt University",
      category: "ai",
      level: "intermediate",
      duration: "5 weeks",
      rating: 4.6,
      students: "28K+",
      progress: 0,
      description: "Learn effective prompt engineering techniques for ChatGPT",
      tags: ["Prompt Engineering", "ChatGPT", "AI"],
      isFree: true,
      isNew: true,
      isTrending: true,
      link: "https://lnkd.in/ehFAiUw7"
    },
    {
      id: "14",
      title: "Generative AI For Everyone",
      provider: "DeepLearning AI",
      category: "ai",
      level: "beginner",
      duration: "6 weeks",
      rating: 4.8,
      students: "40K+",
      progress: 0,
      description: "Comprehensive introduction to generative AI for all levels",
      tags: ["Generative AI", "DeepLearning", "Beginner"],
      isFree: true,
      isNew: true,
      isTrending: true,
      link: "https://lnkd.in/eqiWKnyT"
    },
    {
      id: "15",
      title: "Generative AI with Large Language Models",
      provider: "Amazon AWS & Deep Learning AI",
      category: "ai",
      level: "advanced",
      duration: "8 weeks",
      rating: 4.9,
      students: "22K+",
      progress: 0,
      description: "Advanced course on LLMs and generative AI",
      tags: ["LLM", "AWS", "Advanced"],
      isFree: true,
      isNew: true,
      isTrending: true,
      link: "https://lnkd.in/dSNEtsDz"
    },
    {
      id: "16",
      title: "Google AI Essentials",
      provider: "Google",
      category: "ai",
      level: "beginner",
      duration: "5 weeks",
      rating: 4.7,
      students: "30K+",
      progress: 0,
      description: "Essential AI concepts and tools from Google",
      tags: ["Google", "AI", "Essentials"],
      isFree: true,
      isNew: true,
      isTrending: true,
      link: "https://lnkd.in/ei3S_ZsU"
    },
    {
      id: "17",
      title: "Elements of AI",
      provider: "University of Helsinki & MinnaLearn",
      category: "ai",
      level: "beginner",
      duration: "6 weeks",
      rating: 4.6,
      students: "45K+",
      progress: 0,
      description: "Fundamental concepts of artificial intelligence",
      tags: ["AI", "Fundamentals", "University"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/eCNvUHtM"
    },
    {
      id: "18",
      title: "Artificial Intelligence",
      provider: "MIT OpenCourseWare",
      category: "ai",
      level: "advanced",
      duration: "12 weeks",
      rating: 4.9,
      students: "18K+",
      progress: 0,
      description: "Comprehensive AI course from MIT",
      tags: ["MIT", "AI", "Advanced"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/eBwQcchv"
    },
    {
      id: "19",
      title: "CS50's Introduction to AI with Python",
      provider: "Harvard University",
      category: "ai",
      level: "intermediate",
      duration: "10 weeks",
      rating: 4.8,
      students: "25K+",
      progress: 0,
      description: "AI programming with Python from Harvard",
      tags: ["Harvard", "Python", "AI"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://drp.li/dPwh5"
    },
    // Data Science Courses
    {
      id: "20",
      title: "Google Data Analytics",
      provider: "Google",
      category: "data",
      level: "beginner",
      duration: "6 months",
      rating: 4.8,
      students: "100K+",
      progress: 0,
      description: "Complete data analytics certification from Google",
      tags: ["Data Analytics", "Google", "Certification"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/gBhq8EXw"
    },
    {
      id: "21",
      title: "Google Project Management",
      provider: "Google",
      category: "data",
      level: "beginner",
      duration: "6 months",
      rating: 4.7,
      students: "80K+",
      progress: 0,
      description: "Project management certification from Google",
      tags: ["Project Management", "Google", "Certification"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/gbwqe7f3"
    },
    {
      id: "22",
      title: "Google IT Support",
      provider: "Google",
      category: "data",
      level: "beginner",
      duration: "6 months",
      rating: 4.6,
      students: "75K+",
      progress: 0,
      description: "IT support certification from Google",
      tags: ["IT Support", "Google", "Certification"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://lnkd.in/gd6Wbufg"
    },
    {
      id: "23",
      title: "Google Digital Marketing & E-commerce",
      provider: "Google",
      category: "data",
      level: "beginner",
      duration: "6 months",
      rating: 4.7,
      students: "90K+",
      progress: 0,
      description: "Digital marketing and e-commerce certification",
      tags: ["Digital Marketing", "E-commerce", "Google"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/gfA4GiAr"
    },
    {
      id: "24",
      title: "Google IT Automation with Python",
      provider: "Google",
      category: "data",
      level: "intermediate",
      duration: "6 months",
      rating: 4.8,
      students: "60K+",
      progress: 0,
      description: "IT automation using Python from Google",
      tags: ["Python", "Automation", "Google"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/gwrA-QkY"
    },
    {
      id: "25",
      title: "Google Business Intelligence",
      provider: "Google",
      category: "data",
      level: "intermediate",
      duration: "6 months",
      rating: 4.7,
      students: "50K+",
      progress: 0,
      description: "Business intelligence certification from Google",
      tags: ["Business Intelligence", "Google", "Analytics"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/gvDvVKrF"
    },
    {
      id: "26",
      title: "Google Advanced Data Analytics",
      provider: "Google",
      category: "data",
      level: "advanced",
      duration: "6 months",
      rating: 4.9,
      students: "40K+",
      progress: 0,
      description: "Advanced data analytics certification from Google",
      tags: ["Advanced Analytics", "Google", "Data Science"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/gBhq8EXw"
    },
    {
      id: "27",
      title: "Google Cybersecurity",
      provider: "Google",
      category: "data",
      level: "intermediate",
      duration: "6 months",
      rating: 4.8,
      students: "55K+",
      progress: 0,
      description: "Cybersecurity certification from Google",
      tags: ["Cybersecurity", "Google", "Security"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/gVuDwxaj"
    },
    {
      id: "28",
      title: "Meta Database Engineer",
      provider: "Meta",
      category: "data",
      level: "intermediate",
      duration: "6 months",
      rating: 4.7,
      students: "45K+",
      progress: 0,
      description: "Database engineering certification from Meta",
      tags: ["Database", "Meta", "Engineering"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/gwEAFUND"
    },
    {
      id: "29",
      title: "IBM Data Science",
      provider: "IBM",
      category: "data",
      level: "intermediate",
      duration: "6 months",
      rating: 4.8,
      students: "70K+",
      progress: 0,
      description: "Data science certification from IBM",
      tags: ["Data Science", "IBM", "Analytics"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/gzpTAxpM"
    },
    {
      id: "30",
      title: "Machine Learning",
      provider: "Coursera",
      category: "data",
      level: "intermediate",
      duration: "4 months",
      rating: 4.9,
      students: "120K+",
      progress: 0,
      description: "Comprehensive machine learning course",
      tags: ["Machine Learning", "AI", "Algorithms"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/gx7Bk2aE"
    },
    {
      id: "31",
      title: "IBM Data Analyst",
      provider: "IBM",
      category: "data",
      level: "beginner",
      duration: "6 months",
      rating: 4.7,
      students: "85K+",
      progress: 0,
      description: "Data analyst certification from IBM",
      tags: ["Data Analysis", "IBM", "Analytics"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/guz8AvRS"
    },
    {
      id: "32",
      title: "Deep Learning",
      provider: "Coursera",
      category: "data",
      level: "advanced",
      duration: "4 months",
      rating: 4.9,
      students: "95K+",
      progress: 0,
      description: "Deep learning and neural networks course",
      tags: ["Deep Learning", "Neural Networks", "AI"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/geSH2-E4"
    },
    {
      id: "33",
      title: "Python for Everybody",
      provider: "University of Michigan",
      category: "data",
      level: "beginner",
      duration: "4 months",
      rating: 4.8,
      students: "150K+",
      progress: 0,
      description: "Python programming for everyone",
      tags: ["Python", "Programming", "Beginner"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/gUqkvnGG"
    },
    {
      id: "34",
      title: "IBM Cybersecurity Analyst",
      provider: "IBM",
      category: "data",
      level: "intermediate",
      duration: "6 months",
      rating: 4.7,
      students: "65K+",
      progress: 0,
      description: "Cybersecurity analyst certification from IBM",
      tags: ["Cybersecurity", "IBM", "Security"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/dJ3vnEnJ"
    },
    {
      id: "35",
      title: "Meta Social Media Marketing",
      provider: "Meta",
      category: "data",
      level: "beginner",
      duration: "6 months",
      rating: 4.6,
      students: "110K+",
      progress: 0,
      description: "Social media marketing certification from Meta",
      tags: ["Social Media", "Marketing", "Meta"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/dxahQpax"
    },
    {
      id: "36",
      title: "Learn SQL Basics for Data Science",
      provider: "Coursera",
      category: "data",
      level: "beginner",
      duration: "2 months",
      rating: 4.7,
      students: "80K+",
      progress: 0,
      description: "SQL fundamentals for data science",
      tags: ["SQL", "Data Science", "Database"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/dPdhSJbj"
    },
    {
      id: "37",
      title: "The Science of Well-Being",
      provider: "Yale University",
      category: "data",
      level: "beginner",
      duration: "2 months",
      rating: 4.9,
      students: "200K+",
      progress: 0,
      description: "Psychology and well-being course from Yale",
      tags: ["Psychology", "Well-being", "Yale"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/dBn6378y"
    },
    {
      id: "38",
      title: "The Science of Well-Being for Teens",
      provider: "Yale University",
      category: "data",
      level: "beginner",
      duration: "2 months",
      rating: 4.8,
      students: "50K+",
      progress: 0,
      description: "Well-being course designed for teenagers",
      tags: ["Psychology", "Teens", "Well-being"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://lnkd.in/dYRdyjJJ"
    },
    {
      id: "39",
      title: "IBM Full Stack Software Developer",
      provider: "IBM",
      category: "data",
      level: "intermediate",
      duration: "6 months",
      rating: 4.8,
      students: "75K+",
      progress: 0,
      description: "Full stack development certification from IBM",
      tags: ["Full Stack", "IBM", "Development"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/dfbjut2K"
    },
    {
      id: "40",
      title: "Intuit Bookkeeping",
      provider: "Intuit",
      category: "data",
      level: "beginner",
      duration: "4 months",
      rating: 4.6,
      students: "60K+",
      progress: 0,
      description: "Bookkeeping certification from Intuit",
      tags: ["Bookkeeping", "Intuit", "Accounting"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://lnkd.in/dqzKmPij"
    },
    {
      id: "41",
      title: "Psychological First Aid",
      provider: "Johns Hopkins University",
      category: "data",
      level: "beginner",
      duration: "2 months",
      rating: 4.7,
      students: "45K+",
      progress: 0,
      description: "Psychological first aid and crisis intervention",
      tags: ["Psychology", "First Aid", "Crisis"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://lnkd.in/dAC9iHtd"
    },
    {
      id: "42",
      title: "Introduction to Data Science",
      provider: "Coursera",
      category: "data",
      level: "beginner",
      duration: "3 months",
      rating: 4.8,
      students: "100K+",
      progress: 0,
      description: "Introduction to data science concepts and tools",
      tags: ["Data Science", "Introduction", "Analytics"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/dNvkRMJz"
    },
    {
      id: "43",
      title: "Excel Skills for Business",
      provider: "Macquarie University",
      category: "data",
      level: "beginner",
      duration: "4 months",
      rating: 4.7,
      students: "120K+",
      progress: 0,
      description: "Excel skills for business applications",
      tags: ["Excel", "Business", "Skills"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/ddr49ymH"
    },
    // Tools Courses
    {
      id: "44",
      title: "Learn how to draw.io",
      provider: "draw.io",
      category: "tools",
      level: "beginner",
      duration: "2 weeks",
      rating: 4.5,
      students: "25K+",
      progress: 0,
      description: "Learn to create diagrams and flowcharts with draw.io",
      tags: ["draw.io", "Diagrams", "Flowcharts"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://lnkd.in/gTgWGWa9"
    },
    {
      id: "45",
      title: "Become a Balsamiq Pro!",
      provider: "Balsamiq",
      category: "tools",
      level: "intermediate",
      duration: "3 weeks",
      rating: 4.6,
      students: "15K+",
      progress: 0,
      description: "Master Balsamiq for wireframing and prototyping",
      tags: ["Balsamiq", "Wireframing", "Prototyping"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://lnkd.in/gtS8jAde"
    },
    {
      id: "46",
      title: "Tableau Tutorial for Beginners",
      provider: "Tableau",
      category: "tools",
      level: "beginner",
      duration: "4 weeks",
      rating: 4.7,
      students: "40K+",
      progress: 0,
      description: "Learn Tableau for data visualization",
      tags: ["Tableau", "Data Visualization", "Analytics"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/gJ_Sqs9E"
    },
    {
      id: "47",
      title: "Introduction to Microsoft Power BI",
      provider: "Microsoft",
      category: "tools",
      level: "beginner",
      duration: "4 weeks",
      rating: 4.6,
      students: "35K+",
      progress: 0,
      description: "Learn Power BI for business intelligence",
      tags: ["Power BI", "Microsoft", "Business Intelligence"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/gB93XR7r"
    },
    {
      id: "48",
      title: "How to Build a VBA App in Just 30 Minutes",
      provider: "Microsoft",
      category: "tools",
      level: "intermediate",
      duration: "1 week",
      rating: 4.4,
      students: "20K+",
      progress: 0,
      description: "Quick VBA application development tutorial",
      tags: ["VBA", "Microsoft", "Automation"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://lnkd.in/gFdhJMGW"
    },
    {
      id: "49",
      title: "Using Confluence for Documentation & Knowledge Bases",
      provider: "Atlassian",
      category: "tools",
      level: "beginner",
      duration: "2 weeks",
      rating: 4.5,
      students: "30K+",
      progress: 0,
      description: "Learn to use Confluence for documentation",
      tags: ["Confluence", "Documentation", "Atlassian"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://lnkd.in/gFgQi6mT"
    },
    {
      id: "50",
      title: "Getting started with Jira tutorial",
      provider: "Atlassian",
      category: "tools",
      level: "beginner",
      duration: "2 weeks",
      rating: 4.6,
      students: "45K+",
      progress: 0,
      description: "Learn to use Jira for project management",
      tags: ["Jira", "Project Management", "Atlassian"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/gZ3EVn8N"
    },
    {
      id: "51",
      title: "Learn Figma for UI UX Design",
      provider: "Figma",
      category: "tools",
      level: "intermediate",
      duration: "6 weeks",
      rating: 4.8,
      students: "80K+",
      progress: 0,
      description: "Complete Figma course for UI/UX design",
      tags: ["Figma", "UI/UX", "Design"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://lnkd.in/g4rC2nFR"
    },
    {
      id: "52",
      title: "Trello App: Full Trello Tutorial for Beginners",
      provider: "Trello",
      category: "tools",
      level: "beginner",
      duration: "2 weeks",
      rating: 4.5,
      students: "35K+",
      progress: 0,
      description: "Complete Trello tutorial for project management",
      tags: ["Trello", "Project Management", "Organization"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://lnkd.in/gY9UeYHi"
    },
    {
      id: "53",
      title: "SWOT by Visual Paradigm",
      provider: "Visual Paradigm",
      category: "tools",
      level: "beginner",
      duration: "1 week",
      rating: 4.4,
      students: "15K+",
      progress: 0,
      description: "Learn SWOT analysis with Visual Paradigm",
      tags: ["SWOT", "Analysis", "Strategy"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://lnkd.in/gn83_g7w"
    },
    {
      id: "54",
      title: "How to get started with Miro",
      provider: "Miro",
      category: "tools",
      level: "beginner",
      duration: "2 weeks",
      rating: 4.6,
      students: "25K+",
      progress: 0,
      description: "Learn to use Miro for collaboration and whiteboarding",
      tags: ["Miro", "Collaboration", "Whiteboarding"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://lnkd.in/gsj53dKv"
    },
    {
      id: "55",
      title: "Axure Video Courses",
      provider: "Axure",
      category: "tools",
      level: "intermediate",
      duration: "4 weeks",
      rating: 4.5,
      students: "20K+",
      progress: 0,
      description: "Learn Axure for prototyping and wireframing",
      tags: ["Axure", "Prototyping", "Wireframing"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://lnkd.in/g7-7HgW5"
    },
    // Cybersecurity & IT Courses from CSV
    {
      id: "56",
      title: "Cyber Warfare and Terrorism",
      provider: "IT Masters",
      category: "security",
      level: "advanced",
      duration: "6 weeks",
      rating: 4.7,
      students: "8K+",
      progress: 0,
      description: "Advanced course on cyber warfare and terrorism",
      tags: ["Cyber Warfare", "Terrorism", "Security"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://itmasters.edu.au/short-courses/cyber-warfare-and-terrorism/"
    },
    {
      id: "57",
      title: "Cybersecurity Management",
      provider: "IT Masters",
      category: "security",
      level: "intermediate",
      duration: "6 weeks",
      rating: 4.6,
      students: "12K+",
      progress: 0,
      description: "Management principles in cybersecurity",
      tags: ["Cybersecurity", "Management", "Security"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://itmasters.edu.au/short-courses/cybersecurity-managment/"
    },
    {
      id: "58",
      title: "Enterprise Cyber Security Fundamentals",
      provider: "IT Masters",
      category: "security",
      level: "beginner",
      duration: "4 weeks",
      rating: 4.5,
      students: "15K+",
      progress: 0,
      description: "Fundamental cybersecurity concepts for enterprises",
      tags: ["Enterprise", "Cybersecurity", "Fundamentals"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://itmasters.edu.au/short-courses/enterprise-cyber-security-fundamentals/"
    },
    {
      id: "59",
      title: "Cyber Defence Strategies",
      provider: "IT Masters",
      category: "security",
      level: "intermediate",
      duration: "6 weeks",
      rating: 4.7,
      students: "10K+",
      progress: 0,
      description: "Strategic approaches to cyber defense",
      tags: ["Cyber Defense", "Strategy", "Security"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://itmasters.edu.au/short-courses/cyber-defence-strategies/"
    },
    {
      id: "60",
      title: "Information Security Incident Handling",
      provider: "IT Masters",
      category: "security",
      level: "intermediate",
      duration: "5 weeks",
      rating: 4.6,
      students: "9K+",
      progress: 0,
      description: "Handling information security incidents effectively",
      tags: ["Incident Handling", "Information Security", "Response"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://itmasters.edu.au/short-courses/information-security-incident/"
    },
    {
      id: "61",
      title: "Pen Testing",
      provider: "IT Masters",
      category: "security",
      level: "advanced",
      duration: "8 weeks",
      rating: 4.8,
      students: "7K+",
      progress: 0,
      description: "Comprehensive penetration testing course",
      tags: ["Penetration Testing", "Security", "Advanced"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://itmasters.edu.au/short-courses/pen-testing/"
    },
    {
      id: "62",
      title: "Cloud Models, Architecture & Risk Management",
      provider: "IT Masters",
      category: "data",
      level: "intermediate",
      duration: "6 weeks",
      rating: 4.5,
      students: "11K+",
      progress: 0,
      description: "Cloud computing models and risk management",
      tags: ["Cloud Computing", "Architecture", "Risk Management"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://itmasters.edu.au/short-courses/cloud-models-architecture-risk-management/"
    },
    {
      id: "63",
      title: "Masterclass: Comparative Cloud Technologies",
      provider: "IT Masters",
      category: "data",
      level: "advanced",
      duration: "4 weeks",
      rating: 4.7,
      students: "6K+",
      progress: 0,
      description: "Advanced comparison of cloud technologies",
      tags: ["Cloud Technologies", "Comparison", "Advanced"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://itmasters.edu.au/short-courses/comparative-cloud-technologies/"
    },
    {
      id: "64",
      title: "IT Leadership",
      provider: "IT Masters",
      category: "strategy",
      level: "advanced",
      duration: "6 weeks",
      rating: 4.6,
      students: "8K+",
      progress: 0,
      description: "Leadership skills for IT professionals",
      tags: ["IT Leadership", "Management", "Strategy"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://itmasters.edu.au/short-courses/it-leadership/"
    },
    {
      id: "65",
      title: "Introductory Certificate in Business Analysis",
      provider: "IT Masters",
      category: "data",
      level: "beginner",
      duration: "4 weeks",
      rating: 4.4,
      students: "14K+",
      progress: 0,
      description: "Introduction to business analysis concepts",
      tags: ["Business Analysis", "Certificate", "Introduction"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://itmasters.edu.au/short-courses/introductory-certificate-in-business-analysis/"
    },
    {
      id: "66",
      title: "Digital Forensics (Updated)",
      provider: "IT Masters",
      category: "security",
      level: "intermediate",
      duration: "8 weeks",
      rating: 4.8,
      students: "9K+",
      progress: 0,
      description: "Updated digital forensics course with latest techniques",
      tags: ["Digital Forensics", "Security", "Updated"],
      isFree: true,
      isNew: true,
      isTrending: true,
      link: "https://itmasters.edu.au/short-courses/digital-forensics-updated/"
    },
    {
      id: "67",
      title: "The Internet of Things",
      provider: "IT Masters",
      category: "data",
      level: "intermediate",
      duration: "5 weeks",
      rating: 4.5,
      students: "12K+",
      progress: 0,
      description: "Understanding IoT technologies and applications",
      tags: ["IoT", "Internet of Things", "Technology"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://itmasters.edu.au/short-courses/the-internet-of-things/"
    },
    {
      id: "68",
      title: "IT Basics",
      provider: "IT Masters",
      category: "data",
      level: "beginner",
      duration: "3 weeks",
      rating: 4.3,
      students: "20K+",
      progress: 0,
      description: "Fundamental IT concepts and principles",
      tags: ["IT Basics", "Fundamentals", "Beginner"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://itmasters.edu.au/short-courses/it-basic-fundamentals/"
    },
    {
      id: "69",
      title: "IT Basics 2",
      provider: "IT Masters",
      category: "data",
      level: "beginner",
      duration: "3 weeks",
      rating: 4.4,
      students: "18K+",
      progress: 0,
      description: "Advanced IT basics and concepts",
      tags: ["IT Basics", "Advanced", "Fundamentals"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://itmasters.edu.au/short-courses/it-basics-2/"
    },
    {
      id: "70",
      title: "Ransomware Techniques",
      provider: "IT Masters",
      category: "security",
      level: "advanced",
      duration: "6 weeks",
      rating: 4.7,
      students: "8K+",
      progress: 0,
      description: "Understanding and defending against ransomware",
      tags: ["Ransomware", "Security", "Advanced"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://itmasters.edu.au/short-courses/ransomware-techniques/"
    },
    {
      id: "71",
      title: "DevOps",
      provider: "IT Masters",
      category: "data",
      level: "intermediate",
      duration: "6 weeks",
      rating: 4.6,
      students: "13K+",
      progress: 0,
      description: "DevOps principles and practices",
      tags: ["DevOps", "Development", "Operations"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://itmasters.edu.au/short-courses/devops/"
    },
    {
      id: "72",
      title: "Cryptography",
      provider: "IT Masters",
      category: "security",
      level: "intermediate",
      duration: "7 weeks",
      rating: 4.8,
      students: "10K+",
      progress: 0,
      description: "Cryptographic principles and applications",
      tags: ["Cryptography", "Security", "Encryption"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://itmasters.edu.au/short-courses/cryptography/"
    },
    {
      id: "73",
      title: "Agile Data and Information Management",
      provider: "IT Masters",
      category: "data",
      level: "intermediate",
      duration: "5 weeks",
      rating: 4.5,
      students: "11K+",
      progress: 0,
      description: "Agile approaches to data and information management",
      tags: ["Agile", "Data Management", "Information"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://itmasters.edu.au/short-courses/agile-data-and-information-management/"
    },
    {
      id: "74",
      title: "Effective Workplace Communications",
      provider: "IT Masters",
      category: "strategy",
      level: "beginner",
      duration: "4 weeks",
      rating: 4.4,
      students: "16K+",
      progress: 0,
      description: "Improving workplace communication skills",
      tags: ["Communication", "Workplace", "Soft Skills"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://itmasters.edu.au/short-courses/effective-workplace-communications/"
    },
    {
      id: "75",
      title: "Knowledge Discovery and Data Mining",
      provider: "IT Masters",
      category: "data",
      level: "advanced",
      duration: "8 weeks",
      rating: 4.7,
      students: "9K+",
      progress: 0,
      description: "Advanced data mining and knowledge discovery techniques",
      tags: ["Data Mining", "Knowledge Discovery", "Advanced"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://itmasters.edu.au/short-courses/knowledge-discovery-and-data-mining/"
    },
    {
      id: "76",
      title: "Digital Marketing Analytics",
      provider: "IT Masters",
      category: "data",
      level: "intermediate",
      duration: "5 weeks",
      rating: 4.6,
      students: "12K+",
      progress: 0,
      description: "Analytics for digital marketing campaigns",
      tags: ["Digital Marketing", "Analytics", "Marketing"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://itmasters.edu.au/short-courses/digital-marketing-analytics/"
    },
    {
      id: "77",
      title: "Computer Network Fundamentals",
      provider: "IT Masters",
      category: "data",
      level: "beginner",
      duration: "4 weeks",
      rating: 4.5,
      students: "15K+",
      progress: 0,
      description: "Fundamental concepts of computer networking",
      tags: ["Networking", "Fundamentals", "Computer Networks"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://itmasters.edu.au/short-courses/computer-network-fundamentals/"
    },
    {
      id: "78",
      title: "Configuration Management",
      provider: "IT Masters",
      category: "data",
      level: "intermediate",
      duration: "5 weeks",
      rating: 4.4,
      students: "10K+",
      progress: 0,
      description: "Configuration management principles and practices",
      tags: ["Configuration Management", "IT", "Management"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://itmasters.edu.au/short-courses/configuration-management/"
    },
    {
      id: "79",
      title: "TCM Security Practical Help Desk",
      provider: "TCM Security",
      category: "security",
      level: "beginner",
      duration: "3 weeks",
      rating: 4.5,
      students: "8K+",
      progress: 0,
      description: "Practical help desk skills for security professionals",
      tags: ["Help Desk", "Security", "Practical"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://academy.tcm-sec.com/p/practical-help-desk"
    },
    {
      id: "80",
      title: "IBM SkillsBuild Information Technology",
      provider: "IBM",
      category: "data",
      level: "beginner",
      duration: "6 months",
      rating: 4.7,
      students: "25K+",
      progress: 0,
      description: "Comprehensive IT skills development program",
      tags: ["IBM", "IT Skills", "SkillsBuild"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://skillsbuild.org/adult-learners/explore-learning/it-support-technician"
    },
    {
      id: "81",
      title: "Computer Hardware Basics",
      provider: "Skills for All",
      category: "data",
      level: "beginner",
      duration: "2 weeks",
      rating: 4.4,
      students: "30K+",
      progress: 0,
      description: "Fundamental computer hardware concepts",
      tags: ["Hardware", "Computer", "Basics"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://skillsforall.com/course/computer-hardware-basics?courseLang=en-US"
    },
    {
      id: "82",
      title: "Linux Foundation Free Courses",
      provider: "Linux Foundation",
      category: "data",
      level: "beginner",
      duration: "4 weeks",
      rating: 4.8,
      students: "40K+",
      progress: 0,
      description: "Free Linux and open source courses",
      tags: ["Linux", "Open Source", "Foundation"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://training.linuxfoundation.org/resources/?_sft_content_type=free-course"
    },
    {
      id: "83",
      title: "Linux Tutorial Introduction",
      provider: "Linux Survival",
      category: "data",
      level: "beginner",
      duration: "2 weeks",
      rating: 4.6,
      students: "35K+",
      progress: 0,
      description: "Introduction to Linux command line",
      tags: ["Linux", "Command Line", "Tutorial"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://linuxsurvival.com/linux-tutorial-introduction/"
    },
    {
      id: "84",
      title: "TCM Security Linux 100: Fundamentals",
      provider: "TCM Security",
      category: "security",
      level: "beginner",
      duration: "4 weeks",
      rating: 4.7,
      students: "12K+",
      progress: 0,
      description: "Linux fundamentals for security practitioners",
      tags: ["Linux", "Security", "Fundamentals"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://academy.tcm-sec.com/p/linux-fundamentals"
    },
    {
      id: "85",
      title: "Awareness: ITIL® 4 – eLearning",
      provider: "EA Learning",
      category: "strategy",
      level: "beginner",
      duration: "3 weeks",
      rating: 4.5,
      students: "18K+",
      progress: 0,
      description: "ITIL 4 awareness and fundamentals",
      tags: ["ITIL", "IT Service Management", "Awareness"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://www.ealearning.com/events/54-awareness-itil-4-elearning/"
    },
    {
      id: "86",
      title: "An Introduction to Computers and Computer Systems",
      provider: "Open University",
      category: "data",
      level: "beginner",
      duration: "4 weeks",
      rating: 4.6,
      students: "25K+",
      progress: 0,
      description: "Introduction to computer systems and architecture",
      tags: ["Computer Systems", "Introduction", "Open University"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://www.open.edu/openlearn/digital-computing/an-introduction-computers-and-computer-systems/content-section-overview?active-tab=description-tab"
    },
    {
      id: "87",
      title: "Introducing Computing and IT",
      provider: "Open University",
      category: "data",
      level: "beginner",
      duration: "4 weeks",
      rating: 4.5,
      students: "22K+",
      progress: 0,
      description: "Introduction to computing and information technology",
      tags: ["Computing", "IT", "Introduction"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://www.open.edu/openlearn/digital-computing/introducing-computing-and-it/content-section-0?active-tab=description-tab"
    },
    {
      id: "88",
      title: "Cybersecurity Essentials",
      provider: "Skills for All",
      category: "security",
      level: "beginner",
      duration: "3 weeks",
      rating: 4.7,
      students: "45K+",
      progress: 0,
      description: "Essential cybersecurity concepts and practices",
      tags: ["Cybersecurity", "Essentials", "Security"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://skillsforall.com/course/cybersecurity-essentials?userLang=en-US"
    },
    {
      id: "89",
      title: "Endpoint Security",
      provider: "Skills for All",
      category: "security",
      level: "intermediate",
      duration: "4 weeks",
      rating: 4.6,
      students: "28K+",
      progress: 0,
      description: "Endpoint security and protection strategies",
      tags: ["Endpoint Security", "Protection", "Security"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://skillsforall.com/course/endpoint-security?courseLang=en-US"
    },
    {
      id: "90",
      title: "Mosse Introduction to Cybersecurity (MICS)",
      provider: "Mosse Institute",
      category: "security",
      level: "beginner",
      duration: "4 weeks",
      rating: 4.5,
      students: "15K+",
      progress: 0,
      description: "Introduction to cybersecurity from Mosse Institute",
      tags: ["Cybersecurity", "Mosse", "Introduction"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://www.mosse-institute.com/certifications/mics-introduction-to-cyber-security.html"
    },
    {
      id: "91",
      title: "Level Effect Cybersecurity Foundations",
      provider: "Level Effect",
      category: "security",
      level: "beginner",
      duration: "3 weeks",
      rating: 4.4,
      students: "12K+",
      progress: 0,
      description: "Foundational cybersecurity concepts",
      tags: ["Cybersecurity", "Foundations", "Level Effect"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://www.leveleffect.com/cybersecurity-foundations"
    },
    {
      id: "92",
      title: "Infosec Skills (Free Access Tier)",
      provider: "Infosec Institute",
      category: "security",
      level: "beginner",
      duration: "2 weeks",
      rating: 4.6,
      students: "35K+",
      progress: 0,
      description: "Free cybersecurity skills and training",
      tags: ["Infosec", "Cybersecurity", "Free Training"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://app.infosecinstitute.com/portal/search?template=courses&sort=relevance&q=&filters%5Btype%5D%5B0%5D=Course&filters%5Btier%5D%5B0%5D=Free"
    },
    {
      id: "93",
      title: "Linux Fundamentals for Security Practitioners",
      provider: "Cybrary",
      category: "security",
      level: "intermediate",
      duration: "5 weeks",
      rating: 4.7,
      students: "20K+",
      progress: 0,
      description: "Linux fundamentals for security professionals",
      tags: ["Linux", "Security", "Fundamentals"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://www.cybrary.it/course/linux-fundamentals-for-security-practitioners"
    },
    {
      id: "94",
      title: "API Security Fundamentals",
      provider: "API Security University",
      category: "security",
      level: "intermediate",
      duration: "4 weeks",
      rating: 4.5,
      students: "15K+",
      progress: 0,
      description: "Fundamental API security concepts and practices",
      tags: ["API Security", "Web Security", "Fundamentals"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://www.apisecuniversity.com/courses/api-security-fundamentals"
    },
    {
      id: "95",
      title: "Cyber Security and InfoSec",
      provider: "SkillStorm",
      category: "security",
      level: "intermediate",
      duration: "6 weeks",
      rating: 4.6,
      students: "18K+",
      progress: 0,
      description: "Comprehensive cybersecurity and information security course",
      tags: ["Cybersecurity", "InfoSec", "Security"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://stormsurge-catalog.skillstorm.com/courses/cyber-security-and-infosec"
    },
    {
      id: "96",
      title: "IBM SkillsBuild Cybersecurity",
      provider: "IBM",
      category: "security",
      level: "beginner",
      duration: "6 months",
      rating: 4.8,
      students: "30K+",
      progress: 0,
      description: "Cybersecurity analyst program from IBM",
      tags: ["IBM", "Cybersecurity", "SkillsBuild"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://skillsbuild.org/adult-learners/explore-learning/cybersecurity-analyst"
    },
    {
      id: "97",
      title: "Cybrary Open Source Intelligence (OSINT) Fundamentals",
      provider: "Cybrary",
      category: "security",
      level: "intermediate",
      duration: "4 weeks",
      rating: 4.6,
      students: "16K+",
      progress: 0,
      description: "OSINT fundamentals and techniques",
      tags: ["OSINT", "Intelligence", "Security"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://www.cybrary.it/course/osint-fundamentals"
    },
    {
      id: "98",
      title: "Fundamentals of Cybersecurity Architecture",
      provider: "Cybrary",
      category: "security",
      level: "advanced",
      duration: "8 weeks",
      rating: 4.7,
      students: "12K+",
      progress: 0,
      description: "Advanced cybersecurity architecture principles",
      tags: ["Cybersecurity", "Architecture", "Advanced"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://www.cybrary.it/course/fundamentals-of-cybersecurity-architecture"
    },
    {
      id: "99",
      title: "Cybersecurity Awareness Professional Certification - CAPC™",
      provider: "CertiProf",
      category: "security",
      level: "beginner",
      duration: "2 weeks",
      rating: 4.5,
      students: "25K+",
      progress: 0,
      description: "Professional certification in cybersecurity awareness",
      tags: ["Cybersecurity", "Awareness", "Certification"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://go.certiprof.com/cybersecurity-awareness-free"
    },
    {
      id: "100",
      title: "Endpoint Detection and Response (EDR) Foundation",
      provider: "Qualys",
      category: "security",
      level: "intermediate",
      duration: "3 weeks",
      rating: 4.6,
      students: "14K+",
      progress: 0,
      description: "EDR foundation course from Qualys",
      tags: ["EDR", "Endpoint Security", "Qualys"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://www.qualys.com/training/course/edr-foundation/"
    },
    {
      id: "101",
      title: "Vulnerability Management Foundation",
      provider: "Qualys",
      category: "security",
      level: "intermediate",
      duration: "3 weeks",
      rating: 4.6,
      students: "13K+",
      progress: 0,
      description: "Vulnerability management foundation course",
      tags: ["Vulnerability Management", "Security", "Qualys"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://www.qualys.com/training/course/vulnerability-management-foundation/"
    },
    {
      id: "102",
      title: "Cybersecurity for Businesses - The Fundamental Edition",
      provider: "EC-Council",
      category: "security",
      level: "beginner",
      duration: "4 weeks",
      rating: 4.5,
      students: "20K+",
      progress: 0,
      description: "Cybersecurity fundamentals for business professionals",
      tags: ["Cybersecurity", "Business", "Fundamentals"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://codered.eccouncil.org/course/cybersecurity-for-businesses-the-fundamental-edition?logged=false"
    },
    {
      id: "103",
      title: "Network Security",
      provider: "Open University",
      category: "security",
      level: "intermediate",
      duration: "4 weeks",
      rating: 4.6,
      students: "18K+",
      progress: 0,
      description: "Network security principles and practices",
      tags: ["Network Security", "Security", "Open University"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://www.open.edu/openlearn/digital-computing/network-security/content-section-0?active-tab=description-tab"
    },
    {
      id: "104",
      title: "Information Security",
      provider: "Open University",
      category: "security",
      level: "intermediate",
      duration: "4 weeks",
      rating: 4.7,
      students: "22K+",
      progress: 0,
      description: "Information security concepts and practices",
      tags: ["Information Security", "Security", "Open University"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://www.open.edu/openlearn/science-maths-technology/information-security/content-section-0?active-tab=description-tab"
    },
    {
      id: "105",
      title: "Digital Forensics",
      provider: "Open University",
      category: "security",
      level: "advanced",
      duration: "6 weeks",
      rating: 4.8,
      students: "15K+",
      progress: 0,
      description: "Digital forensics investigation techniques",
      tags: ["Digital Forensics", "Investigation", "Open University"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://www.open.edu/openlearn/science-maths-technology/digital-forensics/content-section-0?active-tab=content-tab"
    },
    {
      id: "106",
      title: "Gamified Intelligent Cyber Aptitude and Skills Training (GICAST)",
      provider: "Open University",
      category: "security",
      level: "beginner",
      duration: "3 weeks",
      rating: 4.5,
      students: "12K+",
      progress: 0,
      description: "Gamified cybersecurity training program",
      tags: ["Gamified", "Cybersecurity", "Training"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://www.open.edu/openlearn/digital-computing/gamified-intelligent-cyber-aptitude-and-skills-training-gicast/content-section-overview?active-tab=description-tab"
    },
    {
      id: "107",
      title: "IBM SkillsBuild Project Management",
      provider: "IBM",
      category: "strategy",
      level: "beginner",
      duration: "6 months",
      rating: 4.7,
      students: "25K+",
      progress: 0,
      description: "Project management certification from IBM",
      tags: ["Project Management", "IBM", "SkillsBuild"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://skillsbuild.org/adult-learners/explore-learning/project-manager"
    },
    {
      id: "108",
      title: "Project Management Essentials Certification",
      provider: "MSI Certified",
      category: "strategy",
      level: "beginner",
      duration: "4 weeks",
      rating: 4.5,
      students: "20K+",
      progress: 0,
      description: "Essential project management concepts and practices",
      tags: ["Project Management", "Essentials", "Certification"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://www.msicertified.com/project-management/project-management-essentials-certified/"
    },
    {
      id: "109",
      title: "Six Sigma White Belt Certification",
      provider: "MSI Certified",
      category: "strategy",
      level: "beginner",
      duration: "3 weeks",
      rating: 4.4,
      students: "18K+",
      progress: 0,
      description: "Six Sigma white belt certification course",
      tags: ["Six Sigma", "White Belt", "Certification"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://www.msicertified.com/six-sigma-certifications/lean-six-sigma-white-belt-certification/"
    },
    {
      id: "110",
      title: "EC-Council Kanban: A Concise Introduction",
      provider: "EC-Council",
      category: "strategy",
      level: "beginner",
      duration: "2 weeks",
      rating: 4.5,
      students: "15K+",
      progress: 0,
      description: "Introduction to Kanban methodology",
      tags: ["Kanban", "Agile", "Methodology"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://codered.eccouncil.org/course/kanban-a-concise-introduction?logged=false"
    },
    {
      id: "111",
      title: "EC-Council Scrum: A Concise Introduction",
      provider: "EC-Council",
      category: "strategy",
      level: "beginner",
      duration: "2 weeks",
      rating: 4.6,
      students: "16K+",
      progress: 0,
      description: "Introduction to Scrum methodology",
      tags: ["Scrum", "Agile", "Methodology"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://codered.eccouncil.org/course/scrum-a-concise-introduction?logged=false"
    },
    {
      id: "112",
      title: "EC-Council Agile: A Concise Introduction",
      provider: "EC-Council",
      category: "strategy",
      level: "beginner",
      duration: "2 weeks",
      rating: 4.5,
      students: "17K+",
      progress: 0,
      description: "Introduction to Agile methodology",
      tags: ["Agile", "Methodology", "Introduction"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://codered.eccouncil.org/course/agile-a-concise-introduction?logged=false"
    },
    {
      id: "113",
      title: "Awareness: Agile Project Management (AgilePM®) – eLearning",
      provider: "EA Learning",
      category: "strategy",
      level: "beginner",
      duration: "3 weeks",
      rating: 4.4,
      students: "14K+",
      progress: 0,
      description: "Agile project management awareness course",
      tags: ["Agile", "Project Management", "Awareness"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://www.ealearning.com/events/91-awareness-agile-project-management-agilepm-elearning/"
    },
    {
      id: "114",
      title: "Awareness: Agile Business Analyst (AgileBA®) – eLearning",
      provider: "EA Learning",
      category: "strategy",
      level: "beginner",
      duration: "3 weeks",
      rating: 4.3,
      students: "12K+",
      progress: 0,
      description: "Agile business analyst awareness course",
      tags: ["Agile", "Business Analysis", "Awareness"],
      isFree: true,
      isNew: false,
      isTrending: false,
      link: "https://www.ealearning.com/events/63-awareness-agile-business-analyst-agileba-elearning/"
    },
    {
      id: "115",
      title: "Scaled Agile - Design Thinking Fundamentals",
      provider: "Scaled Agile",
      category: "strategy",
      level: "intermediate",
      duration: "4 weeks",
      rating: 4.6,
      students: "10K+",
      progress: 0,
      description: "Design thinking fundamentals for agile teams",
      tags: ["Design Thinking", "Agile", "Scaled Agile"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://learn.scaledagile.com/courses/design-thinking-fundamentals"
    },
    {
      id: "116",
      title: "ISC2 CISSP Preparation",
      provider: "Cybrary",
      category: "security",
      level: "advanced",
      duration: "12 weeks",
      rating: 4.9,
      students: "15K+",
      progress: 0,
      description: "CISSP certification preparation course",
      tags: ["CISSP", "Security", "Certification"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://www.cybrary.it/course/cissp/"
    },
    {
      id: "117",
      title: "ISC2 Systems Security Certified Practitioner (SSCP)",
      provider: "Cybrary",
      category: "security",
      level: "intermediate",
      duration: "8 weeks",
      rating: 4.7,
      students: "12K+",
      progress: 0,
      description: "SSCP certification preparation course",
      tags: ["SSCP", "Security", "Certification"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://www.cybrary.it/course/systems-security-certified-practitioner-sscp/"
    },
    {
      id: "118",
      title: "ISC2 CCSP Certification Course & Training Online",
      provider: "Cybrary",
      category: "security",
      level: "advanced",
      duration: "10 weeks",
      rating: 4.8,
      students: "10K+",
      progress: 0,
      description: "CCSP cloud security certification preparation",
      tags: ["CCSP", "Cloud Security", "Certification"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://www.cybrary.it/course/ccsp"
    },
    {
      id: "119",
      title: "Certificate of Cloud Security Knowledge (CCSK)",
      provider: "Cybrary",
      category: "security",
      level: "intermediate",
      duration: "6 weeks",
      rating: 4.6,
      students: "11K+",
      progress: 0,
      description: "CCSK cloud security certification course",
      tags: ["CCSK", "Cloud Security", "Certification"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://www.cybrary.it/course/ccsk"
    },
    {
      id: "120",
      title: "CompTIA Network+ (N10-008) Online Training Course",
      provider: "Cybrary",
      category: "security",
      level: "intermediate",
      duration: "8 weeks",
      rating: 4.7,
      students: "20K+",
      progress: 0,
      description: "CompTIA Network+ certification preparation",
      tags: ["CompTIA", "Network+", "Certification"],
      isFree: true,
      isNew: false,
      isTrending: true,
      link: "https://www.cybrary.it/course/comptia-network-plus"
    }
  ];

  const platforms = [
    { id: "1", title: "Google", description: isRTL ? "شهادات Google المهنية" : "Google Professional Certificates", badge: "10+" },
    { id: "2", title: "IBM", description: isRTL ? "شهادات IBM المهنية" : "IBM Professional Certificates", badge: "5+" },
    { id: "3", title: "Meta", description: isRTL ? "شهادات Meta المهنية" : "Meta Professional Certificates", badge: "3+" },
    { id: "4", title: "Coursera", description: isRTL ? "كورسات جامعية مجانية" : "Free university courses", badge: "20+" },
    { id: "5", title: "MIT OpenCourseWare", description: isRTL ? "كورسات معهد MIT" : "MIT Institute courses", badge: "5+" },
    { id: "6", title: "Harvard", description: isRTL ? "كورسات جامعة هارفارد" : "Harvard University courses", badge: "3+" },
    { id: "7", title: "Stanford", description: isRTL ? "كورسات جامعة ستانفورد" : "Stanford University courses", badge: "2+" },
    { id: "8", title: "Yale", description: isRTL ? "كورسات جامعة ييل" : "Yale University courses", badge: "2+" }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    
    // Provider filter
    const matchesProvider = selectedProvider === "all" || 
                           course.provider === selectedProvider ||
                           (selectedProvider === "Other" && !providers.slice(1, -1).some(p => p.value === course.provider));
    
    // Duration filter
    let matchesDuration = selectedDuration === "all";
    if (selectedDuration !== "all") {
      const duration = course.duration.toLowerCase();
      if (selectedDuration === "short" && (duration.includes("1 week") || duration.includes("2 week") || duration.includes("3 week") || duration.includes("4 week"))) {
        matchesDuration = true;
      } else if (selectedDuration === "medium" && (duration.includes("5 week") || duration.includes("6 week") || duration.includes("7 week") || duration.includes("8 week"))) {
        matchesDuration = true;
      } else if (selectedDuration === "long" && (duration.includes("9 week") || duration.includes("10 week") || duration.includes("11 week") || duration.includes("12 week"))) {
        matchesDuration = true;
      } else if (selectedDuration === "months" && duration.includes("month")) {
        matchesDuration = true;
      }
    }
    
    // Rating filter
    let matchesRating = selectedRating === "all";
    if (selectedRating !== "all") {
      const ratingThreshold = parseFloat(selectedRating.replace("+", ""));
      matchesRating = course.rating >= ratingThreshold;
    }
    
    // Status filter
    let matchesStatus = selectedStatus === "all";
    if (selectedStatus === "free") {
      matchesStatus = course.isFree;
    } else if (selectedStatus === "new") {
      matchesStatus = course.isNew;
    } else if (selectedStatus === "trending") {
      matchesStatus = course.isTrending;
    }
    
    return matchesSearch && matchesCategory && matchesLevel && matchesProvider && matchesDuration && matchesRating && matchesStatus;
  });

  const coursesPerPage = 6;
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const currentCourses = filteredCourses.slice(startIndex, startIndex + coursesPerPage);

  const toggleFavorite = (courseId: string) => {
    setFavorites(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
    toast({
      title: isRTL ? "تم التحديث" : "Updated",
      description: favorites.includes(courseId) 
        ? (isRTL ? "تم إزالة الكورس من المفضلة" : "Course removed from favorites")
        : (isRTL ? "تم إضافة الكورس للمفضلة" : "Course added to favorites")
    });
  };

  const startCourse = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    if (course && course.link) {
      window.open(course.link, '_blank');
      toast({
        title: isRTL ? "تم فتح الكورس" : "Course Opened",
        description: isRTL ? "تم فتح الكورس في نافذة جديدة" : "Course opened in new tab"
      });
    } else {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: isRTL ? "تم بدء الكورس" : "Course Started",
        description: isRTL ? "سيتم توجيهك إلى منصة التعلم" : "You'll be redirected to the learning platform"
      });
    }, 2000);
    }
  };

  return (
    <div className={`min-h-screen ${isRTL ? 'font-arabic' : ''}`}>
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t.courses.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{t.courses.subtitle}</p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder={t.courses.search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Alert Section */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <InfoAlert 
            message={isRTL 
              ? "💡 جميع الكورسات مجانية ومتاحة للتعلم الذاتي" 
              : "💡 All courses are free and available for self-paced learning"
            } 
          />
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar with List Groups */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Category Filters */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {isRTL ? "التصنيفات" : "Categories"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ButtonGroup 
                    options={categories}
                    selected={selectedCategory}
                    onSelect={setSelectedCategory}
                  />
                </CardContent>
              </Card>

              {/* Level Filters */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {isRTL ? "المستوى" : "Level"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ButtonGroup 
                    options={levels}
                    selected={selectedLevel}
                    onSelect={setSelectedLevel}
                  />
                </CardContent>
              </Card>

              {/* Provider Filters */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {isRTL ? "المنصات" : "Platforms"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    <ButtonGroup 
                      options={providers}
                      selected={selectedProvider}
                      onSelect={setSelectedProvider}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Duration Filters */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {isRTL ? "المدة" : "Duration"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ButtonGroup 
                    options={durations}
                    selected={selectedDuration}
                    onSelect={setSelectedDuration}
                  />
                </CardContent>
              </Card>

              {/* Rating Filters */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {isRTL ? "التقييم" : "Rating"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ButtonGroup 
                    options={ratings}
                    selected={selectedRating}
                    onSelect={setSelectedRating}
                  />
                </CardContent>
              </Card>

              {/* Status Filters */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {isRTL ? "الحالة" : "Status"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ButtonGroup 
                    options={statuses}
                    selected={selectedStatus}
                    onSelect={setSelectedStatus}
                  />
                </CardContent>
              </Card>

              {/* Clear Filters Button */}
              <Card>
                <CardContent className="pt-6">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedLevel("all");
                      setSelectedProvider("all");
                      setSelectedDuration("all");
                      setSelectedRating("all");
                      setSelectedStatus("all");
                      setSearchTerm("");
                      setCurrentPage(1);
                    }}
                  >
                    {isRTL ? "مسح جميع الفلاتر" : "Clear All Filters"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filter Summary */}
            {(selectedCategory !== "all" || selectedLevel !== "all" || selectedProvider !== "all" || 
              selectedDuration !== "all" || selectedRating !== "all" || selectedStatus !== "all" || searchTerm) && (
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      <span className="font-medium">
                        {isRTL ? "الفلاتر النشطة:" : "Active Filters:"}
                      </span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        setSelectedCategory("all");
                        setSelectedLevel("all");
                        setSelectedProvider("all");
                        setSelectedDuration("all");
                        setSelectedRating("all");
                        setSelectedStatus("all");
                        setSearchTerm("");
                        setCurrentPage(1);
                      }}
                    >
                      {isRTL ? "مسح الكل" : "Clear All"}
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {selectedCategory !== "all" && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {isRTL ? "التصنيف:" : "Category:"} {categories.find(c => c.value === selectedCategory)?.label}
                        <XCircle className="h-3 w-3 cursor-pointer" onClick={() => setSelectedCategory("all")} />
                      </Badge>
                    )}
                    {selectedLevel !== "all" && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {isRTL ? "المستوى:" : "Level:"} {levels.find(l => l.value === selectedLevel)?.label}
                        <XCircle className="h-3 w-3 cursor-pointer" onClick={() => setSelectedLevel("all")} />
                      </Badge>
                    )}
                    {selectedProvider !== "all" && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {isRTL ? "المنصة:" : "Platform:"} {providers.find(p => p.value === selectedProvider)?.label}
                        <XCircle className="h-3 w-3 cursor-pointer" onClick={() => setSelectedProvider("all")} />
                      </Badge>
                    )}
                    {selectedDuration !== "all" && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {isRTL ? "المدة:" : "Duration:"} {durations.find(d => d.value === selectedDuration)?.label}
                        <XCircle className="h-3 w-3 cursor-pointer" onClick={() => setSelectedDuration("all")} />
                      </Badge>
                    )}
                    {selectedRating !== "all" && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {isRTL ? "التقييم:" : "Rating:"} {ratings.find(r => r.value === selectedRating)?.label}
                        <XCircle className="h-3 w-3 cursor-pointer" onClick={() => setSelectedRating("all")} />
                      </Badge>
                    )}
                    {selectedStatus !== "all" && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {isRTL ? "الحالة:" : "Status:"} {statuses.find(s => s.value === selectedStatus)?.label}
                        <XCircle className="h-3 w-3 cursor-pointer" onClick={() => setSelectedStatus("all")} />
                      </Badge>
                    )}
                    {searchTerm && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {isRTL ? "البحث:" : "Search:"} "{searchTerm}"
                        <XCircle className="h-3 w-3 cursor-pointer" onClick={() => setSearchTerm("")} />
                      </Badge>
                    )}
                  </div>
                  <div className="mt-3 text-sm text-muted-foreground">
                    {isRTL 
                      ? `تم العثور على ${filteredCourses.length} كورس`
                      : `Found ${filteredCourses.length} courses`
                    }
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Tabs for Course Views */}
            <Tabs defaultValue="grid" className="mb-6">
              <TabsList>
                <TabsTrigger value="grid">
                  {isRTL ? "شبكة" : "Grid View"}
                </TabsTrigger>
                <TabsTrigger value="table">
                  {isRTL ? "جدول" : "Table View"}
                </TabsTrigger>
                <TabsTrigger value="progress">
                  {isRTL ? "التقدم" : "My Progress"}
                </TabsTrigger>
              </TabsList>

              {/* Grid View */}
              <TabsContent value="grid">
                {isLoading ? (
                  <div className="flex justify-center items-center py-12">
                    <SpinnerBorder size="lg" />
                    <span className="ml-3">{isRTL ? "جاري التحميل..." : "Loading..."}</span>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    {currentCourses.map((course) => (
                      <Card key={course.id} className="hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex gap-2">
                              {course.isFree && (
                                <Badge variant="secondary" className="bg-green-100 text-green-800">
                                  {isRTL ? "مجاني" : "Free"}
                                </Badge>
                              )}
                              {course.isNew && (
                                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                                  {isRTL ? "جديد" : "New"}
                                </Badge>
                              )}
                              {course.isTrending && (
                                <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                                  <TrendingUp className="h-3 w-3 mr-1" />
                                  {isRTL ? "رائج" : "Trending"}
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{course.rating}</span>
                            </div>
                          </div>
                          <CardTitle className="text-lg">{course.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <p className="text-muted-foreground text-sm">{course.description}</p>
                            
                            <div className="flex items-center justify-between text-sm">
                              <span className="flex items-center gap-1">
                                <User className="h-4 w-4" />
                                {course.provider}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {course.duration}
                              </span>
                            </div>

                            <div className="flex items-center gap-1 text-sm">
                              <Users className="h-4 w-4" />
                              <span>{course.students} {isRTL ? "طالب" : "students"}</span>
                            </div>

                            {course.progress > 0 && (
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>{isRTL ? "التقدم" : "Progress"}</span>
                                  <span>{course.progress}%</span>
                                </div>
                                <Progress value={course.progress} />
                              </div>
                            )}

                            <div className="flex flex-wrap gap-1 mb-4">
                              {course.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex justify-between items-center">
                              <Button
                                onClick={() => startCourse(course.id)}
                                className="flex-1 mr-2"
                                disabled={isLoading}
                              >
                                <Play className="h-4 w-4 mr-2" />
                                {course.progress > 0 
                                  ? (isRTL ? "متابعة" : "Continue")
                                  : (isRTL ? "ابدأ الآن" : "Start Now")
                                }
                              </Button>
                              
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => toggleFavorite(course.id)}
                                  >
                                    <Heart 
                                      className={`h-4 w-4 ${
                                        favorites.includes(course.id) 
                                          ? 'fill-red-500 text-red-500' 
                                          : ''
                                      }`} 
                                    />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  {favorites.includes(course.id) 
                                    ? (isRTL ? "إزالة من المفضلة" : "Remove from favorites")
                                    : (isRTL ? "إضافة للمفضلة" : "Add to favorites")
                                  }
                                </TooltipContent>
                              </Tooltip>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>

              {/* Table View */}
              <TabsContent value="table">
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>{isRTL ? "الكورس" : "Course"}</TableHead>
                          <TableHead>{isRTL ? "المنصة" : "Provider"}</TableHead>
                          <TableHead>{isRTL ? "المستوى" : "Level"}</TableHead>
                          <TableHead>{isRTL ? "المدة" : "Duration"}</TableHead>
                          <TableHead>{isRTL ? "التقييم" : "Rating"}</TableHead>
                          <TableHead>{isRTL ? "الإجراءات" : "Actions"}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {currentCourses.map((course) => (
                          <TableRow key={course.id}>
                            <TableCell>
                              <div>
                                <div className="font-medium">{course.title}</div>
                                <div className="text-sm text-muted-foreground flex gap-1 mt-1">
                                  {course.tags.slice(0, 2).map((tag) => (
                                    <Badge key={tag} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{course.provider}</TableCell>
                            <TableCell>
                              <Badge variant="outline">
                                {course.level === "beginner" ? (isRTL ? "مبتدئ" : "Beginner") :
                                 course.level === "intermediate" ? (isRTL ? "متوسط" : "Intermediate") :
                                 (isRTL ? "متقدم" : "Advanced")}
                              </Badge>
                            </TableCell>
                            <TableCell>{course.duration}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                {course.rating}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button size="sm" onClick={() => startCourse(course.id)}>
                                  <ExternalLink className="h-4 w-4" />
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => toggleFavorite(course.id)}
                                >
                                  <Heart 
                                    className={`h-4 w-4 ${
                                      favorites.includes(course.id) 
                                        ? 'fill-red-500 text-red-500' 
                                        : ''
                                    }`} 
                                  />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Progress View */}
              <TabsContent value="progress">
                <div className="space-y-4">
                  {courses.filter(c => c.progress > 0).map((course) => (
                    <Card key={course.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold">{course.title}</h3>
                            <p className="text-sm text-muted-foreground">{course.provider}</p>
                          </div>
                          <Badge variant="outline">{course.progress}%</Badge>
                        </div>
                        <Progress value={course.progress} className="mb-4" />
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            {isRTL ? `${course.progress}% مكتمل` : `${course.progress}% completed`}
                          </span>
                          <Button size="sm" onClick={() => startCourse(course.id)}>
                            {isRTL ? "متابعة التعلم" : "Continue Learning"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  {courses.filter(c => c.progress > 0).length === 0 && (
                    <div className="text-center py-12">
                      <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">
                        {isRTL ? "لا توجد كورسات قيد التقدم" : "No courses in progress"}
                      </h3>
                      <p className="text-muted-foreground">
                        {isRTL ? "ابدأ كورساً جديداً لتتبع تقدمك" : "Start a new course to track your progress"}
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => setCurrentPage(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}