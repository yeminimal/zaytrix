
import HeroSection from "./digital-technology/HeroSection";
import Highlights from "./digital-technology/Highlights";
import CoreServices from "./digital-technology/CoreServices";
import DesignDevelopment from "./digital-technology/DesignDevelopment";
import ELearning from "./digital-technology/ELearning";
import CTASection from "./digital-technology/CTASection";

const DigitalTechnology = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Highlights />
      <CoreServices />
      <DesignDevelopment />
      <ELearning />
      <CTASection />
    </div>
  );
};

export default DigitalTechnology;
