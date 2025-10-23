import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const appImages = [
    '/lovable-uploads/Screenshot_20251007-174801.png',
    '/lovable-uploads/9896e543-40e7-4d89-b24b-8e6dad8980d0.png',
    '/lovable-uploads/Screenshot_20251003-190308.png',
    '/lovable-uploads/app-bb-ai-summary-DKnAkXL3.png',
    '/lovable-uploads/Screenshot_20251007-174901.png',
    '/lovable-uploads/app-research-learning-fzKOg9GF.png'
  ];

  const rotatingTexts = [
    "Join 50,000+ entrepreneurs launching their dreams",
    "Access ₹10L+ in government subsidies & schemes",
    "Get funded in 30 days with AI-powered guidance",
    "From idea to launch in 90 days",
    "Free business planning tools & expert mentorship",
    "Discover loans with 0% interest from govt schemes"
  ];

  // Preload images in background (non-blocking)
  useEffect(() => {
    appImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % appImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prev => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle Background Accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-8 sm:pt-24 sm:pb-8">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-up max-w-5xl overflow-visible">
            
            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4 overflow-visible px-4 pt-16 sm:px-0 sm:pt-0 relative">
              <h1 className="font-bold leading-tight space-y-2 overflow-visible">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent whitespace-nowrap w-max">Ready to be the Boss?</div>
                <div className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl whitespace-nowrap flex items-center gap-2">
                  The <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">#1 Platform</span> for Launching Your Business
                </div>
              </h1>
              
              <p className="text-xs sm:text-base lg:text-lg text-foreground/80 max-w-3xl leading-relaxed text-justify">
                Transform your entrepreneurial vision into reality with the only platform you need to go from idea to launch. Boss Wallah empowers entrepreneurs worldwide with AI-powered tools, expert guidance, and comprehensive support every step of the way.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex px-4 sm:px-0">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-semibold px-8 py-4 text-lg h-auto transition-all duration-300"
                onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Now
              </Button>
            </div>

            {/* Airport-Style Dynamic Line */}
            <div className="px-4 sm:px-0 relative">
              {/* Runway Line with Lights */}
              <div className="relative flex items-center gap-2 py-4">
                {/* Left Runway Lights */}
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={`left-${i}`}
                      className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse"
                      style={{ animationDelay: `${i * 200}ms` }}
                    />
                  ))}
                </div>

                {/* Center Line with Text */}
                <div className="flex-1 relative h-10 overflow-hidden border-t border-b border-primary/30">
                  {/* Moving Background Indicator */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-[slide-in-right_3s_ease-in-out_infinite]" />
                  
                  {/* Rotating Text */}
                  <div className="relative h-full">
                    {rotatingTexts.map((text, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 flex items-center pl-4 transition-all duration-1000 ease-out ${
                          index === currentTextIndex 
                            ? 'opacity-100 translate-x-0' 
                            : index < currentTextIndex
                            ? 'opacity-0 -translate-x-8'
                            : 'opacity-0 translate-x-8'
                        }`}
                      >
                        <p className="text-sm sm:text-base lg:text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent whitespace-nowrap">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Runway Lights */}
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={`right-${i}`}
                      className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-primary animate-pulse"
                      style={{ animationDelay: `${i * 200}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - App Screenshots */}
          <div className="relative flex justify-center lg:justify-end mt-0 lg:mt-0">
            <div className="relative scale-90 sm:scale-100">
              
              {/* Phone Mockup */}
              <div className="phone-mockup animate-float relative z-30">
                {/* Crown on top of phone */}
                <div className="absolute -top-[54px] left-1/2 translate-x-[calc(-50%+140px)] w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 z-40 opacity-90 rotate-[25deg]">
                  <img src="/lovable-uploads/crown.png" alt="" className="w-full h-full object-contain drop-shadow-xl" />
                </div>
                <div className="phone-screen bg-gradient-to-br from-primary/20 to-accent/20">
                  {appImages.map((src, index) => (
                    <img 
                      key={src}
                      src={src} 
                      alt="Boss Wallah App Screenshot" 
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                        index === currentImage ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="eager"
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;