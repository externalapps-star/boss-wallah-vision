import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import FloatingMenu from "@/components/FloatingMenu";
import Footer from "@/components/Footer";
import sashiReddiImage from "@/assets/sashi-reddi.png";

const AboutUs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const values = [
    {
      title: "Social impact",
      description: "We want to have a meaningful, positive impact on society"
    },
    {
      title: "Passion",
      description: "This is not a job but a chance to make a difference"
    },
    {
      title: "Integrity",
      description: "Always adhere to the highest ethical standards"
    },
    {
      title: "Excellence",
      description: "We'll strive to be world class in every way"
    },
    {
      title: "Empathy",
      description: "We show empathy and respect in every interaction"
    },
    {
      title: "Creativity & innovation",
      description: "We want our users to get access to the best ideas in the world"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation onMenuToggle={() => setIsMenuOpen(true)} />
      <FloatingMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
        onOpen={() => setIsMenuOpen(true)}
      />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-primary via-primary/90 to-accent py-14 md:py-18 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="section-container relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">
                About Boss Wallah
              </h1>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                Empowering entrepreneurs to launch and grow their businesses
              </p>
            </div>
          </div>
        </div>

        <div className="section-container py-10 md:py-14">
          {/* Mission Section */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-5 text-lg leading-relaxed">
                <p className="text-foreground/90">
                  Boss Wallah is the #1 platform for anyone looking to launch a business. This is a place to explore new business ideas, select from hundreds of detailed business plans, get the expert help you need, and then track your progress every step of the way. Boss Wallah was founded to explicitly support non-tech entrepreneurs looking to start a regular main street business like a bakery or a hair salon. Our view is that tech entrepreneurs have access to a vast amount of resources, information, funding options, and tools. Sadly, that is not true for the main street business. We intend to change that.
                </p>
                <p className="text-foreground/90">
                  While our customers may not be clued into the latest AI and SaaS tools, fortunately we are. Our platform leverages the latest advances in AI, where we work with the latest models, finetune them for our purposes and embed this intelligence into our platform so that our users get access to the very best tech there is to help them build their business. Our AI chat is trained on business domains that are of interest to our users. We search the internet to identify the best service providers who can help solve specific problems for our users. Our moonshot dream is to enable a million (yes, that's right!) entrepreneurs to launch their own business and realize their own dream.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-accent/20 hover:border-accent/40 bg-gradient-to-br from-background to-accent/5">
                  <CardContent className="p-5">
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Management Section */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Leadership
              </h2>
              <p className="text-muted-foreground text-lg">
                Meet the visionary behind Boss Wallah
              </p>
            </div>
            
            <Card className="max-w-4xl mx-auto shadow-xl border-accent/20 overflow-hidden">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 md:p-8">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative mb-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-30"></div>
                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                      <img 
                        src={sashiReddiImage} 
                        alt="Sashi Reddi - Founder & CEO" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    Sashi Reddi
                  </h3>
                  <p className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                    Founder & CEO
                  </p>
                  <p className="text-muted-foreground font-medium text-lg">
                    4X Entrepreneur
                  </p>
                </div>

                <div className="space-y-3 text-foreground/80 leading-relaxed">
                  <p>
                    Sashi Reddi is the founder and CEO of Boss Wallah.
                  </p>
                  <p>
                    Previously, Sashi was the founder and CEO of AppLabs, the world's largest independent software testing company with over 2,500 QA professionals in India, the US, and the UK. AppLabs was funded by WestBridge Capital (Sequoia Capital India). CSC (now DXC) acquired AppLabs after which Sashi set up the Big Data & Analytics business for CSC.
                  </p>
                  <p>
                    A serial entrepreneur, Sashi has started three other companies prior to AppLabs. These were EZPower Systems (web content management pioneer acquired by DocuCorp, and eventually a part of Oracle), iCoop (group purchasing dotcom), and FXLabs (leading Indian game developer acquired by Foundation 9 Entertainment, and eventually a part of Electronic Arts).
                  </p>
                  <p>
                    Sashi received his BTech in Computer Science from IIT Delhi, an MS in Computer Science from NYU, and later a PhD from The Wharton School, University of Pennsylvania.
                  </p>
                  <p>
                    Sashi Reddi is also the founder of SRI Capital, a seed stage venture capital fund that invests in US/India startups in enterprise software and deep tech.
                  </p>
                  <p>
                    Sashi runs a charitable organization, SRI Trust, that supports the educational and overall development needs of over 1125 children in three schools in Hyderabad, India.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
