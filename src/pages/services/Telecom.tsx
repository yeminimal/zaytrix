import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Network, Headphones, ShieldCheck, Signal, Car, FileBarChart2, Wrench, DatabaseZap, Spline, Server, Lock, Workflow } from "lucide-react";

const Telecom = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                  Building the <span className="text-blue-600">Networks</span> of Tomorrow, <span className="text-orange-500">Today</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Advanced telecommunications infrastructure and optimization services designed for the modern enterprise and next-generation connectivity.
                </p>
              </div>
              <Button 
                asChild 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-tight"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" 
                alt="Telecommunications infrastructure" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-orange-500/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Telecom Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Key Telecom Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Modern, reliable and secure connectivity for Canadian enterprise and SMBs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-gray-200 text-center">
              <CardContent className="p-8 flex flex-col items-center">
                <Wifi size={48} className="text-blue-600 mb-6" aria-label="Network Infrastructure" />
                <h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">
                  Network Infrastructure
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Robust, high-performance network architecture for multisite and remote operations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200 text-center">
              <CardContent className="p-8 flex flex-col items-center">
                <Network size={48} className="text-orange-500 mb-6" aria-label="Unified Communications" />
                <h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">
                  Unified Communications
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Integrated voice, video, and messaging solutions for seamless communication.
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200 text-center">
              <CardContent className="p-8 flex flex-col items-center">
                <Headphones size={48} className="text-green-600 mb-6" aria-label="VoIP Solutions" />
                <h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">
                  VoIP Solutions
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Enterprise-grade VoIP platforms for scalable and affordable calling.
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200 text-center">
              <CardContent className="p-8 flex flex-col items-center">
                <ShieldCheck size={48} className="text-purple-600 mb-6" aria-label="Network Security" />
                <h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">
                  Network Security
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Best-in-class network safeguards and monitoring for compliance and safety.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Comprehensive Telecommunications Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From RF planning to fiber optics, we deliver complete telecommunications solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* RF Planning and Optimization */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <Signal size={48} className="text-blue-600 mb-4" aria-label="RF Planning and Optimization icon" />
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      RF Planning and Optimization
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Strategic radio frequency planning and optimization for 5G deployments and network health.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• 5G Deployment and Coverage Planning</li>
                      <li>• Capacity Planning and Traffic Analysis</li>
                      <li>• Network Health Optimization</li>
                      <li>• Performance Benchmarking</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Drive Test */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <Car size={48} className="text-orange-500 mb-4" aria-label="Drive Test icon" />
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Drive Test
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Comprehensive field testing using advanced UE devices, CPE equipment, and scanners.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• UE Devices and CPE Testing</li>
                      <li>• Advanced Scanner Technology</li>
                      <li>• Coverage Assessment and Validation</li>
                      <li>• Real-World Performance Analysis</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Logfile Collection & Processing */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <FileBarChart2 size={48} className="text-green-600 mb-4" aria-label="Logfile Collection and Processing icon" />
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Logfile Collection & Processing
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Advanced analysis of network data to identify bottlenecks and generate actionable insights.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Network Bottleneck Identification</li>
                      <li>• Performance Data Analysis</li>
                      <li>• Actionable Reporting</li>
                      <li>• Optimization Recommendations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Site Maintenance */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <Wrench size={48} className="text-purple-600 mb-4" aria-label="Site Maintenance icon" />
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Site Maintenance
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Proactive maintenance services to ensure optimal network performance and reliability.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Routine Inspections and Maintenance</li>
                      <li>• Preventive Maintenance Programs</li>
                      <li>• Emergency Response Support</li>
                      <li>• Equipment Health Monitoring</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Advanced Network Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* IoT Solutions */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <DatabaseZap size={48} className="text-blue-600 mb-4" aria-label="IoT Solutions icon" />
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      IoT Solutions
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Smart connectivity solutions for cities, enterprises, and residential applications.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Smart Cities Infrastructure</li>
                      <li>• Connected Enterprise Solutions</li>
                      <li>• Smart Homes and Offices</li>
                      <li>• Industrial IoT Applications</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fiber Optics Services */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <Spline size={48} className="text-orange-500 mb-4" aria-label="Fiber Optics Services icon" />
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Fiber Optics Services
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      High-speed connectivity with expert fiber optic installation, testing, and maintenance.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Fiber Optic Splicing</li>
                      <li>• Testing & Certification</li>
                      <li>• Network Infrastructure Development</li>
                      <li>• Troubleshooting & Diagnostics</li>
                      <li>• Last-Mile Fiber Solutions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Private Network Deployment */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <Server size={48} className="text-green-600 mb-4" aria-label="Private Network Deployment icon" />
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Private Network Deployment
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Secure, reliable, and scalable private LTE & 5G networks for enterprise applications.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Tailored Network Design</li>
                      <li>• High-Performance & Low-Latency</li>
                      <li>• Secure Communications</li>
                      <li>• Seamless Integration</li>
                      <li>• Scalable & Future-Proof</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Telecom Project Management */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <Workflow size={48} className="text-purple-600 mb-4" aria-label="Telecom Project Management icon" />
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      Telecom Project Management
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Efficient project management for seamless network rollouts and infrastructure upgrades.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Full-Cycle Project Management</li>
                      <li>• Cross-Functional Coordination</li>
                      <li>• Risk Management & Mitigation</li>
                      <li>• Quality Assurance & Compliance</li>
                      <li>• Cost Control & Budgeting</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Ready to Upgrade Your Communications?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how our telecommunications solutions can improve your business connectivity and efficiency.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-50 font-semibold tracking-tight"
              >
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold tracking-tight"
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

export default Telecom;
