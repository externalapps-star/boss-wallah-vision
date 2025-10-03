import { Target, Users } from 'lucide-react';

const WhyBossWallah = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "One Platform. Complete Journey.",
      description: "Starting a business shouldn't feel overwhelming. Boss Wallah simplifies the complex process of launching your business by providing everything you need in one integrated platform—from initial idea exploration to successful launch and beyond."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Built for Entrepreneurs, By Entrepreneurs",
      description: "Our platform is designed specifically for launching real-world, offline businesses. Whether you're opening a bakery, a salon, or a home-based business, we have the tools and expertise to guide your journey."
    }
  ];

  return (
    <section id="why-boss-wallah" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-display font-bold text-foreground mb-6">
            Why <span className="text-gradient">Boss Wallah?</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Background Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              
              {/* Main Card */}
              <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:-translate-y-2 overflow-hidden">
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary/30">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm text-justify">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBossWallah;