import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { 
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useLanguage } from "@/hooks/use-language";
import { 
  ChevronDown, 
  Star, 
  Clock, 
  User, 
  Award,
  TrendingUp,
  Code,
  Database,
  Shield,
  Brain,
  Smartphone,
  Globe,
  AlertCircle,
  CheckCircle,
  Info
} from "lucide-react";

// Spinner Component
export function SpinnerBorder({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6", 
    lg: "h-8 w-8"
  };

  return (
    <div className={`animate-spin rounded-full border-2 border-primary border-t-transparent ${sizeClasses[size]}`}></div>
  );
}

// Button Group Component
export function ButtonGroup({ 
  options, 
  selected, 
  onSelect 
}: { 
  options: Array<{value: string, label: string, icon?: React.ReactNode}>, 
  selected: string, 
  onSelect: (value: string) => void 
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <Button
          key={option.value}
          variant={selected === option.value ? "default" : "outline"}
          size="sm"
          onClick={() => onSelect(option.value)}
          className="flex items-center gap-1"
        >
          {option.icon}
          {option.label}
        </Button>
      ))}
    </div>
  );
}

// List Group Component
export function ListGroup({ 
  items 
}: { 
  items: Array<{id: string, title: string, description?: string, badge?: string}> 
}) {
  return (
    <div className="border rounded-lg overflow-hidden">
      {items.map((item, index) => (
        <div 
          key={item.id}
          className={`p-4 border-b last:border-b-0 hover:bg-muted/50 transition-colors ${
            index % 2 === 0 ? 'bg-background' : 'bg-muted/20'
          }`}
        >
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">{item.title}</h4>
              {item.description && (
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              )}
            </div>
            {item.badge && (
              <Badge variant="secondary">{item.badge}</Badge>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// Hero Carousel Component
export function HeroCarousel() {
  const { t, isRTL } = useLanguage();
  
  const slides = [
    {
      title: isRTL ? "أفضل الكورسات المجانية" : "Top Free Courses",
      description: isRTL ? "اكتشف أحدث الكورسات في التقنية والبرمجة" : "Discover the latest courses in technology and programming",
      icon: <Code className="h-8 w-8" />,
      color: "bg-gradient-to-r from-blue-500 to-blue-600"
    },
    {
      title: isRTL ? "فرص عمل رائعة" : "Amazing Job Opportunities", 
      description: isRTL ? "اعثر على وظيفة أحلامك في أفضل الشركات التقنية" : "Find your dream job at top tech companies",
      icon: <Award className="h-8 w-8" />,
      color: "bg-gradient-to-r from-green-500 to-green-600"
    },
    {
      title: isRTL ? "مساعد ذكي" : "AI Assistant",
      description: isRTL ? "احصل على إرشادات مهنية ذكية مخصصة لك" : "Get personalized career guidance with AI",
      icon: <Brain className="h-8 w-8" />,
      color: "bg-gradient-to-r from-purple-500 to-purple-600"
    }
  ];

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className={`${slide.color} text-white rounded-lg p-8 text-center`}>
              <div className="flex justify-center mb-4 text-white/90">
                {slide.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
              <p className="text-white/90">{slide.description}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

// Course Progress Component
export function CourseProgress({ 
  title, 
  progress, 
  total, 
  completed 
}: { 
  title: string, 
  progress: number, 
  total: number, 
  completed: number 
}) {
  const { isRTL } = useLanguage();
  
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-medium">{title}</h4>
          <Badge variant="outline">{completed}/{total}</Badge>
        </div>
        <Progress value={progress} className="mb-2" />
        <p className="text-sm text-muted-foreground">
          {isRTL ? `${progress}% مكتمل` : `${progress}% complete`}
        </p>
      </CardContent>
    </Card>
  );
}

// Collapsible FAQ Component
export function CollapsibleFAQ({ 
  question, 
  answer 
}: { 
  question: string, 
  answer: string 
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between p-4 h-auto">
          <span className="text-left font-medium">{question}</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pb-4">
        <p className="text-muted-foreground">{answer}</p>
      </CollapsibleContent>
    </Collapsible>
  );
}

// Stats Cards Component
export function StatsCards() {
  const { t, isRTL } = useLanguage();
  
  const stats = [
    {
      title: isRTL ? "الكورسات المجانية" : "Free Courses",
      value: "500+",
      icon: <Code className="h-6 w-6 text-blue-500" />,
      description: isRTL ? "كورسات متاحة" : "Available courses"
    },
    {
      title: isRTL ? "الشركات" : "Companies", 
      value: "200+",
      icon: <Award className="h-6 w-6 text-green-500" />,
      description: isRTL ? "شركات توظف" : "Hiring companies"
    },
    {
      title: isRTL ? "الطلاب" : "Students",
      value: "10K+",
      icon: <User className="h-6 w-6 text-purple-500" />,
      description: isRTL ? "طالب استفاد" : "Students helped"
    },
    {
      title: isRTL ? "معدل التوظيف" : "Success Rate",
      value: "85%",
      icon: <TrendingUp className="h-6 w-6 text-orange-500" />,
      description: isRTL ? "نسبة النجاح" : "Job placement"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-4">
              {stat.icon}
            </div>
            <h3 className="text-2xl font-bold text-primary mb-1">{stat.value}</h3>
            <h4 className="font-medium mb-1">{stat.title}</h4>
            <p className="text-sm text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Technology Tabs Component
export function TechnologyTabs() {
  const { t, isRTL } = useLanguage();
  
  const technologies = [
    {
      id: "web",
      label: isRTL ? "تطوير الويب" : "Web Development",
      icon: <Globe className="h-4 w-4" />,
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js"],
      description: isRTL ? "تعلم تطوير المواقع الحديثة" : "Learn modern web development"
    },
    {
      id: "mobile", 
      label: isRTL ? "تطوير التطبيقات" : "Mobile Development",
      icon: <Smartphone className="h-4 w-4" />,
      skills: ["React Native", "Flutter", "Swift", "Kotlin"],
      description: isRTL ? "انشئ تطبيقات الجوال" : "Build mobile applications"
    },
    {
      id: "data",
      label: isRTL ? "علم البيانات" : "Data Science", 
      icon: <Database className="h-4 w-4" />,
      skills: ["Python", "SQL", "Machine Learning", "Statistics"],
      description: isRTL ? "تحليل البيانات والذكاء الاصطناعي" : "Data analysis and AI"
    },
    {
      id: "security",
      label: isRTL ? "الأمن السيبراني" : "Cybersecurity",
      icon: <Shield className="h-4 w-4" />,
      skills: ["Network Security", "Ethical Hacking", "Cryptography", "Risk Assessment"],
      description: isRTL ? "أمن المعلومات والشبكات" : "Information and network security"
    }
  ];

  return (
    <Tabs defaultValue="web" className="w-full">
      <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
        {technologies.map((tech) => (
          <TabsTrigger key={tech.id} value={tech.id} className="flex items-center gap-2">
            {tech.icon}
            <span className="hidden sm:inline">{tech.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      
      {technologies.map((tech) => (
        <TabsContent key={tech.id} value={tech.id} className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {tech.icon}
                {tech.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{tech.description}</p>
              <div className="flex flex-wrap gap-2">
                {tech.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}

// Alert Components
export function SuccessAlert({ message }: { message: string }) {
  return (
    <Alert className="border-green-200 bg-green-50 dark:bg-green-900/20">
      <CheckCircle className="h-4 w-4 text-green-600" />
      <AlertDescription className="text-green-800 dark:text-green-200">
        {message}
      </AlertDescription>
    </Alert>
  );
}

export function InfoAlert({ message }: { message: string }) {
  return (
    <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-900/20">
      <Info className="h-4 w-4 text-blue-600" />
      <AlertDescription className="text-blue-800 dark:text-blue-200">
        {message}
      </AlertDescription>
    </Alert>
  );
}

export function WarningAlert({ message }: { message: string }) {
  return (
    <Alert className="border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20">
      <AlertCircle className="h-4 w-4 text-yellow-600" />
      <AlertDescription className="text-yellow-800 dark:text-yellow-200">
        {message}
      </AlertDescription>
    </Alert>
  );
}