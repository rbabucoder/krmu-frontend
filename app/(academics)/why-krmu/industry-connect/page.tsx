import { getIndustryConnectPage } from "@/lib/api/industry-connect";
import ArtMuralEvent from "../comp/ArtMuralEvent";
import DeputyCommissioner from "../comp/DeputyCommissioner";
import ExpertTalk from "../comp/ExpertTalk";
import IdeaForge from "../comp/IdeaForge";
import IndustryHero from "../comp/IndustryHero";
import IndustryPartenerships from "../comp/IndustryPartenerships";
import JapeneseCuisines from "../comp/JapeneseCuisines";
import NetworkingOpportunities from "../comp/NetworkingOpportunities";
import Seminar from "../comp/Seminar";
import ShapingCareer from "../comp/ShapingCareer";

const page = async () => {
  const getIndustryConnectPageData = await getIndustryConnectPage();

  return (
    <>
      {getIndustryConnectPageData && (
        <IndustryHero
          title={getIndustryConnectPageData?.title}
          desc={getIndustryConnectPageData?.description}
          bgImgURL={getIndustryConnectPageData?.bgimage?.url}
        />
      )}
      <IndustryPartenerships
        title={getIndustryConnectPageData?.partnerships_title}
        logos={getIndustryConnectPageData?.partnership_logos}
      />
      <JapeneseCuisines cuisine={getIndustryConnectPageData?.cuisines} />
      <ArtMuralEvent mural={getIndustryConnectPageData?.mural_event} />
      <NetworkingOpportunities
        netopp={getIndustryConnectPageData?.networking_opportunities}
      />
      <ShapingCareer shapcareer={getIndustryConnectPageData?.shaping_career} />
      <Seminar seminar={getIndustryConnectPageData?.seminar} />
      <IdeaForge forgeData={getIndustryConnectPageData?.idea_forge} />
      <ExpertTalk expertTalk={getIndustryConnectPageData?.expert_talk_role} />
      <DeputyCommissioner deput={getIndustryConnectPageData?.deputy_commissioner} />
    </>
  );
};

export default page;
