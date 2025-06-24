import { Card, CardContent } from "@/components/ui/card";

const AccountingServices = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            Our Management Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional accounting and management solutions to keep your business compliant and thriving.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-8">
            {/* Financial Reporting */}
            <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 h-full">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
                    alt="Financial Reporting"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-blue-600/20"></div>
                </div>
                <div className="p-8 space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                    Financial Reporting
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Accurate and timely financial statements to help you make informed business decisions.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Income statements</li>
                    <li>• Balance sheets</li>
                    <li>• Cash flow analysis</li>
                    <li>• Custom reports</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Tax Preparation & Planning */}
            <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 h-full">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=800&auto=format&fit=crop"
                    alt="Tax Preparation & Planning"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-orange-500/20"></div>
                </div>
                <div className="p-8 space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                    Tax Preparation & Planning
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Expert tax services to minimize liabilities and ensure compliance with all regulations.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Corporate tax returns</li>
                    <li>• Personal tax filing</li>
                    <li>• Tax strategy</li>
                    <li>• CRA representation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Bookkeeping Services */}
            <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 h-full">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=800&auto=format&fit=crop"
                    alt="Bookkeeping Services"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-green-600/20"></div>
                </div>
                <div className="p-8 space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                    Bookkeeping Services
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Reliable daily, weekly, or monthly bookkeeping to keep your records organized and up-to-date.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Bank reconciliations</li>
                    <li>• Payroll processing</li>
                    <li>• Accounts payable/receivable</li>
                    <li>• Ledger maintenance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Compliance Management */}
            <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 h-full">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1508385082359-f48c0dca1e8c?q=80&w=800&auto=format&fit=crop"
                    alt="Compliance Management"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-purple-600/20"></div>
                </div>
                <div className="p-8 space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                    Compliance Management
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Proactive compliance monitoring and management so you never miss a regulatory deadline.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Regulatory filings</li>
                    <li>• Audit preparation</li>
                    <li>• Record keeping</li>
                    <li>• Risk assessment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountingServices;
