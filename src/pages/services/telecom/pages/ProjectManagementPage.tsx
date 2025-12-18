import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Target, Users, Calendar, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import TelecomCTA from "../TelecomCTA";

const ProjectManagementPage = () => {
  const services = [
    {
      title: "End-to-End Project Management",
      description: "Complete project lifecycle management from initiation through closeout, ensuring on-time and on-budget delivery."
    },
    {
      title: "Program Management",
      description: "Coordinating multiple related projects to achieve strategic objectives and optimize resource utilization."
    },
    {
      title: "Technical Advisory Services",
      description: "Expert guidance on technology selection, architecture decisions, and implementation strategies."
    },
    {
      title: "Vendor Management",
      description: "Coordinating equipment suppliers, subcontractors, and service providers to ensure quality and timely delivery."
    },
    {
      title: "Risk Management",
      description: "Identifying, assessing, and mitigating project risks to protect timelines, budgets, and quality."
    },
    {
      title: "Stakeholder Communication",
      description: "Regular reporting and communication to keep all stakeholders informed and aligned throughout the project."
    }
  ];

  const projectTypes = [
    "Network deployments and expansions",
    "Technology migrations and upgrades",
    "Site builds and modifications",
    "Equipment installations and cutovers",
    "System integrations",
    "Decommissioning projects"
  ];

  const whyChooseUs = [
    "Deep telecom industry expertise",
    "Proven methodologies and processes",
    "Experienced, certified project managers",
    "Strong vendor relationships",
    "Track record of successful deliveries"
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
              Project Management & Advisory
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Expert telecom project management and technical advisory services to deliver your initiatives on time, on budget, and to specification.
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
                Delivering Telecom Projects Successfully
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Zaytrix provides expert project management and technical advisory services for telecommunications projects of all sizes and complexity. Our experienced team brings proven methodologies and deep industry knowledge to every engagement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From initial planning through final closeout, we ensure your projects are delivered on time, within budget, and to the highest quality standards.
              </p>
            </div>
            <div>
              <img 
                src="/mnmgmts_1.webp" 
                alt="Project management and advisory services" 
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
              <Target className="w-10 h-10 text-primary-800 mx-auto mb-3" />
              <h4 className="font-semibold text-foreground text-sm">On-Target Delivery</h4>
            </div>
            <div className="bg-primary-50 rounded-2xl p-6 text-center">
              <Users className="w-10 h-10 text-primary-800 mx-auto mb-3" />
              <h4 className="font-semibold text-foreground text-sm">Expert Team</h4>
            </div>
            <div className="bg-primary-50 rounded-2xl p-6 text-center">
              <Calendar className="w-10 h-10 text-primary-800 mx-auto mb-3" />
              <h4 className="font-semibold text-foreground text-sm">Timeline Control</h4>
            </div>
            <div className="bg-primary-50 rounded-2xl p-6 text-center">
              <BarChart className="w-10 h-10 text-primary-800 mx-auto mb-3" />
              <h4 className="font-semibold text-foreground text-sm">Budget Management</h4>
            </div>
          </div>

          {/* Project Types & Why Choose Us */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Project Types We Manage</h3>
              <div className="space-y-3">
                {projectTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-800 flex-shrink-0" />
                    <span className="text-foreground text-sm">{type}</span>
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
              Trust Zaytrix to <strong className="text-white">manage your telecom projects</strong> with the expertise, diligence, and professionalism they deserve. We deliver results that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      <TelecomCTA />
    </div>
  );
};

export default ProjectManagementPage;
