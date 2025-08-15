import { useEffect, useRef, useState } from 'react';
import { Code, Palette, Video, Mic, Users, MessageSquare, Globe } from 'lucide-react';

export const SkillsSection = () => {
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

  const technicalSkills = [
    { name: 'Programming', level: 85, icon: Code },
    { name: 'Graphic Design', level: 80, icon: Palette },
    { name: 'Content Creation', level: 95, icon: Video },
    { name: 'Voice-Over & Dubbing', level: 90, icon: Mic },
    { name: 'Microsoft Office', level: 85, icon: Users }
  ];

  const softSkills = [
    { name: 'Public Relations', level: 95, icon: MessageSquare },
    { name: 'Leadership', level: 90, icon: Users },
    { name: 'Communication', level: 95, icon: MessageSquare },
    { name: 'Teamwork', level: 90, icon: Users },
    { name: 'Problem-Solving', level: 85, icon: Code }
  ];

  const languages = [
    { name: 'Indonesian', level: 100, flag: '🇮🇩' },
    { name: 'English', level: 85, flag: '🇺🇸' }
  ];

  const SkillBar = ({ skill, index, delay = 0 }: { skill: any, index: number, delay?: number }) => {
    const [animatedLevel, setAnimatedLevel] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setAnimatedLevel(skill.level);
        }, delay + index * 200);
        return () => clearTimeout(timer);
      }
    }, [isVisible, skill.level, index, delay]);

    const Icon = skill.icon;

    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <span className="font-medium text-primary">{skill.name}</span>
          </div>
          <span className="text-muted-foreground font-medium">{skill.level}%</span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${animatedLevel}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center mb-16">
            Skills & Expertise
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="card-elegant p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center gap-3">
                <Code className="w-6 h-6" />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="card-elegant p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center gap-3">
                <Users className="w-6 h-6" />
                Soft Skills
              </h3>
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} delay={300} />
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-12">
            <div className="card-elegant p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center gap-3">
                <Globe className="w-6 h-6" />
                Languages
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {languages.map((lang, index) => (
                  <div key={lang.name} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{lang.flag}</span>
                        <span className="font-medium text-primary">{lang.name}</span>
                      </div>
                      <span className="text-muted-foreground font-medium">
                        {lang.level === 100 ? 'Native' : 'Fluent'}
                      </span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out ${
                          isVisible ? `w-full` : 'w-0'
                        }`}
                        style={{ 
                          transitionDelay: `${600 + index * 200}ms`,
                          width: isVisible ? `${lang.level}%` : '0%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};