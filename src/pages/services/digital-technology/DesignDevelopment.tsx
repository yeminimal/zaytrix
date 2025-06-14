
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, FileStack, Users, SquareStack } from "lucide-react";

const DesignDevelopment = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
          Design & Development Excellence
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-gray-200">
          <CardContent className="p-8">
            <div className="space-y-6">
              <Smartphone size={48} className="text-orange-500 mb-4" aria-label="App Design icon" />
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
        <Card className="border-gray-200">
          <CardContent className="p-8">
            <div className="space-y-6">
              <FileStack size={48} className="text-blue-600 mb-4" aria-label="Logo Design & Branding icon" />
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
        <Card className="border-gray-200">
          <CardContent className="p-8">
            <div className="space-y-6">
              <Users size={48} className="text-green-600 mb-4" aria-label="Social Media Services icon" />
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
        <Card className="border-gray-200">
          <CardContent className="p-8">
            <div className="space-y-6">
              <SquareStack size={48} className="text-purple-600 mb-4" aria-label="Custom Software Development icon" />
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
);

export default DesignDevelopment;
