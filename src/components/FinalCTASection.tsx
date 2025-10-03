import { Button } from '@/components/ui/button';
import appStoreBadge from '@/assets/app-store-badge.png';
import googlePlayBadge from '@/assets/google-play-badge.png';
const FinalCTASection = () => {
  return <section className="section-padding bg-gradient-to-br from-primary via-accent to-primary-glow text-primary-foreground relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-10"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '2s'
    }}></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main Headline */}
          <div className="space-y-6 mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Ready to Be the <span className="text-accent-light">Boss?</span>
            </h2>
            
            <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-90 max-w-3xl mx-auto">
              Download the app and start your entrepreneurial journey today.
            </p>

            <p className="text-lg md:text-xl leading-relaxed opacity-85 max-w-3xl mx-auto">
              Join thousands of entrepreneurs worldwide who trust Boss Wallah to turn their business dreams into reality.
            </p>
          </div>

          {/* App Store Download Buttons */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute inset-0 bg-primary-foreground/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img src={googlePlayBadge} alt="Get it on Google Play" className="relative h-14 md:h-16 hover:scale-105 transition-transform duration-300 filter drop-shadow-2xl" />
              </a>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute inset-0 bg-primary-foreground/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img src={appStoreBadge} alt="Download on the App Store" className="relative h-14 md:h-16 hover:scale-105 transition-transform duration-300 filter drop-shadow-2xl" />
              </a>
            </div>

            {/* Action Buttons */}
            
          </div>
        </div>
      </div>
    </section>;
};
export default FinalCTASection;