import { Rocket, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-lg border-b border-border">
      <div className="max-w-none px-4 md:px-6">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo - Left */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src="/lovable-uploads/logo-transparent.png" 
              alt="Boss Wallah Logo" 
              className="h-12 md:h-14 w-auto object-contain mix-blend-multiply dark:mix-blend-screen" 
            />
          </div>

          {/* Center Show Stopper - Desktop & Tablet */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold text-sm lg:text-base xl:text-lg whitespace-nowrap">
              <Rocket className="w-4 h-4 lg:w-5 lg:h-5 text-primary animate-pulse" />
              <span>AI-Powered Business Launch Platform</span>
            </div>
          </div>

          {/* Center Tagline - Mobile Only */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:hidden">
            <p className="text-primary font-semibold text-xs whitespace-nowrap">
              #1 Business Launch Platform
            </p>
          </div>

          {/* Desktop CTA Buttons - Extreme Right */}
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
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

          {/* Mobile Contact Button - Extreme Right */}
          <div className="md:hidden flex items-center flex-shrink-0">
            <Button 
              variant="outline" 
              size="sm"
              className="border-2 border-primary/30 text-foreground hover:text-primary hover:bg-primary/5 hover:border-primary transition-all duration-300 text-xs px-2 h-8"
              onClick={() => window.location.href = 'mailto:support@bosswallah.com'}
            >
              <Mail className="w-3 h-3" />
            </Button>
          </div>

        </div>
      </div>

    </nav>;
};
export default Navigation;