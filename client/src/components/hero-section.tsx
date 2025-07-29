import { Button } from "@/components/ui/button";
import { GraduationCap, Bot } from "lucide-react";

interface HeroSectionProps {
  onOpenChatbot?: () => void;
}

export default function HeroSection({ onOpenChatbot }: HeroSectionProps = {}) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero-gradient hero-pattern min-h-screen flex items-center text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Find Your Path in Tech
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Discover free courses, track hiring companies, and get personalized career guidance 
              with our AI assistant. Your journey to a successful tech career starts here.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => scrollToSection('courses')}
                className="bg-white text-primary hover:bg-white/90"
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                Explore Courses
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={onOpenChatbot}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Bot className="mr-2 h-5 w-5" />
                Get AI Guidance
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="stats-number text-white">500+</div>
                <div className="text-white/80">Free Courses</div>
              </div>
              <div className="text-center">
                <div className="stats-number text-white">200+</div>
                <div className="text-white/80">Companies</div>
              </div>
              <div className="text-center">
                <div className="stats-number text-white">50k+</div>
                <div className="text-white/80">Students Helped</div>
              </div>
            </div>
          </div>

          <div className="fade-in">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Students learning technology" 
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
