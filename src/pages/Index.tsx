import Navigation from '@/components/Navigation';
import IntroSection from '@/components/IntroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-portfolio">
      <Navigation />
      <IntroSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Index;
