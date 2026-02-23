import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Briefcase } from 'lucide-react';
import Scene3D from './Scene3D';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent animate-float opacity-0 transition-opacity duration-1000"
            style={{ animationDelay: '0.2s' }}
          >
            NIGHTMARE
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            CSE Student | Programmer | AI Designer
          </p>

          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Crafting innovative solutions through code and design.
              <br />
              Passionate about AI, web technologies, and creative problem-solving.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="group relative overflow-hidden bg-gradient-to-r from-neon-cyan to-neon-purple hover:shadow-neon-glow-lg transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                View Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-neon-glow transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download Resume
              </span>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-cyan/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-neon-cyan rounded-full animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
