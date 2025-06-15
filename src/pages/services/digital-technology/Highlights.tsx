
import { Monitor, Smartphone, Database, Globe, Users, Shield } from "lucide-react";

const Highlights = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            Why Choose Our Digital Technology Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your business with innovative solutions and expert technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
              <Monitor className="w-8 h-8 text-primary-800" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
              Modern Technology Stack
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Latest frameworks and technologies to ensure future-proof solutions.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-primary-800" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
              Expert Development Team
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Experienced developers with proven track records in complex projects.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-primary-800" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
              Security-First Approach
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Built-in security measures to protect your data and users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
