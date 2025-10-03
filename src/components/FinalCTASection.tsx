import { Star, CheckCircle, TrendingUp, Users } from 'lucide-react';
import appStoreBadge from '@/assets/app-store-transparent.png';
import googlePlayBadge from '@/assets/google-play-transparent.png';
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
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 fill-accent-light text-accent-light" />
            <span className="text-sm font-semibold">Trusted by 10,000+ Entrepreneurs Worldwide</span>
            <Star className="w-5 h-5 fill-accent-light text-accent-light" />
          </div>

          {/* Main Headline */}
          <div className="space-y-6 mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Ready to Be the <span className="text-accent-light">Boss?</span>
            </h2>
            
            <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-90 max-w-3xl mx-auto">
              Start your business journey today. Download Boss Wallah and get AI-powered guidance every step of the way.
            </p>
          </div>

          {/* App Store Download Buttons */}
          <div className="mb-12">
            <p className="text-lg font-semibold mb-6 opacity-90">Download now for free:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://play.google.com/store" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-primary-foreground/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img 
                  src={googlePlayBadge} 
                  alt="Get it on Google Play" 
                  className="relative h-16 md:h-20 hover:scale-105 transition-transform duration-300 filter drop-shadow-2xl"
                />
              </a>
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-primary-foreground/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img 
                  src={appStoreBadge} 
                  alt="Download on the App Store" 
                  className="relative h-16 md:h-20 hover:scale-105 transition-transform duration-300 filter drop-shadow-2xl"
                />
              </a>
            </div>
          </div>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-all duration-300">
              <TrendingUp className="w-8 h-8 mb-3 mx-auto text-accent-light" />
              <h3 className="font-bold text-lg mb-2">Launch 10x Faster</h3>
              <p className="text-sm opacity-80">AI-powered tools to accelerate your business</p>
            </div>
            <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-all duration-300">
              <CheckCircle className="w-8 h-8 mb-3 mx-auto text-accent-light" />
              <h3 className="font-bold text-lg mb-2">Step-by-Step Guidance</h3>
              <p className="text-sm opacity-80">Never feel lost with our AI mentor</p>
            </div>
            <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-all duration-300">
              <Users className="w-8 h-8 mb-3 mx-auto text-accent-light" />
              <h3 className="font-bold text-lg mb-2">Join 10K+ Entrepreneurs</h3>
              <p className="text-sm opacity-80">Be part of a thriving community</p>
            </div>
          </div>

          {/* Final Tagline */}
          <div className="mt-12 space-y-3">
            <p className="text-lg opacity-80">
              The only platform you need to launch your business.
            </p>
            <p className="text-3xl font-bold text-accent-light">
              Boss Wallah – Be the Boss.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default FinalCTASection;