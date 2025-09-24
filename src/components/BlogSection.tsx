import { Calendar, Clock, ArrowRight, TrendingUp, Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogSection = () => {
  const featuredPosts = [
    {
      title: "The Complete Guide to Validating Your Business Idea in 2024",
      excerpt: "Learn the proven framework successful entrepreneurs use to test and validate their business ideas before investing time and money.",
      author: "Sarah Chen",
      date: "Dec 15, 2024", 
      readTime: "8 min read",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      featured: true
    },
    {
      title: "AI-Powered Market Research: How to Understand Your Customers",
      excerpt: "Discover how AI tools are revolutionizing market research and helping entrepreneurs make data-driven decisions.",
      author: "Michael Rodriguez",
      date: "Dec 12, 2024",
      readTime: "6 min read", 
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "From Idea to $100K: 5 Entrepreneurs Share Their Journey", 
      excerpt: "Real stories from Boss Wallah users who built six-figure businesses and the key lessons they learned along the way.",
      author: "Boss Wallah Team",
      date: "Dec 10, 2024",
      readTime: "12 min read",
      category: "Success Stories", 
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const categories = [
    { name: "Strategy", icon: <TrendingUp className="w-5 h-5" />, count: 24 },
    { name: "Success Stories", icon: <Users className="w-5 h-5" />, count: 18 },
    { name: "AI & Technology", icon: <Lightbulb className="w-5 h-5" />, count: 15 }
  ];

  return (
    <section id="blog" className="section-padding bg-gradient-to-b from-secondary/20 to-background">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-display font-bold text-foreground mb-6">
            Latest <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Expert advice, success stories, and the latest trends in entrepreneurship. 
            Learn from those who've been where you're going.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            
            {/* Featured Post */}
            <div className="mb-12">
              <div className="bg-card rounded-3xl overflow-hidden border border-border shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={featuredPosts[0].image} 
                    alt={featuredPosts[0].title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">
                      {featuredPosts[0].category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPosts[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPosts[0].readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                    {featuredPosts[0].title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      By {featuredPosts[0].author}
                    </span>
                    
                    <Button variant="ghost" className="btn-ghost-premium group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Recent Articles</h3>
              
              {featuredPosts.slice(1).map((post, index) => (
                <div key={index} className="card-feature group">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-40 object-cover rounded-xl"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h4>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">
                          By {post.author}
                        </span>
                        
                        <Button variant="ghost" size="sm" className="btn-ghost-premium group">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Categories */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-6">Categories</h3>
              
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group">
                    <div className="flex items-center space-x-3">
                      <div className="text-primary group-hover:scale-110 transition-transform">
                        {category.icon}
                      </div>
                      <span className="font-medium text-foreground">{category.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-primary rounded-2xl p-6 text-primary-foreground">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="mb-6 opacity-90">
                Get the latest entrepreneurship insights, success stories, and platform updates delivered to your inbox.
              </p>
              
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold">
                  Subscribe Now
                </Button>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-6">Popular Tags</h3>
              
              <div className="flex flex-wrap gap-2">
                {["Startup Tips", "AI Business", "Marketing", "Funding", "Scaling", "Leadership", "Innovation", "Growth"].map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-secondary text-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button className="btn-outline-hero">
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;