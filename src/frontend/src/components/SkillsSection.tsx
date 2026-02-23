import { useEffect, useRef, useState } from 'react';
import { Code, Code2, Globe, Palette, Sparkles } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: 'C Programming', level: 90, icon: Code, color: 'from-neon-cyan to-blue-500' },
    { name: 'C++ Programming', level: 85, icon: Code2, color: 'from-neon-purple to-purple-500' },
    { name: 'Web Development', level: 80, icon: Globe, color: 'from-neon-pink to-pink-500' },
    { name: 'UI Design', level: 75, icon: Palette, color: 'from-neon-cyan to-neon-purple' },
    { name: 'AI Tools', level: 70, icon: Sparkles, color: 'from-neon-purple to-neon-pink' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-12 rounded-full" />

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:shadow-neon-glow transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} shadow-neon-glow`}>
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{skill.name}</h3>
                      <span className="text-neon-cyan font-bold">{skill.level}%</span>
                    </div>
                    <div className="relative h-3 bg-muted/30 rounded-full overflow-hidden">
                      <div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out shadow-neon-glow rounded-full`}
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
