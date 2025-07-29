import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Building2, 
  MessageCircle, 
  Users, 
  Award, 
  Sparkles,
  ArrowRight,
  TrendingUp
} from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";

export default function HomePage() {
  const { t, isRTL } = useLanguage();

  const stats = [
    { number: "500+", label: t.home.stats.courses },
    { number: "10K+", label: t.home.stats.students },
    { number: "100+", label: t.home.stats.companies },
  ];

  const features = [
    {
      icon: BookOpen,
      title: t.home.features.courses.title,
      description: t.home.features.courses.description,
      href: "/courses",
      color: "text-blue-500"
    },
    {
      icon: Building2,
      title: t.home.features.companies.title,
      description: t.home.features.companies.description,
      href: "/companies",
      color: "text-green-500"
    },
    {
      icon: MessageCircle,
      title: t.home.features.chatbot.title,
      description: t.home.features.chatbot.description,
      href: "#",
      color: "text-purple-500"
    }
  ];

  return (
    <div className={`pt-16 ${isRTL ? 'font-arabic' : ''}`}>
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-white relative overflow-hidden">
        <div className="hero-pattern absolute inset-0"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Sparkles className="h-3 w-3 mr-1" />
              {t.home.subtitle}
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {t.home.title}
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t.home.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/courses">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                  {t.home.getStarted}
                  <ArrowRight className={`h-4 w-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  {t.home.learnMore}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <TrendingUp className="h-3 w-3 mr-1" />
              Features
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From free courses to job tracking and AI guidance, we've got your tech journey covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 ${feature.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {feature.href !== "#" ? (
                      <Link href={feature.href}>
                        <Button variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          Explore
                          <ArrowRight className={`h-4 w-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Try Now
                        <MessageCircle className={`h-4 w-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students who are already building their future in technology.
            </p>
            <Link href="/courses">
              <Button size="lg" variant="secondary" className="shadow-lg">
                {t.home.getStarted}
                <ArrowRight className={`h-4 w-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
