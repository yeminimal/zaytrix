
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const Services = () => {
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
                  Comprehensive <span className="text-blue-600">Business Solutions</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  From telecommunications infrastructure to digital transformation and financial management, we provide integrated solutions that drive business success.
                </p>
              </div>
              <Button 
                asChild 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold tracking-tight"
              >
                <Link to="/contact">Discuss Your Needs</Link>
              </Button>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&auto=format&fit=crop" 
                alt="Modern business technology" 
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
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" 
                    alt="Telecommunications infrastructure" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-600/20"></div>
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-tight group"
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
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop" 
                    alt="Digital technology solutions" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-orange-500/20"></div>
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
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold tracking-tight group"
                  >
                    <Link to="/services/digital-technology" className="flex items-center justify-center">
                      Explore Digital Technology
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Accounting */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 h-full">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop" 
                    alt="Professional accounting services" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-green-600/20"></div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                      Accounting
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Professional accounting services, financial management, and compliance solutions to ensure your business stays financially healthy and compliant.
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
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold tracking-tight group"
                  >
                    <Link to="/services/accounting" className="flex items-center justify-center">
                      Explore Accounting
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
      <section className="py-20 bg-gray-50">
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
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                One-Stop Solutions
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All your technology and business service needs under one roof.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Seamless Integration
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our services work together to provide cohesive business solutions.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Canadian Expertise
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Deep understanding of Canadian business regulations and practices.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
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
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Let's discuss your specific needs and create a customized solution that drives your business forward.
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
