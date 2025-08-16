import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const heroImages = [
  '/lovable-uploads/890f8eda-505d-4f45-a575-aafa37a5e35d.png',
  '/lovable-uploads/285d89c5-2396-4f99-833f-4f204b571049.png', 
  '/lovable-uploads/8a745b1c-7860-479a-8a1e-c2d53799286e.png'
];

interface HeroSectionProps {
  onResumeClick: () => void;
}

export const HeroSection = ({ onResumeClick }: HeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/10">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in text-center lg:text-left">
              {/* Name */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-5xl lg:text-8xl font-bold tracking-tight">
                    <span className="hero-text-gradient">YUKIE</span>
                    <br />
                    <span className="text-primary">RAMADHANI</span>
                    <br />
                    <span className="text-primary">KIYOSHI</span>
                  </h1>
                </div>
                
                <p className="text-xl lg:text-2xl text-muted-foreground font-light">
                  Informatics Student | Content Creator | Voice Over Artist
                </p>
              </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>yukiekiyoshi123@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>081280106134</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Bandung, West Java</span>
              </div>
              <a 
                href="https://linkedin.com/in/yukiekiyoshi" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

              {/* CTA Button */}
              <Button 
                onClick={onResumeClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                Complete Resume
              </Button>
            </div>

            {/* Slideshow */}
            <div className="relative w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Yukie photo ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Slideshow Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-primary w-6' 
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};