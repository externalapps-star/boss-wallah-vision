import { useState, useEffect } from 'react';
import { Download, BookOpen, Phone, Play, Star, Users, Briefcase } from 'lucide-react';
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent-light/10">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent to-primary rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span className="font-medium">4.8/5 Rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 text-primary" />
                <span className="font-medium">10K+ Entrepreneurs</span>
              </div>
              <div className="flex items-center space-x-1">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="font-medium">5K+ Businesses</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-hero font-bold text-foreground leading-tight">
                The{' '}
                <span className="text-gradient">#1 Platform</span>
                <br />
                for Launching Your Business
              </h1>
              
              <p className="subheading-premium max-w-2xl">
                Transform your entrepreneurial vision into reality with the only platform you need to go from idea to launch. Built by entrepreneurs, for entrepreneurs.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download Now
                <span className="ml-2 text-xs bg-primary-foreground/20 px-2 py-1 rounded-full">
                  Free
                </span>
              </Button>
              
              <Button variant="outline" className="btn-outline-hero">
                <BookOpen className="w-5 h-5 mr-2" />
                Learn More
              </Button>
              
              <Button variant="ghost" className="btn-ghost-premium">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>

            {/* Features Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl mx-auto mb-2 flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
                <p className="text-sm font-medium">AI Planning</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl mx-auto mb-2 flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <p className="text-sm font-medium">AI Agents</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl mx-auto mb-2 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <p className="text-sm font-medium">Progress Tracking</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl mx-auto mb-2 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <p className="text-sm font-medium">AI Mentor</p>
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

              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse-glow">
                ✅ Market Research Done
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-card border border-border rounded-xl p-4 shadow-lg hover-lift">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground text-sm font-bold">AI</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Business Plan Ready</p>
                    <p className="text-xs text-muted-foreground">Generated in 5 mins</p>
                  </div>
                </div>
              </div>

              {/* App Screenshot Indicators */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {appImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImage ? 'bg-primary' : 'bg-muted'
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