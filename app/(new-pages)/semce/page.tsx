import Stats from "./comp/Stats";
import FutureReady from "./comp/FutureReady";
import LearnByCreating from "./comp/LearnByCreating";
import NewsletterSection from "./comp/NewsletterSection";
import EventsExperience from "./comp/EventsExperienceSection";
import InstructorsSection from "./comp/InstructorsSection";
import EventsExperienceSection from "./comp/EventsExperienceSection";
import ExploreProgrammes from "./comp/ExploreProgrammes";
import GetStartedSteps from "./comp/GetStartedSteps";
import ExploreProgrammsTab from "./comp/ExploreProgrammsTab";

const page = () => {
  return (
    <>
      <main className="semce_main_container">
        <Stats />
        <FutureReady />
        <LearnByCreating />
        <NewsletterSection />
        <ExploreProgrammes />
        <GetStartedSteps />
      </main>
    </>
  );
};

export default page;
