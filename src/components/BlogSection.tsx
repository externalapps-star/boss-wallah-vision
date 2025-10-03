import { Calendar, Clock, ArrowRight, TrendingUp, Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "How to grow Instagram from zero followers ( Step-by-step Guide)",
      excerpt: "A comprehensive step-by-step guide to growing your Instagram account from zero followers to thousands. Learn proven strategies, content creation tips, and engagement techniques that actually work.",
      author: "Boss Wallah Team",
      date: "Sep 2", 
      readTime: "8 min",
      image: "https://bosswallah.com/assets/blog-instagram-zero-followers-BLr3JTbz.png",
      popular: true
    },
    {
      title: "How to Grow Your Instagram Business Account: A Proven Strategy for 2025",
      excerpt: "Transform your Instagram business account with proven strategies for 2025. Learn about business profile optimization, content formats, posting consistency, and engagement techniques to boost your brand's reach.",
      author: "Boss Wallah Team",
      date: "Sep 7",
      readTime: "7 min", 
      image: "https://bosswallah.com/assets/blog-instagram-business-account-wIL92XWd.png",
      popular: true
    },
    {
      title: "Financial Planning for Beginners: A Simple Guide to Start in 2025", 
      excerpt: "Master the basics of financial planning with this comprehensive beginner's guide. Learn about setting financial goals, creating budgets, building emergency funds, and making smart investment decisions for a secure financial future.",
      author: "Boss Wallah Team",
      date: "Jul 28",
      readTime: "9 min",
      image: "https://bosswallah.com/assets/blog-financial-planning-guide-CI186fCo.png",
      popular: true
    },
    {
      title: "How to Save Money Daily in India: Proven Techniques That Anyone Can Follow",
      excerpt: "Discover practical money-saving techniques that work in the Indian context. From daily spending habits to smart financial decisions, learn proven methods to build wealth consistently.",
      author: "Boss Wallah Team",
      date: "Aug 28",
      readTime: "6 min",
      image: "https://bosswallah.com/assets/blog-save-money-daily-tips-DY8EPwyT.png",
      popular: false
    },
    {
      title: "Top 10 Agri Startup Ideas for Entrepreneurs in 2025",
      excerpt: "Explore profitable agriculture startup opportunities in 2025. From tech-driven solutions to modern farming business models, discover ideas with high ROI potential and scalability in India's evolving agricultural sector.",
      author: "Boss Wallah Team",
      date: "Jul 28",
      readTime: "8 min",
      image: "https://bosswallah.com/assets/blog-agriculture-business-ideas-CZIb7zrq.png",
      popular: false
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
          <h2 className="text-display font-bold text-foreground mb-6">
            Latest <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
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
                onClick={() => window.open('https://bosswallah.com/', '_blank')}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                
                <div className="relative bg-card border-2 border-primary/20 hover:border-primary/40 rounded-2xl overflow-hidden h-[420px] hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 flex flex-col">
                  <div className="relative overflow-hidden flex-shrink-0">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
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
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-foreground text-xl mb-3 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed line-clamp-3">
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
                onClick={() => window.open('https://bosswallah.com/', '_blank')}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                
                <div className="relative bg-card border-2 border-primary/20 hover:border-primary/40 rounded-2xl overflow-hidden h-[380px] hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 flex flex-col">
                  <div className="relative overflow-hidden flex-shrink-0">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
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
                  
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-foreground text-lg mb-2 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Read More Articles Button */}
        <div className="text-center mt-6 mb-8">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            Read More Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Stay Updated Section - Full Width Banner */}
        <div id="newsletter" className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-30"></div>
            <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Stay Updated</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Get the latest entrepreneurship insights and success stories delivered to your inbox
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 w-full md:w-auto md:min-w-[350px]">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl bg-card border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground placeholder:text-muted-foreground transition-all duration-300"
                  />
                  <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex-shrink-0 h-[52px]">
                    Subscribe
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;