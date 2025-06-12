
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Quote } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import PageHead from "@/components/PageHead";
import { Mail, Phone, MapPin, Radio, Monitor, Calculator } from "lucide-react";

const Home = () => {
  return (
    <>
      <PageHead 
        title="Home"
        description="Zaytrix Management and Technology Group delivers comprehensive services in Telecommunications, Digital Technology, and Accounting across Canada. Innovative solutions that transform businesses."
        keywords="telecommunications, digital technology, accounting, Canadian business solutions, Zaytrix"
        canonicalUrl="https://zaytrix.com"
      />
      
      <div className="min-h-screen">
        {/* Skip to Content Link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Hero Section */}
        <HeroSection
          title="Innovating Tomorrow,"
          subtitle="Today"
          description="Zaytrix Management and Technology Group delivers comprehensive services in Telecommunications, Digital Technology, and Accounting across Canada. We help Canadian businesses thrive with innovative solutions and trusted expertise."
          primaryCTA={{
            text: "Discover Our Services",
            href: "/services"
          }}
          secondaryCTA={{
            text: "Start Your Project",
            href: "/contact"
          }}
          image={{
            src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop",
            alt: "Modern business technology workspace showcasing Zaytrix's innovative solutions"
          }}
        />

        {/* Main Content */}
        <main id="main-content">
          {/* Services Overview */}
          <section className="section-padding bg-white">
            <div className="container-custom">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-gray-900">
                  Our Core Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  We provide end-to-end solutions across three key areas to support your business growth and operational excellence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ServiceCard
                  title="Telecommunications"
                  description="Advanced telecommunications infrastructure and solutions to keep your business connected and competitive."
                  icon={<Radio className="w-12 h-12 bg-primary rounded"></div/>}
                />

                <ServiceCard
                  title="Digital Technology"
                  description="Cutting-edge digital solutions and technology services to transform your business operations and customer experience."
                  icon={<Monitor className="w-12 h-12 bg-primary rounded"></div/>}
                />

                <ServiceCard
                  title="Management"
                  description="Professional accounting services and financial management solutions to ensure compliance and growth."
                  icon={<Calculator className="w-12 h-12 bg-primary rounded"></div/>}
                />
              </div>
            </div>
          </section>

          {/* Why Zaytrix Section */}
          <section className="section-padding bg-gray-50">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" 
                    alt="Advanced technology infrastructure representing Zaytrix's capabilities" 
                    className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-gray-900">
                      Why Choose Zaytrix?
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      As a trusted Canadian company, we combine technical expertise with deep understanding of local business needs.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="icon-standard bg-primary rounded-full flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Multidisciplinary Expertise
                        </h3>
                        <p className="text-gray-600 mt-1">
                          Comprehensive solutions across telecommunications, technology, and accounting under one trusted roof.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="icon-standard bg-primary rounded-full flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Canadian Focus
                        </h3>
                        <p className="text-gray-600 mt-1">
                          Deep understanding of Canadian regulations, business practices, and market requirements.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="icon-standard bg-primary rounded-full flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Innovation & Trust
                        </h3>
                        <p className="text-gray-600 mt-1">
                          Cutting-edge solutions delivered with the reliability and trust your business deserves.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link to="/about" className="cta-primary inline-block">
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Client Testimonials */}
          <section className="section-padding bg-white">
            <div className="container-custom">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-gray-900">
                  Trusted by Leading Organizations
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  At Zaytrix Management and Technology Group, we build strong partnerships with businesses across industries, delivering customized solutions that drive success.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-gray-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <Quote className="icon-standard text-primary" />
                      <blockquote className="text-gray-700 leading-relaxed">
                        "Zaytrix's expertise in 5G network deployment and RF optimization was exceptional. Their Drive Testing and performance analysis helped us achieve optimal network performance."
                      </blockquote>
                      <div className="space-y-1">
                        <div className="font-semibold text-gray-900">Abdul Toyosi</div>
                        <div className="text-sm text-gray-600">Senior Network Engineer</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <Quote className="icon-standard text-primary" />
                      <blockquote className="text-gray-700 leading-relaxed">
                        "Their IoT Solutions transformed our smart city infrastructure. Zaytrix's team delivered practical, innovative solutions that exceeded our expectations."
                      </blockquote>
                      <div className="space-y-1">
                        <div className="font-semibold text-gray-900">John Wood</div>
                        <div className="text-sm text-gray-600">Smart City Project Manager</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <Quote className="icon-standard text-primary" />
                      <blockquote className="text-gray-700 leading-relaxed">
                        "Zaytrix's Fiber Optic Services and Site Maintenance significantly improved our network reliability. Their proactive approach reduced downtime considerably."
                      </blockquote>
                      <div className="space-y-1">
                        <div className="font-semibold text-gray-900">Greg Howthin</div>
                        <div className="text-sm text-gray-600">Infrastructure Director</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding bg-primary">
            <div className="container-custom text-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-white">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
                    Let's discuss how Zaytrix can help you achieve your goals with our comprehensive technology and business solutions.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="cta-primary bg-white text-primary hover:bg-gray-50">
                    Get Started Today
                  </Link>
                  <Link to="/services" className="cta-outline border-white text-white hover:bg-white hover:text-primary">
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
