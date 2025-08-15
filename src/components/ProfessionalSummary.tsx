import { useEffect, useRef, useState } from 'react';

export const ProfessionalSummary = () => {
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
        <div className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8">
            Professional Summary
          </h2>
          
          <div className="card-elegant p-8 lg:p-12 rounded-2xl">
            <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground">
              A highly motivated and versatile <span className="text-primary font-medium">Informatics student</span> with 
              expertise in programming, content creation, video editing, story writing, and voice-over. 
              Proficient in Microsoft Office and equipped with strong problem-solving and communication skills. 
              Actively seeking opportunities to apply my knowledge and grow in dynamic, collaborative environments. 
              Known for <span className="text-accent font-medium">adaptability, creativity, and strong initiative</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};