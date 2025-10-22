import { Calendar, Clock, ArrowRight, TrendingUp, Users, Lightbulb, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const BlogSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = () => {
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Create hidden iframe if it doesn't exist
    let iframe = document.getElementById('hidden_iframe') as HTMLIFrameElement;
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = 'hidden_iframe';
      iframe.name = 'hidden_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }

    // Create form element
    const form = document.createElement('form');
    form.action = "https://script.google.com/macros/s/AKfycby7rCeqSqgzxjr2zsTezYEJF4y2cpp6T9Cc1FBhZ_u6Sm8Ib4-tnE5X9yQ4LDym5-eSCA/exec";
    form.method = 'POST';
    form.target = 'hidden_iframe';

    // Create email input
    const emailInput = document.createElement('input');
    emailInput.type = 'hidden';
    emailInput.name = 'email';
    emailInput.value = email;
    form.appendChild(emailInput);

    // Add to document and submit
    document.body.appendChild(form);
    form.submit();

    // Clean up and show success message
    setTimeout(() => {
      document.body.removeChild(form);
      setIsSubscribed(true);
      setEmail('');
      setIsSubmitting(false);
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
    }, 1000);
  };

  const blogPosts = [
    {
      title: "100 Small Business Ideas with Zero Investment for 2025",
      excerpt: "Discover 100 small business ideas with zero investment for 2025! This guide provides actionable, easy-to-understand opportunities.",
      author: "Boss Wallah Team",
      date: "Oct 17", 
      readTime: "7 min",
      image: "https://bosswallah.ai/blog/wp-content/uploads/2025/06/1280x720-small-business.webp",
      popular: true,
      url: "https://blog.bosswallah.com/100-small-business-ideas-with-zero-investment-for-2025/"
    },
    {
      title: "How to Start a Franchise Business in India? – Step-by-Step Guide (2025)",
      excerpt: "How to start a franchise business in India — step-by-step 2025 guide with costs, legal steps, funding tips, & FAQs to launch and grow your franchise.",
      author: "Boss Wallah Team",
      date: "Oct 16",
      readTime: "7 min", 
      image: "https://bosswallah.ai/blog/wp-content/uploads/2025/09/How-to-start-a-franchise-business-in-India-1-1024x576.jpg",
      popular: true,
      url: "https://blog.bosswallah.com/how-to-start-a-franchise-business-in-india-step-by-step-guide-2025/"
    },
    {
      title: "6 Best Government Subsidy Loans for Business", 
      excerpt: "Looking for a government subsidy loan for your business in India? Discover the 6 best schemes like PMMY, CGTMSE, PMEGP, and more, offering financial support for startups and SMEs. Learn about eligibility, benefits, and how to apply.",
      author: "Boss Wallah Team",
      date: "Oct 15",
      readTime: "9 min",
      image: "https://bosswallah.ai/blog/wp-content/uploads/2025/05/1280x720-government-loan-money.webp",
      popular: true,
      url: "https://blog.bosswallah.com/6-best-government-subsidy-loans-for-business/"
    },
    {
      title: "Best Bank Loans for Small Businesses in India (2025)",
      excerpt: "Explore the best bank loans for small businesses in India. Quick approval, low interest rates & minimal documents explained step-by-step",
      author: "Boss Wallah Team",
      date: "Oct 14",
      readTime: "6 min",
      image: "https://bosswallah.ai/blog/wp-content/uploads/2025/07/small-business-loan-5.jpg",
      popular: false,
      url: "https://blog.bosswallah.com/best-bank-loans-for-small-businesses-in-india-2025/"
    },
    {
      title: "AI in Marketing 2025: 7 Practical Tools Every Founder Should Use in India",
      excerpt: "Discover 7 practical AI marketing tools every founder in India should use in 2025. From automation to content creation, these tools will help you scale your marketing efforts efficiently.",
      author: "Boss Wallah Team",
      date: "Oct 14",
      readTime: "8 min",
      image: "https://bosswallah.ai/blog/wp-content/uploads/2025/09/ai-in-marketing-1.jpg",
      popular: false,
      url: "https://blog.bosswallah.com/ai-in-marketing-2025-7-practical-tools-every-founder-should-use-in-india/"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-5 py-2 mb-6 border border-primary/20">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Knowledge Hub</span>
          </div>
          <h2 className="text-2xl sm:text-display font-bold text-foreground mb-6">
            Latest <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Expert advice, success stories, and the latest trends in entrepreneurship
          </p>
        </div>

        {/* Blog Grid - 2 Cards First Row, 3 Cards Second Row */}
        <div className="space-y-5">
          {/* First Row - 2 Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.slice(0, 2).map((post, index) => (
              <div 
                key={index}
                className="group relative cursor-pointer"
                onClick={() => window.open(post.url || 'https://bosswallah.com/', '_blank')}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                
                <div className="relative bg-card border-2 border-primary/20 hover:border-primary/40 rounded-2xl overflow-hidden h-[338px] sm:h-[414px] hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 flex flex-col">
                  <div className="relative overflow-hidden flex-shrink-0">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-40 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {index === 0 && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                          Featured
                        </span>
                      </div>
                    )}
                    {post.popular && index !== 0 && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                          <TrendingUp className="w-3 h-3" />
                          Trending
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4 pb-4 sm:px-6 sm:pt-6 sm:pb-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-1.5 sm:mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-foreground text-sm sm:text-xl mb-1.5 sm:mb-3 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-4">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.slice(2, 5).map((post, index) => (
              <div 
                key={index + 2}
                className="group relative cursor-pointer"
                onClick={() => window.open(post.url || 'https://bosswallah.com/', '_blank')}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                
                <div className="relative bg-card border-2 border-primary/20 hover:border-primary/40 rounded-2xl overflow-hidden h-[332px] sm:h-[392px] hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 flex flex-col">
                  <div className="relative overflow-hidden flex-shrink-0">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {post.popular && (
                      <div className="absolute top-3 right-3">
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                          <TrendingUp className="w-3 h-3" />
                          Trending
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-3 pb-3 sm:px-5 sm:pt-5 sm:pb-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1.5 sm:mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-foreground text-sm sm:text-xl mb-1.5 sm:mb-2 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-4">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Read More Articles Button */}
        <div className="text-center mt-6 mb-[37px]">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            onClick={() => window.open('https://blog.bosswallah.com/', '_blank')}
          >
            Read More Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Stay Updated Section - Full Width Banner */}
        <div id="newsletter" className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-30"></div>
            <div className="relative bg-background/80 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-none hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 transition-all duration-300">
              {!isSubscribed ? (
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 p-2 border border-primary/30">
                      <img src="/lovable-uploads/rocket-3d.png" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-2xl font-bold text-foreground mb-2">Stay Updated</h3>
                      <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
                        Get the latest entrepreneurship insights and success stories delivered to your inbox
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 w-full md:w-auto md:min-w-[350px]">
                  <div className="flex flex-col md:flex-row gap-3">
                      <input 
                        type="email" 
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                        className="flex-1 px-4 py-2.5 md:py-3 h-11 md:h-[47px] rounded-lg md:rounded-xl bg-background border-2 border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground placeholder:text-muted-foreground transition-all duration-300 text-[14px] md:text-base"
                      />
                      <Button 
                        onClick={handleSubscribe}
                        disabled={isSubmitting}
                        size="lg"
                        className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex-shrink-0 w-36 md:w-auto mx-auto md:mx-0 h-11 md:h-auto disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Subscribing..." : "Subscribe"}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground/70 text-center md:text-left">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                    Thank You!
                  </h3>
                  <p className="text-lg text-foreground mb-4">
                    🎉 You are now subscribed to our newsletter!
                  </p>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
                    Get ready to receive the latest entrepreneurship insights, success stories, and business growth strategies delivered straight to your inbox.
                  </p>
                  <Button 
                    onClick={() => setIsSubscribed(false)}
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Subscribe Another Email
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;