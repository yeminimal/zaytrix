import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const NetworkEngineering = () => {
  const engineeringCapabilities = [
    {
      title: "End-to-End Network Architecture",
      description: "Custom engineering for fiber, wireless, hybrid, private, and public-safety networks."
    },
    {
      title: "Coverage, Capacity & Performance Planning",
      description: "Designing networks optimized for throughput, reliability, and scalability."
    },
    {
      title: "Private Networks & Public Safety Systems",
      description: "Secure, mission-critical designs for enterprise and government clients."
    },
    {
      title: "Future-Proof, Scalable Solutions",
      description: "Networks designed to accommodate growth and emerging technologies."
    }
  ];

  const rfCapabilities = [
    "RF Modeling & Propagation Analysis – Accurate engineering using high-precision simulation and measurement tools to predict real-world network performance.",
    "Coverage & Capacity Optimization – Identification and mitigation of network gaps, interference, and oversaturation.",
    "Drive Testing (Mobile & Static) – Rigorous field testing of signal strength, quality, throughput, and voice intelligibility.",
    "Interference Detection & Mitigation – Precision testing and troubleshooting to maintain network reliability.",
    "Performance Benchmarking & Quality Assurance – Independent validation across multi-operator, multi-vendor networks, ensuring SLAs, KPIs, and regulatory compliance.",
    "Logfile Collection, Processing & Analysis – Systematic testing and analysis for network optimization.",
    "Regulatory Compliance Reporting – Detailed, engineer-ready documentation for ISED, FCC, and Canadian public safety standards, including Safety Code 6 exposure assessment."
  ];

  const whyChooseUs = [
    "Integrated engineering, design, and testing expertise across multi-operator, multi-vendor networks",
    "Use of advanced measurement and simulation software for accurate results",
    "Full-service delivery from network design and engineering to testing, validation, and compliance reporting",
    "Optimized performance across urban, rural, and complex terrains",
    "Audit-ready reports supporting regulatory approvals and network acceptance"
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="space-y-16">
          {/* Section Header with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/Image2.webp" 
                alt="Network engineering and design services" 
                className="rounded-2xl shadow-xl w-full h-[350px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Network Engineering, Design & Testing
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Zaytrix delivers comprehensive network engineering, design, and testing services for Canadian operators, enterprises, and public-sector clients, ensuring networks are high-performance, reliable, scalable, and fully compliant.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Leveraging state-of-the-art engineering tools and measurement software, we provide precise, actionable insights to optimize network performance across urban, suburban, and rural environments.
              </p>
            </div>
          </div>

          {/* Network Engineering & Design Cards */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground tracking-tight text-center">
              Network Engineering & Design
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {engineeringCapabilities.map((capability, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 bg-background">
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">{capability.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{capability.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* RF Planning & Testing */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground tracking-tight text-center">
              RF Planning & Testing
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rfCapabilities.map((capability, index) => (
                <div key={index} className="flex items-start gap-3 bg-background p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary-800 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm leading-relaxed">{capability}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Zaytrix */}
          <div className="bg-primary-800 rounded-2xl p-8 lg:p-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-white tracking-tight text-center">
                Why Choose Zaytrix
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-100 flex-shrink-0 mt-0.5" />
                    <p className="text-white/90 text-sm leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/90 text-center leading-relaxed max-w-3xl mx-auto pt-4">
                Zaytrix ensures your networks are <strong>engineered, designed, and tested to the highest standards</strong>, enabling Canadian clients to deliver <strong>exceptional connectivity, operational reliability, and regulatory compliance.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkEngineering;
