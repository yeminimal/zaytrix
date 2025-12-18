import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Wifi, Server, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import TelecomCTA from "../TelecomCTA";

const PrivateNetworksPage = () => {
  const services = [
    {
      title: "Private LTE/5G Network Design",
      description: "Custom network architecture for enterprises requiring dedicated wireless connectivity with full control over security and performance."
    },
    {
      title: "CBRS Spectrum Solutions",
      description: "Leveraging Citizens Broadband Radio Service for cost-effective private wireless deployments in industrial and commercial settings."
    },
    {
      title: "IoT Connectivity Planning",
      description: "Designing scalable connectivity solutions for IoT deployments including sensor networks, asset tracking, and industrial automation."
    },
    {
      title: "Network Integration",
      description: "Seamless integration of private networks with existing enterprise IT infrastructure, cloud platforms, and business applications."
    },
    {
      title: "Edge Computing Solutions",
      description: "Deploying edge computing capabilities for low-latency processing and local data management in industrial environments."
    },
    {
      title: "Ongoing Management & Support",
      description: "Comprehensive managed services including monitoring, optimization, and 24/7 support for private network deployments."
    }
  ];

  const industries = [
    { name: "Manufacturing", description: "Smart factory connectivity and automation" },
    { name: "Mining & Resources", description: "Remote site connectivity and safety systems" },
    { name: "Logistics & Warehousing", description: "Asset tracking and inventory management" },
    { name: "Healthcare", description: "Connected medical devices and facility management" },
    { name: "Agriculture", description: "Precision farming and remote monitoring" },
    { name: "Energy & Utilities", description: "Grid monitoring and infrastructure management" }
  ];

  const benefits = [
    "Dedicated spectrum for guaranteed performance",
    "Enhanced security and data privacy",
    "Complete control over network configuration",
    "Ultra-low latency for critical applications",
    "Scalable to thousands of connected devices"
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
              Private Networks & IoT Solutions
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Custom private LTE/5G networks and IoT connectivity solutions for Canadian enterprises requiring dedicated, secure wireless infrastructure.
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
                Dedicated Connectivity for Enterprise
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Zaytrix designs and deploys private LTE/5G networks and IoT solutions that give Canadian enterprises complete control over their wireless connectivity, security, and performance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need to connect thousands of sensors in a manufacturing facility or provide reliable coverage across a remote mining operation, our solutions deliver the dedicated connectivity your business requires.
              </p>
            </div>
            <div>
              <img 
                src="/Image6.webp" 
                alt="Private networks and IoT solutions" 
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
              <Wifi className="w-10 h-10 text-primary-800 mx-auto mb-3" />
              <h4 className="font-semibold text-foreground text-sm">Dedicated Spectrum</h4>
            </div>
            <div className="bg-primary-50 rounded-2xl p-6 text-center">
              <Shield className="w-10 h-10 text-primary-800 mx-auto mb-3" />
              <h4 className="font-semibold text-foreground text-sm">Enhanced Security</h4>
            </div>
            <div className="bg-primary-50 rounded-2xl p-6 text-center">
              <Server className="w-10 h-10 text-primary-800 mx-auto mb-3" />
              <h4 className="font-semibold text-foreground text-sm">Full Control</h4>
            </div>
            <div className="bg-primary-50 rounded-2xl p-6 text-center">
              <Zap className="w-10 h-10 text-primary-800 mx-auto mb-3" />
              <h4 className="font-semibold text-foreground text-sm">Low Latency</h4>
            </div>
          </div>

          {/* Industries */}
          <div className="bg-muted rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Industries We Serve</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-background rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-1">{industry.name}</h4>
                  <p className="text-muted-foreground text-sm">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-primary-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Key Benefits</h3>
            <div className="max-w-2xl mx-auto space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-300 flex-shrink-0" />
                  <span className="text-primary-100">{benefit}</span>
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

export default PrivateNetworksPage;
