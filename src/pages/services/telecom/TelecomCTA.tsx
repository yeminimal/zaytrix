import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const TelecomCTA = () => {
  return (
    <section className="py-20 bg-primary-800">
      <div className="container-custom text-center">
        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Ready to Transform Your Connectivity?
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Contact us today to discuss your project requirements and discover how we can deliver reliable, high-performance connectivity for your organization.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-primary-800 hover:bg-gray-50"
            >
              <Link to="/contact" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get in Touch
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-800"
            >
              <Link to="/contact" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Schedule a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelecomCTA;
