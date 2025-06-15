
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-20 bg-primary-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Ready to Digitize Your Business?
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Let's explore how digital technology can transform your operations and drive growth.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-primary-800 hover:bg-gray-50 font-semibold tracking-tight"
          >
            <Link to="/contact">Start Your Project</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-primary-800 font-semibold tracking-tight"
          >
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
