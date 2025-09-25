import { Download, BookOpen, Rocket, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import storeBadges from '@/assets/store-badges.png';
import appStoreBadge from '@/assets/app-store-badge.png';
const Navigation = () => {
  const {
    theme,
    setTheme
  } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-none px-6">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo - Extreme Left */}
          <div className="flex items-center flex-shrink-0">
            <img src="/lovable-uploads/41d3575a-a2d8-4bd7-b01b-c5e2d999114a.png" alt="Boss Wallah Logo" className="h-12 w-auto" />
          </div>

          {/* Center Show Stopper */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold text-lg whitespace-nowrap">
              <Rocket className="w-5 h-5 text-primary animate-pulse" />
              <span>AI-Powered Business Launch Platform</span>
            </div>
          </div>

          {/* Desktop CTA Buttons & Dark Mode Toggle - Extreme Right */}
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="btn-hero">
                  <Download className="w-4 h-4 mr-2" />
                  Download Now
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-card border-2 border-primary/20 shadow-lg rounded-xl p-0 max-w-xs overflow-hidden">
                <div className="relative bg-gradient-to-br from-background via-background/95 to-primary/5 backdrop-blur-sm">
                  {/* Chat bubble tail */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-card border-l-2 border-t-2 border-primary/20 rotate-45"></div>
                  
                  {/* Content */}
                  <div className="pt-4 pb-4 px-4">
                    <div className="flex flex-col items-center space-y-2">
                      <img 
                        src={storeBadges} 
                        alt="Download from Google Play" 
                        className="w-48 h-auto cursor-pointer hover:scale-105 transition-transform duration-200"
                        onClick={() => window.open('https://play.google.com/store', '_blank')}
                      />
                      <img 
                        src={appStoreBadge} 
                        alt="Download from App Store" 
                        className="w-48 h-auto cursor-pointer hover:scale-105 transition-transform duration-200"
                        onClick={() => window.open('https://apps.apple.com', '_blank')}
                      />
                    </div>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
            <Button variant="outline" size="sm" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 hover:bg-accent" aria-label="Toggle dark mode">
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>

          {/* Mobile Menu - Extreme Right */}
          <div className="md:hidden flex items-center space-x-2 flex-shrink-0">
            <Button variant="outline" size="sm" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2" aria-label="Toggle dark mode">
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>

        </div>
      </div>

    </nav>;
};
export default Navigation;