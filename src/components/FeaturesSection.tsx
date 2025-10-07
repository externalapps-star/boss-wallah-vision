import { Rocket } from 'lucide-react';

const FeaturesSection = () => {
  const mainFeatures = [
    {
      emoji: <img src="/lovable-uploads/idea-3d.png" alt="" className="w-full h-full object-contain" />,
      title: "AI-Powered Business Planning",
      description: "Choose from hundreds of proven business ideas with detailed, customizable plans. Our AI learns about you—your location, skills, and goals—to create a personalized roadmap tailored to your market and circumstances.",
      benefits: ["Market analysis & research", "Financial projections", "Risk assessment", "Growth strategies"]
    },
    {
      emoji: <img src="/lovable-uploads/wrench-3d.png" alt="" className="w-full h-full object-contain" />,
      title: "Specialist AI Agents",
      description: "Deploy your digital workforce of AI specialists trained for specific business tasks. Need market research for your restaurant location? Want competitor analysis for your retail store? Our AI agents handle the routine work so you can focus on what matters most.",
      benefits: ["Marketing expert AI", "Finance advisor AI", "Legal consultant AI", "Operations specialist AI"]
    },
    {
      emoji: <img src="/lovable-uploads/growth-chart-3d.png" alt="" className="w-full h-full object-contain" />,
      title: "Smart Progress Tracking",
      description: "Never lose momentum with our intelligent daily tracker. See exactly what needs to be done today, understand task dependencies, and receive gentle nudges to keep your business launch on schedule.",
      benefits: ["Real-time dashboards", "Milestone tracking", "Performance analytics", "Progress insights"]
    },
    {
      emoji: <img src="/lovable-uploads/cloth-store-3d.png" alt="" className="w-full h-full object-contain" />,
      title: "AI Business Mentor",
      description: "Get instant answers from BB AI, your 24/7 business mentor trained on specialized knowledge across hundreds of business types. From regulatory questions to marketing strategies, get expert guidance whenever you need it.",
      benefits: ["24/7 availability", "Personalized advice", "Strategic guidance", "Motivational support"]
    },
    {
      emoji: <img src="/lovable-uploads/laptop-3d.png" alt="" className="w-full h-full object-contain" />,
      title: "Executive Dashboards",
      description: "Transform complexity into clarity with comprehensive analytics and reporting. Monitor your progress, track milestones, and make informed decisions with data-driven insights designed for business launches.",
      benefits: ["Business metrics", "Financial overview", "Market insights", "Growth indicators"]
    },
    {
      emoji: <img src="/lovable-uploads/document-3d.png" alt="" className="w-full h-full object-contain" />,
      title: "Learning & Support Library",
      description: "Access thousands of practical lessons from successful entrepreneurs, expert tutorials, and step-by-step guides. Get the right knowledge precisely when you need it, plus connections to trusted service providers and advisors.",
      benefits: ["Video courses", "Interactive guides", "Expert interviews", "Community forums"]
    }
  ];

  return (
    <section id="features" className="section-padding bg-secondary/20 border-b border-border/30">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-5 py-2 mb-6 border border-primary/20">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Powerful Tools</span>
          </div>
          <h2 className="text-2xl sm:text-display font-bold text-foreground mb-6">
            Platform <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xs sm:text-xl text-muted-foreground leading-relaxed">
            Powerful tools and AI-driven features designed to accelerate your entrepreneurial journey from idea to successful launch
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {mainFeatures.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 animate-gradient"></div>
              
              {/* Main Card */}
              <div className="relative bg-card backdrop-blur-sm border border-border/40 rounded-3xl p-4 sm:p-8 h-full shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_-15px_rgba(var(--primary-rgb),0.4)] transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-card/80 group-hover:border-primary/60 group-hover:shadow-[0_25px_70px_-20px_rgba(var(--primary-rgb),0.5)]">
                
                {/* Header Section */}
                <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-6">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl border border-primary/30 group-hover:scale-110 group-hover:rotate-3 group-hover:border-primary/60 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] transition-all duration-300">
                    {feature.emoji}
                  </div>
                  <div className="flex-1 pt-1 sm:pt-2">
                    <h3 className="text-base sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground mb-3 sm:mb-6 leading-relaxed text-xs sm:text-sm text-justify group-hover:text-foreground/90 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Benefits Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-border/50 group-hover:border-primary/30 transition-colors duration-300">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm group/item">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mt-1.5 flex-shrink-0 group-hover/item:scale-150 group-hover:shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)] transition-all duration-300"></div>
                      <span className="text-foreground/80 group-hover/item:text-foreground group-hover/item:font-medium transition-all duration-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;