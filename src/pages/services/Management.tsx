import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FilePieChart, ReceiptText, Calculator, Shield, Cloud, ListChecks, DollarSign, Gavel, Briefcase, UserCog, BookCheck } from "lucide-react";

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
                  Achieve <span className="text-green-600">Financial Clarity</span> and Strategic Success
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Navigating the complexities of financial management is crucial for business success. We provide comprehensive management solutions that streamline operations and ensure compliance.
                </p>
              </div>
              <Button 
                asChild 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white font-semibold tracking-tight"
              >
                <Link to="/contact">Get Financial Clarity with Zaytrix</Link>
              </Button>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop" 
                alt="Professional management workspace" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-blue-600/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Accounting Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Accounting &amp; Financial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Strategic financial management and compliance support for your business success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-gray-200 text-center">
              <CardContent className="p-8 flex flex-col items-center">
                <FilePieChart size={48} className="text-blue-600 mb-6" aria-label="Financial Reporting" />
                <h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">
                  Financial Reporting
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Timely, accurate financial statements and performance analytics.
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200 text-center">
              <CardContent className="p-8 flex flex-col items-center">
                <ReceiptText size={48} className="text-orange-500 mb-6" aria-label="Tax Preparation" />
                <h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">
                  Tax Preparation &amp; Planning
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Full-suite tax consulting, filing, and strategy for optimal compliance and savings.
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200 text-center">
              <CardContent className="p-8 flex flex-col items-center">
                <Calculator size={48} className="text-green-600 mb-6" aria-label="Bookkeeping" />
                <h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">
                  Bookkeeping Services
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Efficient, organized and compliant recordkeeping for any business size.
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200 text-center">
              <CardContent className="p-8 flex flex-col items-center">
                <Shield size={48} className="text-purple-600 mb-6" aria-label="Compliance Management" />
                <h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">
                  Compliance Management
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Comprehensive compliance and risk management for peace of mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Management Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Comprehensive Management Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete financial management solutions tailored to Canadian business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cloud-Based Financial Management */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <Cloud size={48} className="text-green-600 mb-4" aria-label="Cloud-Based Financial Management icon" />
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Cloud-Based Financial Management
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Simplify your financial processes with our cloud-based management services using QuickBooks and Xero.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• QuickBooks Implementation & Management</li>
                      <li>• Xero Setup & Optimization</li>
                      <li>• Real-Time Financial Data Access</li>
                      <li>• Streamlined Bookkeeping</li>
                      <li>• Reduced Manual Errors</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tax Preparation */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <ListChecks size={48} className="text-blue-600 mb-4" aria-label="Tax Preparation icon" />
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Tax Preparation
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Ensure full compliance and optimize your tax strategy with our expert tax preparation services.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Corporate Tax Returns</li>
                      <li>• Personal Tax Returns</li>
                      <li>• Tax Strategy Optimization</li>
                      <li>• Maximize Deductions</li>
                      <li>• Minimize Liabilities</li>
                      <li>• Avoid Costly Penalties</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financial Management Consulting */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <DollarSign size={48} className="text-orange-500 mb-4" aria-label="Financial Management Consulting icon" />
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Financial Management Consulting
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Tailored consulting services to help you manage budgets, analyze performance, and develop strategic plans.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Budget Management</li>
                      <li>• Financial Performance Analysis</li>
                      <li>• Strategic Planning for Growth</li>
                      <li>• Cash Flow Improvement</li>
                      <li>• Investment Forecasting</li>
                      <li>• Long-Term Sustainability</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Forensic Financial Analysis */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <Gavel size={48} className="text-purple-600 mb-4" aria-label="Forensic Financial Analysis icon" />
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Forensic Financial Analysis
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Uncover discrepancies and support legal proceedings with thorough financial investigations.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Financial Fraud Investigation</li>
                      <li>• Asset Mismanagement Resolution</li>
                      <li>• Legal Proceeding Support</li>
                      <li>• Thorough Financial Analysis</li>
                      <li>• Discrepancy Identification</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Advanced Financial Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CFO-as-a-Service */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <Briefcase size={48} className="text-green-600 mb-4" aria-label="CFO-as-a-Service icon" />
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      CFO-as-a-Service
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Growing businesses need fractional leadership to guide them through financial challenges without a full-time CFO.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Expert Financial Leadership</li>
                      <li>• Strategic Decision-Making</li>
                      <li>• Financial Reporting</li>
                      <li>• Cost-Effective Solution</li>
                      <li>• Fractional Executive Support</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Training Workshops */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <UserCog size={48} className="text-blue-600 mb-4" aria-label="Training Workshops icon" />
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Training Workshops
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Empower your team with financial management workshops that integrate software into your day-to-day operations.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Personalized Training Programs</li>
                      <li>• Financial Software Integration</li>
                      <li>• Efficient Financial Management</li>
                      <li>• Key Metrics Understanding</li>
                      <li>• Regulatory Compliance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                  Financial Clarity, Strategic Insight, and Business Stability
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Zaytrix's management services bring the tools and expertise you need to thrive in a competitive environment.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <BookCheck size={32} className="text-green-600 flex-shrink-0 mt-1" aria-label="Financial Clarity icon" />
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
                  <FilePieChart size={32} className="text-blue-600 flex-shrink-0 mt-1" aria-label="Strategic Insight icon" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                      Strategic Insight
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Expert guidance for strategic decision-making and long-term growth planning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield size={32} className="text-orange-500 flex-shrink-0 mt-1" aria-label="Business Stability icon" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                      Business Stability
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Ensure compliance and financial stability to support sustainable growth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield size={32} className="text-purple-600 flex-shrink-0 mt-1" aria-label="Competitive Environment Success icon" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                      Competitive Environment Success
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Tools and expertise to thrive in today's competitive business landscape.
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
                Let our management professionals help you achieve financial clarity and compliance.
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
