
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const DigitalTechnology = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
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

            {/* Right: Image */}
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

      {/* Core Digital Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Comprehensive Digital Technology Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From cloud solutions to AI/ML, we deliver technology that drives business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cloud Solutions */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-orange-500 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Cloud Solutions
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Transition to the cloud seamlessly with our migration, hosting, and optimization services.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Cloud Migration Services</li>
                      <li>• Cloud Hosting & Optimization</li>
                      <li>• Reduced Operational Costs</li>
                      <li>• Enhanced Data Accessibility</li>
                      <li>• Robust Security Implementation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* IoT Integration */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      IoT Integration
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Create smart business operations using IoT devices that collect data and enable predictive insights.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Smart Device Integration</li>
                      <li>• Data Collection & Analysis</li>
                      <li>• Predictive Insights</li>
                      <li>• Enhanced Efficiency</li>
                      <li>• Innovation Enablement</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI/ML Solutions */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-600 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      AI/ML Solutions
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Leverage Artificial Intelligence and Machine Learning to automate processes and gain predictive insights.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Process Automation</li>
                      <li>• Predictive Analytics</li>
                      <li>• Decision-Making Optimization</li>
                      <li>• Custom AI/ML Tools</li>
                      <li>• Competitive Advantage</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Web Design */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-purple-600 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Web Design
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Stand out online with beautifully designed, responsive, and SEO-optimized websites.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Responsive Design</li>
                      <li>• SEO Optimization</li>
                      <li>• User-Centric Experiences</li>
                      <li>• High ROI Focus</li>
                      <li>• Strong Online Presence</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design & Development Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Design & Development Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* App Design */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-orange-500 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      App Design
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Intuitive mobile and desktop applications that streamline operations and improve engagement.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Mobile Applications</li>
                      <li>• Desktop Applications</li>
                      <li>• Internal Use Systems</li>
                      <li>• Customer-Facing Apps</li>
                      <li>• Scalable Solutions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Logo Design & Branding */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Logo Design & Branding
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Build a memorable brand identity with professional logo design and branding packages.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Professional Logo Design</li>
                      <li>• Brand Identity Development</li>
                      <li>• Cohesive Visual Identity</li>
                      <li>• Audience Resonance</li>
                      <li>• Complete Branding Packages</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Services */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-600 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Social Media Services
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Enhance your online presence with comprehensive social media management and marketing.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Instagram, Facebook, X, TikTok</li>
                      <li>• LinkedIn Management</li>
                      <li>• Tailored Strategies</li>
                      <li>• Boost Engagement</li>
                      <li>• Customer Acquisition</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Custom Software Development */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-purple-600 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Custom Software Development
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Tailored software solutions designed to solve your business's unique challenges.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Enterprise Systems</li>
                      <li>• CRM Solutions</li>
                      <li>• Workflow Automation</li>
                      <li>• Performance Optimization</li>
                      <li>• Competitive Edge</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* E-Learning Platform */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
                alt="E-learning and training" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                  E-Learning Platforms
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Empower your workforce with tailored online education systems.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                      Engaging Training Solutions
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Interactive and effective training solutions that improve employee skills.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                      Knowledge Sharing
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Enhanced knowledge sharing capabilities across your organization.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                      Productivity Boost
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Boost productivity through comprehensive online education systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Ready to Digitize Your Business?
              </h2>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
                Let's explore how digital technology can transform your operations and drive growth.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-orange-500 hover:bg-gray-50 font-semibold tracking-tight"
              >
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-orange-500 font-semibold tracking-tight"
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

export default DigitalTechnology;
