import { useEffect, useRef, useState } from 'react';
import { Palette, Mic2 } from 'lucide-react';

export const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 section-bg"
    >
      <div className="container mx-auto px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center mb-16">
            Portfolio
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Portfolio Design */}
            <div className={`card-elegant p-8 rounded-2xl text-center transition-all duration-700 ${
              isVisible ? 'animate-slide-in-left' : ''
            }`}>
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <Palette className="w-12 h-12 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-semibold text-primary">
                  Portfolio Design
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Explore my creative design work, graphic projects, and visual content creation portfolio.
                </p>
                
                {/* QR Code */}
                <div className="flex justify-center">
                  <div className="p-4 bg-white rounded-2xl shadow-lg">
                    <img 
                      src="/lovable-uploads/1a56a56c-7bf3-4639-a00d-a95e55df970e.png"
                      alt="Portfolio Design QR Code"
                      className="w-48 h-48 object-contain"
                    />
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Scan to view my design portfolio
                </p>
              </div>
            </div>

            {/* Portfolio Voice Over */}
            <div className={`card-elegant p-8 rounded-2xl text-center transition-all duration-700 ${
              isVisible ? 'animate-slide-in-right' : ''
            }`}>
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <Mic2 className="w-12 h-12 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-semibold text-primary">
                  Portfolio Voice Over
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Listen to my voice-over samples, dubbing work, and audio content creation projects.
                </p>
                
                {/* QR Code */}
                <div className="flex justify-center">
                  <div className="p-4 bg-white rounded-2xl shadow-lg">
                    <img 
                      src="/lovable-uploads/2dcc2292-ac99-4008-86e0-60c48a157ffe.png"
                      alt="Portfolio Voice Over QR Code"
                      className="w-48 h-48 object-contain"
                    />
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Scan to listen to voice samples
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};