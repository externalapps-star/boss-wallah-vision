import { Globe, MapPin, DollarSign, Users } from 'lucide-react';

const GlobalSolutionsSection = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      emoji: "🌍",
      title: "Comprehensive coverage",
      description: "Full support ecosystem with expanding global reach"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      emoji: "📍",
      title: "Local expertise",
      description: "Region-specific guidance and resources"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      emoji: "💰",
      title: "Funding opportunities",
      description: "Access to local funding sources"
    },
    {
      icon: <Users className="w-6 h-6" />,
      emoji: "🤝",
      title: "Service provider network",
      description: "Connections to trusted professionals near you"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>
      
      <div className="section-container relative">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-display font-bold text-foreground mb-4">
            Global Business Launch <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-2xl font-semibold text-primary mb-6">
            Wherever You Are, We're There
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Boss Wallah adapts to your local market conditions, regulations, and opportunities. Our business plans are customized based on your geographic location, ensuring relevance and accuracy for your specific market.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Growing Network of <span className="text-gradient">Support</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
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
