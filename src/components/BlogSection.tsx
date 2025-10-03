import { Calendar, Clock, ArrowRight, TrendingUp, Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Complete Guide to Validating Your Business Idea in 2024",
      excerpt: "Learn the proven framework successful entrepreneurs use to test and validate their business ideas before investing time and money.",
      author: "Sarah Chen",
      date: "Dec 15, 2024", 
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      popular: true
    },
    {
      title: "AI-Powered Market Research: How to Understand Your Customers",
      excerpt: "Discover how AI tools are revolutionizing market research and helping entrepreneurs make data-driven decisions.",
      author: "Michael Rodriguez",
      date: "Dec 12, 2024",
      readTime: "6 min", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      popular: true
    },
    {
      title: "From Idea to $100K: 5 Entrepreneurs Share Their Journey", 
      excerpt: "Real stories from Boss Wallah users who built six-figure businesses and the key lessons they learned along the way.",
      author: "Boss Wallah Team",
      date: "Dec 10, 2024",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      popular: true
    },
    {
      title: "Building Your First Business Budget: A Step-by-Step Guide",
      excerpt: "Master the art of financial planning with our comprehensive guide to creating a realistic business budget that sets you up for success.",
      author: "Jennifer Park",
      date: "Dec 8, 2024",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      popular: false
    },
    {
      title: "The Power of Networking: How to Build Meaningful Business Connections",
      excerpt: "Learn effective networking strategies that help you build authentic relationships and grow your business through genuine connections.",
      author: "David Lee",
      date: "Dec 5, 2024",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* Blog Grid - Featured + Regular Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Featured Large Card - First Post */}
          <div className="md:col-span-2 md:row-span-2 group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
            
            <div className="relative bg-card border border-border/40 rounded-2xl overflow-hidden h-full hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-foreground text-2xl mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-sm font-medium text-foreground">
                    {blogPosts[0].author}
                  </span>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary hover:bg-primary/10 group/btn -mr-2"
                  >
                    Read
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Cards - Remaining 4 Posts */}
          {blogPosts.slice(1).map((post, index) => (
            <div 
              key={index + 1}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
              
              <div className="relative bg-card border border-border/40 rounded-2xl overflow-hidden h-full hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
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
                
                <div className="p-4">
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
                  
                  <h3 className="font-bold text-foreground text-base mb-2 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-border/50">
                    <span className="text-xs font-medium text-foreground truncate">
                      {post.author}
                    </span>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:text-primary hover:bg-primary/10 group/btn -mr-2 h-8"
                    >
                      Read
                      <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stay Updated Section - Full Width Banner */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
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
                  <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex-shrink-0">
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