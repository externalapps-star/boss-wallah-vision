import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What exactly is Boss Wallah and how does it work?",
      answer: "Boss Wallah is an AI-powered platform that guides entrepreneurs through every step of launching a business. From initial idea validation to market research, business planning, and execution tracking - our AI agents and tools provide personalized guidance. You simply input your business idea, and our platform creates a customized roadmap with actionable steps, resources, and expert advice to help you succeed."
    },
    {
      question: "How is this different from other business planning tools?",
      answer: "Unlike traditional business planning software, Boss Wallah combines AI-powered guidance with real-world entrepreneurial expertise. Our platform doesn't just help you create documents - it provides ongoing mentorship, connects you with relevant resources, tracks your progress, and adapts recommendations based on your specific industry and goals. It's like having a team of business consultants available 24/7."
    },
    {
      question: "Can beginners with no business experience use this platform?",
      answer: "Absolutely! Boss Wallah is designed specifically for first-time entrepreneurs. Our AI mentor breaks down complex business concepts into simple, actionable steps. The platform includes educational content, video tutorials, and step-by-step guides that help you learn as you build. You don't need any prior business experience - just passion for your idea."
    },
    {
      question: "What kind of AI agents are available and how do they help?",
      answer: "We have specialist AI agents for different business functions: Marketing AI (helps with branding, customer acquisition, digital marketing strategies), Finance AI (assists with budgeting, financial projections, funding strategies), Legal AI (provides guidance on business structure, compliance, contracts), and Operations AI (helps with workflow optimization, supply chain, and scaling). Each agent is trained on specific domain expertise to provide targeted advice."
    },
    {
      question: "Is my business information secure and private?",
      answer: "Yes, absolutely. We use bank-level encryption to protect all your data. Your business plans, financial information, and strategic details are completely private and never shared with third parties. We're committed to maintaining the confidentiality of your entrepreneurial journey and business ideas."
    },
    {
      question: "What if I'm not satisfied with the platform?",
      answer: "We offer a 30-day money-back guarantee on all plans. If you're not completely satisfied with Boss Wallah within the first 30 days, we'll provide a full refund, no questions asked. We're confident in our platform's ability to help you succeed, but we want you to feel secure in your investment."
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: "Yes, you can change your plan at any time. Upgrading gives you immediate access to additional features, while downgrading takes effect at your next billing cycle. Your data and progress are always preserved regardless of plan changes."
    },
    {
      question: "Do you provide support for international businesses?",
      answer: "Yes! Boss Wallah supports entrepreneurs in 50+ countries. Our AI agents are trained on international business regulations, market conditions, and cultural considerations. We provide localized guidance for different markets, currencies, and regulatory environments to help you launch successfully anywhere in the world."
    },
    {
      question: "How long does it typically take to create a complete business plan?",
      answer: "With Boss Wallah's AI assistance, most entrepreneurs complete their initial comprehensive business plan within 3-7 days. However, our platform continues to refine and update your plan as you gather more market data and feedback. The AI learns from your progress and continuously optimizes your strategy."
    },
    {
      question: "What ongoing support do I get after launching my business?",
      answer: "Boss Wallah continues supporting you post-launch with growth tracking, performance analytics, scaling strategies, and ongoing AI mentorship. Our platform evolves with your business, providing advanced tools for established entrepreneurs including market expansion guidance, team building advice, and funding preparation assistance."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-display font-bold text-foreground mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to know about Boss Wallah. Can't find what you're looking for? 
            Our support team is here to help 24/7.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-secondary/30 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                  onClick={() => toggleItem(index)}
                >
                  <span className="text-lg font-semibold text-foreground pr-8">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-6 h-6 text-primary" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-muted-foreground" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-8 pb-6 animate-slide-up">
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Support CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-medium max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our expert support team is available 24/7 to help you succeed. Get personalized answers to your specific business questions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Chat with Support
              </Button>
              <Button variant="outline" className="btn-outline-hero">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;