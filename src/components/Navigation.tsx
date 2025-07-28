import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Briefcase, 
  Code, 
  Brain,
  GraduationCap, 
  Mail,
  Download
} from "lucide-react";

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Code },
  { id: "technical-portfolio", label: "Technical Portfolio", icon: Brain },
  { id: "skills", label: "Skills", icon: User },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-sky-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MM</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg">Mitchell Marfinetz</div>
              <div className="text-xs text-muted-foreground">AI/ML Engineer</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 transition-all ${
                    activeSection === item.id ? "scale-105" : ""
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden xl:inline">{item.label}</span>
                </Button>
              );
            })}
            
            <Button variant="outline" asChild>
              <a href="/resume" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
            <div className="p-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? "default" : "ghost"}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full justify-start gap-3"
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                );
              })}
              
              <div className="pt-2 border-t border-border">
                <Button variant="outline" className="w-full justify-start gap-3" asChild>
                  <a href="/resume" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}