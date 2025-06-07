
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
                  <span className="text-orange-500">Digital Technology</span> That Transforms
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Harness the power of modern technology to digitally transform your business operations and customer experience.
                </p>
              </div>
              <Button 
                asChild 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold tracking-tight"
              >
                <Link to="/contact">Start Your Transformation</Link>
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

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Digital Technology Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From custom software to cloud solutions, we deliver technology that drives business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Custom Software Development */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-orange-500 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Custom Software Development
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Tailored software solutions designed specifically for your business needs and workflows.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Web Application Development</li>
                      <li>• Mobile App Development</li>
                      <li>• Enterprise Software Solutions</li>
                      <li>• API Development & Integration</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Digital Transformation */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Digital Transformation
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Comprehensive digital transformation strategies to modernize your business processes and systems.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Process Automation</li>
                      <li>• Legacy System Modernization</li>
                      <li>• Digital Workflow Design</li>
                      <li>• Change Management</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cloud Solutions */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-600 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Cloud Solutions
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Scalable cloud infrastructure and services to reduce costs and improve accessibility.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Cloud Migration Services</li>
                      <li>• Infrastructure as a Service (IaaS)</li>
                      <li>• Software as a Service (SaaS)</li>
                      <li>• Cloud Security & Backup</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* IT Consulting */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-purple-600 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      IT Consulting
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Strategic technology consulting to help you make informed decisions about your IT investments.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Technology Strategy Planning</li>
                      <li>• System Architecture Design</li>
                      <li>• Vendor Selection & Management</li>
                      <li>• IT Project Management</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Our Technology Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We work with cutting-edge technologies to deliver modern, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Frontend Development
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                React, Vue.js, Angular, and modern web technologies.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Backend Development
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Node.js, Python, .NET, and robust server-side solutions.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Cloud Platforms
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                AWS, Azure, Google Cloud, and hybrid cloud solutions.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Database Systems
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                SQL Server, PostgreSQL, MongoDB, and data solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Our Development Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Discovery
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Understanding your business needs and technical requirements.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Design
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creating user-centered designs and system architecture plans.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Development
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Agile development with regular updates and feedback cycles.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                Deployment
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Seamless deployment with ongoing support and maintenance.
              </p>
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
