import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Accounting = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                  Professional <span className="text-green-600">Accounting</span> Services
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Comprehensive financial management and accounting solutions to keep your business compliant, profitable, and growing.
                </p>
              </div>
              <Button 
                asChild 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white font-semibold tracking-tight"
              >
                <Link to="/contact">Get Financial Clarity</Link>
              </Button>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop" 
                alt="Professional accounting workspace" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-blue-600/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Accounting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete financial management solutions tailored to Canadian business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Financial Reporting */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-600 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Financial Reporting
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Accurate and timely financial statements to help you understand your business performance.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Income Statements</li>
                      <li>• Balance Sheets</li>
                      <li>• Cash Flow Statements</li>
                      <li>• Management Reports</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tax Services */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Tax Preparation & Planning
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Comprehensive tax services to ensure compliance and optimize your tax position.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Corporate Tax Returns</li>
                      <li>• Personal Tax Returns</li>
                      <li>• Tax Planning Strategies</li>
                      <li>• CRA Representation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bookkeeping */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-orange-500 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Bookkeeping Services
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Maintain accurate financial records with our professional bookkeeping services.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Daily Transaction Recording</li>
                      <li>• Accounts Payable/Receivable</li>
                      <li>• Bank Reconciliation</li>
                      <li>• Financial Data Management</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compliance Management */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-purple-600 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Compliance Management
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Stay compliant with Canadian regulations and reporting requirements.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• GST/HST Filing</li>
                      <li>• Payroll Services</li>
                      <li>• Corporate Filings</li>
                      <li>• Regulatory Compliance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Canadian Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Canadian Tax & Compliance Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Deep understanding of Canadian tax laws, regulations, and business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                CRA Compliance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Expertise in Canada Revenue Agency requirements and procedures.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Provincial Requirements
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Understanding of provincial tax and business registration requirements.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Industry Knowledge
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Specialized knowledge across various Canadian business sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop" 
                alt="Business growth and financial success" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                  Business Benefits
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Professional accounting services that support your business growth and success.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                      Financial Clarity
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Clear insights into your financial position and business performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                      Compliance Assurance
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Peace of mind knowing all regulatory requirements are met.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                      Tax Optimization
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Strategic tax planning to minimize liabilities and maximize savings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                      Time Savings
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Focus on your core business while we handle the financial details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Get Your Finances on Track
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Let our accounting professionals help you achieve financial clarity and compliance.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-green-600 hover:bg-gray-50 font-semibold tracking-tight"
              >
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-green-600 font-semibold tracking-tight"
              >
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accounting;
