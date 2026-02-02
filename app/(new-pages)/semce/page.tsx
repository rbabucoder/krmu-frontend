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
import LifeAtSEMCE from "./comp/LifeAtSEMCE";
import YourStory from "./comp/YourStory";
import SEMCETestimonials from "./comp/SEMCETestimonials";

const page = () => {
  return (
    <>
      <main className="semce_main_container">
        <Stats />
        <FutureReady />
        <LearnByCreating />
        <SEMCETestimonials />
        <NewsletterSection />
        <ExploreProgrammes />
        <GetStartedSteps />
        <LifeAtSEMCE />
        <YourStory />
      </main>
    </>
  );
};

export default page;
