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
import Teachyou from "./comp/Teachyou";
import MacLaptop from "./comp/MacLaptop";
import BiggestBrand from "./comp/BiggestBrand";
import SEMCESlideSection from "./comp/SEMCESlideSection";

const page = () => {
  return (
    <>
      <main className="semce_main_container">
        <Stats />
        <FutureReady />
        <MacLaptop />
        <BiggestBrand />
        <ExploreProgrammes />
        <LearnByCreating />
        <NewsletterSection />
        <LifeAtSEMCE />
        <SEMCESlideSection />
        <Teachyou />
        <YourStory /> 

        {/* 
        <SEMCETestimonials />
        <GetStartedSteps />
         */}
      </main>
    </>
  );
};

export default page;
