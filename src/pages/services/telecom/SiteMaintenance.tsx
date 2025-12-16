import { 
  Wrench, 
  Zap, 
  AlertTriangle, 
  ClipboardCheck, 
  Construction, 
  FileCheck, 
  Activity,
  CheckCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SiteMaintenance = () => {
  const services = [
    {
      title: "Preventive & Corrective Maintenance",
      description: "Regular inspections, servicing, and repairs to maintain site integrity and network reliability.",
      icon: Wrench
    },
    {
      title: "Power Systems Management",
      description: "Generator servicing, fueling, battery maintenance, and power supply optimization to ensure uninterrupted network operation.",
      icon: Zap
    },
    {
      title: "Fault Management & Incident Response",
      description: "Rapid identification, troubleshooting, and resolution of site and network issues to minimize downtime.",
      icon: AlertTriangle
    },
    {
      title: "Site Audits & Compliance Checks",
      description: "Comprehensive site inspections, structural rigging assessments, and safety compliance verification.",
      icon: ClipboardCheck
    },
    {
      title: "Rigging & Structural Services",
      description: "Installation, adjustment, and maintenance of towers, masts, and antenna systems.",
      icon: Construction
    },
    {
      title: "SLA-Based Support",
      description: "Customized service level agreements tailored to client requirements, ensuring predictable and accountable service delivery.",
      icon: FileCheck
    },
    {
      title: "Network Monitoring & Optimization",
      description: "Continuous monitoring of network performance, proactive tuning, and reporting to optimize efficiency and coverage.",
      icon: Activity
    }
  ];

  const whyChooseUs = [
    "End-to-end operational support for telecom, fiber, private, and critical communications networks.",
    "Certified and experienced field technicians ensuring safety and compliance.",
    "Proactive maintenance to prevent costly downtime.",
    "Detailed reporting and audit-ready documentation for clients and regulators.",
    "Scalable services tailored for urban, rural, and remote sites across Canada."
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <Wrench className="w-10 h-10 text-primary-800" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Site Maintenance & Managed Services
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Zaytrix delivers comprehensive site maintenance and managed services to ensure your networks — fiber, wireless, private, or public safety — operate reliably, safely, and efficiently. Our approach combines technical expertise, proactive monitoring, and full operational support to maximize uptime, performance, and compliance.
            </p>
          </div>

          {/* Our Managed Services */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground tracking-tight text-center">
              Our Managed Services Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 bg-background">
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
          <div className="bg-primary-800 rounded-2xl p-8 lg:p-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-white tracking-tight text-center">
                Why Choose Zaytrix for Site Maintenance & Managed Services
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
                Zaytrix ensures that your network infrastructure is <strong>always operational, compliant, and optimized</strong>, allowing your organization to focus on core business activities while we manage all technical and operational aspects of your sites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteMaintenance;
