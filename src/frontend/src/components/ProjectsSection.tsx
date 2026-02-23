import { useEffect, useRef } from 'react';
import { Code, Palette, Cpu } from 'lucide-react';
import { use3DTilt } from '@/hooks/use3DTilt';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'Web Frontend Designs',
      description: 'Modern, responsive web interfaces with cutting-edge design patterns and user experiences',
      icon: Code,
      gradient: 'from-neon-cyan to-blue-500',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'AI-Generated Graphics',
      description: 'Creative visual content leveraging AI tools for stunning digital artwork and designs',
      icon: Palette,
      gradient: 'from-neon-purple to-purple-500',
      tags: ['AI Tools', 'Design', 'Creative'],
    },
    {
      title: 'Programming Projects',
      description: 'Algorithmic solutions and system-level applications built with C and C++',
      icon: Cpu,
      gradient: 'from-neon-pink to-pink-500',
      tags: ['C', 'C++', 'Algorithms'],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-12 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const { ref, style } = use3DTilt();

  return (
    <div
      ref={ref}
      style={style}
      className="glass-card rounded-xl p-8 hover:shadow-neon-glow-lg transition-all duration-500 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
           style={{ backgroundImage: `linear-gradient(to bottom right, var(--neon-cyan), var(--neon-purple))` }} />
      
      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${project.gradient} shadow-neon-glow mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <project.icon className="h-8 w-8 text-white" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-neon-cyan transition-colors">
        {project.title}
      </h3>

      <p className="text-foreground/70 mb-6 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag: string, i: number) => (
          <span
            key={i}
            className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 text-neon-cyan border border-neon-cyan/30"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-cyan/20 to-transparent rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-500" />
    </div>
  );
};

export default ProjectsSection;
