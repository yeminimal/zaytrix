import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Handshake, Zap, Flag, Shield } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const Services = () => {
  const heroRef = useInViewAnimation();
  const gridRef = useInViewAnimation();
  const advantageRef = useInViewAnimation();
  const ctaRef = useInViewAnimation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="hero-fullwidth opacity-0 relative bg-cover bg-center"
        style={{
        backgroundImage: "/Image9.webp",
       }}
      >
        <div className="hero-overlay"></div>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="hero-content space-y-8">
              <div className="space-y-4">
                <h1 className="leading-tight">
                  Comprehensive <span className="text-primary-100">Business Solutions</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  From telecommunications infrastructure to digital transformation and financial management, we provide integrated solutions that drive business success.
                </p>
              </div>
              <Button 
                asChild 
                size="lg" 
                className="cta-primary bg-white text-primary hover:bg-gray-50"
              >
                <Link to="/contact">Discuss Your Needs</Link>
              </Button>
            </div>
            {/* Right: Empty space for balance */}
            <div></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        ref={gridRef}
        className="py-20 bg-white opacity-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Our Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Three specialized divisions working together to provide comprehensive business solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Telecommunications */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 h-full">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src="/Telecomms_1.webp" 
                    alt="Professional telecommunications team" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width="800"
                    height="400"
                  />
                  <div className="absolute inset-0 bg-primary/20"></div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                      Telecommunications
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Advanced telecommunications infrastructure, network solutions, and connectivity services to keep your business connected and competitive in the digital age.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Services:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Network Infrastructure Design</li>
                      <li>• Unified Communications</li>
                      <li>• VoIP Solutions</li>
                      <li>• Network Security</li>
                    </ul>
                  </div>

                  <Button 
                    asChild 
                    className="w-full cta-primary group"
                  >
                    <Link to="/services/telecom" className="flex items-center justify-center">
                      Explore Telecommunications
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Digital Technology */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 h-full">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src="/digitechs_1.webp" 
                    alt="Digital technology team collaboration" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width="800"
                    height="400"
                  />
                  <div className="absolute inset-0 bg-primary/20"></div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                      Digital Technology
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Cutting-edge digital solutions, software development, and technology consulting to transform your business operations and customer experience.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Services:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Custom Software Development</li>
                      <li>• Digital Transformation</li>
                      <li>• Cloud Solutions</li>
                      <li>• IT Consulting</li>
                    </ul>
                  </div>

                  <Button 
                    asChild 
                    className="w-full cta-primary group"
                  >
                    <Link to="/services/digital-technology" className="flex items-center justify-center">
                      Explore Digital Technology
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Management */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 h-full">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src="/mnmgmts_1.webp" 
                    alt="Professional management team" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width="800"
                    height="400"
                  />
                  <div className="absolute inset-0 bg-primary/20"></div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                      Management
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Professional management services, financial solutions, and compliance management to ensure your business stays financially healthy and compliant.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Services:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Financial Reporting</li>
                      <li>• Tax Preparation & Planning</li>
                      <li>• Bookkeeping Services</li>
                      <li>• Compliance Management</li>
                    </ul>
                  </div>

                  <Button 
                    asChild 
                    className="w-full cta-primary group"
                  >
                    <Link to="/services/accounting" className="flex items-center justify-center">
                      Explore Management
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Integrated Approach */}
      <section
        ref={advantageRef}
        className="py-20 bg-gray-50 opacity-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              The Zaytrix Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our integrated approach ensures seamless coordination across all your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Handshake className="w-8 h-8 text-primary" aria-label="One-stop solutions icon" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                One-Stop Solutions
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All your technology and business service needs under one roof.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-primary" aria-label="Seamless integration icon" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Seamless Integration
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our services work together to provide cohesive business solutions.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Flag className="w-8 h-8 text-primary" aria-label="Canadian expertise icon" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Canadian Expertise
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Deep understanding of Canadian business regulations and practices.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-primary" aria-label="Proven results icon" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Proven Results
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Track record of successful implementations and satisfied clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 bg-primary opacity-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
                Let's discuss your specific needs and create a customized solution that drives your business forward.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="cta-primary bg-white text-primary hover:bg-gray-50"
              >
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary font-semibold tracking-tight"
              >
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
