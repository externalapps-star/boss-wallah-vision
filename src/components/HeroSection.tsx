import { useState, useEffect } from 'react';
import { Play, Star, Users, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const appImages = [
    '/lovable-uploads/252f491b-dcc6-49c2-81ce-82c7542acd40.png',
    '/lovable-uploads/0a198c2f-6e45-49a3-9fa0-08d99bf8fa98.png',
    '/lovable-uploads/9896e543-40e7-4d89-b24b-8e6dad8980d0.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % appImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle Background Accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                The{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">#1 Platform</span>
                <br />
                for Launching Your Business
              </h1>
              
              <p className="text-xl lg:text-2xl text-foreground/80 max-w-2xl leading-relaxed">
                Transform your entrepreneurial vision into reality with the only platform you need to go from idea to launch. Boss Wallah empowers entrepreneurs worldwide with AI-powered tools, expert guidance, and comprehensive support every step of the way.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-semibold px-8 py-4 text-lg h-auto transition-all duration-300"
              >
                Get Started
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 text-lg h-auto transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 text-foreground/70 pt-4">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                <span className="font-medium">4.8/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span className="font-medium">50K+ Entrepreneurs</span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5" />
                <span className="font-medium">10K+ Businesses</span>
              </div>
            </div>
          </div>

          {/* Right Content - App Screenshots */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              
              {/* Phone Mockup */}
              <div className="phone-mockup animate-float">
                <div className="phone-screen">
                  <img 
                    src={appImages[currentImage]} 
                    alt="Boss Wallah App Screenshot"
                    className="w-full h-full object-cover transition-opacity duration-1000"
                  />
                </div>
              </div>

              {/* App Screenshot Indicators */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {appImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImage 
                        ? 'bg-primary shadow-lg scale-125' 
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;