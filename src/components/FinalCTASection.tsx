import { Download, BookOpen, Phone, Star, Rocket, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FinalCTASection = () => {
  const ctaFeatures = [
    "Launch your business 10x faster",
    "AI-powered guidance every step",
    "Join 10K+ successful entrepreneurs",
    "30-day money-back guarantee"
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-accent to-primary-glow text-primary-foreground relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-10"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-8 mb-8 text-sm opacity-90">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-medium">4.8/5 Rating</span>
            </div>
            <div className="flex items-center space-x-1">
              <Rocket className="w-4 h-4" />
              <span className="font-medium">5K+ Launched</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="w-4 h-4" />
              <span className="font-medium">89% Success Rate</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-6 mb-12">
            <h2 className="text-hero font-bold leading-tight">
              Ready to Be the <span className="text-accent-light">Boss?</span>
            </h2>
            
            <p className="text-2xl md:text-3xl font-medium leading-relaxed opacity-90 max-w-3xl mx-auto">
              Join thousands of entrepreneurs worldwide who trust Boss Wallah to turn their business dreams into reality.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {ctaFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 justify-center md:justify-start">
                <CheckCircle className="w-6 h-6 text-accent-light flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-accent-light hover:text-accent-foreground font-bold px-10 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <Download className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Download Now
              <span className="ml-3 bg-primary/20 px-3 py-1 rounded-full text-sm">
                Free
              </span>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary font-bold px-10 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
            >
              <BookOpen className="w-6 h-6 mr-3" />
              Learn More
            </Button>
            
            <Button 
              size="lg"
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10 font-bold px-10 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-6 h-6 mr-3" />
              Contact Us
            </Button>
          </div>

          {/* Social Proof */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-accent-light mb-2">10K+</div>
                <div className="opacity-90">Entrepreneurs Trust Us</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-light mb-2">$12M+</div>
                <div className="opacity-90">Revenue Generated</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-light mb-2">50+</div>
                <div className="opacity-90">Countries Supported</div>
              </div>
            </div>
          </div>

          {/* Final Tagline */}
          <div className="mt-12">
            <p className="text-lg opacity-80 mb-4">
              The only platform you need to launch your business.
            </p>
            <p className="text-2xl font-bold text-accent-light">
              Boss Wallah – Be the Boss.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;