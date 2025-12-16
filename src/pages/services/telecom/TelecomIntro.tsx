import { CheckCircle } from "lucide-react";

const TelecomIntro = () => {
  const highlights = [
    "Custom network design and RF optimization",
    "Fiber deployment and maintenance",
    "P25 public safety systems",
    "IoT connectivity solutions",
    "Site maintenance and managed services",
    "Telecom project management"
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              End-to-End Telecom Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Serving Canadian operators, enterprises, and public-sector clients, we deliver end-to-end solutions that ensure high-performance, reliable, and compliant networks across urban, suburban, and remote environments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our expertise spans the full project lifecycle, enabling clients to achieve operational excellence, regulatory compliance, and future-ready connectivity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-800 flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="/Network.webp" 
              alt="Network infrastructure and telecom solutions" 
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelecomIntro;
