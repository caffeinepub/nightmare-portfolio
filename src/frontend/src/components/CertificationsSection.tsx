import { useEffect, useRef } from 'react';
import { Award } from 'lucide-react';
import { use3DTilt } from '@/hooks/use3DTilt';

const CertificationsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const certificates = [
    {
      title: 'Web Development with AI',
      description: 'Comprehensive training including HTML, CSS, Bootstrap, DBMS, PHP, JavaScript, React and final project',
      issuer: 'Internshala',
      id: 'Intershala-WebDev-Certificate',
      image: '/assets/generated/intershala-cert.dim_800x600.png',
    },
    {
      title: 'Critical Thinking in the AI Era',
      description: 'HP LIFE course completion focusing on analytical thinking and AI literacy',
      issuer: 'HP LIFE',
      id: 'Critical Thinking in the AI Era',
      image: '/assets/generated/hp-critical-thinking-cert.dim_800x600.png',
    },
    {
      title: 'Web Development Certification',
      description: 'Additional web development certification covering modern frameworks and best practices',
      issuer: 'Cursa',
      id: 'Cursa-WebDev-Certificate',
      image: '/assets/generated/cursa-cert.dim_800x600.png',
    },
    {
      title: 'Professional Course Certificate',
      description: 'Advanced course completion in computer science fundamentals',
      issuer: 'Certified Authority',
      id: 'CAN_37971210_5058610',
      image: '/assets/generated/can-cert.dim_800x600.png',
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
    <section id="certifications" ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-12 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <CertificateCard key={index} certificate={cert} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CertificateCard = ({ certificate, index }: { certificate: any; index: number }) => {
  const { ref, style } = use3DTilt();

  return (
    <div
      ref={ref}
      style={style}
      className="glass-card rounded-xl overflow-hidden hover:shadow-neon-glow-lg transition-all duration-500 group"
    >
      <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
      </div>

      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 group-hover:shadow-neon-glow transition-all duration-300">
            <Award className="h-5 w-5 text-neon-cyan" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-neon-cyan transition-colors">
              {certificate.title}
            </h3>
            <p className="text-sm text-neon-purple font-medium">{certificate.issuer}</p>
          </div>
        </div>

        <p className="text-foreground/70 mb-4 leading-relaxed">{certificate.description}</p>

        <div className="pt-4 border-t border-neon-cyan/20">
          <p className="text-xs text-foreground/50 font-mono">{certificate.id}</p>
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;
