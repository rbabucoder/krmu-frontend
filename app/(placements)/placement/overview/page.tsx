import BridgingAcademia from "../components/BridgingAcademia";
import CDT from "../components/CDT";
import ContactEnquiries from "../components/ContactEnquiries";
import HeroSection from "../components/HeroSection";
import PlacementHighlight from "../components/PlacementHighlight";
import { PlacementPolicy } from "../components/PlacementPolicy";
import YourPathsuccess from "../components/YourPathsuccess";

const page = () => {
  return (
    <>
      <HeroSection />
      <PlacementHighlight />
      <YourPathsuccess />
      <BridgingAcademia />
      <PlacementPolicy />
      <CDT />
      <ContactEnquiries />
    </>
  );
};

export default page;
