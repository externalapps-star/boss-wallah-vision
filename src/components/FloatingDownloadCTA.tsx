import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import storeBadges from '@/assets/store-badges.png';
import appStoreBadge from '@/assets/app-store-badge.png';

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
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 font-semibold px-4 sm:px-6 py-2.5 sm:py-3 h-auto shadow-xl rounded-full transition-all hover:scale-105 hover:shadow-2xl text-sm sm:text-base whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            <span className="hidden xs:inline">Download Boss Wallah Now</span>
            <span className="xs:hidden">Download Now</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top" className="bg-popover border border-border shadow-lg rounded-xl p-0 max-w-xs overflow-hidden mb-2">
          <div className="relative bg-popover backdrop-blur-sm">
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-popover border-r border-b border-border rotate-45"></div>
            <div className="pt-4 pb-4 px-4">
              <div className="flex flex-col items-center space-y-2">
                <img 
                  src={storeBadges} 
                  alt="Download from Google Play" 
                  className="w-48 h-auto cursor-pointer hover:scale-105 transition-transform duration-200"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.wealthdoctor', '_blank')}
                />
                <img 
                  src={appStoreBadge} 
                  alt="Download from App Store" 
                  className="w-48 h-auto cursor-pointer hover:scale-105 transition-transform duration-200"
                  onClick={() => window.open('https://apps.apple.com/us/app/boss-wallah-be-the-boss/id1445018395?ls=1', '_blank')}
                />
              </div>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default FloatingDownloadCTA;
