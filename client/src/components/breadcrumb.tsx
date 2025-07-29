import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav aria-label="breadcrumb" className="flex items-center space-x-1 text-sm text-muted-foreground">
      <button 
        onClick={() => scrollToSection('home')}
        className="flex items-center hover:text-primary transition-colors"
      >
        <Home className="h-4 w-4" />
      </button>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-1">
          <ChevronRight className="h-4 w-4" />
          {item.href ? (
            <button 
              onClick={() => scrollToSection(item.href!)}
              className={`hover:text-primary transition-colors ${
                item.active ? 'text-foreground font-medium' : ''
              }`}
            >
              {item.label}
            </button>
          ) : (
            <span className={item.active ? 'text-foreground font-medium' : ''}>{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}