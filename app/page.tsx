import { getHomePageData } from "@/lib/api/home";
import ADecade from "./Home/ADecade";
import AFS from "./Home/AFS";
import ElevateCampus from "./Home/ElevateCampus";
import EventsAndNews from "./Home/EventsAndNews";
import GlobalPartner from "./Home/GlobalPartner";
import HeroSection from "./Home/HeroSection";
import HomeTestimonial from "./Home/HomeTestimonial";
import OurTopRecruiters from "./Home/OurTopRecruiters";
import PlacementsRecruiters from "./Home/PlacementsRecruiters";
import { ShapingFuture } from "./Home/ShapingFuture";
import VisitExplore from "./Home/VisitExplore";
import WhyKRMU from "./Home/WhyKRMU";
import YourJourney from "./Home/YourJourney";

export default async function Home() {
  const homepageContent = await getHomePageData();

  const hero = homepageContent.find(
    (component) => component.__component === "homepage-components.hero-section"
  );
  const aDecadeData = homepageContent.find(
    (component) =>
      component.__component === "homepage-components.a-decade-section"
  );

  const yourJourneyData = homepageContent.find(
    (component) =>
      component.__component === "homepage-components.yourjourney"
  );
  const AFSData = homepageContent.find(
    (component) =>
      component.__component === "homepage-components.afs-section"
  );
  





  return (
    <>
      {hero && (
        <HeroSection
          title={hero.title}
          subtitle={hero.subtitle}
          video={hero.HeroSectionVideo}
        />
      )}
      <main className="w-full">
        {aDecadeData && <ADecade leftContent={aDecadeData.adecadeleftcol} rightContent={aDecadeData.adecaderightcol} />}
        {yourJourneyData && <YourJourney title={yourJourneyData.title} content={yourJourneyData.description} buttons={yourJourneyData.button} />}
        <AFS />
        <OurTopRecruiters />
        <PlacementsRecruiters />
        <WhyKRMU />
        <ElevateCampus />
        <HomeTestimonial />
        <ShapingFuture />
        <GlobalPartner />
        <VisitExplore />
        <EventsAndNews />
      </main>
    </>
  );
}
