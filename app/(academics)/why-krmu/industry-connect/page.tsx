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

const page = () => {
  return (
    <>
      <IndustryHero />
      <IndustryPartenerships />
      <JapeneseCuisines />
      <ArtMuralEvent />
      <NetworkingOpportunities />
      <ShapingCareer />
      <Seminar />
      <IdeaForge />
      <ExpertTalk />
      <DeputyCommissioner />
    </>
  );
};

export default page;
