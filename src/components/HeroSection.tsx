import { useState, useEffect } from 'react';
import { Download, Star, Users, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import appStoreBadge from '@/assets/app-store-badge.png';
import googlePlayBadge from '@/assets/google-play-badge.png';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const appImages = [
    '/lovable-uploads/0a198c2f-6e45-49a3-9fa0-08d99bf8fa98.png',
    '/lovable-uploads/9896e543-40e7-4d89-b24b-8e6dad8980d0.png',
    '/lovable-uploads/Screenshot_20251003-190308.png',
    '/lovable-uploads/app-bb-ai-summary-DKnAkXL3.png',
    '/lovable-uploads/app-research-learning-fzKOg9GF.png'
  ];
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen pt-20 sm:pt-24 pb-4 sm:pb-8">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-up max-w-5xl overflow-visible">
            
            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4 overflow-visible">
              <h1 className="font-bold leading-tight space-y-2 overflow-visible">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent whitespace-nowrap w-max">Ready to be the Boss?</div>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl whitespace-nowrap">
                  The <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">#1 Platform</span> for Launching Your Business
                </div>
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg text-foreground/80 max-w-3xl leading-relaxed text-justify">
                Transform your entrepreneurial vision into reality with the only platform you need to go from idea to launch. Boss Wallah empowers entrepreneurs worldwide with AI-powered tools, expert guidance, and comprehensive support every step of the way.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-semibold px-8 py-4 text-lg h-auto transition-all duration-300"
                onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Now
              </Button>
            </div>

            {/* Trust Indicators */}
            
          </div>

          {/* Right Content - App Screenshots */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:-mt-20">
            <div className="relative scale-90 sm:scale-100">
              
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