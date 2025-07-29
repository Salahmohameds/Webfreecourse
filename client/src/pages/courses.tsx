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
  ExternalLink
} from "lucide-react";

export default function CoursesPage() {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const breadcrumbItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.courses, href: "/courses" }
  ];

  const categories = [
    { value: "all", label: isRTL ? "الكل" : "All", icon: <Globe className="h-4 w-4" /> },
    { value: "web", label: isRTL ? "تطوير الويب" : "Web Dev", icon: <Code className="h-4 w-4" /> },
    { value: "mobile", label: isRTL ? "تطبيقات الجوال" : "Mobile", icon: <Smartphone className="h-4 w-4" /> },
    { value: "ai", label: isRTL ? "الذكاء الاصطناعي" : "AI/ML", icon: <Brain className="h-4 w-4" /> },
    { value: "data", label: isRTL ? "علم البيانات" : "Data Science", icon: <Database className="h-4 w-4" /> },
    { value: "security", label: isRTL ? "الأمن السيبراني" : "Security", icon: <Shield className="h-4 w-4" /> }
  ];

  const levels = [
    { value: "all", label: isRTL ? "جميع المستويات" : "All Levels", icon: <Filter className="h-4 w-4" /> },
    { value: "beginner", label: isRTL ? "مبتدئ" : "Beginner" },
    { value: "intermediate", label: isRTL ? "متوسط" : "Intermediate" },
    { value: "advanced", label: isRTL ? "متقدم" : "Advanced" }
  ];

  const courses = [
    {
      id: "1",
      title: isRTL ? "تطوير مواقع الويب الشاملة" : "Complete Web Development",
      provider: "FreeCodeCamp",
      category: "web",
      level: "beginner",
      duration: isRTL ? "40 ساعة" : "40 hours",
      rating: 4.9,
      students: "50K+",
      progress: 65,
      description: isRTL ? "تعلم HTML, CSS, JavaScript, React وأكثر" : "Learn HTML, CSS, JavaScript, React and more",
      tags: ["HTML", "CSS", "JavaScript", "React"],
      isFree: true,
      isNew: false,
      isTrending: true
    },
    {
      id: "2",
      title: isRTL ? "أساسيات الذكاء الاصطناعي" : "AI Fundamentals",
      provider: "Coursera",
      category: "ai",
      level: "intermediate",
      duration: isRTL ? "25 ساعة" : "25 hours",
      rating: 4.8,
      students: "30K+",
      progress: 0,
      description: isRTL ? "مدخل إلى التعلم الآلي والذكاء الاصطناعي" : "Introduction to Machine Learning and AI",
      tags: ["Python", "ML", "Neural Networks"],
      isFree: true,
      isNew: true,
      isTrending: false
    },
    {
      id: "3",
      title: isRTL ? "البرمجة بـ Python" : "Python Programming",
      provider: "edX",
      category: "web",
      level: "beginner",
      duration: isRTL ? "30 ساعة" : "30 hours",
      rating: 4.7,
      students: "75K+",
      progress: 20,
      description: isRTL ? "تعلم أساسيات البرمجة بـ Python" : "Learn Python programming fundamentals",
      tags: ["Python", "Programming", "Basics"],
      isFree: true,
      isNew: false,
      isTrending: false
    },
    {
      id: "4",
      title: isRTL ? "الأمن السيبراني الأساسي" : "Cybersecurity Basics",
      provider: "Khan Academy",
      category: "security",
      level: "beginner",
      duration: isRTL ? "20 ساعة" : "20 hours",
      rating: 4.6,
      students: "25K+",
      progress: 0,
      description: isRTL ? "مقدمة في أمن المعلومات والشبكات" : "Introduction to information and network security",
      tags: ["Security", "Networks", "Privacy"],
      isFree: true,
      isNew: true,
      isTrending: true
    },
    {
      id: "5",
      title: isRTL ? "تطوير تطبيقات React Native" : "React Native Development",
      provider: "Udemy",
      category: "mobile",
      level: "intermediate",
      duration: isRTL ? "35 ساعة" : "35 hours",
      rating: 4.5,
      students: "20K+",
      progress: 0,
      description: isRTL ? "بناء تطبيقات الجوال بـ React Native" : "Build mobile apps with React Native",
      tags: ["React Native", "Mobile", "JavaScript"],
      isFree: true,
      isNew: false,
      isTrending: false
    },
    {
      id: "6",
      title: isRTL ? "علم البيانات مع Python" : "Data Science with Python",
      provider: "DataCamp",
      category: "data",
      level: "intermediate",
      duration: isRTL ? "45 ساعة" : "45 hours",
      rating: 4.8,
      students: "40K+",
      progress: 0,
      description: isRTL ? "تحليل البيانات والتصور باستخدام Python" : "Data analysis and visualization with Python",
      tags: ["Python", "Pandas", "NumPy", "Matplotlib"],
      isFree: true,
      isNew: false,
      isTrending: true
    }
  ];

  const platforms = [
    { id: "1", title: "FreeCodeCamp", description: isRTL ? "كورسات مجانية شاملة" : "Comprehensive free courses", badge: "50+" },
    { id: "2", title: "Coursera", description: isRTL ? "كورسات جامعية مجانية" : "Free university courses", badge: "100+" },
    { id: "3", title: "edX", description: isRTL ? "كورسات من أفضل الجامعات" : "Courses from top universities", badge: "80+" },
    { id: "4", title: "Khan Academy", description: isRTL ? "تعليم مجاني للجميع" : "Free education for everyone", badge: "60+" },
    { id: "5", title: "MIT OpenCourseWare", description: isRTL ? "كورسات معهد MIT" : "MIT Institute courses", badge: "40+" }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
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
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: isRTL ? "تم بدء الكورس" : "Course Started",
        description: isRTL ? "سيتم توجيهك إلى منصة التعلم" : "You'll be redirected to the learning platform"
      });
    }, 2000);
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

              {/* Learning Platforms */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {isRTL ? "منصات التعلم" : "Learning Platforms"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ListGroup items={platforms} />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
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