import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Moon, Sun, Rocket, Bot } from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";

interface NavigationProps {
  onOpenChatbot?: () => void;
}

export default function Navigation({ onOpenChatbot }: NavigationProps = {}) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 navbar-blur border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 text-xl font-bold"
          >
            <Rocket className="h-6 w-6 text-primary" />
            <span>Tech Path Finder</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors">
                Courses
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => scrollToSection('courses')}>
                  All Courses
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('courses')}>
                  Web Development
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('courses')}>
                  AI & Machine Learning
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('courses')}>
                  Cybersecurity
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button 
              onClick={() => scrollToSection('companies')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Companies
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
            <Button onClick={onOpenChatbot} className="hidden sm:flex">
              <Bot className="h-4 w-4 mr-2" />
              Ask AI Assistant
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-left text-lg hover:text-primary transition-colors"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => scrollToSection('courses')}
                    className="text-left text-lg hover:text-primary transition-colors"
                  >
                    Courses
                  </button>
                  <button 
                    onClick={() => scrollToSection('companies')}
                    className="text-left text-lg hover:text-primary transition-colors"
                  >
                    Companies
                  </button>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-left text-lg hover:text-primary transition-colors"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-left text-lg hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                  <Button onClick={onOpenChatbot} className="justify-start">
                    <Bot className="h-4 w-4 mr-2" />
                    Ask AI Assistant
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
