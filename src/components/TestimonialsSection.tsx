import { Star, Quote, TrendingUp, Users } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, EcoTech Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      quote: "Boss Wallah transformed my vague idea into a comprehensive business plan in just 3 days. The AI agents gave me insights I never would have discovered on my own. My eco-friendly tech startup is now generating $50K monthly revenue within 8 months of launch.",
      rating: 5,
      businessType: "Tech Startup",
      revenue: "$50K/month",
      timeToLaunch: "3 months"
    },
    {
      name: "Michael Rodriguez",
      role: "Founder, Local Harvest Co-op",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      quote: "As a first-time entrepreneur, I was completely lost. Boss Wallah's AI mentor guided me through every step, from market research to financial planning. The platform made starting my local food cooperative feel achievable. We're now serving 500+ families in our community.",
      rating: 5,
      businessType: "Social Enterprise",
      revenue: "$30K/month", 
      timeToLaunch: "4 months"
    }
  ];

  const successStats = [
    { 
      icon: <TrendingUp className="w-6 h-6" />,
      number: "89%", 
      label: "Success Rate",
      description: "of businesses launched through Boss Wallah are still operating after 2 years"
    },
    { 
      icon: <Users className="w-6 h-6" />,
      number: "10K+", 
      label: "Entrepreneurs",
      description: "have successfully launched their businesses using our platform"
    },
    { 
      icon: <Star className="w-6 h-6" />,
      number: "4.8/5", 
      label: "User Rating",
      description: "average satisfaction score from our entrepreneur community"
    }
  ];

  const industries = [
    "Technology", "E-commerce", "Food & Beverage", "Healthcare", "Education", 
    "Consulting", "Real Estate", "Manufacturing", "Creative Services", "Retail"
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-display font-bold text-foreground mb-6">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real entrepreneurs, real results. See how Boss Wallah has helped transform business ideas into thriving companies across industries.
          </p>
        </div>

        {/* Main Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-testimonial group">
              
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Business Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-sm font-semibold text-primary">{testimonial.businessType}</div>
                  <div className="text-xs text-muted-foreground">Industry</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-success">{testimonial.revenue}</div>
                  <div className="text-xs text-muted-foreground">Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-accent">{testimonial.timeToLaunch}</div>
                  <div className="text-xs text-muted-foreground">Launch Time</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-medium mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Proven <span className="text-gradient">Results</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-4 flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <h4 className="font-semibold text-foreground mb-2">{stat.label}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Served */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Successful Across <span className="text-gradient">All Industries</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {industries.map((industry, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-primary/50 transition-colors"
              >
                {industry}
              </span>
            ))}
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From tech startups to local service businesses, Boss Wallah adapts to your industry and provides specialized guidance for your unique challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;