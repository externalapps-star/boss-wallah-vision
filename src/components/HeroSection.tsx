import { useState, useEffect } from 'react';
import { Download, Star, Users, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import storeBadges from '@/assets/store-badges.png';
import appStoreBadge from '@/assets/app-store-badge.png';
const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const appImages = ['/lovable-uploads/252f491b-dcc6-49c2-81ce-82c7542acd40.png', '/lovable-uploads/0a198c2f-6e45-49a3-9fa0-08d99bf8fa98.png', '/lovable-uploads/9896e543-40e7-4d89-b24b-8e6dad8980d0.png'];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % appImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle Background Accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="font-bold leading-tight space-y-2">
                <div className="text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ready to be the Boss?</div>
                <div className="text-3xl lg:text-4xl xl:text-5xl">
                  The <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">#1 Platform</span> for launching Your Business
                </div>
              </h1>
              
              <p className="text-xl lg:text-2xl text-foreground/80 max-w-2xl leading-relaxed text-left">
                Transform your entrepreneurial vision into reality with the only platform you need to go from idea to launch. Boss Wallah empowers entrepreneurs worldwide with AI-powered tools, expert guidance, and comprehensive support every step of the way.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-semibold px-8 py-4 text-lg h-auto transition-all duration-300">
                    <Download className="w-5 h-5 mr-2" />
                    Download Now
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="bg-popover border border-border shadow-lg rounded-xl p-0 max-w-xs overflow-hidden">
                  <div className="relative bg-popover backdrop-blur-sm">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-popover border-l border-t border-border rotate-45"></div>
                    <div className="pt-4 pb-4 px-4">
                      <div className="flex flex-col items-center space-y-2">
                        <img src={storeBadges} alt="Download from Google Play" className="w-48 h-auto cursor-pointer hover:scale-105 transition-transform duration-200" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.wealthdoctor', '_blank')} />
                        <img src={appStoreBadge} alt="Download from App Store" className="w-48 h-auto cursor-pointer hover:scale-105 transition-transform duration-200" onClick={() => window.open('https://apps.apple.com/us/app/boss-wallah-be-the-boss/id1445018395?ls=1', '_blank')} />
                      </div>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>

            {/* Trust Indicators */}
            
          </div>

          {/* Right Content - App Screenshots */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              
              {/* Phone Mockup */}
              <div className="phone-mockup animate-float">
                <div className="phone-screen">
                  <img src={appImages[currentImage]} alt="Boss Wallah App Screenshot" className="w-full h-full object-cover transition-opacity duration-1000" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;