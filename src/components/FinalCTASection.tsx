import { Button } from '@/components/ui/button';
import appStoreBadge from '@/assets/app-store-badge.png';
import googlePlayBadge from '@/assets/google-play-badge.png';
const FinalCTASection = () => {
  return <section id="download" className="section-padding bg-gradient-to-br from-primary via-accent to-primary-glow text-primary-foreground relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-10"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '2s'
    }}></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main Headline */}
          <div className="space-y-4 mb-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary-foreground via-accent-light to-primary-foreground bg-clip-text">
              Ready to Be the <span className="text-accent-light animate-pulse">Boss?</span>
            </h2>
            
            <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90 max-w-2xl mx-auto">
              Download the app and start your entrepreneurial journey today.
            </p>

            <p className="text-base md:text-lg leading-relaxed opacity-80 max-w-2xl mx-auto">
              Join thousands of entrepreneurs worldwide who trust Boss Wallah.
            </p>
          </div>

          {/* App Store Download Buttons */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="group relative hover-scale focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded-2xl">
                <div className="absolute inset-0 bg-primary-foreground/20 rounded-2xl blur-xl group-hover:blur-2xl group-hover:bg-primary-foreground/30 transition-all duration-300"></div>
                <img src={googlePlayBadge} alt="Get it on Google Play" className="relative h-12 md:h-14 transition-all duration-300 filter drop-shadow-2xl" />
              </a>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="group relative hover-scale focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded-2xl">
                <div className="absolute inset-0 bg-primary-foreground/20 rounded-2xl blur-xl group-hover:blur-2xl group-hover:bg-primary-foreground/30 transition-all duration-300"></div>
                <img src={appStoreBadge} alt="Download on the App Store" className="relative h-12 md:h-14 transition-all duration-300 filter drop-shadow-2xl" />
              </a>
            </div>
            
            {/* Trust Indicator */}
            <p className="text-sm opacity-70 mt-6 animate-fade-in">
              ⭐ Rated 4.8/5 by 10,000+ entrepreneurs
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default FinalCTASection;