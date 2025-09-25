import { Check, Star, Zap, Crown, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const plans = [
    {
      name: "Monthly",
      price: "$9",
      priceINR: "₹399",
      period: "/month",
      badge: "Most Flexible",
      badgeColor: "bg-accent",
      features: [
        "Complete AI Business Planning",
        "All Specialist AI Agents",
        "Smart Progress Tracking", 
        "24/7 AI Business Mentor",
        "Executive Dashboards",
        "Learning & Support Library",
        "Global Market Research",
        "Financial Planning Tools",
        "Risk Assessment Reports",
        "Growth Strategy Framework"
      ],
      cta: "Start Monthly Plan",
      popular: false
    },
    {
      name: "Annual", 
      price: "$99",
      priceINR: "₹2,499",
      period: "/year",
      badge: "Best Value - Save 17%",
      badgeColor: "bg-success",
      features: [
        "Everything in Monthly Plan",
        "Priority AI Agent Support",
        "Advanced Analytics Dashboard",
        "Exclusive Entrepreneur Network",
        "Monthly Expert Webinars",
        "1-on-1 Success Coaching Session",
        "White-label Business Reports",
        "API Access for Integrations",
        "Custom Business Templates",
        "Multi-language Support"
      ],
      cta: "Start Annual Plan",
      popular: true
    }
  ];

  const testimonialStats = [
    { number: "5K+", label: "Businesses Launched" },
    { number: "89%", label: "Success Rate" },
    { number: "$12M+", label: "Revenue Generated" }
  ];

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-display font-bold text-foreground mb-6">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Choose the perfect plan to transform your business idea into reality. 
            No hidden fees, no surprises - just everything you need to succeed.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card border-2 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-primary shadow-brand scale-105' 
                  : 'border-border shadow-medium hover:border-primary/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                    <Crown className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Badge */}
              <div className={`inline-flex items-center ${plan.badgeColor} text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6`}>
                {plan.badge}
              </div>

              {/* Plan Name & Price */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name} Plan</h3>
                <div className="flex items-baseline space-x-2 mb-2">
                  <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                  <span className="text-2xl font-bold text-muted-foreground">USD</span>
                  <span className="text-lg text-muted-foreground">{plan.period}</span>
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-primary">{plan.priceINR}</span>
                  <span className="text-lg text-muted-foreground">INR{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className={`w-full py-4 text-lg font-semibold ${
                  plan.popular ? 'btn-hero' : 'btn-outline-hero'
                }`}
              >
                {plan.cta}
              </Button>

              {/* Money-back guarantee */}
              <p className="text-center text-sm text-muted-foreground mt-4">
                30-day money-back guarantee
              </p>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="bg-card rounded-3xl p-8 border border-border shadow-medium">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Trusted by <span className="text-gradient">Entrepreneurs Worldwide</span>
            </h3>
            
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {testimonialStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Elements */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-3">
                <Check className="w-6 h-6 text-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">No Setup Fees</h4>
              <p className="text-sm text-muted-foreground">Start immediately with no hidden costs</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Instant Access</h4>
              <p className="text-sm text-muted-foreground">Full platform access in under 2 minutes</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Expert Support</h4>
              <p className="text-sm text-muted-foreground">24/7 assistance from business experts</p>
            </div>
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className="text-center mt-10">
          <p className="text-lg text-muted-foreground mb-4">
            Have questions about our plans?
          </p>
          <Button variant="outline" className="btn-outline-hero">
            View Frequently Asked Questions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;