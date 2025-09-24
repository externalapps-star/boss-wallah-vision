import { useState } from 'react';
import { Menu, X, Download, Phone, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="btn-ghost-premium">
              Features
            </a>
            <a href="#pricing" className="btn-ghost-premium">
              Pricing
            </a>
            <a href="#testimonials" className="btn-ghost-premium">
              Success Stories
            </a>
            <a href="#faq" className="btn-ghost-premium">
              FAQ
            </a>
            <a href="#blog" className="btn-ghost-premium">
              Blog
            </a>
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="section-container py-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="btn-ghost-premium text-left">
                Features
              </a>
              <a href="#pricing" className="btn-ghost-premium text-left">
                Pricing
              </a>
              <a href="#testimonials" className="btn-ghost-premium text-left">
                Success Stories
              </a>
              <a href="#faq" className="btn-ghost-premium text-left">
                FAQ
              </a>
              <a href="#blog" className="btn-ghost-premium text-left">
                Blog
              </a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button variant="outline" className="btn-outline-hero justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
                <Button className="btn-hero justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Download Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;