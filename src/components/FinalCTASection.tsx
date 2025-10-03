import { Download, BookOpen, Phone, Star, Rocket, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
const FinalCTASection = () => {
  const ctaFeatures = ["Launch your business 10x faster", "AI-powered guidance every step", "Join 10K+ successful entrepreneurs", "30-day money-back guarantee"];
  return <section className="section-padding bg-gradient-to-br from-primary via-accent to-primary-glow text-primary-foreground relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-10"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '2s'
    }}></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Trust Indicators */}
          

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
          

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-accent-light hover:text-accent-foreground font-bold px-10 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <Download className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Download Now
              <span className="ml-3 bg-primary/20 px-3 py-1 rounded-full text-sm">
                Free
              </span>
            </Button>
            
            
            
            
          </div>

          {/* Social Proof */}
          

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
    </section>;
};
export default FinalCTASection;