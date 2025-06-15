
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Smartphone, Globe, Database, Users, Shield } from "lucide-react";

const CoreServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            Comprehensive Digital Technology Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            End-to-end digital solutions to transform your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 h-full">
            <CardContent className="p-0">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop" 
                  alt="Web Development Services" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="800"
                  height="400"
                />
                <div className="absolute inset-0 bg-primary/20"></div>
              </div>
              <div className="p-8 space-y-6 bg-white">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Web Development
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Custom web applications and responsive websites built with modern technologies and best practices.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 h-full">
            <CardContent className="p-0">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" 
                  alt="Mobile App Development" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="800"
                  height="400"
                />
                <div className="absolute inset-0 bg-primary/20"></div>
              </div>
              <div className="p-8 space-y-6 bg-white">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Mobile Apps
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Native and cross-platform mobile applications that engage users and drive business growth.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 h-full">
            <CardContent className="p-0">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" 
                  alt="Digital Transformation Services" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="800"
                  height="400"
                />
                <div className="absolute inset-0 bg-primary/20"></div>
              </div>
              <div className="p-8 space-y-6 bg-white">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Digital Transformation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Strategic digital transformation initiatives to modernize your business processes and systems.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
