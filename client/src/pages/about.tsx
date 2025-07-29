import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";
import { 
  StatsCards,
  InfoAlert,
  SuccessAlert
} from "@/components/bootstrap-components";
import Breadcrumb from "@/components/breadcrumb";
import { 
  Target, 
  Users, 
  Award,
  Heart,
  Lightbulb,
  Globe,
  BookOpen,
  Zap,
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
  Rocket,
  Code,
  Brain,
  GraduationCap,
  Building
} from "lucide-react";

export default function AboutPage() {
  const { t, isRTL } = useLanguage();

  const breadcrumbItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" }
  ];

  const values = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: isRTL ? "التعلم المجاني" : "Free Learning",
      description: isRTL 
        ? "نؤمن بأن التعليم حق للجميع، لذلك نوفر جميع الموارد مجاناً"
        : "We believe education is a right for everyone, so we provide all resources for free"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: isRTL ? "المجتمع" : "Community",
      description: isRTL
        ? "نبني مجتمعاً داعماً يساعد بعضه البعض في الرحلة التقنية"
        : "We build a supportive community that helps each other in the tech journey"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: isRTL ? "الابتكار" : "Innovation",
      description: isRTL
        ? "نستخدم أحدث التقنيات لتقديم أفضل تجربة تعليمية"
        : "We use cutting-edge technology to provide the best learning experience"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: isRTL ? "الجودة" : "Quality",
      description: isRTL
        ? "نختار بعناية أفضل الموارد والكورسات المتاحة"
        : "We carefully curate the best available resources and courses"
    }
  ];

  const team = [
    {
      name: "Salah Mohamed",
      role: isRTL ? "المؤسس والمطور الرئيسي" : "Founder & Lead Developer",
      image: "👨‍💻",
      skills: ["Full Stack", "AI/ML", "Product Design"],
      bio: isRTL 
        ? "مطور شغوف بتسهيل الوصول للتعليم التقني للجميع"
        : "Passionate developer focused on making tech education accessible to everyone"
    },
    {
      name: "Tech Path AI",
      role: isRTL ? "المساعد الذكي" : "AI Assistant",
      image: "🤖",
      skills: ["Career Guidance", "Course Recommendation", "24/7 Support"],
      bio: isRTL
        ? "مساعد ذكي يقدم إرشادات مهنية مخصصة للطلاب"
        : "AI assistant providing personalized career guidance to students"
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: isRTL ? "إطلاق المنصة" : "Platform Launch",
      description: isRTL ? "بدء رحلة Tech Path Finder" : "Started Tech Path Finder journey",
      progress: 100
    },
    {
      year: "2024",
      title: isRTL ? "1000+ طالب" : "1,000+ Students",
      description: isRTL ? "وصلنا لأول 1000 طالب" : "Reached first 1,000 students",
      progress: 100
    },
    {
      year: "2024",
      title: isRTL ? "دعم عربي" : "Arabic Support",
      description: isRTL ? "إضافة الدعم الكامل للغة العربية" : "Added full Arabic language support",
      progress: 100
    },
    {
      year: "2025",
      title: isRTL ? "مساعد ذكي" : "AI Assistant", 
      description: isRTL ? "تطوير مساعد ذكي للإرشاد المهني" : "Developed AI assistant for career guidance",
      progress: 85
    },
    {
      year: "2025",
      title: isRTL ? "شراكات جديدة" : "New Partnerships",
      description: isRTL ? "شراكات مع شركات تقنية رائدة" : "Partnerships with leading tech companies",
      progress: 60
    }
  ];

  const technologies = [
    { name: "React", progress: 95, color: "bg-blue-500" },
    { name: "TypeScript", progress: 90, color: "bg-blue-600" },
    { name: "Node.js", progress: 88, color: "bg-green-500" },
    { name: "AI/ML", progress: 80, color: "bg-purple-500" },
    { name: "Database", progress: 85, color: "bg-orange-500" }
  ];

  const faqs = [
    {
      question: isRTL ? "ما هو هدف Tech Path Finder؟" : "What is Tech Path Finder's mission?",
      answer: isRTL
        ? "هدفنا هو جعل التعليم التقني متاحاً ومجانياً للجميع، خاصة طلاب علوم الحاسوب والهندسة. نوفر كورسات مجانية، فرص عمل، وإرشاد مهني ذكي لمساعدة الطلاب في بناء مستقبلهم التقني."
        : "Our mission is to make tech education accessible and free for everyone, especially Computer Science and Engineering students. We provide free courses, job opportunities, and intelligent career guidance to help students build their tech future."
    },
    {
      question: isRTL ? "كيف تختارون الكورسات؟" : "How do you select courses?",
      answer: isRTL
        ? "نختار الكورسات بعناية من أفضل المنصات التعليمية مثل FreeCodeCamp، Coursera، edX وغيرها. نركز على الكورسات المجانية عالية الجودة التي تغطي التقنيات الحديثة والمطلوبة في سوق العمل."
        : "We carefully select courses from top educational platforms like FreeCodeCamp, Coursera, edX, and others. We focus on high-quality free courses that cover modern and in-demand technologies in the job market."
    },
    {
      question: isRTL ? "هل المنصة مجانية تماماً؟" : "Is the platform completely free?",
      answer: isRTL
        ? "نعم، Tech Path Finder مجاني تماماً. جميع الكورسات، فرص العمل، والمساعد الذكي متاح دون أي تكلفة. هدفنا هو كسر حواجز التعليم التقني."
        : "Yes, Tech Path Finder is completely free. All courses, job opportunities, and AI assistant are available at no cost. Our goal is to break down barriers to tech education."
    },
    {
      question: isRTL ? "كيف يعمل المساعد الذكي؟" : "How does the AI assistant work?",
      answer: isRTL
        ? "المساعد الذكي يستخدم خوارزميات متقدمة لفهم اهتماماتك ومهاراتك، ثم يقدم توصيات مخصصة للكورسات والمسارات المهنية. يمكنك التفاعل معه بالعربية أو الإنجليزية."
        : "The AI assistant uses advanced algorithms to understand your interests and skills, then provides personalized recommendations for courses and career paths. You can interact with it in both Arabic and English."
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

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {t.about.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t.about.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <Button size="lg">
                  <BookOpen className="mr-2 h-5 w-5" />
                  {isRTL ? "استكشف الكورسات" : "Explore Courses"}
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  {isRTL ? "تواصل معنا" : "Contact Us"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <SuccessAlert 
            message={isRTL 
              ? "🎯 مساعدة أكثر من 10,000 طالب في تحقيق أهدافهم التقنية!" 
              : "🎯 Helping over 10,000 students achieve their tech goals!"
            } 
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {isRTL ? "تأثيرنا بالأرقام" : "Our Impact in Numbers"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {isRTL ? "نحن فخورون بما حققناه معاً" : "We're proud of what we've achieved together"}
            </p>
          </div>
          <StatsCards />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {isRTL ? "قيمنا الأساسية" : "Our Core Values"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {isRTL ? "المبادئ التي نؤمن بها ونعمل من أجلها" : "The principles we believe in and work towards"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {isRTL ? "فريق العمل" : "Our Team"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {isRTL ? "الأشخاص الذين يجعلون Tech Path Finder ممكناً" : "The people who make Tech Path Finder possible"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="text-6xl">{member.image}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-primary font-medium mb-3">{member.role}</p>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{member.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey/Timeline Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {isRTL ? "رحلتنا" : "Our Journey"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {isRTL ? "المعالم المهمة في تطوير المنصة" : "Key milestones in our platform development"}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="text-lg px-3 py-1">
                        {milestone.year}
                      </Badge>
                      <div>
                        <h3 className="font-bold text-lg">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant={milestone.progress === 100 ? "default" : "secondary"}
                        className="mb-2"
                      >
                        {milestone.progress}%
                      </Badge>
                    </div>
                  </div>
                  <Progress value={milestone.progress} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {isRTL ? "التقنيات المستخدمة" : "Technologies We Use"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {isRTL ? "التقنيات الحديثة التي تشغل منصتنا" : "Modern technologies powering our platform"}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  {isRTL ? "المهارات التقنية" : "Tech Stack"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {technologies.map((tech, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{tech.name}</span>
                      <span className="text-sm text-muted-foreground">{tech.progress}%</span>
                    </div>
                    <Progress value={tech.progress} className="h-3" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {isRTL ? "أسئلة شائعة حول Tech Path Finder" : "Frequently Asked Questions"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {isRTL ? "إجابات على الأسئلة الأكثر شيوعاً" : "Answers to the most common questions"}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left py-4 hover:no-underline">
                    <span className="font-medium pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {isRTL ? "انضم إلى مجتمعنا اليوم" : "Join Our Community Today"}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {isRTL 
              ? "كن جزءاً من رحلة تعلم مشتركة مع آلاف الطلاب حول العالم"
              : "Be part of a shared learning journey with thousands of students worldwide"
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                <Rocket className="mr-2 h-5 w-5" />
                {isRTL ? "ابدأ التعلم" : "Start Learning"}
              </Button>
            </Link>
            <Link href="/companies">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                <Building className="mr-2 h-5 w-5" />
                {isRTL ? "ابحث عن وظيفة" : "Find Jobs"}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}