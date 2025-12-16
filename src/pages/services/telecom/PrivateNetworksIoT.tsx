import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PrivateNetworksIoT = () => {
  const services = [
    {
      title: "Private LTE / 5G Network Design & Deployment",
      description: "Complete planning, integration, and deployment of private wireless networks, providing dedicated, secure connectivity for industrial sites, corporate campuses, and critical operations."
    },
    {
      title: "Industrial & Enterprise IoT Connectivity",
      description: "Deployment of IoT-enabled solutions, including sensor networks, industrial automation systems, predictive maintenance platforms, and remote monitoring."
    },
    {
      title: "Smart Campus & Facility Networks",
      description: "Connected infrastructure solutions that optimize workflows, safety, and operational efficiency across corporate, educational, and industrial facilities."
    },
    {
      title: "Edge Computing & Data Integration",
      description: "Local processing and analytics for low-latency decision-making, fully integrated with enterprise systems."
    },
    {
      title: "IoT Devices & SIM Cards",
      description: "Supply and configuration of IoT devices and operator SIM cards from leading Canadian and international carriers, ensuring plug-and-play connectivity for your IoT deployments."
    },
    {
      title: "Network Monitoring, Management & Lifecycle Support",
      description: "Continuous performance monitoring, preventive maintenance, and optimization to ensure long-term network reliability, compliance, and scalability."
    }
  ];

  const whyChooseUs = [
    "Reliable, secure, and private connectivity for mission-critical applications.",
    "Seamless integration of devices, SIM cards, and network infrastructure.",
    "Enhanced operational efficiency and data-driven insights.",
    "Scalable networks built for future technologies and expansion.",
    "Compliance with Canadian and North American regulatory standards."
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="space-y-16">
          {/* Section Header with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/Image4.webp" 
                alt="Private networks and IoT solutions" 
                className="rounded-2xl shadow-xl w-full h-[350px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Private Networks & IoT Solutions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Zaytrix delivers secure, high-performance private networks and IoT connectivity solutions for Canadian enterprises, industrial operations, smart campuses, and mission-critical facilities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our solutions enable organizations to unlock operational efficiency, automation, and real-time insights, while ensuring security, reliability, and regulatory compliance.
              </p>
            </div>
          </div>

          {/* Our End-to-End Services */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground tracking-tight text-center">
              Our End-to-End Private Networks & IoT Services Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 bg-background">
                  <CardContent className="p-6 h-full">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">{service.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Zaytrix */}
          <div className="bg-primary-800 rounded-2xl p-8 lg:p-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-white tracking-tight text-center">
                Why Choose Zaytrix for Private Networks & IoT
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-100 flex-shrink-0 mt-0.5" />
                    <p className="text-white/90 text-sm leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/90 text-center leading-relaxed max-w-3xl mx-auto pt-4">
                Zaytrix helps Canadian organizations transform connectivity into a strategic advantage, combining <strong>robust network infrastructure, IoT devices, and operator services</strong> to deliver truly intelligent and secure operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateNetworksIoT;
