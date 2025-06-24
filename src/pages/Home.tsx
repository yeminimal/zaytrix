import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Quote, CheckCircle, MapPin, Handshake } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import PageHead from "@/components/PageHead";
import { Mail, Phone, Radio, Monitor, Calculator } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import "./HeroAnimatedGradient.css"; // Add this to your src/pages/ folder

const Home = () => {
  const servicesRef = useInViewAnimation();
  const whyRef = useInViewAnimation();
  const testimonialsRef = useInViewAnimation();
  const ctaRef = useInViewAnimation();

  return (
    <>
      <PageHead 
        title="Home"
        description="Zaytrix Management and Technology Group delivers comprehensive Telecommunications, Digital Technology, and Management services across Canada. Innovative solutions that transform the way you do business."
        keywords="telecommunications, digital technology, accounting, Canadian business solutions, Zaytrix"
        canonicalUrl="https://zaytrix.com"
      />
      
      <div className="min-h-screen">
        {/* Skip to Content Link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* HERO SECTION: simple, loud, future-tech */}
        <section className="relative flex items-center justify-center min-h-[600px] py-24 px-4 overflow-hidden hero-animated-gradient">
          {/* Overlay/Glow Accent */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#181e2a]/80 via-[#20264a]/80 to-[#0ed1f8]/40 pointer-events-none"></div>
          
          {/* Hero Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl w-full mx-auto gap-12">
            {/* Text */}
            <div className="max-w-xl text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-lg">
                <span className="block animate-fadein">
                  Innovating Tomorrow,
                </span>
                <span className="block bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                  Today
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-2xl text-white/90 font-light animate-fadein delay-150">
                Zaytrix Management and Technology Group delivers expert Telecommunications, Digital Technology, and Management services across Canada. We help Canadian businesses thrive with innovation, reliability, and trusted expertise.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fadein delay-300">
                <a href="/services" className="cta-primary bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform hover:bg-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-400">
                  Discover Our Services
                </a>
                <a href="/contact" className="cta-outline border border-fuchsia-400 text-fuchsia-100 px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-fuchsia-500/10 hover:border-fuchsia-500 transition">
                  Start Your Project
                </a>
              </div>
            </div>
            {/* Image */}
            <div className="relative w-full max-w-lg mx-auto md:mx-0 md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop"
                alt="Modern business technology workspace showcasing Zaytrix's innovative solutions"
                className="rounded-3xl shadow-2xl w-full object-cover animate-fadein delay-500 border-4 border-white/10"
                draggable={false}
              />
              {/* Futuristic Glow */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-cyan-400/30 pointer-events-none animate-pulse-slow"></div>
            </div>
          </div>
        </section>

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

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Telecommunications */}
                <div className="bg-white rounded-lg shadow group transition-all duration-300 border-gray-200 h-full">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" 
                      alt="Telecommunications infrastructure" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width="800"
                      height="400"
                    />
                    <div className="absolute inset-0 bg-blue-600/20"></div>
                  </div>
                  <div className="p-8 space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                      Telecommunications
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Advanced telecommunications infrastructure and solutions to keep your business connected and competitive.
                    </p>
                  </div>
                </div>

                {/* Digital Technology */}
                <div className="bg-white rounded-lg shadow group transition-all duration-300 border-gray-200 h-full">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop" 
                      alt="Digital technology solutions" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width="800"
                      height="400"
                    />
                    <div className="absolute inset-0 bg-orange-500/20"></div>
                  </div>
                  <div className="p-8 space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                      Digital Technology
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Cutting-edge digital solutions and technology services to transform your business operations and customer experience.
                    </p>
                  </div>
                </div>

                {/* Management */}
                <div className="bg-white rounded-lg shadow group transition-all duration-300 border-gray-200 h-full">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop" 
                      alt="Professional management services" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width="800"
                      height="400"
                    />
                    <div className="absolute inset-0 bg-green-600/20"></div>
                  </div>
                  <div className="p-8 space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                      Management
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Professional accounting services and financial management solutions to ensure compliance and growth.
                    </p>
                  </div>
                </div>
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
              <div className="container-custom py-10 sm:py-20">
                <div className="text-center space-y-10 sm:space-y-12 text-white max-w-4xl mx-auto">
                  <div className="space-y-4 sm:space-y-6">
                    <h2>
                      Why Choose Zaytrix?
                    </h2>
                    <p className="text-lg text-white/90 leading-relaxed">
                      As a trusted Canadian company, we combine technical expertise with deep understanding of local business needs.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-y-12 gap-x-6 md:gap-x-12 px-3 sm:px-0">
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
                      <ChevronRight className="icon-standard text-primary" />
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
                      <ChevronRight className="icon-standard text-primary" />
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
                      <ChevronRight className="icon-standard text-primary" />
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
