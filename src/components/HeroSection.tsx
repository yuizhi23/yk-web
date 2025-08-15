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
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/10">
      {/* Parallax Background */}
      <div className="absolute inset-0 parallax-bg opacity-20" 
           style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="w-full max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="space-y-8 animate-fade-in text-center">
            {/* Name with Small Photos */}
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-8 flex-wrap">
                {/* Small Photos */}
                <div className="flex gap-4">
                  {heroImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden card-elegant"
                    >
                      <img
                        src={image}
                        alt={`Yukie photo ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Name */}
                <div className="space-y-2">
                  <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                    <span className="hero-text-gradient">YUKIE</span>
                    <br />
                    <span className="text-primary">RAMADHANI</span>
                    <br />
                    <span className="text-primary">KIYOSHI</span>
                  </h1>
                </div>
                
                {/* More Small Photos */}
                <div className="flex gap-4">
                  {heroImages.map((image, index) => (
                    <div
                      key={`duplicate-${index}`}
                      className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden card-elegant opacity-60"
                    >
                      <img
                        src={image}
                        alt={`Yukie photo ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
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
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Complete Resume
            </Button>
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