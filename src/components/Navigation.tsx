import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
      isScrolled 
        ? "bg-primary/95 backdrop-blur-sm shadow-lg" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="animate-fade-in">
            <img 
              src="/lovable-uploads/e8d15b4e-45e1-49da-8660-8bee9870f236.png"
              alt="YK Logo"
              className="h-12 w-auto transition-transform duration-300 hover:scale-110 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            />
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "relative font-bold text-lg transition-all duration-300 group",
                  isScrolled 
                    ? "text-primary-foreground hover:text-accent" 
                    : "text-primary hover:text-accent"
                )}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className={cn(
              "font-bold text-lg transition-colors duration-300",
              isScrolled 
                ? "text-primary-foreground" 
                : "text-primary"
            )}>
              Menu
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;