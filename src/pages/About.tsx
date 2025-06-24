import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import PageHead from "@/components/PageHead";
import { Target, Flag, Handshake, Users, Lightbulb, Award, CheckCircle } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const About = () => {
  const foundationRef = useInViewAnimation();
  const approachRef = useInViewAnimation();
  const leadershipRef = useInViewAnimation();
  const ctaRef = useInViewAnimation();

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
            src: "/Image4.webp",
            alt: "Professional business environment showcasing Zaytrix's commitment to excellence"
          }}
        />

        {/* Mission, Vision, Values */}
        <main ref={foundationRef} className="section-padding bg-white opacity-0">
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
  {/* Mission */}
  <div className="bg-white rounded-lg shadow group transition-all duration-300 border-gray-200 h-full">
    <div className="relative h-48 overflow-hidden rounded-t-lg">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
        alt="Mission"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
        width="800"
        height="400"
      />
      <div className="absolute inset-0 bg-blue-600/20"></div>
    </div>
    <div className="p-8 space-y-3">
      <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
        Mission
      </h3>
      <p className="text-gray-600 leading-relaxed">
        To empower Canadian businesses with innovative, reliable, and comprehensive solutions across telecommunications, digital technology, and management services.
      </p>
    </div>
  </div>

  {/* Vision */}
  <div className="bg-white rounded-lg shadow group transition-all duration-300 border-gray-200 h-full">
    <div className="relative h-48 overflow-hidden rounded-t-lg">
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=800&auto=format&fit=crop"
        alt="Vision"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
        width="800"
        height="400"
      />
      <div className="absolute inset-0 bg-orange-500/20"></div>
    </div>
    <div className="p-8 space-y-3">
      <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
        Vision
      </h3>
      <p className="text-gray-600 leading-relaxed">
        To be Canada's most trusted multidisciplinary technology and business services partner, driving innovation and success for our clients.
      </p>
    </div>
  </div>

  {/* Values */}
  <div className="bg-white rounded-lg shadow group transition-all duration-300 border-gray-200 h-full">
    <div className="relative h-48 overflow-hidden rounded-t-lg">
      <img
        src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800&auto=format&fit=crop"
        alt="Values"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
        width="800"
        height="400"
      />
      <div className="absolute inset-0 bg-green-600/20"></div>
    </div>
    <div className="p-8 space-y-3">
      <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
        Values
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Excellence, integrity, innovation, and client success. We build lasting relationships through trust and exceptional service delivery.
      </p>
    </div>
  </div>
</div>
          </div>
        </main>

        {/* Our Approach - Updated with no rounded corners and improved spacing */}
        <section ref={approachRef} className="section-padding opacity-0">
          <div 
            className="brand-overlay min-h-[800px] flex items-center"
            style={{ 
              backgroundImage: `url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="container-custom py-10 sm:py-20">
              <div className="text-center space-y-10 sm:space-y-12 text-white max-w-4xl mx-auto">
                <div className="space-y-4 sm:space-y-6">
                  <h2>
                    Our Approach
                  </h2>
                  <p className="text-lg text-white/90 leading-relaxed">
                    We believe in building long-term partnerships through understanding, innovation, and results.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-12 gap-x-6 md:gap-x-12 px-3 sm:px-0">
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
        <section ref={leadershipRef} className="section-padding bg-white opacity-0">
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
        <section ref={ctaRef} className="section-padding bg-primary opacity-0">
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
