import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Footer = () => {
  const quickLinks = [{
    name: "Home",
    href: "#hero"
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
    name: "FAQ",
    href: "#faq"
  }, {
    name: "Blog",
    href: "#blog"
  }];
  const legal = [{
    name: "Privacy Policy",
    href: "#"
  }, {
    name: "Terms of Service",
    href: "#"
  }, {
    name: "Refund & Cancellation",
    href: "#"
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
        <div className="py-6 border-b border-primary-foreground/10">
          
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            
            {/* Brand Section */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                
                <div>
                  <h3 className="text-xl font-bold">BOSS WALLAH</h3>
                  <p className="text-sm opacity-80">BE THE BOSS</p>
                </div>
              </div>
              
              <p className="text-primary-foreground/80 leading-relaxed text-sm">
                The only platform you need to launch your business. Transform your entrepreneurial vision into reality.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-left mx-auto">
              <h4 className="font-semibold text-lg mb-5 text-accent">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => <li key={index}>
                    <a href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm inline-block focus:outline-none focus:text-accent focus:underline">
                      {link.name}
                    </a>
                  </li>)}
              </ul>
            </div>

            {/* Legal & Contact */}
            <div className="text-left">
              <h4 className="font-semibold text-lg mb-5 text-accent">Legal & Contact</h4>
              <ul className="space-y-3 mb-6">
                {legal.map((link, index) => <li key={index}>
                    <a href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm inline-block focus:outline-none focus:text-accent focus:underline">
                      {link.name}
                    </a>
                  </li>)}
              </ul>
              
              <div className="space-y-2 text-sm text-primary-foreground/70">
                <a href="mailto:brand@bosswallah.com" className="flex items-center justify-start space-x-2 hover:text-accent transition-colors focus:outline-none focus:text-accent">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>brand@bosswallah.com</span>
                </a>
                
                <a href="tel:+1234567890" className="flex items-center justify-start space-x-2 hover:text-accent transition-colors focus:outline-none focus:text-accent">
                  <span>+1 (234) 567-890</span>
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
              <p className="text-sm text-primary-foreground/80">
                © {new Date().getFullYear()} Boss Wallah Technologies. All rights reserved.
              </p>
              <p className="text-xs text-primary-foreground/60 mt-1">
                Built for entrepreneurs, by entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;