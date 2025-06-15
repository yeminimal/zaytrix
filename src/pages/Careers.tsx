import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Flag, Handshake, Heart, Home, Sparkles, Umbrella } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Software Developer",
      department: "Digital Technology",
      location: "Canada (Remote)",
      type: "Full-time",
      description: "Join our development team to build innovative digital solutions for Canadian businesses."
    },
    {
      title: "Telecommunications Engineer",
      department: "Telecommunications",
      location: "Canada (Hybrid)",
      type: "Full-time",
      description: "Design and implement advanced telecommunications infrastructure for enterprise clients."
    },
    {
      title: "Senior Accountant",
      department: "Accounting",
      location: "Canada (Remote)",
      type: "Full-time",
      description: "Provide professional accounting services and financial management for our diverse client base."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="hero-fullwidth"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop)` }}
      >
        <div className="hero-overlay"></div>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hero-content space-y-8">
              <div className="space-y-4">
                <h1 className="leading-tight">
                  Join the <span className="text-primary-100">Zaytrix</span> Team
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Build your career with Canada's leading multidisciplinary technology and business services company.
                </p>
              </div>
              <Button 
                asChild 
                size="lg" 
                className="cta-primary bg-white text-primary hover:bg-gray-50"
              >
                <Link to="#open-positions">View Open Positions</Link>
              </Button>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      {/* Why Choose Zaytrix */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Why Choose Zaytrix?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join a dynamic team that's shaping the future of Canadian business technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-gray-200 text-center">
              <CardContent className="p-8 flex flex-col items-center">
                <GraduationCap size={48} className="text-blue-600 mb-6" aria-label="Innovation Focus" />
                <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                  Innovation Focus
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Work with cutting-edge technologies and innovative solutions that make a real impact on Canadian businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 text-center">
              <CardContent className="p-8 flex flex-col items-center">
                <Sparkles size={48} className="text-orange-500 mb-6" aria-label="Career Growth" />
                <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                  Career Growth
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive professional development opportunities across multiple disciplines and specializations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 text-center">
              <CardContent className="p-8 flex flex-col items-center">
                <Heart size={48} className="text-green-600 mb-6" aria-label="Work-Life Balance" />
                <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                  Work-Life Balance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Flexible work arrangements, competitive benefits, and a supportive environment that values your well-being.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop" 
                alt="Collaborative work environment" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                  Our Culture
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Zaytrix, we foster a collaborative environment where innovation thrives and every team member contributes to our shared success.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Handshake size={24} className="text-blue-600 flex-shrink-0 mt-1" aria-label="Collaborative Excellence" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                      Collaborative Excellence
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Cross-functional teams working together to deliver exceptional results for our clients.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <GraduationCap size={24} className="text-orange-500 flex-shrink-0 mt-1" aria-label="Continuous Learning" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                      Continuous Learning
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Investment in professional development and staying current with industry trends and technologies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Flag size={24} className="text-green-600 flex-shrink-0 mt-1" aria-label="Canadian Values" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                      Canadian Values
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Embracing diversity, inclusivity, and the collaborative spirit that defines Canadian business culture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our team and help shape the future of Canadian business technology.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                    <div className="lg:col-span-2 space-y-3">
                      <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                        {position.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {position.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="text-gray-500">Department:</span>
                        <p className="font-medium text-gray-900">{position.department}</p>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-500">Location:</span>
                        <p className="font-medium text-gray-900">{position.location}</p>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-500">Type:</span>
                        <p className="font-medium text-gray-900">{position.type}</p>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button 
                        asChild 
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-tight"
                      >
                        <Link to="/contact">Apply Now</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight">
                Don't see a position that fits?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We're always looking for talented individuals to join our team. Send us your resume and let us know how you'd like to contribute.
              </p>
              <Button 
                asChild 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold tracking-tight"
              >
                <Link to="/contact">Send Your Resume</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Employee Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <Umbrella size={48} className="text-primary mx-auto" aria-label="Health & Wellness" />
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Health & Wellness
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive health coverage and wellness programs.
              </p>
            </div>
            <div className="text-center space-y-4">
              <Home size={48} className="text-primary mx-auto" aria-label="Flexible Work" />
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Flexible Work
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Remote and hybrid work options to fit your lifestyle.
              </p>
            </div>
            <div className="text-center space-y-4">
              <GraduationCap size={48} className="text-primary mx-auto" aria-label="Professional Development" />
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Professional Development
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Training, conferences, and certification support.
              </p>
            </div>
            <div className="text-center space-y-4">
              <Heart size={48} className="text-primary mx-auto" aria-label="Competitive Package" />
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Competitive Package
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Competitive salary, bonus opportunities, and benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Ready to Start Your Career with Zaytrix?
              </h2>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
                Join our team and be part of Canada's leading technology and business services company.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="cta-primary bg-white text-primary hover:bg-gray-50"
              >
                <Link to="/contact">Apply Today</Link>
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

export default Careers;
