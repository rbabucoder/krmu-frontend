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

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="w-full">
        <ADecade />
        <YourJourney />
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
