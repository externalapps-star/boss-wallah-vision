import { Brain, Bot, BarChart3, Target, TrendingUp, BookOpen, Zap, Globe, Users, Shield } from 'lucide-react';

const FeaturesSection = () => {
  const mainFeatures = [
    {
      icon: <Brain className="w-8 h-8" />,
      emoji: "🧠",
      title: "AI-Powered Business Planning",
      description: "Generate comprehensive business plans in minutes. Our AI analyzes your industry, market conditions, and creates tailored strategies for success.",
      benefits: ["Market analysis & research", "Financial projections", "Risk assessment", "Growth strategies"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      emoji: "🤖", 
      title: "Specialist AI Agents",
      description: "Get expert advice from AI agents specialized in different business areas. Each agent is trained on specific domains to provide targeted guidance.",
      benefits: ["Marketing expert AI", "Finance advisor AI", "Legal consultant AI", "Operations specialist AI"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      emoji: "📊",
      title: "Smart Progress Tracking",
      description: "Monitor your business journey with intelligent analytics. Track milestones, identify bottlenecks, and stay on course to launch.",
      benefits: ["Real-time dashboards", "Milestone tracking", "Performance analytics", "Progress insights"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      emoji: "🎯",
      title: "AI Business Mentor",
      description: "Your personal AI mentor available 24/7. Get instant answers, strategic advice, and motivation whenever you need it.",
      benefits: ["24/7 availability", "Personalized advice", "Strategic guidance", "Motivational support"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      emoji: "📈",
      title: "Executive Dashboards",
      description: "Professional dashboards that give you a complete view of your business health. Make data-driven decisions with confidence.",
      benefits: ["Business metrics", "Financial overview", "Market insights", "Growth indicators"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      emoji: "🎓",
      title: "Learning & Support Library",
      description: "Access thousands of resources, courses, and guides. Learn from successful entrepreneurs and industry experts.",
      benefits: ["Video courses", "Interactive guides", "Expert interviews", "Community forums"]
    }
  ];

  const additionalFeatures = [
    { icon: <Zap className="w-5 h-5" />, title: "Lightning Fast Setup", desc: "Get started in under 5 minutes" },
    { icon: <Globe className="w-5 h-5" />, title: "Global Support", desc: "Available in 50+ countries" },
    { icon: <Users className="w-5 h-5" />, title: "Community Network", desc: "Connect with 10K+ entrepreneurs" },
    { icon: <Shield className="w-5 h-5" />, title: "Secure & Private", desc: "Bank-level security for your data" }
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 lg:mb-12">
          <h2 className="text-display font-bold text-foreground mb-6">
            Platform <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Powerful tools and AI-driven features designed to accelerate your entrepreneurial journey from idea to successful launch
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {mainFeatures.map((feature, index) => (
            <div key={index} className="card-feature bg-card/50 backdrop-blur-sm">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground text-2xl group-hover:scale-110 transition-transform">
                  {feature.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-card rounded-3xl p-6 md:p-8 lg:p-10 border border-border shadow-medium">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Plus Many More <span className="text-gradient">Powerful Features</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Business Solutions Teaser */}
        <div className="text-center mt-8 lg:mt-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-brand">
            <Globe className="w-5 h-5" />
            <span>Global Business Launch Solutions</span>
          </div>
          <h3 className="text-3xl font-bold text-foreground mt-6 mb-4">
            Wherever You Are, <span className="text-gradient">We're There</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Growing network of support across 50+ countries with local expertise, 
            regulatory guidance, and market-specific strategies for your business launch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;