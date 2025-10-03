import { useState } from 'react';
import { Rocket, Mail, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingMenu from './FloatingMenu';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-lg border-b border-border">
      <div className="max-w-none px-6">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo - Extreme Left */}
          <div className="flex items-center flex-shrink-0">
            <img src="/lovable-uploads/logo-transparent.png" alt="Boss Wallah Logo" className="h-14 w-auto object-contain mix-blend-multiply dark:mix-blend-screen" />
          </div>

          {/* Mobile Tagline */}
          <div className="md:hidden flex items-center ml-2 flex-1 min-w-0">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold text-[10px] xs:text-xs whitespace-nowrap overflow-hidden text-ellipsis">
              AI-Powered Business Launch Platform
            </span>
          </div>

          {/* Center Show Stopper */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold text-sm lg:text-base xl:text-lg whitespace-nowrap">
              <Rocket className="w-4 h-4 lg:w-5 lg:h-5 text-primary animate-pulse" />
              <span>AI-Powered Business Launch Platform</span>
            </div>
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

          {/* Mobile Menu - Extreme Right */}
          <div className="md:hidden flex items-center space-x-2 flex-shrink-0">
            <Button 
              variant="outline" 
              size="sm"
              className="border-2 border-primary/30 text-foreground hover:text-primary hover:bg-primary/5 hover:border-primary transition-all duration-300 text-xs px-3"
              onClick={() => window.location.href = 'mailto:support@bosswallah.com'}
            >
              <Mail className="w-3 h-3 mr-1" />
              Contact
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 p-2"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>

        </div>
      </div>
    </nav>
    
    <FloatingMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </>
  );
};
export default Navigation;