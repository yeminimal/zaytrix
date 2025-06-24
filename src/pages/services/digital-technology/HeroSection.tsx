
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section 
    className="hero-fullwidth"
    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop)` }}
  >
    <div className="hero-overlay"></div>
    <div className="container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="hero-content space-y-8">
          <div className="space-y-4">
            <h1 className="leading-tight">
              Empower Your Business with <span className="text-primary-100">Cutting-Edge Digital Solutions</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              In today's fast-paced, ever-evolving digital landscape, businesses need robust, scalable, and innovative digital solutions to stay ahead.
            </p>
          </div>
          <Button 
            asChild 
            size="lg" 
            className="cta-primary bg-white text-primary hover:bg-gray-50"
          >
            <Link to="/contact">Transform with Digital Innovation</Link>
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  </section>
);

export default HeroSection;
