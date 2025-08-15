import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import heroImage1 from '@/assets/yukie-hero-1.jpg';
import heroImage2 from '@/assets/yukie-hero-2.jpg';
import heroImage3 from '@/assets/yukie-hero-3.jpg';

const heroImages = [heroImage1, heroImage2, heroImage3];

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
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="hero-text-gradient">YUKIE</span>
                <br />
                <span className="text-primary">RAMADHANI</span>
                <br />
                <span className="text-primary">KIYOSHI</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-light">
                Informatics Student | Content Creator | Voice Over Artist
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
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

          {/* Image Slideshow */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden card-elegant">
              {heroImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Yukie professional photo ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              
              {/* Image Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-primary' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
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