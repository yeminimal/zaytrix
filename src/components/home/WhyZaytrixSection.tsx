
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, Handshake } from "lucide-react";

const WhyZaytrixSection = () => {
  return (
    <section className="section-padding">
      <div 
        className="brand-overlay min-h-[800px] flex items-center"
        style={{ 
          backgroundImage: `url(https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop&fm=webp)`,
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
  );
};

export default WhyZaytrixSection;
