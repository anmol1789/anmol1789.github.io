import SectionBadge from './SectionBadge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'C++', color: 'text-blue-400' },
        { name: 'JavaScript', color: 'text-yellow-400' },
        { name: 'HTML', color: 'text-orange-400' },
        { name: 'CSS', color: 'text-blue-300' },
      ]
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'React', color: 'text-cyan-400' },
        { name: 'Node.js', color: 'text-green-400' },
        { name: 'Express', color: 'text-gray-400' },
        { name: 'TailwindCSS', color: 'text-teal-400' },
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', color: 'text-orange-500' },
        { name: 'GitHub', color: 'text-gray-300' },
        { name: 'VS Code', color: 'text-blue-500' },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', color: 'text-green-500' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionBadge>
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          Skills
        </SectionBadge>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-portfolio-hero-text">
          Skills I have
        </h2>
        
        <p className="text-lg text-portfolio-description-text mb-12">
          Technologies and tools I've worked with and enjoy using
        </p>

        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <span className="w-1 h-6 bg-primary rounded-full mr-3"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="px-4 py-2 bg-portfolio-skill-item-bg border border-portfolio-skill-item-border rounded-lg"
                  >
                    <span className={`font-medium ${skill.color}`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;