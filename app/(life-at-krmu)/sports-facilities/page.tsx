import SportEventsAndTournament from "./comp/SportEventsAndTournament";
import SportOutdoor from "./comp/SportOutdoor";
import SportsHero from "./comp/SportsHero";
import SportsIndoor from "./comp/SportsIndoor";
import SportsIntro from "./comp/SportsIntro";

const page = () => {
  return (
    <>
      <SportsHero />
      <SportsIntro />
      <SportsIndoor />
      <SportOutdoor />
      <SportEventsAndTournament />
    </>
  );
};

export default page;
