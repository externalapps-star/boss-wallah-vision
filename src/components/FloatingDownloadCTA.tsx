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
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-gradient-to-r from-primary to-accent backdrop-blur-lg border-t border-white/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-8 sm:py-10">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">
              Manage Your Business Seamlessly
            </h2>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-bold text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 h-auto shadow-2xl rounded-full transition-transform hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Boss Wallah Now
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
        </div>
      </div>
    </div>
  );
};

export default FloatingDownloadCTA;
