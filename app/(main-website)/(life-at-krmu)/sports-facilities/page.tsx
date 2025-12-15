import { getSportAndFacilityPageData } from "@/lib/api/sport-facility";
import SportEventsAndTournament from "./comp/SportEventsAndTournament";
import SportsHero from "./comp/SportsHero";
import SportsIntro from "./comp/SportsIntro";
import SportsIndoorOutDoor from "./comp/SportsIndoorOutDoor";

const page = async () => {
  const sportFacPageData = await getSportAndFacilityPageData();

  const indoorOutdoorSports = sportFacPageData?.sport_facility_grid;

  return (
    <>
      <SportsHero />
      <SportsIntro />
      <SportsIndoorOutDoor data={indoorOutdoorSports} />
      <SportEventsAndTournament />
    </>
  );
};

export default page;
