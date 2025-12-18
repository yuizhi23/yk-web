import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Brain, Network, Droplets, Cat, Shield, Film, Heart, Monitor, Gamepad2, Database } from 'lucide-react';

const projects = [
  {
    title: "Medical Data–Driven Diabetes Prediction Using Machine Learning",
    icon: Brain
  },
  {
    title: "Performance Analysis of TCP vs UDP in Proxy-Based Network Systems",
    icon: Network
  },
  {
    title: "HydroWatch: Rainfall and River Water Level Monitoring & Prediction System for Flood Mitigation",
    icon: Droplets
  },
  {
    title: "Cat Detection System Using Convolutional Neural Network (CNN)",
    icon: Cat
  },
  {
    title: "Digital Forensics Analysis – Corporate Data Leakage Case Simulation",
    icon: Shield
  },
  {
    title: "CineMagz: User-Driven Digital Platform for Exploring Movies and Series",
    icon: Film
  },
  {
    title: "Daily Mood Prediction Using Sleep Quality and Stress Level (Mamdani & Sugeno FIS)",
    icon: Heart
  },
  {
    title: "Daily Mood Prediction Using Sleep Quality and Social Media Usage (Mamdani & Sugeno FIS)",
    icon: Heart
  },
  {
    title: "User Experience Analysis of Telkom University LMS",
    icon: Monitor
  },
  {
    title: "Student Task Management Software System (SAMS)",
    icon: GraduationCap
  },
  {
    title: "Valorant Game Economy Analysis: Dynamic Player Resource Management",
    icon: Gamepad2
  },
  {
    title: "Query Performance Analysis With and Without Indexing",
    icon: Database
  }
];

export const AcademicProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="academic-projects"
      className="py-20 bg-muted/30"
    >
      <div className="container mx-auto px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center mb-4">
            Academic & Project Experience
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A collection of academic projects showcasing expertise in machine learning, data analysis, system design, and software development.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div 
                  key={index}
                  className={`card-elegant p-6 rounded-xl hover:scale-105 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-medium text-primary leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicProjectsSection;
