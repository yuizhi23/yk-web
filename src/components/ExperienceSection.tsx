import { useEffect, useRef, useState } from 'react';
import { Mic, Video, Users, Award } from 'lucide-react';

export const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('voice-over');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const voiceOverExperience = [
    {
      company: "PT Panca Kraft Pratama",
      role: "Voice Over Artist",
      period: "May 2025",
      description: "Voiced the official company profile video with clear, engaging narration that captured the brand's values and vision."
    },
    {
      company: "FREZHCHICK (Larislokal)",
      role: "Voice Over Artist", 
      period: "Feb 2025",
      description: "Lent voice to Tokopedia x Frezhchick's Ramadhan campaign. Created a warm, human-centered audio presence aligned with the festive tone."
    },
    {
      company: "ERA Infinity",
      role: "Voice Over Talent & Scriptwriter",
      period: "Mar 2025",
      description: "Wrote and narrated engaging real estate promos that bring property listings to life. Helped humanize listings and improve digital engagement."
    },
    {
      company: "JAGOTI LMS",
      role: "Voice Over Artist",
      period: "Oct 2024",
      description: "Narrated K3 training, customer service, and communication skill modules for LMS platform. Balanced clarity, tone, and warmth in e-learning voice-overs."
    }
  ];

  const contentCreationExperience = [
    {
      company: "HelPhin Indonesia",
      role: "Content Creator & Marketing Specialist",
      period: "Oct 2024",
      description: "Created and starred in promotional/educational video content. Developed bold, youth-friendly campaigns to elevate HelPhin's platform and brand identity."
    },
    {
      company: "HelPhin.id",
      role: "Content Creator",
      period: "Oct 2024", 
      description: "Produced creative, bold, and relatable content to communicate HelPhin's vision. Engaged users through storytelling and visual branding."
    },
    {
      company: "KitaAnterID",
      role: "Spokesperson",
      period: "Jul 2025",
      description: "Served as the public voice and representative for Kitaanter ID across various media formats. Delivered clear, engaging, and purpose-driven communication."
    }
  ];

  const leadershipExperience = [
    {
      company: "HIMA S1 Informatika",
      role: "Head of Student Affairs Division (KMS)",
      period: "Mar 2025 – Present",
      description: "Leads division activities, initiatives, and member development. Serves as a communication bridge between students and academic leaders."
    },
    {
      company: "HIMA S1 Informatika",
      role: "Mahasiswa of The Year 2023",
      period: "Dec 2024",
      description: "Awarded for outstanding contributions to the community and organization. Recognized at Insight & Anniv HIMA IF 2024."
    },
    {
      company: "Hello World 2025",
      role: "Event Coordinator",
      period: "May – Sep 2025",
      description: "Served as the Event Coordinator for Hello World 2025, overseeing the entire execution from planning to operations."
    }
  ];

  const tabs = [
    { id: 'voice-over', label: 'Voice Over', icon: Mic, data: voiceOverExperience },
    { id: 'content', label: 'Content Creation', icon: Video, data: contentCreationExperience },
    { id: 'leadership', label: 'Leadership', icon: Award, data: leadershipExperience }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

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
            Professional Experience
          </h2>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="card-elegant p-2 rounded-2xl">
              <div className="flex gap-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-primary text-primary-foreground shadow-lg'
                          : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6">
            {activeTabData?.data.map((exp, index) => (
              <div 
                key={index}
                className={`card-elegant p-8 rounded-2xl transition-all duration-700 ${
                  isVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="space-y-2">
                    <h3 className="text-xl lg:text-2xl font-semibold text-primary">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-accent font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-primary/5 px-4 py-2 rounded-lg">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};