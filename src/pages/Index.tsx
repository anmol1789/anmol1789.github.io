import Navigation from '@/components/Navigation';
import IntroSection from '@/components/IntroSection';
import SkillsSection from '@/components/SkillsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-portfolio">
      <Navigation />
      <IntroSection />
      <SkillsSection />
    </div>
  );
};

export default Index;
