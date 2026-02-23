import { useEffect, useState } from 'react';

const PageLoadAnimation = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent animate-pulse">
          NIGHTMARE
        </h1>

        <div className="w-64 h-2 bg-muted/30 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink transition-all duration-300 shadow-neon-glow"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-foreground/70 text-lg">Loading portfolio...</p>
      </div>
    </div>
  );
};

export default PageLoadAnimation;
