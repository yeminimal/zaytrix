
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Quote } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import PageHead from "@/components/PageHead";
import ServicesSection from "@/components/home/ServicesSection";
import WhyZaytrixSection from "@/components/home/WhyZaytrixSection";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { useImagePreloader } from "@/hooks/useImagePreloader";

const Home = () => {
  const testimonialsRef = useInViewAnimation();
  const ctaRef = useInViewAnimation();

  // Preload critical images for faster loading
  useImagePreloader([
    { src: '/homeheroimage.webp', priority: true },
    { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475', priority: true },
    { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6', priority: false },
    { src: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7', priority: false }
  ]);

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
            src: "/homeheroimage.webp",
            alt: "Modern business technology workspace showcasing Zaytrix's innovative solutions"
          }}
        />

        {/* Main Content */}
        <main id="main-content">
          {/* Services Overview */}
          <ServicesSection />

          {/* Why Zaytrix Section */}
          <WhyZaytrixSection />

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
