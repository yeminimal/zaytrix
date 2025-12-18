import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Shield, Radio, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import TelecomCTA from "../TelecomCTA";

const P25SolutionsPage = () => {
  const services = [
    {
      title: "Network Design, Deployment & Integration",
      description: "End-to-end design and deployment of P25 Phase I and Phase II systems, including simulcast and conventional configurations."
    },
    {
      title: "RF Planning & Coverage Validation",
      description: "Comprehensive RF engineering to ensure reliable coverage across urban, suburban, and remote areas critical for emergency response."
    },
    {
      title: "System Integration & Interoperability",
      description: "Integration with existing dispatch systems, CAD, and inter-agency interoperability solutions for seamless communication."
    },
    {
      title: "Infrastructure Upgrades & Migration",
      description: "Upgrading legacy analog or digital systems to P25 standards while minimizing operational disruption."
    },
    {
      title: "Testing & Commissioning",
      description: "Rigorous testing protocols including coverage verification, audio quality assessment, and failover validation."
    },
    {
      title: "Ongoing Support & Maintenance",
      description: "24/7 support options with preventive maintenance programs to ensure continuous network availability."
    }
  ];

  const whyChooseUs = [
    "Proven experience deploying mission-critical radio networks",
    "Expertise in network design, RF engineering, and system integration",
    "Strong relationships with leading P25 equipment manufacturers",
    "Understanding of Canadian public safety requirements and regulations",
    "Dedicated support for emergency services organizations"
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
              P25 Public Safety Solutions
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Mission-critical radio network solutions for public safety agencies, emergency services, and first responders across Canada.
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
                Reliable Communications When It Matters Most
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Zaytrix delivers comprehensive P25 (Project 25) solutions that enable reliable, interoperable communications for public safety organizations, emergency services, and critical infrastructure operators.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our expertise spans the full P25 ecosystem, from initial network planning through ongoing maintenance, ensuring your team has the reliable communications they need in any situation.
              </p>
            </div>
            <div>
              <img 
                src="/Image8.webp" 
                alt="P25 public safety communications" 
                className="rounded-2xl shadow-xl w-full h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Our P25 Services</h3>
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
              <Shield className="w-12 h-12 text-primary-800 mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Mission Critical</h4>
              <p className="text-muted-foreground text-sm">Designed for reliability when lives depend on communication</p>
            </div>
            <div className="bg-primary-50 rounded-2xl p-6 text-center">
              <Radio className="w-12 h-12 text-primary-800 mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Interoperable</h4>
              <p className="text-muted-foreground text-sm">Seamless communication across agencies and jurisdictions</p>
            </div>
            <div className="bg-primary-50 rounded-2xl p-6 text-center">
              <Users className="w-12 h-12 text-primary-800 mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Scalable</h4>
              <p className="text-muted-foreground text-sm">Grows with your organization's evolving needs</p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-primary-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Zaytrix</h3>
            <div className="max-w-3xl mx-auto space-y-4">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-300 flex-shrink-0" />
                  <span className="text-primary-100">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TelecomCTA />
    </div>
  );
};

export default P25SolutionsPage;
