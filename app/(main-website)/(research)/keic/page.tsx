import KEICButtons from "./comp/KEICButtons";
import KEICEvents from "./comp/KEICEvents";
import KEICFacilities from "./comp/KEICFacilities";
import KEICGovt from "./comp/KEICGovt";
import KEICHero from "./comp/KEICHero";
import KEICInauguration from "./comp/KEICInauguration";
import KEICKeyInitiative from "./comp/KEICKeyInitiative";
import KEICMembers from "./comp/KEICMembers";
import KEICPastEvents from "./comp/KEICPastEvents";
import KEICProgOffered from "./comp/KEICProgOffered";
import KEICRanking from "./comp/KEICRanking";
import KEICTransistion from "./comp/KEICTransistion";
import KEICVisionMission from "./comp/KEICVisionMission";
import KEICWelcomeMessage from "./comp/KEICWelcomeMessage";

const page = () => {
  return (
    <>
      <KEICHero />
      <KEICWelcomeMessage />
      <KEICVisionMission />
      <KEICProgOffered />
      <KEICKeyInitiative />
      <KEICEvents />
      <KEICPastEvents />
      <KEICRanking />
      <KEICFacilities />
      <KEICGovt />
      <KEICInauguration />
      <KEICMembers />
      <KEICTransistion />
      <KEICButtons />
    </>
  );
};

export default page;
