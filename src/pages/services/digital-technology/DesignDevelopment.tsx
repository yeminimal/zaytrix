
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Code, Search, Smartphone, Globe, Shield } from "lucide-react";

const DesignDevelopment = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            Design & Development Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we deliver comprehensive digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-all duration-300 border-gray-200">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Palette className="w-8 h-8 text-primary-800" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                  UI/UX Design
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  User-centered design that creates intuitive and engaging digital experiences.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-gray-200">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Code className="w-8 h-8 text-primary-800" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                  Custom Development
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tailored software solutions built with modern frameworks and best practices.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-gray-200">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Search className="w-8 h-8 text-primary-800" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                  SEO Optimization
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic optimization to improve your digital presence and search rankings.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-gray-200">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Smartphone className="w-8 h-8 text-primary-800" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                  Responsive Design
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Mobile-first approach ensuring perfect performance across all devices.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-gray-200">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-primary-800" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                  Web Applications
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Scalable web applications that grow with your business needs.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-gray-200">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-primary-800" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                  Security First
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Built-in security measures to protect your applications and data.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DesignDevelopment;
