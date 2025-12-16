import TelecomHero from "./telecom/TelecomHero";
import TelecomIntro from "./telecom/TelecomIntro";
import NetworkEngineering from "./telecom/NetworkEngineering";
import FiberOptic from "./telecom/FiberOptic";
import P25Solutions from "./telecom/P25Solutions";
import SafetyCode6 from "./telecom/SafetyCode6";
import PrivateNetworksIoT from "./telecom/PrivateNetworksIoT";
import SiteMaintenance from "./telecom/SiteMaintenance";
import ProjectManagement from "./telecom/ProjectManagement";
import TelecomCTA from "./telecom/TelecomCTA";

const Telecom = () => {
  return (
    <div className="min-h-screen">
      <TelecomHero />
      <TelecomIntro />
      <NetworkEngineering />
      <FiberOptic />
      <P25Solutions />
      <SafetyCode6 />
      <PrivateNetworksIoT />
      <SiteMaintenance />
      <ProjectManagement />
      <TelecomCTA />
    </div>
  );
};

export default Telecom;
