import { Download, BookOpen, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/lovable-uploads/41d3575a-a2d8-4bd7-b01b-c5e2d999114a.png" alt="Boss Wallah Logo" className="h-12 w-auto" />
          </div>

          {/* Center Show Stopper */}
          <div className="flex-1 flex justify-center items-center">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold text-lg">
              <Rocket className="w-5 h-5 text-primary animate-pulse" />
              <span>AI-Powered Business Launch Platform</span>
            </div>
          </div>

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

    </nav>;
};
export default Navigation;