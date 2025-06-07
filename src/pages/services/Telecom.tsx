
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Telecom = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                  Advanced <span className="text-blue-600">Telecommunications</span> Solutions
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Connect your business with robust, scalable telecommunications infrastructure designed for the modern enterprise.
                </p>
              </div>
              <Button 
                asChild 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-tight"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" 
                alt="Telecommunications infrastructure" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-orange-500/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Telecommunications Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive telecommunications solutions to keep your business connected and competitive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Network Infrastructure */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Network Infrastructure Design
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Custom network architecture planning and implementation for optimal performance and scalability.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• LAN/WAN Design & Implementation</li>
                      <li>• Network Performance Optimization</li>
                      <li>• Scalable Infrastructure Planning</li>
                      <li>• Network Monitoring & Management</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Unified Communications */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-orange-500 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Unified Communications
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Integrated communication platforms that bring together voice, video, messaging, and collaboration tools.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Voice & Video Conferencing</li>
                      <li>• Instant Messaging Integration</li>
                      <li>• Mobile Communications</li>
                      <li>• Collaboration Platforms</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* VoIP Solutions */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-600 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      VoIP Solutions
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Modern voice over IP systems that reduce costs while improving communication flexibility and features.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Cloud-Based Phone Systems</li>
                      <li>• Cost Reduction Strategies</li>
                      <li>• Advanced Call Features</li>
                      <li>• Remote Work Integration</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Network Security */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-purple-600 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Network Security
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Comprehensive security solutions to protect your telecommunications infrastructure from threats.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Firewall Configuration</li>
                      <li>• Intrusion Detection Systems</li>
                      <li>• VPN Solutions</li>
                      <li>• Security Monitoring</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Why Choose Zaytrix Telecommunications?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Proven Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Years of experience in designing and implementing telecommunications solutions for Canadian businesses.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Scalable Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Infrastructure that grows with your business, from startup to enterprise level requirements.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                24/7 Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock monitoring and support to ensure your communications stay operational.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Ready to Upgrade Your Communications?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how our telecommunications solutions can improve your business connectivity and efficiency.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-50 font-semibold tracking-tight"
              >
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold tracking-tight"
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
