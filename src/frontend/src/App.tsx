import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import CursorGlow from './components/CursorGlow';
import PageLoadAnimation from './components/PageLoadAnimation';
import { Toaster } from './components/ui/sonner';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Page load animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <PageLoadAnimation />}
      <div className="relative min-h-screen overflow-x-hidden">
        <CursorGlow />
        <AnimatedBackground />
        <Navigation />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <CertificationsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
