import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Wrench, Clock, FileText, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import TelecomCTA from "../TelecomCTA";

const SiteMaintenancePage = () => {
  const services = [
    {
      title: "Preventive Maintenance",
      description: "Scheduled inspections and maintenance activities to prevent equipment failures and extend asset life."
    },
    {
      title: "Power Systems Management",
      description: "Monitoring and maintenance of batteries, rectifiers, generators, and backup power systems."
    },
    {
      title: "Fault Management & Repair",
      description: "Rapid response to equipment failures with 24/7 emergency support and parts inventory management."
    },
    {
      title: "Site Audits & Inspections",
      description: "Comprehensive site assessments to identify issues, verify compliance, and recommend improvements."
    },
    {
      title: "Rigging & Tower Services",
      description: "Certified tower climbing services for antenna installations, replacements, and inspections."
    },
    {
      title: "Network Monitoring",
      description: "Continuous monitoring of site equipment and environmental conditions with automated alerting."
    }
  ];

  const managedServices = [
    "SLA-based support agreements",
    "Dedicated account management",
    "Performance reporting and analytics",
    "Spare parts inventory management",
    "Vendor coordination and management",
    "Compliance tracking and reporting"
  ];

  const whyChooseUs = [
    "End-to-end site support from a single provider",
    "Certified technicians with carrier-grade experience",
    "Proactive maintenance reduces downtime",
    "Detailed reporting and documentation",
    "Scalable services for networks of any size"
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
              Site Maintenance & Managed Services
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Comprehensive site maintenance and managed services to keep your telecommunications network running at peak performance.
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
                Keeping Networks Running
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Zaytrix provides comprehensive site maintenance and managed services for telecommunications infrastructure across Canada. From preventive maintenance to emergency repairs, we keep your network operating reliably.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our experienced technicians and proven processes ensure maximum uptime, reduced operating costs, and full compliance with safety and regulatory requirements.
              </p>
            </div>
            <div>
              <img 
                src="/Image9.webp" 
                alt="Site maintenance services" 
                className="rounded-2xl shadow-xl w-full h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Our Services</h3>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-primary-50 rounded-2xl p-6 text-center">
              <Wrench className="w-10 h-10 text-primary-800 mx-auto mb-3" />
              <h4 className="font-semibold text-foreground text-sm">Expert Technicians</h4>
            </div>
            <div className="bg-primary-50 rounded-2xl p-6 text-center">
              <Clock className="w-10 h-10 text-primary-800 mx-auto mb-3" />
              <h4 className="font-semibold text-foreground text-sm">24/7 Support</h4>
            </div>
            <div className="bg-primary-50 rounded-2xl p-6 text-center">
              <FileText className="w-10 h-10 text-primary-800 mx-auto mb-3" />
              <h4 className="font-semibold text-foreground text-sm">Detailed Reporting</h4>
            </div>
            <div className="bg-primary-50 rounded-2xl p-6 text-center">
              <Shield className="w-10 h-10 text-primary-800 mx-auto mb-3" />
              <h4 className="font-semibold text-foreground text-sm">Compliance Assured</h4>
            </div>
          </div>

          {/* Managed Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Managed Services</h3>
              <div className="space-y-3">
                {managedServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-800 flex-shrink-0" />
                    <span className="text-foreground text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Why Choose Zaytrix</h3>
              <div className="space-y-3">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-800 flex-shrink-0" />
                    <span className="text-foreground text-sm">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-primary-900 text-white rounded-2xl p-8 text-center">
            <p className="text-lg text-primary-100 leading-relaxed max-w-3xl mx-auto">
              Partner with Zaytrix for <strong className="text-white">reliable, professional site maintenance</strong> that keeps your network performing at its best while reducing operational complexity and costs.
            </p>
          </div>
        </div>
      </section>

      <TelecomCTA />
    </div>
  );
};

export default SiteMaintenancePage;
