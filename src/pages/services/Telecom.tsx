import { Link } from "react-router-dom";
import { ArrowRight, Network, Cable, Radio, Shield, Wifi, Wrench, FolderKanban } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import TelecomHero from "./telecom/TelecomHero";
import TelecomCTA from "./telecom/TelecomCTA";

const telecomServices = [
  {
    title: "Network Engineering & Design",
    description: "End-to-end network architecture, RF planning, and optimization services for high-performance telecommunications infrastructure.",
    icon: Network,
    href: "/services/telecom/network-engineering"
  },
  {
    title: "Fiber Optic Solutions",
    description: "Comprehensive fiber optic services from engineering and design to deployment, testing, and documentation.",
    icon: Cable,
    href: "/services/telecom/fiber-optic"
  },
  {
    title: "P25 Public Safety Solutions",
    description: "Mission-critical radio network solutions for public safety agencies, emergency services, and first responders.",
    icon: Radio,
    href: "/services/telecom/p25-solutions"
  },
  {
    title: "Safety Code 6 & Spectrum Management",
    description: "RF compliance and spectrum management services ensuring networks meet Canadian and U.S. regulatory requirements.",
    icon: Shield,
    href: "/services/telecom/safety-code-6"
  },
  {
    title: "Private Networks & IoT",
    description: "Custom private LTE/5G networks and IoT connectivity solutions for enterprises requiring dedicated wireless infrastructure.",
    icon: Wifi,
    href: "/services/telecom/private-networks"
  },
  {
    title: "Site Maintenance & Managed Services",
    description: "Comprehensive site maintenance and managed services to keep telecommunications networks running at peak performance.",
    icon: Wrench,
    href: "/services/telecom/site-maintenance"
  },
  {
    title: "Project Management & Advisory",
    description: "Expert telecom project management and technical advisory services for successful project delivery.",
    icon: FolderKanban,
    href: "/services/telecom/project-management"
  }
];

const Telecom = () => {
  return (
    <div className="min-h-screen">
      <TelecomHero />
      
      {/* Overview Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-6">
              End-to-End Telecom Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Serving Canadian operators, enterprises, and public-sector clients, we deliver comprehensive solutions that ensure high-performance, reliable, and compliant networks across urban, suburban, and remote environments.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {telecomServices.map((service, index) => (
              <Link key={index} to={service.href} className="group">
                <Card className="h-full border-border hover:shadow-lg hover:border-primary-300 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                      <service.icon className="w-6 h-6 text-primary-800" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary-800 text-sm font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/Network.webp" 
                alt="Telecom network infrastructure" 
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
                Why Choose Zaytrix for Telecom
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                With deep expertise across the full telecom lifecycle, Zaytrix is your trusted partner for telecommunications projects of any scale. Our team combines technical excellence with practical experience to deliver solutions that perform.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-800 mt-2 flex-shrink-0" />
                  <span className="text-foreground">Proven track record with major Canadian carriers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-800 mt-2 flex-shrink-0" />
                  <span className="text-foreground">End-to-end capabilities from design to maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-800 mt-2 flex-shrink-0" />
                  <span className="text-foreground">Expertise in Canadian regulatory compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-800 mt-2 flex-shrink-0" />
                  <span className="text-foreground">National coverage with local expertise</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TelecomCTA />
    </div>
  );
};

export default Telecom;
