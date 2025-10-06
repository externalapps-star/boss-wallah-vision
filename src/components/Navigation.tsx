import { Rocket, Mail, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  onMenuToggle: () => void;
}

const Navigation = ({ onMenuToggle }: NavigationProps) => {
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-lg border-b border-border">
      <div className="max-w-none px-4 md:px-6">
        {/* Mobile: Two Row Layout */}
        <div className="md:hidden">
          {/* First Row: Logo and Buttons */}
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center flex-shrink-0">
              <img 
                src="/lovable-uploads/logo-transparent.png" 
                alt="Boss Wallah Logo" 
                className="h-12 w-auto object-contain mix-blend-multiply dark:mix-blend-screen" 
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                className="border-2 border-primary/30 text-foreground hover:text-primary hover:bg-primary/5 hover:border-primary transition-all duration-300 text-xs px-2 h-8"
                onClick={() => window.location.href = 'mailto:support@bosswallah.com'}
              >
                <Mail className="w-3 h-3" />
              </Button>
              
              <button
                onClick={onMenuToggle}
                className="p-2 rounded-lg border-2 border-primary/30 text-primary hover:bg-primary/5 hover:border-primary transition-all duration-300"
                aria-label="Toggle menu"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Second Row: Tagline */}
          <div className="flex items-center justify-center pb-2">
            <div className="flex items-center space-x-2">
              <Rocket className="w-3 h-3 text-primary animate-pulse" />
              <p className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold text-xs whitespace-nowrap">
                AI-Powered Business Launch Platform
              </p>
            </div>
          </div>
        </div>

        {/* Desktop & Tablet: Single Row Layout */}
        <div className="hidden md:flex items-center justify-between h-16 relative">
          {/* Logo - Left */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src="/lovable-uploads/logo-transparent.png" 
              alt="Boss Wallah Logo" 
              className="h-14 w-auto object-contain mix-blend-multiply dark:mix-blend-screen" 
            />
          </div>

          {/* Center Show Stopper */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold text-sm lg:text-base xl:text-lg whitespace-nowrap">
              <Rocket className="w-4 h-4 lg:w-5 lg:h-5 text-primary animate-pulse" />
              <span>AI-Powered Business Launch Platform</span>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <Button 
              variant="outline" 
              size="sm"
              className="border-2 border-primary/30 text-foreground hover:text-primary hover:bg-primary/5 hover:border-primary transition-all duration-300"
              onClick={() => window.location.href = 'mailto:support@bosswallah.com'}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>

    </nav>;
};
export default Navigation;