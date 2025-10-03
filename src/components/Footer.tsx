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
    name: "Success Stories",
    href: "#testimonials"
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
        <div className="py-10 border-b border-primary-foreground/10">
          
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            
            {/* Brand Section */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold">
                  BW
                </div>
                <div>
                  <h3 className="text-xl font-bold">BOSS WALLAH</h3>
                  <p className="text-sm opacity-80">BE THE BOSS</p>
                </div>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 leading-relaxed text-sm">
                The only platform you need to launch your business. Transform your entrepreneurial vision into reality.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => <a key={index} href={social.href} aria-label={social.name} className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                    {social.icon}
                  </a>)}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-accent">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => <li key={index}>
                    <a href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>)}
              </ul>
            </div>

            {/* Legal & Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-accent">Legal & Contact</h4>
              <ul className="space-y-2 mb-6">
                {legal.map((link, index) => <li key={index}>
                    <a href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>)}
              </ul>
              
              <div className="space-y-2 text-sm text-primary-foreground/70">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>brand@bosswallah.com</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6">
          <div className="text-left">
            <p className="text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} Boss Wallah Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;