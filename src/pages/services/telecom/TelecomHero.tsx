
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TelecomHero = () => {
  return (
    <section 
      className="hero-fullwidth"
      style={{ backgroundImage: `url(https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop)` }}
    >
      <div className="hero-overlay"></div>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hero-content space-y-8">
            <div className="space-y-4">
              <h1 className="leading-tight">
                Advanced <span className="text-primary-100">Telecommunications</span> Infrastructure
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Keep your business connected with cutting-edge telecommunications solutions designed for reliability, scalability, and performance.
              </p>
            </div>
            <Button 
              asChild 
              size="lg" 
              className="cta-primary bg-white text-primary-800 hover:bg-gray-50"
            >
              <Link to="/contact">Upgrade Your Infrastructure</Link>
            </Button>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default TelecomHero;
