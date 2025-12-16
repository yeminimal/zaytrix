import { 
  ClipboardList, 
  FileCheck, 
  Users, 
  Search, 
  DollarSign, 
  CheckSquare, 
  MessageSquare,
  CheckCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProjectManagement = () => {
  const services = [
    {
      title: "Full Project Lifecycle Planning & Execution",
      description: "From initial feasibility studies, site surveys, and design, to deployment, commissioning, and operational handover.",
      icon: ClipboardList
    },
    {
      title: "Regulatory & Compliance Oversight",
      description: "Ensuring all projects meet ISED, FCC, SC6, and other Canadian/North American regulatory requirements.",
      icon: FileCheck
    },
    {
      title: "Vendor & Contractor Management",
      description: "Coordination, supervision, and performance monitoring of all vendors, contractors, and sub-consultants to guarantee quality and timely delivery.",
      icon: Users
    },
    {
      title: "Technical Due Diligence & Risk Management",
      description: "Comprehensive technical assessments, risk identification, mitigation strategies, and contingency planning.",
      icon: Search
    },
    {
      title: "Budgeting & Resource Optimization",
      description: "Financial oversight, resource allocation, and cost control to maximize project efficiency and ROI.",
      icon: DollarSign
    },
    {
      title: "Quality Assurance & Reporting",
      description: "Implementation of robust QA processes, including site audits, progress tracking, and transparent reporting to stakeholders.",
      icon: CheckSquare
    },
    {
      title: "Strategic Advisory & Stakeholder Engagement",
      description: "Expert guidance for decision-making, technology selection, and long-term network planning, including coordination with government agencies, public safety authorities, and enterprise clients.",
      icon: MessageSquare
    }
  ];

  const whyChooseUs = [
    "Deep expertise across fiber, wireless, IoT, private networks, and public safety communications.",
    "Proven track record delivering government, enterprise, and industrial projects in Canada and North America.",
    "Commitment to safety, quality, regulatory compliance, and accountability.",
    "Transparent reporting and project governance that keeps stakeholders informed at every stage.",
    "Flexible delivery models tailored for large-scale rollouts, strategic initiatives, and multi-vendor environments."
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <ClipboardList className="w-10 h-10 text-primary-800" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Telecom Project Management & Technical Advisory
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Zaytrix delivers comprehensive project management and technical advisory services for telecom, fiber, private networks, IoT, and mission-critical communications projects. Our team combines engineering expertise, regulatory knowledge, and operational excellence to ensure that complex projects are delivered on time, on budget, and to specification — every time.
            </p>
          </div>

          {/* Our Services */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground tracking-tight text-center">
              Our End-to-End Project Management & Advisory Services Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 h-full">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary-800" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">{service.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Zaytrix is the Trusted Choice */}
          <div className="bg-primary-800 rounded-2xl p-8 lg:p-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-white tracking-tight text-center">
                Why Zaytrix is the Trusted Choice for Canadian Projects
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
                Zaytrix empowers organizations to execute complex telecom and critical communications projects with confidence, <strong>bridging the gap between technical execution, business objectives, and regulatory compliance.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectManagement;
