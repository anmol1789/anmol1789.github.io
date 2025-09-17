import Navigation from '@/components/Navigation';
import IntroSection from '@/components/IntroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-portfolio">
      <Navigation />
      <IntroSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
};

export default Index;
