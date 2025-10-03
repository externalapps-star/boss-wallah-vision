import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingDownloadCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA when scrolled past hero section (approximately 100vh)
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 px-4 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <Button 
        size="lg"
        className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 font-semibold px-4 sm:px-6 py-2.5 sm:py-3 h-auto shadow-xl rounded-full transition-all hover:scale-105 hover:shadow-2xl text-sm sm:text-base whitespace-nowrap"
        onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
        <span className="hidden xs:inline">Download Boss Wallah Now</span>
        <span className="xs:hidden">Download Now</span>
      </Button>
    </div>
  );
};

export default FloatingDownloadCTA;
