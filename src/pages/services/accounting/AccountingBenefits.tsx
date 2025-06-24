
import { Shield, TrendingUp, Users } from "lucide-react";

const AccountingBenefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            Why Choose Our Management Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert financial management that gives you peace of mind and strategic insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-primary-800" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
              Compliance Assurance
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Stay compliant with Canadian regulations and tax requirements.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
              <TrendingUp className="w-8 h-8 text-primary-800" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
              Strategic Insights
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Gain valuable insights into your business performance and growth opportunities.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-primary-800" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
              Dedicated Support
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Personal service from experienced accounting and management professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountingBenefits;
