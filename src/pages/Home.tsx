import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Quote, CheckCircle, MapPin, Handshake } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import PageHead from "@/components/PageHead";
import { Mail, Phone, Radio, Monitor, Calculator } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const Home = () => {
  const servicesRef = useInViewAnimation();
  const whyRef = useInViewAnimation();
  const testimonialsRef = useInViewAnimation();
  const ctaRef = useInViewAnimation();

  return (
    <>
      <PageHead 
        title="Home"
        description="Zaytrix Management and Technology Group delivers comprehensive Telecommunications, Digital Technology, and Management services across Canada. Innovative solutions that transform businesses."
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
          description="Zaytrix Management and Technology Group delivers expert Telecommunications, Digital Technology, and Management services across Canada. We help Canadian businesses thrive with innovative solutions and trusted expertise."
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
          <section
            ref={servicesRef}
            className="section-padding bg-white opacity-0"
          >
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
                  icon={<Radio className="w-6 h-6 text-primary rounded" />}
                />

                <ServiceCard
                  title="Digital Technology"
                  description="Cutting-edge digital solutions and technology services to transform your business operations and customer experience."
                  icon={<Monitor className="w-6 h-6 text-primary rounded" />}
                />

                <ServiceCard
                  title="Management"
                  description="Professional accounting services and financial management solutions to ensure compliance and growth."
                  icon={<Calculator className="w-6 h-6 text-primary rounded" />}
                />
              </div>
            </div>
          </section>

          {/* Why Zaytrix Section */}
          <section
            ref={whyRef}
            className="section-padding opacity-0"
          >
            <div 
              className="brand-overlay min-h-[800px] flex items-center"
              style={{ 
                backgroundImage: `url(https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="container-custom">
                <div className="text-center space-y-12 text-white max-w-4xl mx-auto">
                  <div className="space-y-6">
                    <h2>
                      Why Choose Zaytrix?
                    </h2>
                    <p className="text-lg text-white/90 leading-relaxed">
                      As a trusted Canadian company, we combine technical expertise with deep understanding of local business needs.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-6">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                        <CheckCircle className="w-6 h-6 text-white" aria-label="Expertise icon" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">
                          Multidisciplinary Expertise
                        </h3>
                        <p className="text-white/90">
                          Comprehensive solutions across telecommunications, technology, and accounting under one trusted roof.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                        <MapPin className="w-6 h-6 text-white" aria-label="Canadian location icon" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">
                          Canadian Focus
                        </h3>
                        <p className="text-white/90">
                          Deep understanding of Canadian regulations, business practices, and market requirements.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                        <Handshake className="w-6 h-6 text-white" aria-label="Trust and innovation icon" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">
                          Innovation & Trust
                        </h3>
                        <p className="text-white/90">
                          Cutting-edge solutions delivered with the reliability and trust your business deserves.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link to="/about" className="cta-primary bg-white text-primary hover:bg-gray-50 inline-block">
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Client Testimonials */}
          <section
            ref={testimonialsRef}
            className="section-padding bg-white opacity-0"
          >
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
          <section
            ref={ctaRef}
            className="section-padding bg-primary opacity-0"
          >
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
