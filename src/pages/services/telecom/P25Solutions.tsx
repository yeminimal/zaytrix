import { 
  Radio, 
  Network, 
  Signal, 
  Mic, 
  Volume2, 
  Users, 
  Link2, 
  FileCheck, 
  Shield,
  CheckCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const P25Solutions = () => {
  const services = [
    {
      title: "Network Design, Deployment & Integration",
      description: "End-to-end planning, engineering, and implementation of P25 radio networks, including infrastructure siting, backhaul integration, and network commissioning.",
      icon: Network
    },
    {
      title: "RF Planning & Coverage Validation",
      description: "Advanced radio frequency modeling, site surveys, and propagation analysis to ensure optimal coverage, capacity, and reliability, even in complex terrains or high-density urban areas.",
      icon: Signal
    },
    {
      title: "Audio Quality Testing (Mobile & Static)",
      description: "Comprehensive evaluation of voice clarity, intelligibility, and system performance in both stationary and mobile scenarios, using industry-standard, high-accuracy measurement software.",
      icon: Mic
    },
    {
      title: "Noise Measurement & Voice Intelligibility Testing",
      description: "Measurement and analysis of background noise, interference, and system performance to ensure mission-critical voice communications are always clear, verified with precision testing tools.",
      icon: Volume2
    },
    {
      title: "Operational Scenario Testing",
      description: "Rigorous testing in single-user, multi-user, and high-clutter environments (urban, industrial, or heavily built-up areas) to validate network performance under real-world conditions.",
      icon: Users
    },
    {
      title: "Interoperability & Acceptance Testing",
      description: "Verification of network interoperability with existing public safety systems, legacy networks, and emergency communication platforms, with full acceptance reporting for regulators and clients.",
      icon: Link2
    },
    {
      title: "Regulatory Compliance & Reporting",
      description: "Full documentation to meet ISED, FCC, and Canadian public safety regulatory standards, including Safety Code 6 compliance where applicable.",
      icon: FileCheck
    }
  ];

  const whyChooseUs = [
    "Proven experience deploying mission-critical radio networks for public safety agencies.",
    "Expertise in network design, RF engineering, and voice performance testing.",
    "State-of-the-art, highly accurate measurement software ensures reliable testing results.",
    "Comprehensive field testing in mobile, static, and high-clutter environments.",
    "End-to-end service delivery from planning to operational handover.",
    "Detailed reporting to support regulatory approvals, audits, and long-term network optimization."
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <Radio className="w-10 h-10 text-primary-800" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                P25 Solutions (Public Safety Mobile Radio Network)
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Zaytrix delivers end-to-end P25 mission-critical communication solutions for public safety, first responders, and government agencies across Canada and North America. Our services ensure reliable, secure, and interoperable communications in urban, suburban, and remote environments, supporting operational readiness, safety, and regulatory compliance.
            </p>
          </div>

          {/* Our P25 Network Services */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground tracking-tight text-center">
              Our P25 Network Services Include
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

          {/* Why Zaytrix for P25 Networks */}
          <div className="bg-primary-800 rounded-2xl p-8 lg:p-12">
            <div className="space-y-8">
              <div className="flex items-center justify-center gap-3">
                <Shield className="w-8 h-8 text-primary-100" />
                <h3 className="text-2xl font-semibold text-white tracking-tight">
                  Why Zaytrix for P25 Networks
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-100 flex-shrink-0 mt-0.5" />
                    <p className="text-white/90 text-sm leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/90 text-center leading-relaxed max-w-3xl mx-auto pt-4">
                Zaytrix ensures that your P25 networks provide <strong>clear, reliable, and secure communications</strong> when it matters most, allowing first responders and government agencies to operate safely and efficiently under any conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default P25Solutions;
