import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionBadge from './SectionBadge';

const IntroSection = () => {
  return (
    <section id="intro" className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <SectionBadge>
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          Introduction
        </SectionBadge>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-portfolio-hero-text">
          Hi, I'm Ashwany
        </h1>
        
        <p className="text-xl md:text-2xl text-portfolio-description-text mb-8 max-w-3xl mx-auto leading-relaxed">
          A Full Stack Developer passionate about crafting seamless digital experiences
        </p>
        
        <div className="text-lg text-portfolio-description-text mb-8 max-w-2xl mx-auto">
          <p>
            I specialize in building web apps with{' '}
            <span className="text-foreground font-semibold">React, JavaScript, Tailwind CSS, Node.js</span>{' '}
            and more. Always excited to tackle new challenges where I can create value and grow as a coder. 
            Let's connect if you've got a project that could use my skills!
          </p>
        </div>
        
        <Button 
          size="lg" 
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 py-3 rounded-lg transition-all duration-200"
        >
          Resume
          <Download className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default IntroSection;