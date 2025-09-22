import CDCAdvisoryBoard from "./comp/CDCAdvisoryBoard";
import CDCCOntact from "./comp/CDCCOntact";
import CDCHeroSection from "./comp/CDCHeroSection";
import CDCTrainingPlacement from "./comp/CDCTrainingPlacement";
import MeetOurTeam from "./comp/MeetOurTeam";
import TeamMembers from "./comp/TeamMembers";

const page = () => {
  return (
    <>
      <CDCHeroSection />
      <CDCTrainingPlacement />
      <MeetOurTeam />
      <TeamMembers />
      <CDCAdvisoryBoard />
      <CDCCOntact />
    </>
  );
};

export default page;
