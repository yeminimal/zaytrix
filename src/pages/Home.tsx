
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const Home = () => {
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
                  Trusted Canadian <span className="text-blue-600">Technology</span> & <span className="text-orange-500">Business Solutions</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Zaytrix delivers comprehensive services in Telecommunications, Digital Technology, and Accounting. We help Canadian businesses thrive with innovative solutions and trusted expertise.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-tight"
                >
                  <Link to="/services">Explore Services</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold tracking-tight"
                >
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop" 
                alt="Modern business technology setup" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-orange-500/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide end-to-end solutions across three key areas to support your business growth and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Telecommunications */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Telecommunications
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Advanced telecommunications infrastructure and solutions to keep your business connected and competitive.
                    </p>
                  </div>
                  <Link 
                    to="/services/telecom" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm tracking-tight group"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Digital Technology */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-orange-500 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Digital Technology
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Cutting-edge digital solutions and technology services to transform your business operations and customer experience.
                    </p>
                  </div>
                  <Link 
                    to="/services/digital-technology" 
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium text-sm tracking-tight group"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Accounting */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-600 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Accounting
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Professional accounting services and financial management solutions to ensure compliance and growth.
                    </p>
                  </div>
                  <Link 
                    to="/services/accounting" 
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm tracking-tight group"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Zaytrix Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" 
                alt="Technology infrastructure" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                  Why Choose Zaytrix?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  As a trusted Canadian company, we combine technical expertise with deep understanding of local business needs.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                      Multidisciplinary Expertise
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Comprehensive solutions across telecommunications, technology, and accounting under one trusted roof.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                      Canadian Focus
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Deep understanding of Canadian regulations, business practices, and market requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                      Innovation & Trust
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Cutting-edge solutions delivered with the reliability and trust your business deserves.
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                asChild 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-tight"
              >
                <Link to="/about">Learn About Us</Link>
              </Button>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how Zaytrix can help you achieve your goals with our comprehensive technology and business solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-50 font-semibold tracking-tight"
              >
                <Link to="/contact">Get Started Today</Link>
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

export default Home;
