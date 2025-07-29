import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ExternalLink, Briefcase, MapPin, Calendar, Building2, Search, Filter } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

interface JobPosting {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  salary?: string;
  postedDate: string;
  applicationLink: string;
  source: string;
}

const jobPostings: JobPosting[] = [
  {
    id: 1,
    title: "AI/ML Engineer",
    company: "TechCorp Solutions",
    location: "Cairo, Egypt",
    type: "Full-time",
    description: "We are seeking a talented AI/ML Engineer to join our team and help develop cutting-edge machine learning solutions.",
    requirements: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP"],
    salary: "15,000 - 25,000 EGP",
    postedDate: "2024-01-15",
    applicationLink: "https://linkedin.com/jobs/view/123456",
    source: "LinkedIn"
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "DataFlow Analytics",
    location: "Alexandria, Egypt",
    type: "Full-time",
    description: "Join our data science team to build predictive models and drive data-driven decisions.",
    requirements: ["Python", "R", "SQL", "Statistics", "Machine Learning"],
    salary: "18,000 - 30,000 EGP",
    postedDate: "2024-01-14",
    applicationLink: "https://naukri.com/job/789012",
    source: "Naukri"
  },
  {
    id: 3,
    title: "Machine Learning Engineer",
    company: "AI Innovations",
    location: "Giza, Egypt",
    type: "Full-time",
    description: "Develop and deploy machine learning models for production environments.",
    requirements: ["Python", "Docker", "Kubernetes", "MLOps", "AWS"],
    salary: "20,000 - 35,000 EGP",
    postedDate: "2024-01-13",
    applicationLink: "https://linkedin.com/jobs/view/345678",
    source: "LinkedIn"
  },
  {
    id: 4,
    title: "Senior AI Developer",
    company: "SmartTech Systems",
    location: "Cairo, Egypt",
    type: "Full-time",
    description: "Lead AI development projects and mentor junior developers.",
    requirements: ["Python", "Deep Learning", "Team Leadership", "Research", "Publications"],
    salary: "25,000 - 40,000 EGP",
    postedDate: "2024-01-12",
    applicationLink: "https://naukri.com/job/456789",
    source: "Naukri"
  },
  {
    id: 5,
    title: "Computer Vision Engineer",
    company: "VisionTech",
    location: "Cairo, Egypt",
    type: "Full-time",
    description: "Develop computer vision solutions for autonomous systems.",
    requirements: ["OpenCV", "PyTorch", "C++", "Computer Vision", "Robotics"],
    salary: "18,000 - 28,000 EGP",
    postedDate: "2024-01-11",
    applicationLink: "https://linkedin.com/jobs/view/567890",
    source: "LinkedIn"
  },
  {
    id: 6,
    title: "NLP Engineer",
    company: "LanguageAI",
    location: "Cairo, Egypt",
    type: "Full-time",
    description: "Build natural language processing solutions and language models.",
    requirements: ["Python", "Transformers", "BERT", "NLP", "Linguistics"],
    salary: "16,000 - 26,000 EGP",
    postedDate: "2024-01-10",
    applicationLink: "https://naukri.com/job/234567",
    source: "Naukri"
  },
  {
    id: 7,
    title: "AI Research Scientist",
    company: "ResearchLab",
    location: "Cairo, Egypt",
    type: "Full-time",
    description: "Conduct cutting-edge AI research and publish papers.",
    requirements: ["PhD", "Research", "Publications", "Mathematics", "Algorithms"],
    salary: "30,000 - 50,000 EGP",
    postedDate: "2024-01-09",
    applicationLink: "https://linkedin.com/jobs/view/678901",
    source: "LinkedIn"
  },
  {
    id: 8,
    title: "MLOps Engineer",
    company: "MLOps Solutions",
    location: "Cairo, Egypt",
    type: "Full-time",
    description: "Build and maintain ML infrastructure and deployment pipelines.",
    requirements: ["Docker", "Kubernetes", "CI/CD", "AWS", "Monitoring"],
    salary: "20,000 - 32,000 EGP",
    postedDate: "2024-01-08",
    applicationLink: "https://naukri.com/job/345678",
    source: "Naukri"
  },
  {
    id: 9,
    title: "AI Product Manager",
    company: "ProductAI",
    location: "Cairo, Egypt",
    type: "Full-time",
    description: "Lead AI product development and strategy.",
    requirements: ["Product Management", "AI/ML", "Strategy", "Leadership", "Business"],
    salary: "25,000 - 40,000 EGP",
    postedDate: "2024-01-07",
    applicationLink: "https://linkedin.com/jobs/view/789012",
    source: "LinkedIn"
  },
  {
    id: 10,
    title: "Deep Learning Engineer",
    company: "DeepTech",
    location: "Cairo, Egypt",
    type: "Full-time",
    description: "Develop deep learning models for complex problems.",
    requirements: ["PyTorch", "TensorFlow", "Neural Networks", "GPU", "Mathematics"],
    salary: "22,000 - 35,000 EGP",
    postedDate: "2024-01-06",
    applicationLink: "https://naukri.com/job/456789",
    source: "Naukri"
  },
  {
    id: 11,
    title: "AI/ML Engineer",
    company: "TechCorp Solutions",
    location: "Cairo, Egypt",
    type: "Full-time",
    description: "We are seeking a talented AI/ML Engineer to join our team and help develop cutting-edge machine learning solutions.",
    requirements: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP"],
    salary: "15,000 - 25,000 EGP",
    postedDate: "2024-01-15",
    applicationLink: "https://linkedin.com/jobs/view/123456",
    source: "LinkedIn"
  },
  {
    id: 12,
    title: "Data Scientist",
    company: "DataFlow Analytics",
    location: "Alexandria, Egypt",
    type: "Full-time",
    description: "Join our data science team to build predictive models and drive data-driven decisions.",
    requirements: ["Python", "R", "SQL", "Statistics", "Machine Learning"],
    salary: "18,000 - 30,000 EGP",
    postedDate: "2024-01-14",
    applicationLink: "https://naukri.com/job/789012",
    source: "Naukri"
  },
  {
    id: 13,
    title: "Machine Learning Engineer",
    company: "AI Innovations",
    location: "Giza, Egypt",
    type: "Full-time",
    description: "Develop and deploy machine learning models for production environments.",
    requirements: ["Python", "Docker", "Kubernetes", "MLOps", "AWS"],
    salary: "20,000 - 35,000 EGP",
    postedDate: "2024-01-13",
    applicationLink: "https://linkedin.com/jobs/view/345678",
    source: "LinkedIn"
  },
  {
    id: 14,
    title: "Senior AI Developer",
    company: "SmartTech Systems",
    location: "Cairo, Egypt",
    type: "Full-time",
    description: "Lead AI development projects and mentor junior developers.",
    requirements: ["Python", "Deep Learning", "Team Leadership", "Research", "Publications"],
    salary: "25,000 - 40,000 EGP",
    postedDate: "2024-01-12",
    applicationLink: "https://naukri.com/job/456789",
    source: "Naukri"
  },
  {
    id: 15,
    title: "Computer Vision Engineer",
    company: "VisionTech",
    location: "Cairo, Egypt",
    type: "Full-time",
    description: "Develop computer vision solutions for autonomous systems.",
    requirements: ["OpenCV", "PyTorch", "C++", "Computer Vision", "Robotics"],
    salary: "18,000 - 28,000 EGP",
    postedDate: "2024-01-11",
    applicationLink: "https://linkedin.com/jobs/view/567890",
    source: "LinkedIn"
  },
  {
    id: 16,
    title: "NLP Engineer",
    company: "LanguageAI",
    location: "Cairo, Egypt",
    type: "Full-time",
    description: "Build natural language processing solutions and language models.",
    requirements: ["Python", "Transformers", "BERT", "NLP", "Linguistics"],
    salary: "16,000 - 26,000 EGP",
    postedDate: "2024-01-10",
    applicationLink: "https://naukri.com/job/234567",
    source: "Naukri"
  },
  {
    id: 17,
    title: "AI Research Scientist",
    company: "ResearchLab",
    location: "Cairo, Egypt",
    type: "Full-time",
    description: "Conduct cutting-edge AI research and publish papers.",
    requirements: ["PhD", "Research", "Publications", "Mathematics", "Algorithms"],
    salary: "30,000 - 50,000 EGP",
    postedDate: "2024-01-09",
    applicationLink: "https://linkedin.com/jobs/view/678901",
    source: "LinkedIn"
  },
  {
    id: 18,
    title: "MLOps Engineer",
    company: "MLOps Solutions",
    location: "Cairo, Egypt",
    type: "Full-time",
    description: "Build and maintain ML infrastructure and deployment pipelines.",
    requirements: ["Docker", "Kubernetes", "CI/CD", "AWS", "Monitoring"],
    salary: "20,000 - 32,000 EGP",
    postedDate: "2024-01-08",
    applicationLink: "https://naukri.com/job/345678",
    source: "Naukri"
  },
  {
    id: 19,
    title: "AI Product Manager",
    company: "ProductAI",
    location: "Cairo, Egypt",
    type: "Full-time",
    description: "Lead AI product development and strategy.",
    requirements: ["Product Management", "AI/ML", "Strategy", "Leadership", "Business"],
    salary: "25,000 - 40,000 EGP",
    postedDate: "2024-01-07",
    applicationLink: "https://linkedin.com/jobs/view/789012",
    source: "LinkedIn"
  },
  {
    id: 20,
    title: "Deep Learning Engineer",
    company: "DeepTech",
    location: "Cairo, Egypt",
    type: "Full-time",
    description: "Develop deep learning models for complex problems.",
    requirements: ["PyTorch", "TensorFlow", "Neural Networks", "GPU", "Mathematics"],
    salary: "22,000 - 35,000 EGP",
    postedDate: "2024-01-06",
    applicationLink: "https://naukri.com/job/456789",
    source: "Naukri"
  }
];

export default function JobsPage() {
  const { t, isRTL } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [sourceFilter, setSourceFilter] = useState("");



  const filteredJobs = jobPostings.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !locationFilter || locationFilter === "all" || job.location.includes(locationFilter);
    const matchesType = !typeFilter || typeFilter === "all" || job.type === typeFilter;
    const matchesSource = !sourceFilter || sourceFilter === "all" || job.source === sourceFilter;
    
    return matchesSearch && matchesLocation && matchesType && matchesSource;
  });

  const locations = Array.from(new Set(jobPostings.map(job => job.location)));
  const types = Array.from(new Set(jobPostings.map(job => job.type)));
  const sources = Array.from(new Set(jobPostings.map(job => job.source)));

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {isRTL ? "وظائف الذكاء الاصطناعي" : "AI & ML Job Opportunities"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {isRTL 
                ? "اكتشف أفضل الفرص الوظيفية في مجال الذكاء الاصطناعي والتعلم الآلي في مصر"
                : "Discover the best AI and Machine Learning job opportunities in Egypt"
              }
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-card border rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder={isRTL ? "البحث في الوظائف..." : "Search jobs..."}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder={isRTL ? "الموقع" : "Location"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{isRTL ? "جميع المواقع" : "All Locations"}</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder={isRTL ? "نوع الوظيفة" : "Job Type"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{isRTL ? "جميع الأنواع" : "All Types"}</SelectItem>
                  {types.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sourceFilter} onValueChange={setSourceFilter}>
                <SelectTrigger>
                  <SelectValue placeholder={isRTL ? "المصدر" : "Source"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{isRTL ? "جميع المصادر" : "All Sources"}</SelectItem>
                  {sources.map((source) => (
                    <SelectItem key={source} value={source}>{source}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setLocationFilter("all");
                  setTypeFilter("all");
                  setSourceFilter("all");
                }}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                {isRTL ? "مسح الفلاتر" : "Clear Filters"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              {isRTL ? "الوظائف المتاحة" : "Available Jobs"}
            </h2>
            <p className="text-muted-foreground">
              {isRTL 
                ? `تم العثور على ${filteredJobs.length} وظيفة`
                : `Found ${filteredJobs.length} jobs`
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Building2 className="h-4 w-4" />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <Badge variant="secondary">{job.type}</Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(job.postedDate)}</span>
                    </div>
                    <Badge variant="outline">{job.source}</Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <CardDescription className="mb-4">
                    {job.description}
                  </CardDescription>

                  {job.salary && (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground">
                        {isRTL ? "الراتب:" : "Salary:"} {job.salary}
                      </p>
                    </div>
                  )}

                  <div className="mb-4">
                    <p className="text-sm font-medium text-foreground mb-2">
                      {isRTL ? "المتطلبات:" : "Requirements:"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button 
                            onClick={() => window.open(job.applicationLink, '_blank')}
                            className="flex-1"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {isRTL ? "تقدم الآن" : "Apply Now"}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          {isRTL ? "فتح رابط التقديم" : "Open application link"}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {isRTL ? "لا توجد وظائف" : "No jobs found"}
              </h3>
              <p className="text-muted-foreground">
                {isRTL 
                  ? "جرب تغيير معايير البحث الخاصة بك"
                  : "Try adjusting your search criteria"
                }
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 