
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
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
                  Building <span className="text-blue-600">Trust</span> Through <span className="text-orange-500">Innovation</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Zaytrix is a Canadian company dedicated to delivering exceptional results across telecommunications, digital technology, and accounting services.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop" 
                alt="Professional business environment" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-orange-500/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Built on strong principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <Card className="border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
                      Mission
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      To empower Canadian businesses with innovative, reliable, and comprehensive solutions across telecommunications, digital technology, and accounting services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
                      Vision
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      To be Canada's most trusted multidisciplinary technology and business services partner, driving innovation and success for our clients.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
                      Values
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Excellence, integrity, innovation, and client success. We build lasting relationships through trust and exceptional service delivery.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop" 
                alt="Modern technology workspace" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                  Our Approach
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe in building long-term partnerships through understanding, innovation, and results.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                    Client-Centric Solutions
                  </h3>
                  <p className="text-gray-600">
                    Every solution is tailored to meet your specific business needs and objectives.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                    Integrated Services
                  </h3>
                  <p className="text-gray-600">
                    Our multidisciplinary approach ensures seamless integration across all your business systems.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                    Continuous Innovation
                  </h3>
                  <p className="text-gray-600">
                    We stay ahead of technology trends to provide you with future-ready solutions.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                    Canadian Expertise
                  </h3>
                  <p className="text-gray-600">
                    Deep understanding of Canadian business landscape, regulations, and opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Leadership Statement
              </h2>
              <div className="bg-gray-50 rounded-lg p-8">
                <blockquote className="text-xl text-gray-700 leading-relaxed italic">
                  "At Zaytrix, we're not just service providers – we're partners in your success. Our commitment to excellence across telecommunications, digital technology, and accounting services reflects our dedication to helping Canadian businesses thrive in an ever-evolving landscape."
                </blockquote>
                <cite className="block mt-6 text-gray-900 font-semibold not-italic">
                  — Zaytrix Leadership Team
                </cite>
              </div>
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
                Partner with Zaytrix
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Experience the difference of working with a trusted Canadian technology and business services partner.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-50 font-semibold tracking-tight"
              >
                <Link to="/contact">Start a Conversation</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold tracking-tight"
              >
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
