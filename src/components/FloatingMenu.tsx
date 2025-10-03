import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'why-boss-wallah', label: 'Why Us?', href: '#why-boss-wallah' },
  { id: 'features', label: 'Features', href: '#features' },
  { id: 'global-solutions', label: 'Global Solutions', href: '#global-solutions' },
  { id: 'success-stories', label: 'Success Stories', href: '#success-stories' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
  { id: 'blog', label: 'Blog', href: '#blog' },
  { id: 'newsletter', label: 'Newsletter', href: '#newsletter' },
  { id: 'download', label: 'Download App', href: '#download' },
];

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id) || document.querySelector(item.href),
      }));

      const scrollPosition = window.scrollY + 100; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          if (scrollPosition >= elementTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY - 80; // Account for fixed header
      window.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Floating Hamburger Button - only show when menu is closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={cn(
            "fixed left-4 sm:left-6 top-1/2 transform -translate-y-1/2 z-50 p-2 sm:p-3 rounded-full transition-all duration-300",
            "bg-transparent border-2 border-primary/30 text-primary backdrop-blur-sm",
            "hover:scale-110 hover:border-primary/50 hover:bg-primary/10 active:scale-95"
          )}
          aria-label="Toggle navigation menu"
        >
          <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sliding Menu */}
      <div
        className={cn(
          "fixed left-0 top-16 h-[calc(100vh-4rem)] w-72 sm:w-80 bg-background/95 backdrop-blur-lg border-r border-border z-40 overflow-hidden flex flex-col",
          "transform transition-transform duration-300 ease-in-out shadow-strong",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="pt-6 px-6 relative overflow-y-auto flex-1 pb-6">
          {/* Close button in top right */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-4 p-1 hover:scale-110 transition-all duration-200"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-primary" />
          </button>
          
          <nav className="space-y-1 mt-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.href)}
                className={cn(
                  "w-full text-left px-4 py-2 rounded-lg font-medium transition-all duration-200",
                  activeSection === item.id
                    ? "bg-gradient-to-r from-primary to-accent text-white border-l-4 border-white shadow-lg font-bold scale-105 transform translate-x-1"
                    : "text-foreground hover:bg-muted hover:scale-105 hover:translate-x-2 hover:text-primary"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Menu Footer */}
          <div className="fixed bottom-0 left-0 w-72 sm:w-80 pt-6 pb-4 px-6 border-t border-border bg-background/95 backdrop-blur-lg">
            <div className="text-sm text-muted-foreground">
              <div className="font-semibold text-gradient mb-2">Boss Wallah</div>
              <p>Your Business Launch Platform</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingMenu;