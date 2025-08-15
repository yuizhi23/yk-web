import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

export const EducationSection = () => {
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

  const educationData = [
    {
      institution: "Telkom University",
      degree: "Bachelor's Degree in Informatics",
      period: "2023 – 2027",
      status: "Current"
    },
    {
      institution: "Senior High School 12 Bekasi",
      degree: "Science and Biology Major",
      period: "2020 – 2023",
      status: "Completed"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center mb-16">
            Education
          </h2>
          
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className={`card-elegant p-8 rounded-2xl transition-all duration-700 ${
                  isVisible ? 'animate-slide-in-left' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl lg:text-2xl font-semibold text-primary">
                        {edu.institution}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {edu.degree}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-5 h-5" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      edu.status === 'Current' 
                        ? 'bg-accent/20 text-accent' 
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};