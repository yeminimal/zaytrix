
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, DatabaseZap, Brain, Palette } from "lucide-react";

const CoreServices = () => (
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
        <Card className="border-gray-200">
          <CardContent className="p-8">
            <div className="space-y-6">
              <Cloud size={48} className="text-orange-500 mb-4" aria-label="Cloud Solutions icon" />
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
        <Card className="border-gray-200">
          <CardContent className="p-8">
            <div className="space-y-6">
              <DatabaseZap size={48} className="text-blue-600 mb-4" aria-label="IoT Integration icon" />
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
        <Card className="border-gray-200">
          <CardContent className="p-8">
            <div className="space-y-6">
              <Brain size={48} className="text-green-600 mb-4" aria-label="AI/ML Solutions icon" />
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
        <Card className="border-gray-200">
          <CardContent className="p-8">
            <div className="space-y-6">
              <Palette size={48} className="text-purple-600 mb-4" aria-label="Web Design icon" />
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
);

export default CoreServices;
