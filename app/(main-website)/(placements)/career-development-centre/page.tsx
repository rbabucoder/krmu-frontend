import { getCDCTeam } from "@/lib/api/cdcteam";
import CDCAdvisoryBoard from "./comp/CDCAdvisoryBoard";
import CDCCOntact from "./comp/CDCCOntact";
import CDCHeroSection from "./comp/CDCHeroSection";
import CDCTrainingPlacement from "./comp/CDCTrainingPlacement";
import MeetOurTeam from "./comp/MeetOurTeam";
import TeamMembers from "./comp/TeamMembers";

const page = async () => {

  const cdcTeamData = await getCDCTeam();


  

  return (
    <>
      <CDCHeroSection />
      <CDCTrainingPlacement />
      <MeetOurTeam />
      <TeamMembers cdcTeamData={cdcTeamData} />
      <CDCAdvisoryBoard />
      <CDCCOntact />
    </>
  );
};

export default page;
