import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Footer = () => {
  const quickLinks = [{
    name: "Home",
    href: "#hero"
  }, {
    name: "About Us",
    href: "/about-us"
  }, {
    name: "Why Us?",
    href: "#why-boss-wallah"
  }, {
    name: "Features",
    href: "#features"
  }, {
    name: "Global Solutions",
    href: "#global-solutions"
  }, {
    name: "Success Stories",
    href: "#success-stories"
  }, {
    name: "FAQs",
    href: "#faq"
  }, {
    name: "Blog",
    href: "#blog"
  }];
  const legal = [{
    name: "Privacy Policy",
    href: "https://bosswallah.ai/privacy-policy"
  }, {
    name: "Terms of Service",
    href: "https://bosswallah.ai/terms-of-use"
  }, {
    name: "Refund & Cancellation",
    href: "https://bosswallah.ai/refund-cancellation-policy"
  }];
  const socialLinks = [{
    icon: <Facebook className="w-5 h-5" />,
    href: "#",
    name: "Facebook"
  }, {
    icon: <Twitter className="w-5 h-5" />,
    href: "#",
    name: "Twitter"
  }, {
    icon: <Instagram className="w-5 h-5" />,
    href: "#",
    name: "Instagram"
  }, {
    icon: <Linkedin className="w-5 h-5" />,
    href: "#",
    name: "LinkedIn"
  }, {
    icon: <Youtube className="w-5 h-5" />,
    href: "#",
    name: "YouTube"
  }];
  return <footer className="bg-gradient-dark text-primary-foreground">
      
      {/* Main Footer Content */}
      <div className="section-container">
        <div className="pt-6 pb-4 border-b border-primary-foreground/10">
          
          {/* Top Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-6">
            
            {/* Brand Section */}
            <div className="col-span-2 md:col-span-1 px-4 sm:px-0">
              <div className="flex items-center space-x-3 mb-4">
                
                <div>
                  <h3 className="text-base sm:text-xl font-bold">BOSS WALLAH</h3>
                  <p className="text-xs sm:text-sm opacity-80">BE THE BOSS</p>
                </div>
              </div>
              
              <p className="text-primary-foreground/80 leading-relaxed text-xs sm:text-sm">
                The only platform you need to launch your business. Transform your entrepreneurial vision into reality.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-left px-4 sm:px-0">
              <h4 className="font-semibold text-base sm:text-lg mb-5 text-accent">Quick Links</h4>
              <ul className="space-y-3 -mb-2">
                {quickLinks.map((link, index) => <li key={index}>
                    <a href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors text-xs sm:text-sm inline-block focus:outline-none focus:text-accent focus:underline">
                      {link.name}
                    </a>
                  </li>)}
              </ul>
            </div>

            {/* Legal & Contact */}
            <div className="text-left -ml-2 sm:ml-0">
              <h4 className="font-semibold text-base sm:text-lg mb-5 text-accent">Legal & Contact</h4>
              <ul className="space-y-3 mb-6">
                {legal.map((link, index) => <li key={index}>
                    <a href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors text-xs sm:text-sm inline-block focus:outline-none focus:text-accent focus:underline">
                      {link.name}
                    </a>
                  </li>)}
              </ul>
              
              <div className="space-y-2 text-xs sm:text-sm text-primary-foreground/70">
                <a href="mailto:support@bosswallah.com" className="flex items-center justify-start space-x-2 hover:text-accent transition-colors focus:outline-none focus:text-accent">
                  <Mail className="w-6 h-6 sm:w-4 sm:h-4 text-accent" />
                  <span>support@bosswallah.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-xs sm:text-sm text-primary-foreground/80">
                © {new Date().getFullYear()} Boss Wallah Technologies. All rights reserved.
              </p>
              <p className="text-[10px] sm:text-xs text-primary-foreground/60 mt-1">
                Built for entrepreneurs, by entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;