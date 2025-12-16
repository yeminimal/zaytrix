import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TelecomHero = () => {
  return (
    <section 
      className="hero-fullwidth min-h-[500px]"
      style={{ backgroundImage: `url(/Telecomms_1.webp)` }}
    >
      <div className="hero-overlay"></div>
      <div className="container-custom py-16">
        <div className="hero-content space-y-6 max-w-3xl">
          <h1 className="leading-tight text-4xl lg:text-5xl">
            Zaytrix <span className="text-primary-100">Telecom Services</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
            Comprehensive engineering, design, and testing services for telecom, fiber, private networks, IoT, and mission-critical communications across Canada.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="cta-primary bg-white text-primary-800 hover:bg-gray-50"
          >
            <Link to="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TelecomHero;
