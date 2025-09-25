import { Download, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/41d3575a-a2d8-4bd7-b01b-c5e2d999114a.png" 
              alt="Boss Wallah Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation - Now handled by FloatingMenu */}
          <div className="flex-1"></div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="btn-outline-hero">
              <BookOpen className="w-4 h-4 mr-2" />
              Learn More
            </Button>
            <Button className="btn-hero">
              <Download className="w-4 h-4 mr-2" />
              Download Now
            </Button>
          </div>

        </div>
      </div>

    </nav>
  );
};

export default Navigation;