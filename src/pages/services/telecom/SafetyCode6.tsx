import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SafetyCode6 = () => {
  const services = [
    {
      title: "RF Exposure Assessment",
      description: "Accurate measurement of radiofrequency emissions to ensure compliance with SC6 safety limits."
    },
    {
      title: "Spectrum Utilization & Management Reporting",
      description: "Monitoring and reporting frequency usage to comply with ISED/FCC requirements and optimize network performance."
    },
    {
      title: "Compliance Documentation",
      description: "Detailed, regulator-ready reports for ISED, FCC, clients, and auditors."
    },
    {
      title: "Mitigation Recommendations",
      description: "Practical solutions to reduce RF exposure or optimize spectrum usage."
    },
    {
      title: "Regulatory Audit Support",
      description: "Assistance during inspections, project approvals, and ongoing compliance verification."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="space-y-12">
          {/* Section Header with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Safety Code 6 (SC6) Compliance & Spectrum Management Reporting
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Zaytrix provides comprehensive RF compliance and spectrum management services to ensure telecom and wireless networks meet Safety Code 6 (SC6) limits and regulatory requirements mandated by ISED (Canada) and FCC (USA).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our services safeguard the public, employees, and operational assets while enabling smooth project approvals and regulatory audits.
              </p>
            </div>
            <div>
              <img 
                src="/NetSec.webp" 
                alt="Safety code compliance and spectrum management" 
                className="rounded-2xl shadow-xl w-full h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">{service.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-primary-100 rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <p className="text-primary-800 leading-relaxed">
              This service ensures networks are <strong>safe, fully compliant, and operationally efficient</strong>, giving clients confidence in both performance and adherence to Canadian and U.S. regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyCode6;
