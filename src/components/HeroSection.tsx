import { useState, useEffect } from 'react';
import { Sparkles, Play, Star, Users, Briefcase, Rocket, Brain, Target, Zap } from 'lucide-react';
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-500 via-orange-400 to-red-400">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating Icons */}
      <div className="absolute top-32 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
          <Rocket className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: '3s' }}>
        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
          <Brain className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="absolute top-1/2 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
          <Target className="w-7 h-7 text-white" />
        </div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <div className="space-y-10 animate-slide-up">
            
            {/* Boss Wallah Brand Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Boss Wallah - Be The Boss</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                The{' '}
                <span className="bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">#1 Platform</span>
                <br />
                for Launching Your Business
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed">
                Transform your entrepreneurial vision into reality with the only platform you need to go from idea to launch. Boss Wallah empowers entrepreneurs worldwide with AI-powered tools, expert guidance, and comprehensive support every step of the way.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-4 text-lg h-auto group shadow-xl"
              >
                <Sparkles className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Get Started
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg h-auto backdrop-blur-sm"
              >
                <Play className="w-6 h-6 mr-3" />
                Learn More
              </Button>
            </div>

            {/* Key Features Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center text-white/90">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl mx-auto mb-3 flex items-center justify-center border border-white/20">
                  <span className="text-3xl">🧠</span>
                </div>
                <p className="text-sm font-medium">AI Planning</p>
              </div>
              <div className="text-center text-white/90">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl mx-auto mb-3 flex items-center justify-center border border-white/20">
                  <span className="text-3xl">🤖</span>
                </div>
                <p className="text-sm font-medium">AI Agents</p>
              </div>
              <div className="text-center text-white/90">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl mx-auto mb-3 flex items-center justify-center border border-white/20">
                  <span className="text-3xl">📊</span>
                </div>
                <p className="text-sm font-medium">Progress Tracking</p>
              </div>
              <div className="text-center text-white/90">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl mx-auto mb-3 flex items-center justify-center border border-white/20">
                  <span className="text-3xl">🎯</span>
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

              {/* Floating Success Badge */}
              <div className="absolute -top-8 -left-8 bg-green-500 text-white px-4 py-3 rounded-2xl text-sm font-medium shadow-xl animate-pulse-glow border border-green-400/30">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>AI Analysis Complete</span>
                </div>
              </div>
              
              {/* Business Plan Ready Card */}
              <div className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-sm border border-white/40 rounded-2xl p-4 shadow-2xl hover-lift">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-bold">AI</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">Business Plan Ready</p>
                    <p className="text-xs text-gray-600">Generated in 5 minutes</p>
                  </div>
                </div>
              </div>

              {/* App Screenshot Indicators */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {appImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImage 
                        ? 'bg-white shadow-lg scale-125' 
                        : 'bg-white/40 hover:bg-white/60'
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