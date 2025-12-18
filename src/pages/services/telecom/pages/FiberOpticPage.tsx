import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import TelecomCTA from "../TelecomCTA";

const FiberOpticPage = () => {
  const engineeringServices = [
    {
      title: "Fiber Route Surveys",
      description: "Comprehensive site assessments to determine optimal fiber pathways, splice points, and entry locations."
    },
    {
      title: "Network Architecture",
      description: "Designing scalable fiber networks including backbone, distribution, and last-mile configurations."
    },
    {
      title: "Civil & Site Coordination",
      description: "Coordinating with municipal authorities, utility providers, and property owners for permitting and access."
    },
    {
      title: "Splice Point Planning",
      description: "Strategic placement of splice enclosures and junction points for optimal network maintainability."
    }
  ];

  const deploymentServices = [
    "Fusion splicing with certified technicians",
    "OTDR testing and fiber characterization",
    "Fault detection and localization",
    "Connector termination and testing",
    "Aerial and underground installation",
    "Microduct and blown fiber deployment"
  ];

  const documentationServices = [
    "As-built documentation with splice records",
    "Fiber route mapping and GIS integration",
    "Test result compilation and analysis",
    "Regulatory compliance documentation",
    "Maintenance and troubleshooting guides"
  ];

  const whyChooseUs = [
    "Comprehensive expertise from design to deployment",
    "Proven track record with major telecom providers",
    "Advanced testing equipment and methodologies",
    "Certified technicians and rigorous quality standards",
    "Full documentation and compliance support"
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
              Fiber Optic Solutions
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              End-to-end fiber optic services from engineering and design to deployment, testing, and documentation.
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
                High-Performance Fiber Networks
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Zaytrix provides comprehensive fiber optic services across Canada, supporting carriers, enterprises, and municipalities with reliable, high-capacity connectivity solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From initial route surveys through final documentation, our team ensures every fiber deployment meets the highest standards of quality and performance.
              </p>
            </div>
            <div>
              <img 
                src="/Image3.webp" 
                alt="Fiber optic infrastructure" 
                className="rounded-2xl shadow-xl w-full h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Engineering Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Engineering & Design</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {engineeringServices.map((item, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Deployment & Testing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Deployment & Testing</h3>
              <div className="space-y-3">
                {deploymentServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-800 flex-shrink-0" />
                    <span className="text-foreground text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Documentation & Compliance</h3>
              <div className="space-y-3">
                {documentationServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-800 flex-shrink-0" />
                    <span className="text-foreground text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-primary-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Zaytrix</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-300 flex-shrink-0" />
                  <span className="text-primary-100 text-sm">{reason}</span>
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

export default FiberOpticPage;
