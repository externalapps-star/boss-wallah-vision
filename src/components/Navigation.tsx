import { Download, BookOpen, Rocket, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import googlePlayIcon from '@/assets/google-play-transparent.png';
import appStoreIcon from '@/assets/app-store-transparent.png';
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
              <TooltipContent side="bottom" className="bg-card border-2 border-primary/20 shadow-lg rounded-xl p-4 max-w-xs">
                <div className="flex flex-col items-center space-y-3">
                  <p className="text-sm font-medium text-center text-muted-foreground">
                    Download our app from:
                  </p>
                  <div className="flex items-center space-x-4">
                    <Button 
                      variant="ghost" 
                      size="lg" 
                      className="p-3 hover:bg-accent hover:scale-105 transition-all duration-200 rounded-lg border border-border/50"
                      onClick={() => window.open('https://play.google.com/store', '_blank')}
                    >
                      <img src={googlePlayIcon} alt="Google Play" className="w-8 h-8" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="lg" 
                      className="p-3 hover:bg-accent hover:scale-105 transition-all duration-200 rounded-lg border border-border/50"
                      onClick={() => window.open('https://apps.apple.com', '_blank')}
                    >
                      <img src={appStoreIcon} alt="App Store" className="w-8 h-8" />
                    </Button>
                  </div>
                  <div className="text-xs text-muted-foreground text-center">
                    Click to visit store
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