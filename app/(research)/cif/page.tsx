import CIFAchievements from "./comp/CIFAchievements";
import CIFFacilities from "./comp/CIFFacilities";
import CIFHeroSection from "./comp/CIFHeroSection";
import { CIFIntegral } from "./comp/CIFIntegral";
import CIFUpcomingEvents from "./comp/CIFUpcomingEvents";
import MessageDirector from "./comp/MessageDirector";
import TeamCIF from "./comp/TeamCIF";

const page = () => {
  return (
    <>
      <CIFHeroSection />
      <CIFIntegral />
      <section className="bg-[url(/research/bg-gradient.webp)] bg-no-repeat bg-cover py-[30px] px-4">
        <MessageDirector />
        <TeamCIF />
      </section>
      <CIFFacilities />
      <CIFAchievements />
      <CIFUpcomingEvents />
    </>
  );
};

export default page;
