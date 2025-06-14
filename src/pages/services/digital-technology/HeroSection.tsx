
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="bg-gradient-to-br from-orange-50 to-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              Empower Your Business with <span className="text-orange-500">Cutting-Edge Digital Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              In today's fast-paced, ever-evolving digital landscape, businesses need robust, scalable, and innovative digital solutions to stay ahead.
            </p>
          </div>
          <Button 
            asChild 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold tracking-tight"
          >
            <Link to="/contact">Transform with Digital Innovation</Link>
          </Button>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop" 
            alt="Digital technology development" 
            className="rounded-lg shadow-xl w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-blue-600/20 rounded-lg"></div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
