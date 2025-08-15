import { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ProfessionalSummary } from '@/components/ProfessionalSummary';
import { EducationSection } from '@/components/EducationSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ResumeModal } from '@/components/ResumeModal';

const Index = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <HeroSection onResumeClick={() => setIsResumeModalOpen(true)} />
      <ProfessionalSummary />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      
      <ResumeModal 
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default Index;