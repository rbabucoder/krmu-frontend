import { getPlacementOverview } from "@/lib/api/placement";
import BridgingAcademia from "../components/BridgingAcademia";
import CDT from "../components/CDT";
import ContactEnquiries from "../components/ContactEnquiries";
import HeroSection from "../components/HeroSection";
import PlacementHighlight from "../components/PlacementHighlight";
import { PlacementPolicy } from "../components/PlacementPolicy";
import YourPathsuccess from "../components/YourPathsuccess";

const page = async () => {
  const placementOverview = await getPlacementOverview();

  const overviewHero = placementOverview?.placementsoverviewcontainer.find(
    (component) =>
      component?.__component === "placement-overview.placement-hero"
  );

  const overviewHightlight =
    placementOverview?.placementsoverviewcontainer.find(
      (component) =>
        component?.__component === "placement-overview.placement-highlight"
    );

  return (
    <>
      {overviewHero && (
        <HeroSection
          title={overviewHero?.title}
          subtitle={overviewHero?.subtitle}
          overviewvideo={overviewHero?.overviewvideo}
          overviewcounter={overviewHero?.overviewcounter}
        />
      )}
      {overviewHightlight && (
        <PlacementHighlight
          heading={overviewHightlight?.heading}
          slideImages={overviewHightlight?.placementhighlights}
          btn={overviewHightlight?.highlightbtn}
        />
      )}
      <YourPathsuccess />
      <BridgingAcademia />
      <PlacementPolicy />
      <CDT />
      <ContactEnquiries />
    </>
  );
};

export default page;
