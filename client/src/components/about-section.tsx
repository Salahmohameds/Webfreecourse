import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GraduationCap, Building, Bot, Code, Brain, Shield, BarChart3, Smartphone, Globe } from "lucide-react";
import ListGroup from "@/components/list-group";
import Breadcrumb from "@/components/breadcrumb";

export default function AboutSection() {
  const techFields = [
    {
      id: "web-dev",
      label: "Web Development", 
      description: "Build modern websites and web applications",
      icon: <Code className="h-5 w-5" />,
      badge: "Popular"
    },
    {
      id: "ai-ml",
      label: "AI & Machine Learning",
      description: "Create intelligent systems and data models", 
      icon: <Brain className="h-5 w-5" />,
      badge: "Trending"
    },
    {
      id: "cybersecurity", 
      label: "Cybersecurity",
      description: "Protect digital assets and systems",
      icon: <Shield className="h-5 w-5" />,
      badge: "High Demand"
    },
    {
      id: "data-science",
      label: "Data Science",
      description: "Extract insights from complex datasets",
      icon: <BarChart3 className="h-5 w-5" />
    },
    {
      id: "mobile-dev",
      label: "Mobile Development", 
      description: "Create iOS and Android applications",
      icon: <Smartphone className="h-5 w-5" />
    },
    {
      id: "cloud",
      label: "Cloud Computing",
      description: "Deploy and manage scalable cloud solutions", 
      icon: <Globe className="h-5 w-5" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-pattern">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 fade-in">
          <Breadcrumb 
            items={[
              { label: "About", href: "about", active: true }
            ]} 
          />
        </div>

        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold mb-4">About Tech Path Finder</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering the next generation of tech professionals with personalized guidance and resources.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Team working together on tech projects" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="fade-in space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                We believe that everyone deserves access to quality tech education and career opportunities. 
                Our platform bridges the gap between aspiring developers and their dream careers by providing:
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              <Card>
                <CardContent className="flex items-center p-4">
                  <GraduationCap className="h-8 w-8 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h6 className="font-semibold mb-1">Curated Free Courses</h6>
                    <p className="text-sm text-muted-foreground">
                      Hand-picked courses from the best platforms
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center p-4">
                  <Building className="h-8 w-8 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h6 className="font-semibold mb-1">Company Insights</h6>
                    <p className="text-sm text-muted-foreground">
                      Real-time job market tracking and opportunities
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center p-4">
                  <Bot className="h-8 w-8 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h6 className="font-semibold mb-1">AI-Powered Guidance</h6>
                    <p className="text-sm text-muted-foreground">
                      Personalized career path recommendations
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tech Fields List Group */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Available Tech Fields</h4>
              <ListGroup items={techFields} className="mb-8" />
            </div>

            {/* FAQ Accordion */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Frequently Asked Questions</h4>
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do you select courses?</AccordionTrigger>
                  <AccordionContent>
                    We carefully review courses based on curriculum quality, instructor expertise, 
                    student reviews, and industry relevance. Only courses that meet our strict 
                    criteria are featured.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Is the AI assistant really helpful?</AccordionTrigger>
                  <AccordionContent>
                    Our AI assistant uses machine learning to analyze your interests, goals, and 
                    current skill level to provide personalized course recommendations that align 
                    with market demands.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>How often is company data updated?</AccordionTrigger>
                  <AccordionContent>
                    We update our company database daily, pulling information from multiple job 
                    boards and company career pages to ensure you have access to the latest opportunities.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>What makes this platform different?</AccordionTrigger>
                  <AccordionContent>
                    Our platform combines curated free courses, real-time job market data, and 
                    AI-powered career guidance in one place. We focus specifically on helping 
                    CS and CE students navigate their career paths effectively.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
