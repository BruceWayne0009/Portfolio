import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const cn = (...classes) => classes.filter(Boolean).join(' ');

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-500 ease-in-out",
          isScrolled 
            ? "py-2 bg-background/90 backdrop-blur-lg shadow-lg border-b border-border/50" 
            : "py-4 bg-transparent"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            className="text-xl font-bold flex items-center group transition-all duration-300"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
          >
            <span className="relative">
              <span className="text-glow text-foreground group-hover:text-primary transition-colors duration-300">
                Ayush's 
              </span>
              <span className="text-primary ml-1">Portfolio</span>
              
              {/* Animated underline */}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group",
                    isActive
                      ? "text-primary bg-primary/10 shadow-sm"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse-subtle"></div>
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-all duration-300 z-50 relative",
              "hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20",
              isMenuOpen ? "text-primary" : "text-foreground"
            )}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                )}
              />
              <X 
                size={24} 
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Background blur */}
        <div 
          className={cn(
            "absolute inset-0 bg-background/95 backdrop-blur-lg transition-all duration-500",
            isMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={cn(
          "relative z-10 flex flex-col items-center justify-center min-h-screen transition-all duration-500",
          isMenuOpen ? "translate-y-0" : "translate-y-8"
        )}>
          <div className="flex flex-col space-y-6">
            {navItems.map((item, index) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={cn(
                    "text-2xl font-semibold text-center px-8 py-3 rounded-full transition-all duration-300",
                    "transform hover:scale-105 active:scale-95",
                    isActive
                      ? "text-primary bg-primary/10 shadow-lg"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  )}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isMenuOpen ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                  }}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Mobile menu decoration */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse-subtle"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary/3 rounded-full blur-3xl animate-float"></div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <ThemeToggle />
    </>
  );
};