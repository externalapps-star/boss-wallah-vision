import { useState } from 'react';
import { Search, Sparkles, Shield, Rocket, Globe, Users, Clock, MessageCircle, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const categories = [
    { id: 'getting-started', name: 'Getting Started', icon: Rocket, color: 'from-blue-500/20 to-cyan-500/20', borderColor: 'border-blue-500/30' },
    { id: 'features', name: 'Features', icon: Sparkles, color: 'from-purple-500/20 to-pink-500/20', borderColor: 'border-purple-500/30' },
    { id: 'security', name: 'Security', icon: Shield, color: 'from-green-500/20 to-emerald-500/20', borderColor: 'border-green-500/30' },
    { id: 'support', name: 'Support', icon: Users, color: 'from-red-500/20 to-rose-500/20', borderColor: 'border-red-500/30' },
  ];

  const faqs = [
    {
      category: 'getting-started',
      question: "What exactly is Boss Wallah and how does it work?",
      answer: "Boss Wallah is an AI-powered platform that guides entrepreneurs through every step of launching a business. From initial idea validation to market research, business planning, and execution tracking - our AI agents and tools provide personalized guidance.",
      icon: Rocket
    },
    {
      category: 'getting-started',
      question: "What types of businesses does Boss Wallah support?",
      answer: "Boss Wallah specializes in offline, real-world businesses across hundreds of categories including retail stores, restaurants, service businesses, manufacturing, home-based businesses, and professional services. Our focus is on helping you build tangible businesses in your local community.",
      icon: Rocket
    },
    {
      category: 'getting-started',
      question: "Can beginners with no business experience use this platform?",
      answer: "Absolutely! Boss Wallah is designed specifically for first-time entrepreneurs. Our AI mentor breaks down complex business concepts into simple, actionable steps. The platform includes educational content, video tutorials, and step-by-step guides.",
      icon: Rocket
    },
    {
      category: 'getting-started',
      question: "How long does it typically take to create a complete business plan?",
      answer: "With Boss Wallah's AI assistance, most entrepreneurs complete their initial comprehensive business plan within 3-7 days. However, our platform continues to refine and update your plan as you gather more market data and feedback.",
      icon: Clock
    },
    {
      category: 'features',
      question: "How is Boss Wallah different from using ChatGPT or other AI tools?",
      answer: "While general AI tools can generate business plans, Boss Wallah goes far beyond planning. We specialize in execution—providing task management, progress tracking, specialized AI agents, expert resources, and ongoing mentorship specifically designed for business launches. Think of us as your complete business launch operating system, not just a planning tool.",
      icon: Sparkles
    },
    {
      category: 'features',
      question: "How is this different from other business planning tools?",
      answer: "Unlike traditional business planning software, Boss Wallah combines AI-powered guidance with real-world entrepreneurial expertise. Our platform doesn't just help you create documents - it provides ongoing mentorship, connects you with relevant resources, and adapts recommendations based on your specific industry.",
      icon: Sparkles
    },
    {
      category: 'features',
      question: "What kind of AI agents are available and how do they help?",
      answer: "We have specialist AI agents for different business functions: Marketing AI, Finance AI, Legal AI, and Operations AI. Each agent is trained on specific domain expertise to provide targeted advice for branding, budgeting, compliance, and scaling.",
      icon: Sparkles
    },
    {
      category: 'features',
      question: "What can I expect in upcoming releases?",
      answer: "We're continuously enhancing the platform with: Granular task breakdown making every action item clear and manageable, Enhanced AI capabilities with more powerful and specialized AI agents, and Community features connecting entrepreneurs for networking, partnerships, and peer support.",
      icon: Sparkles
    },
    {
      category: 'security',
      question: "Is my business information secure and private?",
      answer: "Yes, absolutely. We use bank-level encryption to protect all your data. Your business plans, financial information, and strategic details are completely private and never shared with third parties. We're committed to maintaining the confidentiality of your entrepreneurial journey.",
      icon: Shield
    },
    {
      category: 'support',
      question: "Is Boss Wallah suitable for international entrepreneurs?",
      answer: "Absolutely. Boss Wallah is designed as a global platform that customizes business plans and guidance based on your location and target market. While our service provider network and funding database are most comprehensive in India currently, we're rapidly expanding to serve entrepreneurs worldwide.",
      icon: Globe
    },
    {
      category: 'support',
      question: "Do you provide support for international businesses?",
      answer: "Yes! Boss Wallah supports entrepreneurs in 50+ countries. Our AI agents are trained on international business regulations, market conditions, and cultural considerations. We provide localized guidance for different markets worldwide.",
      icon: Globe
    },
    {
      category: 'support',
      question: "What ongoing support do I get after launching my business?",
      answer: "Boss Wallah continues supporting you post-launch with growth tracking, performance analytics, scaling strategies, and ongoing AI mentorship. Our platform evolves with your business, providing advanced tools for established entrepreneurs.",
      icon: Users
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === null || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-secondary/20 via-background to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-5 py-2 mb-6 border border-primary/20">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Got Questions? We've Got Answers</span>
          </div>
          <h2 className="text-2xl sm:text-display font-bold text-foreground mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">
            Find quick answers to common questions about Boss Wallah
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-card border border-border/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground placeholder:text-muted-foreground transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg scale-105'
                : 'bg-card border border-border/40 text-muted-foreground hover:border-primary/40 hover:text-foreground'
            }`}
          >
            All Questions
          </button>
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? `bg-gradient-to-r ${cat.color} border ${cat.borderColor} text-foreground shadow-lg scale-105`
                    : 'bg-card border border-border/40 text-muted-foreground hover:border-primary/40 hover:text-foreground'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion - Traditional Expandable with Modern Design */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {filteredFaqs.map((faq, index) => {
              const Icon = faq.icon;
              const category = categories.find(c => c.id === faq.category);
              const isOpen = openItems.includes(index);
              
              return (
                <div
                  key={index}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${category?.color || 'from-primary/20 to-accent/20'} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500`}></div>
                  
                  {/* Card */}
                  <div className={`relative bg-card border ${category?.borderColor || 'border-border/40'} rounded-2xl overflow-hidden shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_-15px_rgba(var(--primary-rgb),0.4)] transition-all duration-500 group-hover:-translate-y-1`}>
                    
                    {/* Question Button */}
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full p-4 sm:p-6 text-left flex items-start gap-2 sm:gap-4 hover:bg-secondary/20 transition-colors duration-300 focus:outline-none"
                    >
                      {/* Icon badge */}
                      <div className={`flex-shrink-0 inline-flex items-center gap-2 bg-gradient-to-r ${category?.color || 'from-primary/20 to-accent/20'} rounded-full px-2 py-1 sm:px-3 sm:py-1.5 border ${category?.borderColor || 'border-primary/30'}`}>
                        <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        {/* Question */}
                        <h3 className="text-sm sm:text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-300 pr-1 sm:pr-2">
                          {faq.question}
                        </h3>
                        
                        {/* Category label */}
                        <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground mt-0.5 sm:mt-1 block">
                          {category?.name}
                        </span>
                      </div>
                      
                      {/* Expand/Collapse Icon */}
                      <div className="flex-shrink-0">
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-primary transition-transform duration-300" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300" />
                        )}
                      </div>
                    </button>
                    
                    {/* Answer - Expandable */}
                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-6 sm:pb-6 animate-accordion-down">
                        <div className="border-t border-border/50 pt-3 pl-8 sm:pt-4 sm:pl-12">
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Decorative corner */}
                    <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${category?.color || 'from-primary/10 to-transparent'} rounded-tl-full rounded-br-2xl opacity-50 pointer-events-none`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Support CTA - Redesigned */}
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-card to-card/95 backdrop-blur-sm border border-primary/20 rounded-3xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Left side - Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg rotate-6 group-hover:rotate-0 transition-transform duration-500">
                    <MessageCircle className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                
                {/* Middle - Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1">
                    Still Have Questions?
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Our expert support team is available to help you succeed
                  </p>
                </div>
                
                {/* Right - Buttons */}
                <div className="flex-shrink-0">
                  <Button 
                    className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-105 transition-all duration-300"
                    onClick={() => window.location.href = 'mailto:support@bosswallah.com'}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Us
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

export default FAQSection;