import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import googlePlayBadge from '@/assets/google-play-transparent.png';
import appStoreBadge from '@/assets/app-store-transparent.png';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const FloatingChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm BB AI, your Boss Wallah assistant. 👋 I'm here to help you get started with the app. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const getResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Feature queries
    if (input.includes('feature') || input.includes('what can') || input.includes('what does')) {
      return "Boss Wallah has amazing features like business management, invoicing, inventory tracking, and much more! 🚀 To explore all features and start using them, download our app now. You'll find download links at the top of this page or in the app stores!";
    }
    
    // Pricing queries
    if (input.includes('price') || input.includes('cost') || input.includes('free') || input.includes('plan')) {
      return "Great question! You can check out all our pricing plans on this page. To get started with your perfect plan, simply download the app and choose what works best for you! 💰";
    }
    
    // How to start/sign up
    if (input.includes('start') || input.includes('sign up') || input.includes('register') || input.includes('account')) {
      return "Getting started is super easy! Just download the Boss Wallah app from the App Store or Google Play Store (links at the top of this page), and you can create your account right there. The whole process takes less than 2 minutes! 📱";
    }
    
    // Support/help queries
    if (input.includes('help') || input.includes('support') || input.includes('issue') || input.includes('problem')) {
      return "I'd love to help! For the best support experience and to resolve any issues quickly, please download our app where you can access our full support team and help center. You can also submit tickets directly through the app! 🆘";
    }
    
    // Business/industry specific
    if (input.includes('business') || input.includes('industry') || input.includes('company')) {
      return "Boss Wallah works perfectly for businesses of all sizes and industries! Whether you're a freelancer, small business, or growing enterprise, we've got you covered. Download the app to see how we can transform your business operations! 💼";
    }
    
    // Integration queries
    if (input.includes('integrat') || input.includes('connect') || input.includes('sync')) {
      return "Yes! Boss Wallah offers various integrations to streamline your workflow. To set up integrations and connect your tools, download the app and head to the settings. It's all managed right from your mobile device! 🔗";
    }
    
    // Data/security queries
    if (input.includes('secure') || input.includes('safe') || input.includes('data') || input.includes('privacy')) {
      return "Security is our top priority! All your data is encrypted and protected. You can review our complete security features and privacy policy within the app. Download it now to see how we keep your business data safe! 🔒";
    }
    
    // Demo/trial queries
    if (input.includes('demo') || input.includes('trial') || input.includes('test') || input.includes('try')) {
      return "Absolutely! You can try Boss Wallah risk-free. Simply download the app and start your free trial - no credit card required! Experience all the features and see why businesses love us! ✨";
    }
    
    // Default response
    return "I can help with that! For the most detailed information and to take action, I recommend downloading the Boss Wallah app. You'll find everything you need right at your fingertips, plus you can start managing your business immediately! 📲 Check the download buttons at the top of this page!";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse: Message = {
        role: 'assistant',
        content: getResponse(input)
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500);

    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 md:right-8 w-[calc(100vw-2rem)] max-w-md h-[70vh] max-h-[500px] bg-background border border-border rounded-lg shadow-2xl flex flex-col z-50 animate-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-primary to-accent">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">BB AI Assistant</h3>
                <p className="text-xs text-white/80">Always here to help</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      msg.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              ))}
              
              {/* Download CTA Card - Only show after first user message */}
              {messages.length > 1 && (
                <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-4 text-white">
                  <h4 className="font-semibold mb-2">Ready to get started?</h4>
                  <p className="text-sm mb-3 opacity-90">Download Boss Wallah now and unlock all features!</p>
                  <div className="flex flex-col gap-2">
                    <img
                      src={googlePlayBadge}
                      alt="Get it on Google Play"
                      onClick={() => window.open('https://play.google.com/store/apps/details?id=com.wealthdoctor', '_blank')}
                      className="h-10 cursor-pointer hover:opacity-80 transition-opacity"
                    />
                    <img
                      src={appStoreBadge}
                      alt="Download on the App Store"
                      onClick={() => window.open('https://apps.apple.com/us/app/boss-wallah-be-the-boss/id1445018395?ls=1', '_blank')}
                      className="h-10 cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 md:right-8 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center z-50 group"
        aria-label="Open BB AI Chat"
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" />
        )}
      </button>
    </>
  );
};

export default FloatingChatBot;
