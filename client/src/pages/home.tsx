import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";
import { 
  HeroCarousel, 
  StatsCards, 
  TechnologyTabs, 
  InfoAlert,
  SuccessAlert,
  ButtonGroup,
  ListGroup,
  CourseProgress
} from "@/components/bootstrap-components";
import Breadcrumb from "@/components/breadcrumb";
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  BookOpen,
  Award,
  Zap,
  Target,
  Code,
  Brain,
  Globe,
  Shield,
  Smartphone,
  Database,
  ChevronRight
} from "lucide-react";

export default function Home() {
  const { t, isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const breadcrumbItems = [
    { label: t.nav.home, href: "/" }
  ];

  const categories = [
    { value: "all", label: isRTL ? "الكل" : "All", icon: <Globe className="h-4 w-4" /> },
    { value: "programming", label: isRTL ? "البرمجة" : "Programming", icon: <Code className="h-4 w-4" /> },
    { value: "ai", label: isRTL ? "الذكاء الاصطناعي" : "AI/ML", icon: <Brain className="h-4 w-4" /> },
    { value: "security", label: isRTL ? "الأمن السيبراني" : "Security", icon: <Shield className="h-4 w-4" /> }
  ];

  const featuredCourses = [
    {
      title: isRTL ? "تطوير مواقع الويب الشاملة" : "Complete Web Development",
      provider: "FreeCodeCamp",
      level: isRTL ? "مبتدئ" : "Beginner",
      duration: isRTL ? "40 ساعة" : "40 hours",
      rating: 4.9,
      students: "50K+",
      badge: isRTL ? "مجاني" : "Free",
      badgeColor: "bg-green-500"
    },
    {
      title: isRTL ? "أساسيات الذكاء الاصطناعي" : "AI Fundamentals",
      provider: "Coursera",
      level: isRTL ? "متوسط" : "Intermediate", 
      duration: isRTL ? "25 ساعة" : "25 hours",
      rating: 4.8,
      students: "30K+",
      badge: isRTL ? "رائج" : "Trending",
      badgeColor: "bg-orange-500"
    },
    {
      title: isRTL ? "البرمجة بـ Python" : "Python Programming",
      provider: "edX",
      level: isRTL ? "مبتدئ" : "Beginner",
      duration: isRTL ? "30 ساعة" : "30 hours", 
      rating: 4.7,
      students: "75K+",
      badge: isRTL ? "محدث" : "Updated",
      badgeColor: "bg-blue-500"
    }
  ];

  const topCompanies = [
    {
      id: "1",
      title: "Google",
      description: isRTL ? "مهندس برمجيات - متدرب" : "Software Engineer - Intern",
      badge: isRTL ? "متاح" : "Open"
    },
    {
      id: "2", 
      title: "Microsoft",
      description: isRTL ? "مطور Full Stack" : "Full Stack Developer",
      badge: isRTL ? "جديد" : "New"
    },
    {
      id: "3",
      title: "Meta",
      description: isRTL ? "مهندس Frontend" : "Frontend Engineer",
      badge: isRTL ? "عاجل" : "Urgent"
    },
    {
      id: "4",
      title: "Amazon",
      description: isRTL ? "عالم بيانات" : "Data Scientist", 
      badge: isRTL ? "ريموت" : "Remote"
    }
  ];

  const learningPaths = [
    {
      title: isRTL ? "مسار تطوير الويب" : "Web Development Path",
      progress: 65,
      total: 12,
      completed: 8
    },
    {
      title: isRTL ? "مسار علم البيانات" : "Data Science Path", 
      progress: 40,
      total: 15,
      completed: 6
    },
    {
      title: isRTL ? "مسار الأمن السيبراني" : "Cybersecurity Path",
      progress: 80,
      total: 10,
      completed: 8
    }
  ];

  const faqs = [
    {
      question: isRTL ? "كم يستغرق تعلم البرمجة؟" : "How long does it take to learn programming?",
      answer: isRTL 
        ? "يختلف الوقت حسب المجال والجهد المبذول، عادة من 6-12 شهر للمبتدئين للحصول على أساس قوي في البرمجة."
        : "The time varies based on the field and effort invested, typically 6-12 months for beginners to get a solid programming foundation."
    },
    {
      question: isRTL ? "هل الكورسات مجانية حقاً؟" : "Are the courses really free?",
      answer: isRTL
        ? "نعم، جميع الكورسات المعروضة على موقعنا مجانية 100%. نحن نختار بعناية أفضل الموارد التعليمية المجانية."
        : "Yes, all courses featured on our site are 100% free. We carefully curate the best free educational resources available."
    },
    {
      question: isRTL ? "كيف أختار المسار المناسب لي؟" : "How do I choose the right career path?",
      answer: isRTL
        ? "استخدم مساعدنا الذكي للحصول على توصيات مخصصة، أو جرب كورسات مختلفة لاكتشاف ما يناسبك أكثر."
        : "Use our AI assistant for personalized recommendations, or try different courses to discover what suits you best."
    }
  ];

  return (
    <div className={`min-h-screen ${isRTL ? 'font-arabic' : ''}`}>
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section with Carousel */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                {t.home.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {t.home.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/courses">
                  <Button size="lg" className="w-full sm:w-auto">
                    {t.nav.courses}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/companies">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    {t.nav.companies}
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <HeroCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <SuccessAlert 
            message={isRTL 
              ? "🎉 تم إضافة 50 كورس جديد هذا الشهر!" 
              : "🎉 50 new courses added this month!"
            } 
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {isRTL ? "أرقام تتحدث عن نفسها" : "Numbers That Speak"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {isRTL ? "إنجازاتنا في مساعدة الطلاب" : "Our achievements in helping students"}
            </p>
          </div>
          <StatsCards />
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {isRTL ? "الكورسات المميزة" : "Featured Courses"}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {isRTL ? "أفضل الكورسات المختارة لك" : "Hand-picked courses for your success"}
            </p>
            
            {/* Button Group for Category Filter */}
            <div className="flex justify-center mb-8">
              <ButtonGroup 
                options={categories}
                selected={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={`${course.badgeColor} text-white`}>
                      {course.badge}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-muted-foreground">{course.provider}</p>
                    <div className="flex justify-between text-sm">
                      <span>{course.level}</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span className="text-sm">{course.students}</span>
                      </div>
                      <Button size="sm">
                        {isRTL ? "ابدأ الآن" : "Start Now"}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/courses">
              <Button variant="outline" size="lg">
                {isRTL ? "عرض جميع الكورسات" : "View All Courses"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Tabs Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {isRTL ? "التقنيات المطلوبة" : "In-Demand Technologies"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {isRTL ? "اختر مجالك واستكشف المهارات" : "Choose your field and explore skills"}
            </p>
          </div>
          <TechnologyTabs />
        </div>
      </section>

      {/* Learning Progress Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">
                {isRTL ? "مساراتك التعليمية" : "Your Learning Paths"}
              </h2>
              <div className="space-y-4">
                {learningPaths.map((path, index) => (
                  <CourseProgress
                    key={index}
                    title={path.title}
                    progress={path.progress}
                    total={path.total}
                    completed={path.completed}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">
                {isRTL ? "الشركات التي توظف" : "Companies Hiring"}
              </h3>
              <ListGroup items={topCompanies} />
              <div className="mt-6">
                <Link href="/companies">
                  <Button variant="outline" className="w-full">
                    {isRTL ? "عرض المزيد" : "View More"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {isRTL ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {isRTL ? "إجابات على أهم الأسئلة" : "Answers to common questions"}
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {isRTL ? "ابدأ رحلتك التقنية اليوم" : "Start Your Tech Journey Today"}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {isRTL 
              ? "انضم لآلاف الطلاب الذين حققوا أحلامهم في التقنية"
              : "Join thousands of students who achieved their tech dreams"
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                <BookOpen className="mr-2 h-5 w-5" />
                {isRTL ? "استكشف الكورسات" : "Explore Courses"}
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                {isRTL ? "تعرف علينا" : "Learn More"}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}