import { useState } from 'react';
import { Quote, ChevronDown, ChevronUp, Star, TrendingUp, Clock } from 'lucide-react';
import { Button } from './ui/button';

const SuccessStoriesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const stories = [
    {
      id: 1,
      quote: "Boss Wallah turned my bakery dream into a detailed, actionable plan. The AI agents saved me weeks of research, and the daily tracker kept me accountable. I launched successfully in just 4 months.",
      author: "Sarah Mitchell",
      business: "Sweet Dreams Bakery",
      location: "Austin, TX",
      timeToLaunch: "4 months",
      growth: "150% revenue growth",
      highlight: "AI Planning & Tracking",
      image: "👩‍🍳",
      color: "from-pink-500/20 to-orange-500/20"
    },
    {
      id: 2,
      quote: "As someone new to entrepreneurship, having an AI mentor available 24/7 was invaluable. The platform guided me through every regulatory requirement and helped me avoid costly mistakes.",
      author: "James Chen",
      business: "TechStart Solutions",
      location: "San Francisco, CA",
      timeToLaunch: "6 months",
      growth: "200+ clients",
      highlight: "24/7 AI Mentorship",
      image: "👨‍💼",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      id: 3,
      quote: "The local market insights and funding connections were game-changers. Boss Wallah connected me with the right investors and helped me craft a pitch that secured initial funding.",
      author: "Maria Rodriguez",
      business: "EcoClean Services",
      location: "Miami, FL",
      timeToLaunch: "5 months",
      growth: "$250K funding secured",
      highlight: "Funding & Network",
      image: "👩‍💼",
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      id: 4,
      quote: "Starting a restaurant felt overwhelming until Boss Wallah broke it down into manageable steps. The specialist AI agents handled everything from location analysis to menu pricing strategy.",
      author: "David Park",
      business: "Fusion Kitchen",
      location: "Seattle, WA",
      timeToLaunch: "7 months",
      growth: "4.8★ rating, 50+ reviews",
      highlight: "Complete Guidance",
      image: "👨‍🍳",
      color: "from-yellow-500/20 to-red-500/20"
    }
  ];

  const displayedStories = showAll ? stories : stories.slice(0, 2);

  return (
    <section id="success-stories" className="section-padding bg-gradient-to-b from-secondary/20 via-background to-primary/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-6 py-2 mb-6 border border-primary/20">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-sm font-semibold text-primary">Real Entrepreneurs, Real Results</span>
          </div>
          <h2 className="text-display font-bold text-foreground mb-6">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of entrepreneurs who transformed their dreams into thriving businesses
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {displayedStories.map((story, index) => (
            <div 
              key={story.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-700 animate-gradient"></div>
              
              {/* Main card */}
              <div className="relative bg-card border border-border/40 rounded-3xl p-8 h-full shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_25px_70px_-20px_rgba(var(--primary-rgb),0.5)] transition-all duration-700 group-hover:-translate-y-2">
                
                {/* Quote icon */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <Quote className="w-8 h-8 text-primary-foreground" fill="currentColor" />
                </div>

                {/* Story content */}
                <div className="relative">
                  {/* Quote text */}
                  <blockquote className="text-foreground/90 text-lg leading-relaxed mb-8 pt-4 italic group-hover:text-foreground transition-colors duration-300">
                    "{story.quote}"
                  </blockquote>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 rounded-xl bg-primary/5 border border-primary/10 group-hover:bg-primary/10 transition-colors duration-300">
                      <Clock className="w-4 h-4 text-primary mx-auto mb-1" />
                      <p className="text-xs font-semibold text-foreground">{story.timeToLaunch}</p>
                      <p className="text-[10px] text-muted-foreground">Launch Time</p>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-accent/5 border border-accent/10 group-hover:bg-accent/10 transition-colors duration-300">
                      <TrendingUp className="w-4 h-4 text-accent mx-auto mb-1" />
                      <p className="text-xs font-semibold text-foreground">{story.growth}</p>
                      <p className="text-[10px] text-muted-foreground">Growth</p>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 group-hover:border-primary/30 transition-colors duration-300">
                      <Star className="w-4 h-4 text-primary mx-auto mb-1 fill-primary" />
                      <p className="text-xs font-semibold text-foreground">{story.highlight}</p>
                      <p className="text-[10px] text-muted-foreground">Key Feature</p>
                    </div>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full rounded-br-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {stories.length > 2 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="lg"
              className="group relative overflow-hidden border-2 border-primary/30 hover:border-primary bg-card hover:bg-primary/5 px-8 py-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_-10px_rgba(var(--primary-rgb),0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2 text-foreground font-semibold">
                {showAll ? (
                  <>
                    Show Less Stories
                    <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                  </>
                ) : (
                  <>
                    View More Success Stories
                    <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-2 border-primary/20">
            <p className="text-xl font-semibold text-foreground mb-2">
              Ready to Write Your Success Story?
            </p>
            <p className="text-muted-foreground mb-4">
              Join our community of successful entrepreneurs today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
