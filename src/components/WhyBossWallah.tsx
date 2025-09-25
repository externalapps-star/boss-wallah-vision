import { CheckCircle, Users, Target, TrendingUp } from 'lucide-react';

const WhyBossWallah = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "One Platform. Complete Journey.",
      description: "From ideation to launch, everything you need in one unified platform. No more jumping between different tools and services."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Built for Entrepreneurs, By Entrepreneurs",
      description: "Created by successful entrepreneurs who understand your journey. Every feature is designed based on real-world experience."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Proven Success Framework", 
      description: "Our methodology has helped launch over 5,000 successful businesses. Follow the path that works."
    }
  ];

  const benefits = [
    "Reduce launch time from months to weeks",
    "AI-powered guidance every step of the way", 
    "Access to proven business frameworks",
    "Real-time progress tracking and analytics",
    "Global network of successful entrepreneurs",
    "24/7 AI business mentor support"
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-display font-bold text-foreground mb-6">
            Why <span className="text-gradient">Boss Wallah?</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The complete entrepreneurial ecosystem designed to turn your business dreams into profitable reality
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="card-feature">
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-medium">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Everything You Need to{' '}
                <span className="text-gradient">Launch Successfully</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join thousands of entrepreneurs who chose Boss Wallah to transform their ideas into thriving businesses. 
                Our platform provides everything you need, when you need it.
              </p>
              
              {/* Benefits List */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
                <div className="text-3xl font-bold text-gradient mb-2">5K+</div>
                <div className="text-sm text-muted-foreground">Businesses Launched</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-success/10 to-primary/10 rounded-2xl border border-success/20">
                <div className="text-3xl font-bold text-gradient mb-2">89%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl border border-accent/20">
                <div className="text-3xl font-bold text-gradient mb-2">$12M+</div>
                <div className="text-sm text-muted-foreground">Revenue Generated</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl border border-primary/20">
                <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBossWallah;