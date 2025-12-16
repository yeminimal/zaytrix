import { 
  Cable, 
  MapPin, 
  Network, 
  Construction, 
  Wrench, 
  TestTube, 
  AlertTriangle, 
  Calendar, 
  FileText, 
  Shield,
  CheckCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FiberOptic = () => {
  const engineeringDesign = [
    {
      title: "Fiber Route Surveys & Planning",
      description: "Comprehensive site surveys, route optimization, and network design to maximize efficiency and coverage.",
      icon: MapPin
    },
    {
      title: "Network Architecture & Integration",
      description: "Designing fiber layouts that integrate seamlessly with wireless, hybrid, and private networks.",
      icon: Network
    },
    {
      title: "Civil & Site Coordination",
      description: "Engineering solutions for right-of-way, trenching, and construction coordination to ensure smooth deployment.",
      icon: Construction
    }
  ];

  const deploymentTesting = [
    {
      title: "Fusion & Mechanical Splicing",
      description: "Precision splicing and termination for high-performance connectivity.",
      icon: Cable
    },
    {
      title: "OTDR & Power Meter Testing",
      description: "Advanced testing to validate fiber integrity, loss, and network performance.",
      icon: TestTube
    },
    {
      title: "Fault Detection & Restoration",
      description: "Rapid identification and resolution of network faults to minimize downtime.",
      icon: AlertTriangle
    },
    {
      title: "Preventive Maintenance",
      description: "Scheduled inspections, cleaning, and performance verification to ensure long-term reliability.",
      icon: Calendar
    }
  ];

  const documentationCompliance = [
    {
      title: "As-Built Documentation",
      description: "Accurate, regulator-ready schematics and reports for operational and audit purposes.",
      icon: FileText
    },
    {
      title: "Regulatory Compliance",
      description: "Ensuring adherence to ISED, FCC, and Canadian standards for fiber deployment, safety, and operational reliability.",
      icon: Shield
    }
  ];

  const whyChooseUs = [
    "Comprehensive engineering, design, deployment, and testing expertise for fiber networks.",
    "Proven track record across FTTH, backbone, and hybrid networks.",
    "Use of high-precision testing tools for accurate performance validation.",
    "Minimized downtime through proactive maintenance and fault management.",
    "Audit-ready documentation and compliance reporting for regulators and clients."
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Fiber Optic Engineering, Deployment & Maintenance
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Zaytrix delivers end-to-end fiber optic engineering, deployment, and maintenance services for Canadian operators, enterprises, and public-sector clients, from FTTH to backbone networks. Our integrated approach ensures networks are robust, high-performing, scalable, and fully compliant with Canadian and North American standards.
            </p>
          </div>

          {/* Engineering & Design */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground tracking-tight text-center">
              Engineering & Design
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engineeringDesign.map((item, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 bg-background">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary-800" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Deployment & Testing */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground tracking-tight text-center">
              Deployment & Testing
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deploymentTesting.map((item, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 bg-background">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary-800" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Documentation & Compliance */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground tracking-tight text-center">
              Documentation & Compliance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {documentationCompliance.map((item, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 bg-background">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary-800" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
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
                Why Choose Zaytrix
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
                Zaytrix ensures your fiber networks are engineered, deployed, and tested to the highest standards, providing <strong>reliable, scalable, and future-ready connectivity</strong> for Canadian enterprises and public-sector clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiberOptic;
