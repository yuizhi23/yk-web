import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProfessionalSummary } from '@/components/ProfessionalSummary';
import { EducationSection } from '@/components/EducationSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsSection } from '@/components/SkillsSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import GallerySection from '@/components/GallerySection';
import { ResumeModal } from '@/components/ResumeModal';

const Index = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection onResumeClick={() => setIsResumeModalOpen(true)} />
      <div id="about">
        <ProfessionalSummary />
      </div>
      <EducationSection />
      <div id="experience">
        <ExperienceSection onCompleteResumeClick={() => setIsResumeModalOpen(true)} />
      </div>
      <SkillsSection />
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <GallerySection />
      
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default Index;