import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const quickLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Blog", href: "#blog" }
  ];

  const resources = [
    { name: "Getting Started Guide", href: "#" },
    { name: "Business Plan Templates", href: "#" },
    { name: "AI Agent Documentation", href: "#" },
    { name: "Video Tutorials", href: "#" },
    { name: "Community Forum", href: "#" }
  ];

  const company = [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press Kit", href: "#" },
    { name: "Partner Program", href: "#" },
    { name: "Affiliate Program", href: "#" }
  ];

  const legal = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR Compliance", href: "#" },
    { name: "Security", href: "#" }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", name: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-dark text-primary-foreground">
      
      {/* Main Footer Content */}
      <div className="section-container">
        <div className="py-16 border-b border-primary-foreground/10">
          
          {/* Top Section */}
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold">
                  BW
                </div>
                <div>
                  <h3 className="text-xl font-bold">BOSS WALLAH</h3>
                  <p className="text-sm opacity-80">BE THE BOSS</p>
                </div>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                The only platform you need to launch your business. Transform your entrepreneurial vision into reality with AI-powered guidance and proven frameworks.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>hello@bosswallah.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-accent" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Global - 50+ Countries</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3 grid md:grid-cols-4 gap-8">
              
              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-lg mb-4 text-accent">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-accent transition-colors hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold text-lg mb-4 text-accent">Resources</h4>
                <ul className="space-y-3">
                  {resources.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-accent transition-colors hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-semibold text-lg mb-4 text-accent">Company</h4>
                <ul className="space-y-3">
                  {company.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-accent transition-colors hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-semibold text-lg mb-4 text-accent">Legal</h4>
                <ul className="space-y-3">
                  {legal.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-accent transition-colors hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-primary-foreground/5 rounded-2xl p-8 mb-12 border border-primary-foreground/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-accent">Stay Updated</h3>
                <p className="text-primary-foreground/80">
                  Get the latest entrepreneurship insights, platform updates, and exclusive resources delivered to your inbox.
                </p>
              </div>
              
              <div className="flex gap-3">
                <input 
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-6">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 className="font-semibold text-lg mb-6 text-accent">Connect with Us</h4>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Brand Tagline */}
            <div className="text-center md:text-left">
              <p className="text-lg font-bold text-accent mb-1">
                Boss Wallah – Be the Boss
              </p>
              <p className="text-sm text-primary-foreground/80">
                The only platform you need to launch your business.
              </p>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-primary-foreground/80">
                © {new Date().getFullYear()} Boss Wallah. All rights reserved.
              </p>
              <p className="text-xs text-primary-foreground/60 mt-1">
                Built for entrepreneurs, by entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;