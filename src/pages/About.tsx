
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import PageHead from "@/components/PageHead";
import { Target, Flag, Handshake, Users, Lightbulb, Award, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <>
      <PageHead 
        title="About Us"
        description="Learn about Zaytrix Management and Technology Group - a Canadian company delivering exceptional results across telecommunications, digital technology, and management services."
        keywords="about Zaytrix, Canadian technology company, telecommunications experts, digital transformation, accounting services, business solutions"
        canonicalUrl="https://zaytrix.com/about"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <HeroSection
          title="Building Trust Through"
          subtitle="Innovation"
          description="Zaytrix is a Canadian company dedicated to delivering exceptional results across telecommunications, digital technology, and management services."
          image={{
            src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop",
            alt: "Professional business environment showcasing Zaytrix's commitment to excellence"
          }}
        />

        {/* Mission, Vision, Values */}
        <main className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-gray-900">
                Our Foundation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Built on strong principles that guide everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="Mission"
                description="To empower Canadian businesses with innovative, reliable, and comprehensive solutions across telecommunications, digital technology, and management services."
                icon={<Target className="w-6 h-6 text-primary" aria-label="Mission icon" />}
              />

              <ServiceCard
                title="Vision"
                description="To be Canada's most trusted multidisciplinary technology and business services partner, driving innovation and success for our clients."
                icon={<Flag className="w-6 h-6 text-primary" aria-label="Vision icon" />}
              />

              <ServiceCard
                title="Values"
                description="Excellence, integrity, innovation, and client success. We build lasting relationships through trust and exceptional service delivery."
                icon={<Handshake className="w-6 h-6 text-primary" aria-label="Values icon" />}
              />
            </div>
          </div>
        </main>

        {/* Our Approach - Updated with no rounded corners and improved spacing */}
        <section className="section-padding">
          <div 
            className="brand-overlay min-h-[800px] flex items-center"
            style={{ 
              backgroundImage: `url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="container-custom">
              <div className="text-center space-y-12 text-white max-w-4xl mx-auto">
                <div className="space-y-6">
                  <h2>
                    Our Approach
                  </h2>
                  <p className="text-lg text-white/90 leading-relaxed">
                    We believe in building long-term partnerships through understanding, innovation, and results.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white">
                        Client-Centric Solutions
                      </h3>
                      <p className="text-white/90">
                        Every solution is tailored to meet your specific business needs and objectives.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white">
                        Integrated Services
                      </h3>
                      <p className="text-white/90">
                        Our multidisciplinary approach ensures seamless integration across all your business systems.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white">
                        Continuous Innovation
                      </h3>
                      <p className="text-white/90">
                        We stay ahead of technology trends to provide you with future-ready solutions.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                      <Flag className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white">
                        Canadian Expertise
                      </h3>
                      <p className="text-white/90">
                        Deep understanding of Canadian business landscape, regulations, and opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Statement */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-gray-900">
                  Leadership Statement
                </h2>
                <div className="bg-gray-50 rounded-lg p-8">
                  <blockquote className="text-xl text-gray-700 leading-relaxed italic">
                    "At Zaytrix, we're not just service providers – we're partners in your success. Our commitment to excellence across telecommunications, digital technology, and management services reflects our dedication to helping Canadian businesses thrive in an ever-evolving landscape."
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
        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-white">
                  Partner with Zaytrix
                </h2>
                <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
                  Experience the difference of working with a trusted Canadian technology and business services partner.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="cta-primary bg-white text-primary hover:bg-gray-50">
                  Start a Conversation
                </Link>
                <Link to="/services" className="cta-outline border-white text-white hover:bg-white hover:text-primary">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
