import { ExternalLink, Github } from 'lucide-react';
import SectionBadge from './SectionBadge';
import xcodeProject from '@/assets/xcode-project.jpg';
import nexoraProject from '@/assets/nexora-project.jpg';

const ProjectsSection = () => {
  // Easy to modify project data - just update these objects with your project details
  const projects = [
    {
      id: 1,
      title: 'XCODE',
      description: 'A modern and stylish developer-focused landing page built using React, Tailwind CSS, and Spline for 3D elements',
      image: xcodeProject,
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      links: {
        github: 'https://github.com/yourusername/xcode', // Update with your GitHub link
        live: 'https://your-xcode-demo.com' // Update with your live demo link
      }
    },
    {
      id: 2,
      title: 'Nexora',
      description: 'Nexora is a modern, responsive web application built with React, Vite, and Tailwind CSS. It aims to deliver a clean UI, fast performance.',
      image: nexoraProject,
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      links: {
        github: 'https://github.com/yourusername/nexora', // Update with your GitHub link
        live: 'https://your-nexora-demo.com' // Update with your live demo link
      }
    }
  ];

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'React': 'text-cyan-400',
      'Tailwind CSS': 'text-teal-400',
      'JavaScript': 'text-yellow-400',
      'Node.js': 'text-green-400',
      'TypeScript': 'text-blue-400',
    };
    return colors[tech] || 'text-gray-400';
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionBadge>
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          Projects
        </SectionBadge>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-portfolio-hero-text">
          My Projects
        </h2>
        
        <p className="text-lg text-portfolio-description-text mb-12 max-w-3xl">
          Explore some of the projects I've worked on. These showcase my skills and expertise in various domains of software development.
        </p>

        <div className="space-y-16">
          {projects.map((project) => (
            <div key={project.id} className="grid md:grid-cols-2 gap-8 items-center">
              {/* Project Image */}
              <div className="relative group">
                <div className="overflow-hidden rounded-lg bg-portfolio-skill-item-bg border border-portfolio-skill-item-border">
                  <img 
                    src={project.image} 
                    alt={`${project.title} project screenshot`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-portfolio-hero-text">
                  {project.title}
                </h3>
                
                <p className="text-lg text-portfolio-description-text leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 bg-portfolio-skill-item-bg border border-portfolio-skill-item-border rounded-lg font-medium ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-portfolio-skill-item-bg border border-portfolio-skill-item-border rounded-lg text-portfolio-nav-link hover:text-portfolio-nav-link-hover hover:border-primary transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-portfolio-skill-item-bg border border-portfolio-skill-item-border rounded-lg text-portfolio-nav-link hover:text-portfolio-nav-link-hover hover:border-primary transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;