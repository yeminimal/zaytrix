import { ExternalLink } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

interface Partner {
  name: string;
  logoUrl: string;
  websiteUrl: string;
  description: string;
}

const partners: Partner[] = [
  {
    name: "Veltris",
    logoUrl: "/partners/veltris-logo.svg",
    websiteUrl: "https://www.veltris.com",
    description: "AI-Powered Solution Accelerators"
  }
];

const PartnersSection = () => {
  const sectionRef = useInViewAnimation();

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-muted/30 opacity-0"
    >
      <div className="container-custom">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-foreground">Our Partners</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver exceptional solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-background hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/30"
            >
              <div className="h-16 flex items-center justify-center">
                <img
                  src={partner.logoUrl}
                  alt={`${partner.name} logo`}
                  className="h-12 md:h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    // Fallback to text if image fails
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<span class="text-2xl font-bold text-primary">${partner.name}</span>`;
                  }}
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                <span>{partner.description}</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
