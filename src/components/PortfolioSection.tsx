import { useEffect, useRef, useState } from 'react';
import { Briefcase } from 'lucide-react';

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
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center mb-16">
            Portfolio
          </h2>
          
          <div className={`card-elegant p-8 lg:p-12 rounded-2xl text-center transition-all duration-700 ${
            isVisible ? 'animate-fade-in' : ''
          }`}>
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Briefcase className="w-12 h-12 text-primary" />
                </div>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-semibold text-primary">
                Complete Portfolio
              </h3>
              
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                Scan this QR code to explore my complete portfolio including Voice Over, Design, and Content Creator works.
              </p>
              
              {/* QR Code */}
              <div className="flex justify-center">
                <div className="p-4 bg-white rounded-2xl shadow-lg">
                  <img 
                    src="/lovable-uploads/portfolio-qr.png"
                    alt="Portfolio QR Code"
                    className="w-56 h-56 object-contain"
                  />
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Scan to view complete portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};