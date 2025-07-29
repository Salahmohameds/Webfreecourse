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
  Search, 
  Clock, 
  User, 
  Heart, 
  Info, 
  Code, 
  Brain, 
  Shield,
  AlertCircle,
  Filter
} from "lucide-react";
import { courses } from "@/lib/mock-data";
import { useToast } from "@/hooks/use-toast";
import Breadcrumb from "@/components/breadcrumb";
import ButtonGroup from "@/components/button-group";
import { SpinnerBorder } from "@/components/spinner";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function CoursesSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const levelOptions = [
    { value: "all", label: "All Levels", icon: <Filter className="h-4 w-4" /> },
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" }
  ];
  
  const [selectedLevel, setSelectedLevel] = useState("all");

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level.toLowerCase() === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const toggleFavorite = async (courseId: string) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newFavorites = favorites.includes(courseId)
      ? favorites.filter(id => id !== courseId)
      : [...favorites, courseId];
    
    setFavorites(newFavorites);
    setIsLoading(false);
    
    toast({
      title: favorites.includes(courseId) ? "Removed from favorites" : "Added to favorites",
      description: favorites.includes(courseId) 
        ? "Course removed from your favorites list." 
        : "Course added to your favorites list.",
    });
  };

  const getBadgeVariant = (level: string) => {
    switch (level) {
      case "Beginner": return "default";
      case "Intermediate": return "secondary";
      case "Advanced": return "destructive";
      default: return "default";
    }
  };

  const getProgressColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-500";
      case "Intermediate": return "bg-yellow-500";
      case "Advanced": return "bg-red-500";
      default: return "bg-blue-500";
    }
  };

  return (
    <section id="courses" className="py-20 bg-pattern">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 fade-in">
          <Breadcrumb 
            items={[
              { label: "Courses", href: "courses", active: true }
            ]} 
          />
        </div>

        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold mb-4">Free Tech Courses</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover hundreds of free courses from top platforms to kickstart your tech career.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-8 space-y-4">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {/* Level Filter Button Group */}
          <div className="flex justify-center">
            <ButtonGroup
              options={levelOptions}
              value={selectedLevel}
              onChange={setSelectedLevel}
            />
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="web-dev">
              <Code className="mr-2 h-4 w-4" />
              Web Dev
            </TabsTrigger>
            <TabsTrigger value="ai-ml">
              <Brain className="mr-2 h-4 w-4" />
              AI & ML
            </TabsTrigger>
            <TabsTrigger value="cybersecurity">
              <Shield className="mr-2 h-4 w-4" />
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-8">
            {/* Course Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="h-full hover:shadow-lg transition-shadow duration-300 fade-in">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant={getBadgeVariant(course.level)}>
                        {course.level}
                      </Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4 text-red-500"
                      onClick={() => toggleFavorite(course.id)}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <SpinnerBorder size="sm" />
                      ) : (
                        <Heart 
                          className={`h-4 w-4 ${
                            favorites.includes(course.id) ? 'fill-current' : ''
                          }`} 
                        />
                      )}
                    </Button>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-1">
                      {course.description}
                    </p>

                    <div className="space-y-4">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {course.duration}
                        </span>
                        <span className="flex items-center">
                          <User className="mr-1 h-3 w-3" />
                          {course.platform}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>

                      <div className="flex gap-2">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button className="flex-1">
                              {course.progress > 0 ? 'Continue' : 'Start Course'}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{course.progress > 0 ? 'Continue your learning progress' : 'Start this free course'}</p>
                          </TooltipContent>
                        </Tooltip>
                        
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline" size="icon">
                              <Info className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View course details and syllabus</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <Alert className="max-w-md mx-auto">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  No courses found matching your search criteria. Try adjusting your filters.
                </AlertDescription>
              </Alert>
            )}
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        {filteredCourses.length > 0 && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </section>
  );
}
