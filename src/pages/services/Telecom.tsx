
import TelecomHero from "./telecom/TelecomHero";
import TelecomBenefits from "./telecom/TelecomBenefits";
import TelecomServices from "./telecom/TelecomServices";
import TelecomCTA from "./telecom/TelecomCTA";

const Telecom = () => {
  return (
    <div className="min-h-screen">
      <TelecomHero />
      <TelecomBenefits />
      <TelecomServices />
      <TelecomCTA />
    </div>
  );
};

export default Telecom;
