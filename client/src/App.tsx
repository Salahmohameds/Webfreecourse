import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/hooks/use-dark-mode";
import { LanguageProvider, useLanguage } from "@/hooks/use-language";
import Navigation from "@/components/navigation";
import ChatbotModal from "@/components/chatbot-modal";
import Home from "@/pages/home";
import CoursesPage from "@/pages/courses";
import CompaniesPage from "@/pages/companies";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import NotFound from "@/pages/not-found";
import ResearchPage from "@/pages/research";
import JobsPage from "@/pages/jobs";

function Router() {
  const { t, isRTL } = useLanguage();
  
  return (
    <div className={`min-h-screen bg-background text-foreground ${isRTL ? 'font-arabic' : ''}`}>
      <Navigation />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/companies" component={CompaniesPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/research" component={ResearchPage} />
          <Route path="/jobs" component={JobsPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <footer className="bg-muted/30 border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              {t.footer.rights}
            </p>
            <p className="text-sm text-muted-foreground">
              {t.footer.madeBy}
            </p>
          </div>
        </div>
      </footer>
      <ChatbotModal />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
