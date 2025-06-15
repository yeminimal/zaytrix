
import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
  children?: ReactNode;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  primaryCTA, 
  secondaryCTA, 
  image,
  children 
}: HeroSectionProps) => {
  return (
    <section 
      className="hero-fullwidth"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <div className="hero-overlay"></div>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="hero-content space-y-8">
            <div className="space-y-4">
              <h1 className="leading-tight">
                {title} <span className="text-primary-100">{subtitle}</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                {description}
              </p>
            </div>
            {(primaryCTA || secondaryCTA || children) && (
              <div className="flex flex-col sm:flex-row gap-4">
                {primaryCTA && (
                  <a 
                    href={primaryCTA.href} 
                    className="cta-primary inline-block text-center bg-white text-primary hover:bg-gray-50"
                  >
                    {primaryCTA.text}
                  </a>
                )}
                {secondaryCTA && (
                  <a 
                    href={secondaryCTA.href} 
                    className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-3 rounded-md font-semibold tracking-tight transition-colors inline-block text-center"
                  >
                    {secondaryCTA.text}
                  </a>
                )}
                {children}
              </div>
            )}
          </div>
          {/* Empty space for balance */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
