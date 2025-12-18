import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Server, Radio, Wifi, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TelecomCTA from "../TelecomCTA";

const NetworkEngineeringPage = () => {
  const capabilities = [
    {
      title: "End-to-End Network Architecture",
      description: "Full network infrastructure design from macro towers to small cells, ensuring seamless coverage and capacity planning."
    },
    {
      title: "Technology-Agnostic Design",
      description: "Expertise across LTE, 5G NR, CBRS, private LTE/5G, Wi-Fi 6/7, P25, and legacy technologies."
    },
    {
      title: "Network Optimization",
      description: "Performance tuning for existing networks to improve throughput, reduce interference, and enhance user experience."
    },
    {
      title: "RF Planning & Propagation",
      description: "Advanced RF modeling using industry-leading tools for accurate coverage predictions and interference analysis."
    }
  ];

  const rfServices = [
    "RF coverage surveys and propagation modeling",
    "Interference analysis and mitigation",
    "Antenna selection and placement optimization",
    "Drive testing and benchmarking",
    "Network KPI analysis and reporting",
    "Spectrum utilization studies"
  ];

  const whyChooseUs = [
    "Deep expertise in Canadian regulatory and geographic challenges",
    "Proven track record with major carriers and enterprises",
    "End-to-end capabilities from design to deployment",
    "Advanced simulation and modeling tools",
    "Commitment to performance excellence"
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
              Network Engineering & Design
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Comprehensive network architecture, RF planning, and optimization services to build high-performance telecommunications infrastructure.
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
                Building Networks That Perform
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Zaytrix delivers end-to-end network engineering services for telecommunications operators, enterprises, and public sector clients across Canada. Our expertise spans the full spectrum of wireless and wireline technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From initial site surveys to detailed RF design and network optimization, we ensure every network we touch operates at peak performance.
              </p>
            </div>
            <div>
              <img 
                src="/Network.webp" 
                alt="Network engineering and infrastructure" 
                className="rounded-2xl shadow-xl w-full h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Capabilities */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Our Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((item, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* RF Planning Services */}
          <div className="bg-primary-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6">RF Planning & Testing Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rfServices.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-800 flex-shrink-0" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">Why Choose Zaytrix</h3>
            <div className="space-y-4">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-800 flex-shrink-0" />
                  <span className="text-muted-foreground">{reason}</span>
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

export default NetworkEngineeringPage;
