import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, FileCheck, AlertTriangle, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import TelecomCTA from "../TelecomCTA";

const SafetyCode6Page = () => {
  const services = [
    {
      title: "RF Exposure Assessment",
      description: "Accurate measurement of radiofrequency emissions to ensure compliance with SC6 safety limits for public and occupational exposure."
    },
    {
      title: "Spectrum Utilization & Management Reporting",
      description: "Monitoring and reporting frequency usage to comply with ISED/FCC requirements and optimize network performance."
    },
    {
      title: "Compliance Documentation",
      description: "Detailed, regulator-ready reports for ISED, FCC, clients, and auditors demonstrating full compliance."
    },
    {
      title: "Mitigation Recommendations",
      description: "Practical solutions to reduce RF exposure or optimize spectrum usage while maintaining network performance."
    },
    {
      title: "Regulatory Audit Support",
      description: "Assistance during inspections, project approvals, and ongoing compliance verification processes."
    },
    {
      title: "Site Safety Assessments",
      description: "Comprehensive evaluation of RF environments at telecom sites to ensure worker and public safety."
    }
  ];

  const benefits = [
    "Full compliance with Health Canada Safety Code 6",
    "ISED and FCC regulatory compliance",
    "Risk mitigation for operators and property owners",
    "Clear documentation for audits and inspections",
    "Expert guidance on exposure limits and best practices"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20 lg:py-28">
        <div className="container-custom">
          <Link 
            to="/services/telecom" 
            className="inline-flex items-center gap-2 text-primary-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Telecom Services
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Safety Code 6 Compliance & Spectrum Management
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Comprehensive RF compliance and spectrum management services ensuring telecom networks meet Canadian and U.S. regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
                Ensuring Safe & Compliant Networks
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

          {/* Services Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Our Compliance Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-primary-50 rounded-2xl p-6 text-center">
              <FileCheck className="w-12 h-12 text-primary-800 mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Full Documentation</h4>
              <p className="text-muted-foreground text-sm">Comprehensive reports ready for regulatory review</p>
            </div>
            <div className="bg-primary-50 rounded-2xl p-6 text-center">
              <AlertTriangle className="w-12 h-12 text-primary-800 mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Risk Mitigation</h4>
              <p className="text-muted-foreground text-sm">Proactive identification and resolution of compliance issues</p>
            </div>
            <div className="bg-primary-50 rounded-2xl p-6 text-center">
              <BarChart className="w-12 h-12 text-primary-800 mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Spectrum Optimization</h4>
              <p className="text-muted-foreground text-sm">Maximize efficiency while maintaining compliance</p>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-primary-100 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Key Benefits</h3>
            <div className="max-w-2xl mx-auto space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-800 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="bg-primary-900 text-white rounded-2xl p-8 text-center">
            <p className="text-lg text-primary-100 leading-relaxed max-w-3xl mx-auto">
              This service ensures networks are <strong className="text-white">safe, fully compliant, and operationally efficient</strong>, giving clients confidence in both performance and adherence to Canadian and U.S. regulations.
            </p>
          </div>
        </div>
      </section>

      <TelecomCTA />
    </div>
  );
};

export default SafetyCode6Page;
