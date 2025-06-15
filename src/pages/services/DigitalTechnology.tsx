
import HeroSection from "./digital-technology/HeroSection";
import Highlights from "./digital-technology/Highlights";
import CoreServicesSection from "./digital-technology/CoreServicesSection";
import DesignDevelopment from "./digital-technology/DesignDevelopment";
import ELearningSection from "./digital-technology/ELearningSection";
import CTASection from "./digital-technology/CTASection";
import PageHead from "@/components/PageHead";

const DigitalTechnology = () => {
  return (
    <>
      <PageHead 
        title="Digital Technology Services"
        description="Transform your business with cutting-edge digital technology solutions from Zaytrix. Custom software development, digital transformation, and innovative tech solutions."
        keywords="digital technology, software development, digital transformation, custom applications, tech solutions, Zaytrix"
        canonicalUrl="https://zaytrix.com/services/digital-technology"
      />
      
      <div className="min-h-screen">
        <HeroSection />
        <Highlights />
        <CoreServicesSection />
        <DesignDevelopment />
        <ELearningSection />
        <CTASection />
      </div>
    </>
  );
};

export default DigitalTechnology;
