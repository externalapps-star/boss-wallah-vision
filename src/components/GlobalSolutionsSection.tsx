import { Globe, MapPin, DollarSign, Users, Network } from 'lucide-react';

const GlobalSolutionsSection = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      emoji: <img src="/lovable-uploads/globe.png" alt="" className="w-full h-full object-contain" />,
      title: "Comprehensive coverage",
      description: "Full support ecosystem with expanding global reach"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      emoji: <img src="/lovable-uploads/pin-on-map.png" alt="" className="w-full h-full object-contain" />,
      title: "Local expertise",
      description: "Region-specific guidance and resources"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      emoji: <img src="/lovable-uploads/bag-of-money.png" alt="" className="w-full h-full object-contain" />,
      title: "Funding opportunities",
      description: "Access to local funding sources"
    },
    {
      icon: <Users className="w-6 h-6" />,
      emoji: <img src="/lovable-uploads/trust.png" alt="" className="w-full h-full object-contain" />,
      title: "Service provider network",
      description: "Connections to trusted professionals near you"
    }
  ];

  return (
    <section id="global-solutions" className="section-padding bg-background relative overflow-hidden border-b border-border/30">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>
      
      <div className="section-container relative">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-5 py-2 mb-6 border border-primary/20">
            <Network className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Global Reach</span>
          </div>
          <h2 className="text-2xl sm:text-display font-bold text-foreground mb-6 whitespace-normal sm:whitespace-nowrap">
            Global Business Launch <span className="text-gradient">Solutions</span>
          </h2>
          <div className="inline-block bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 mb-6 border border-primary/20">
            <p className="text-base sm:text-xl md:text-2xl font-semibold text-primary">
              Wherever You Are, We're There
            </p>
          </div>
          <p className="text-xs sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Boss Wallah adapts to your local market conditions, regulations, and opportunities. Our business plans are customized based on your geographic location, ensuring relevance and accuracy for your specific market.
          </p>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-3xl font-bold text-foreground mb-2">
              Growing Network of <span className="text-gradient">Support</span>
            </h3>
          </div>
          
          {/* Mobile: Horizontal Scroll | Desktop: Grid */}
          <div className="sm:hidden relative overflow-hidden py-4">
            <div className="flex gap-4 animate-scroll-mobile">
              {[...features, ...features].map((feature, index) => (
                <div 
                  key={index} 
                  className="group relative flex-shrink-0 w-[260px]"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                  
                  {/* Card */}
                  <div className="relative bg-card border border-border/40 rounded-2xl p-3 h-[140px] flex flex-col shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all duration-500 group-hover:border-primary/60">
                    {/* Icon */}
                    <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center text-lg mb-2 border border-primary/30 flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                      {feature.emoji}
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-col flex-1 min-h-0">
                      <h4 className="text-sm font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300 line-clamp-1 leading-tight">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-tight group-hover:text-foreground/90 transition-colors duration-300 line-clamp-2">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                
                {/* Card */}
                <div className="relative bg-card border border-border/40 rounded-2xl p-6 h-full shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_-15px_rgba(var(--primary-rgb),0.4)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/60">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center text-3xl mb-4 border border-primary/30 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] transition-all duration-300">
                    {feature.emoji}
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalSolutionsSection;
