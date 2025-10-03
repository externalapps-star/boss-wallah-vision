import { Brain, Bot, BarChart3, Target, TrendingUp, BookOpen } from 'lucide-react';

const FeaturesSection = () => {
  const mainFeatures = [
    {
      icon: <Brain className="w-8 h-8" />,
      emoji: "🧠",
      title: "AI-Powered Business Planning",
      description: "Choose from hundreds of proven business ideas with detailed, customizable plans. Our AI learns about you—your location, skills, and goals—to create a personalized roadmap tailored to your market and circumstances.",
      benefits: ["Market analysis & research", "Financial projections", "Risk assessment", "Growth strategies"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      emoji: "🤖", 
      title: "Specialist AI Agents",
      description: "Deploy your digital workforce of AI specialists trained for specific business tasks. Need market research for your restaurant location? Want competitor analysis for your retail store? Our AI agents handle the routine work so you can focus on what matters most.",
      benefits: ["Marketing expert AI", "Finance advisor AI", "Legal consultant AI", "Operations specialist AI"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      emoji: "📊",
      title: "Smart Progress Tracking",
      description: "Never lose momentum with our intelligent daily tracker. See exactly what needs to be done today, understand task dependencies, and receive gentle nudges to keep your business launch on schedule.",
      benefits: ["Real-time dashboards", "Milestone tracking", "Performance analytics", "Progress insights"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      emoji: "🎯",
      title: "AI Business Mentor",
      description: "Get instant answers from BB AI, your 24/7 business mentor trained on specialized knowledge across hundreds of business types. From regulatory questions to marketing strategies, get expert guidance whenever you need it.",
      benefits: ["24/7 availability", "Personalized advice", "Strategic guidance", "Motivational support"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      emoji: "📈",
      title: "Executive Dashboards",
      description: "Transform complexity into clarity with comprehensive analytics and reporting. Monitor your progress, track milestones, and make informed decisions with data-driven insights designed for business launches.",
      benefits: ["Business metrics", "Financial overview", "Market insights", "Growth indicators"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      emoji: "🎓",
      title: "Learning & Support Library",
      description: "Access thousands of practical lessons from successful entrepreneurs, expert tutorials, and step-by-step guides. Get the right knowledge precisely when you need it, plus connections to trusted service providers and advisors.",
      benefits: ["Video courses", "Interactive guides", "Expert interviews", "Community forums"]
    }
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-display font-bold text-foreground mb-6">
            Platform <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Powerful tools and AI-driven features designed to accelerate your entrepreneurial journey from idea to successful launch
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {mainFeatures.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-10 group-hover:opacity-30 transition duration-300"></div>
              
              {/* Main Card */}
              <div className="relative bg-card backdrop-blur-sm border border-border/50 rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                
                {/* Header Section */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-3xl border border-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {feature.emoji}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm text-justify">
                  {feature.description}
                </p>
                
                {/* Benefits Grid */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border/50">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-sm group/item">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mt-1.5 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                      <span className="text-foreground/80 group-hover/item:text-foreground transition-colors">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features - Removed */}

        {/* Global Business Solutions Teaser - Removed */}
      </div>
    </section>
  );
};

export default FeaturesSection;