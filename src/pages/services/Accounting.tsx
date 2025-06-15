import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, FileText, TrendingUp, Shield, Users, CheckCircle } from "lucide-react";

const Accounting = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="hero-fullwidth"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop)` }}
      >
        <div className="hero-overlay"></div>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hero-content space-y-8">
              <div className="space-y-4">
                <h1 className="leading-tight">
                  Professional <span className="text-primary-100">Management</span> Services
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Comprehensive financial management, accounting, and compliance services to keep your business healthy and compliant.
                </p>
              </div>
              <Button 
                asChild 
                size="lg" 
                className="cta-primary bg-white text-primary-800 hover:bg-gray-50"
              >
                <Link to="/contact">Streamline Your Finances</Link>
              </Button>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
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

      {/* Services Grid - Updated to strict 2x2 layout */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Our Management Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete financial and compliance management solutions.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* First Row - Bookkeeping & Accounting and Tax Preparation & Planning */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 h-full">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Calculator className="w-6 h-6 text-primary-800" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                      Bookkeeping & Accounting
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive bookkeeping services to maintain accurate financial records and ensure compliance.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Monthly bookkeeping</li>
                    <li>• Financial statements</li>
                    <li>• Accounts payable/receivable</li>
                    <li>• Bank reconciliation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 h-full">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary-800" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                      Tax Preparation & Planning
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Expert tax preparation and strategic planning to minimize liability and ensure compliance.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Corporate tax returns</li>
                    <li>• Personal tax planning</li>
                    <li>• GST/HST filing</li>
                    <li>• Tax optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Second Row - Financial Reporting and Compliance Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 h-full">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary-800" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                      Financial Reporting
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Detailed financial reports and analysis to help you make informed business decisions.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Monthly financial reports</li>
                    <li>• Cash flow analysis</li>
                    <li>• Budget planning</li>
                    <li>• Performance metrics</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 h-full">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary-800" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                      Compliance Management
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Ensure your business stays compliant with all Canadian regulations and requirements.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Regulatory compliance</li>
                    <li>• Corporate filings</li>
                    <li>• Payroll management</li>
                    <li>• Documentation support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Ready to Optimize Your Financial Management?
              </h2>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
                Let our experienced team handle your financial management so you can focus on growing your business.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary-800 hover:bg-gray-50 font-semibold tracking-tight"
              >
                <Link to="/contact">Get Started</Link>
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
    </div>
  );
};

export default Accounting;
