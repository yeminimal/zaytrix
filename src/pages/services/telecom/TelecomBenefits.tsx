
import { Network, Shield, Zap } from "lucide-react";

const TelecomBenefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            Why Choose Our Telecommunications Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience enterprise-grade connectivity that scales with your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
              <Network className="w-8 h-8 text-primary-800" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
              Reliable Network Infrastructure
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              99.9% uptime guarantee with redundant systems and 24/7 monitoring.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-primary-800" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
              Enterprise Security
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Advanced encryption and security protocols to protect your communications.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
              <Zap className="w-8 h-8 text-primary-800" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
              Scalable Solutions
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Flexible infrastructure that grows with your business requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelecomBenefits;
