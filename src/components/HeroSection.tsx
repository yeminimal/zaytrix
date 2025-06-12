
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
    <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-gray-900 leading-tight">
                {title} <span className="text-primary">{subtitle}</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
            {(primaryCTA || secondaryCTA || children) && (
              <div className="flex flex-col sm:flex-row gap-4">
                {primaryCTA && (
                  <a href={primaryCTA.href} className="cta-primary inline-block text-center">
                    {primaryCTA.text}
                  </a>
                )}
                {secondaryCTA && (
                  <a href={secondaryCTA.href} className="cta-outline inline-block text-center">
                    {secondaryCTA.text}
                  </a>
                )}
                {children}
              </div>
            )}
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={image.src}
              alt={image.alt}
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              loading="lazy"
              decoding="async"
              width="800"
              height="400"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
