import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Network, Radio, Shield, Cpu, Wrench, ClipboardCheck } from "lucide-react";

const TelecomHero = () => {
  return (
    <section 
      className="hero-fullwidth min-h-[700px]"
      style={{ backgroundImage: `url(/Telecomms_1.webp)` }}
    >
      <div className="hero-overlay"></div>
      <div className="container-custom py-16">
        <div className="hero-content space-y-8 max-w-4xl">
          <div className="space-y-6">
            <h1 className="leading-tight text-4xl lg:text-5xl">
              Zaytrix <span className="text-primary-100">Telecom Services</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              At Zaytrix, we provide comprehensive engineering, design, and testing services for telecom, fiber, private networks, IoT, and mission-critical communications. Serving Canadian operators, enterprises, and public-sector clients, we deliver end-to-end solutions that ensure high-performance, reliable, and compliant networks across urban, suburban, and remote environments.
            </p>
            <p className="text-base lg:text-lg text-white/80 leading-relaxed">
              From custom network design and RF optimization to fiber deployment, P25 public safety systems, IoT connectivity, and site maintenance, our expertise spans the full project lifecycle, enabling clients to achieve operational excellence, regulatory compliance, and future-ready connectivity.
            </p>
          </div>
          
          {/* Service highlights */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
            <div className="flex items-center gap-3 text-white/90">
              <Network className="w-5 h-5 text-primary-100" />
              <span className="text-sm">Network Engineering</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <Radio className="w-5 h-5 text-primary-100" />
              <span className="text-sm">Fiber Optic Solutions</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <Shield className="w-5 h-5 text-primary-100" />
              <span className="text-sm">P25 Public Safety</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <Cpu className="w-5 h-5 text-primary-100" />
              <span className="text-sm">Private Networks & IoT</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <Wrench className="w-5 h-5 text-primary-100" />
              <span className="text-sm">Site Maintenance</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <ClipboardCheck className="w-5 h-5 text-primary-100" />
              <span className="text-sm">Project Management</span>
            </div>
          </div>

          <Button 
            asChild 
            size="lg" 
            className="cta-primary bg-white text-primary-800 hover:bg-gray-50"
          >
            <Link to="/contact">Discuss Your Project Requirements</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TelecomHero;
