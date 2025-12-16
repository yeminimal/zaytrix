import { 
  Cpu, 
  Wifi, 
  Factory, 
  Building2, 
  Server, 
  Smartphone, 
  Activity,
  CheckCircle,
  Shield,
  Zap,
  TrendingUp
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PrivateNetworksIoT = () => {
  const services = [
    {
      title: "Private LTE / 5G Network Design & Deployment",
      description: "Complete planning, integration, and deployment of private wireless networks, providing dedicated, secure connectivity for industrial sites, corporate campuses, and critical operations.",
      icon: Wifi
    },
    {
      title: "Industrial & Enterprise IoT Connectivity",
      description: "Deployment of IoT-enabled solutions, including sensor networks, industrial automation systems, predictive maintenance platforms, and remote monitoring.",
      icon: Factory
    },
    {
      title: "Smart Campus & Facility Networks",
      description: "Connected infrastructure solutions that optimize workflows, safety, and operational efficiency across corporate, educational, and industrial facilities.",
      icon: Building2
    },
    {
      title: "Edge Computing & Data Integration",
      description: "Local processing and analytics for low-latency decision-making, fully integrated with enterprise systems.",
      icon: Server
    },
    {
      title: "IoT Devices & SIM Cards",
      description: "Supply and configuration of IoT devices and operator SIM cards from leading Canadian and international carriers, ensuring plug-and-play connectivity for your IoT deployments.",
      icon: Smartphone
    },
    {
      title: "Network Monitoring, Management & Lifecycle Support",
      description: "Continuous performance monitoring, preventive maintenance, and optimization to ensure long-term network reliability, compliance, and scalability.",
      icon: Activity
    }
  ];

  const whyChooseUs = [
    {
      title: "Reliable & Secure",
      description: "Reliable, secure, and private connectivity for mission-critical applications.",
      icon: Shield
    },
    {
      title: "Seamless Integration",
      description: "Seamless integration of devices, SIM cards, and network infrastructure.",
      icon: Cpu
    },
    {
      title: "Operational Efficiency",
      description: "Enhanced operational efficiency and data-driven insights.",
      icon: Zap
    },
    {
      title: "Future-Ready",
      description: "Scalable networks built for future technologies and expansion.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <Cpu className="w-10 h-10 text-primary-800" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Private Networks & IoT Solutions
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Zaytrix delivers secure, high-performance private networks and IoT connectivity solutions for Canadian enterprises, industrial operations, smart campuses, and mission-critical facilities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our solutions enable organizations to unlock operational efficiency, automation, and real-time insights, while ensuring security, reliability, and regulatory compliance.
            </p>
          </div>

          {/* Our End-to-End Services */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground tracking-tight text-center">
              Our End-to-End Private Networks & IoT Services Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 h-full">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary-800" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">{service.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Zaytrix */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground tracking-tight text-center">
              Why Choose Zaytrix for Private Networks & IoT
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                    <item.icon className="w-8 h-8 text-primary-800" />
                  </div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-3 justify-center max-w-3xl mx-auto">
              <CheckCircle className="w-5 h-5 text-primary-800 flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground leading-relaxed">
                Compliance with Canadian and North American regulatory standards.
              </p>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-primary-100 rounded-2xl p-8 text-center max-w-4xl mx-auto">
            <p className="text-primary-800 leading-relaxed">
              Zaytrix helps Canadian organizations transform connectivity into a strategic advantage, combining <strong>robust network infrastructure, IoT devices, and operator services</strong> to deliver truly intelligent and secure operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateNetworksIoT;
