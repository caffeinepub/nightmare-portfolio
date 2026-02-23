import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'nightmare-portfolio';

  return (
    <footer className="relative py-8 border-t border-neon-cyan/20 bg-background/50 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/70 text-sm">
            © {currentYear} Nightmare. All rights reserved.
          </p>

          <p className="text-foreground/70 text-sm flex items-center gap-2">
            Built with{' '}
            <Heart className="h-4 w-4 text-neon-pink fill-neon-pink animate-pulse" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:text-neon-purple transition-colors duration-300 font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
