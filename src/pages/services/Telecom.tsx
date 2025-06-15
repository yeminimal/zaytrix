import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Network, Phone, Shield, Wifi, Building, Zap } from "lucide-react";

const Telecom = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="hero-fullwidth"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop)` }}
      >
        <div className="hero-overlay"></div>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hero-content space-y-8">
              <div className="space-y-4">
                <h1 className="leading-tight">
                  Advanced <span className="text-primary-100">Telecommunications</span> Infrastructure
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Keep your business connected with cutting-edge telecommunications solutions designed for reliability, scalability, and performance.
                </p>
              </div>
              <Button 
                asChild 
                size="lg" 
                className="cta-primary bg-white text-primary-800 hover:bg-gray-50"
              >
                <Link to="/contact">Upgrade Your Infrastructure</Link>
              </Button>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Why Choose Our Telecommunications Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience enterprise-grade connectivity that scales with your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Network className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Reliable Network Infrastructure
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                99.9% uptime guarantee with redundant systems and 24/7 monitoring.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Enterprise Security
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Advanced encryption and security protocols to protect your communications.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Scalable Solutions
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Flexible infrastructure that grows with your business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Explicit 2x2 layout for desktop */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Our Telecommunications Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions for all your connectivity needs.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Explicit 2x2 Grid: Mobile single column, Desktop 2x2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-8">
              {/* Row 1, Col 1: VoIP Solutions */}
              <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 h-full lg:row-start-1 lg:col-start-1">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-800" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                      VoIP Solutions
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Modern voice communication systems with crystal-clear quality, advanced features, and cost-effective pricing.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• HD voice quality</li>
                    <li>• Conference calling</li>
                    <li>• Mobile integration</li>
                    <li>• Call analytics</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Row 1, Col 2: Network Infrastructure */}
              <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 h-full lg:row-start-1 lg:col-start-2">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Wifi className="w-6 h-6 text-primary-800" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                      Network Infrastructure
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Design and implementation of robust network infrastructure tailored to your business requirements.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Custom network design</li>
                    <li>• Fiber optic solutions</li>
                    <li>• Wireless networks</li>
                    <li>• Network optimization</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Row 2, Col 1: Unified Communications */}
              <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 h-full lg:row-start-2 lg:col-start-1">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-primary-800" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                      Unified Communications
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Integrate voice, video, messaging, and collaboration tools into a unified platform for seamless communication.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Video conferencing</li>
                    <li>• Instant messaging</li>
                    <li>• Screen sharing</li>
                    <li>• Mobile apps</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Row 2, Col 2: Network Security */}
              <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 h-full lg:row-start-2 lg:col-start-2">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary-800" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                      Network Security
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive security solutions to protect your network infrastructure and communications from threats.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Firewall management</li>
                    <li>• Intrusion detection</li>
                    <li>• VPN solutions</li>
                    <li>• Security monitoring</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Ready to Upgrade Your Communications?
              </h2>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how our telecommunications solutions can improve your business connectivity and efficiency.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary-800 hover:bg-gray-50 font-semibold tracking-tight"
              >
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary-800 font-semibold tracking-tight"
              >
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Telecom;
