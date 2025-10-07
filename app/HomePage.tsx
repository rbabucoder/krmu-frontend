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
import ShapingFuture from "./Home/ShapingFuture";
import VisitExplore from "./Home/VisitExplore";
import WhyKRMU from "./Home/WhyKRMU";
import YourJourney from "./Home/YourJourney";
import MobElevateCampus from "./Home/MobElevateCampus";
import PioneerExcellence from "./Home/PioneerExcellence";

export default async function HomePage() {
  const homepageContent = await getHomePageData();

  const hero = homepageContent.find(
    (component) => component.__component === "homepage-components.hero-section"
  );
  const aDecadeData = homepageContent.find(
    (component) =>
      component.__component === "homepage-components.a-decade-section"
  );

  const yourJourneyData = homepageContent.find(
    (component) => component.__component === "homepage-components.yourjourney"
  );
  const AFSData = homepageContent.find(
    (component) => component.__component === "homepage-components.afs-section"
  );

  const ourTopRecruitersData = homepageContent.find(
    (component) =>
      component.__component === "homepage-components.our-top-recruiters"
  );

  const feeStructureScholarData = homepageContent.find(
    (component) => component.__component === "homepage-components.fee-scholar"
  );

  const whyKRMUData = homepageContent.find(
    (component) => component.__component === "homepage-components.whykrmu"
  );

  const elevateCampusData = homepageContent.find(
    (component) =>
      component.__component === "homepage-components.elevate-campus"
  );
  const homeKRMTestimonialData = homepageContent.find(
    (component) =>
      component.__component === "homepage-components.home-testimonials"
  );
  const shapingFutureData = homepageContent.find(
    (component) =>
      component.__component === "homepage-components.shaping-future"
  );
  const globalPartenerData = homepageContent.find(
    (component) =>
      component.__component === "homepage-components.global-partener"
  );

  const visitExploreData = homepageContent.find(
    (component) => component.__component === "homepage-components.visit-explore"
  );

  const eventsNewsData = homepageContent.find(
    (component) =>
      component.__component === "homepage-components.home-events-and-news"
  );

  return (
    <>
      {hero && (
        <HeroSection
          title={hero?.title}
          subtitle={hero?.subtitle}
          video={hero?.HeroSectionVideo}
        />
      )}
      <main className="w-full">
        {aDecadeData && (
          <ADecade
            leftContent={aDecadeData?.adecadeleftcol}
            rightContent={aDecadeData?.adecaderightcol}
          />
        )}
        {yourJourneyData && (
          <YourJourney
            title={yourJourneyData?.title}
            content={yourJourneyData?.description}
            buttons={yourJourneyData?.button}
          />
        )}
        {AFSData && (
          <AFS
            content1={AFSData?.afs1content}
            content2={AFSData?.afs2content}
            content3={AFSData?.afs3content}
            image1={AFSData?.afsimage1}
            image2={AFSData?.afsimage2}
            image3={AFSData?.afsimage3}
          />
        )}
        {ourTopRecruitersData && (
          <OurTopRecruiters
            title={ourTopRecruitersData?.title}
            counters={ourTopRecruitersData?.counter}
            logos={ourTopRecruitersData?.logos}
          />
        )}

        {feeStructureScholarData && (
          <PlacementsRecruiters
            title1={feeStructureScholarData?.text1}
            title2={feeStructureScholarData?.text2}
            feeImage={feeStructureScholarData?.FeeStructureImage}
            scholarImage={feeStructureScholarData?.ScholarshipImage}
          />
        )}
        {whyKRMUData && (
          <WhyKRMU
            title={whyKRMUData?.title}
            subtitle={whyKRMUData?.subtitle}
            description={whyKRMUData?.Descriptions}
          />
        )}
        <div className="hidden lg:block">
          {elevateCampusData && (
            <ElevateCampus
              elevateCampus={elevateCampusData?.elevatecampus1}
              elevateImage1={elevateCampusData?.elevatecampusimage1}
              elevateCampus2={elevateCampusData?.ElevateCampus2}
              elevateImage2={elevateCampusData?.elevatecampusimage2}
              elevateCampus3={elevateCampusData?.elevatecampus3}
              elevateImage3={elevateCampusData?.elevatecampusimage3}
            />
          )}
        </div>
        <div className="lg:hidden">
          {elevateCampusData && (
            <MobElevateCampus
              elevateCampus={elevateCampusData?.elevatecampus1}
              elevateImage1={elevateCampusData?.elevatecampusimage1}
              elevateCampus2={elevateCampusData?.ElevateCampus2}
              elevateImage2={elevateCampusData?.elevatecampusimage2}
              elevateCampus3={elevateCampusData?.elevatecampus3}
              elevateImage3={elevateCampusData?.elevatecampusimage3}
            />
          )}
        </div>

        {homeKRMTestimonialData && (
          <HomeTestimonial
            title={homeKRMTestimonialData?.title}
            desc={homeKRMTestimonialData?.description}
          />
        )}
        {shapingFutureData && (
          <ShapingFuture
            highlight={shapingFutureData?.highlightext}
            subtitle={shapingFutureData?.subtitle}
            afterHighLight={shapingFutureData?.afterhighlighttext}
            desc={shapingFutureData?.descriptions}
            link1text={shapingFutureData?.link1text}
            link1={shapingFutureData?.link1}
            link2text={shapingFutureData?.link2text}
            link2={shapingFutureData?.link2}
            shapingimage={shapingFutureData?.shapingimage}
            mobShapimage={shapingFutureData?.mobileshapingimage}
            shapingCounters={shapingFutureData?.shapingCounter}
          />
        )}
        {globalPartenerData && (
          <GlobalPartner
            title={globalPartenerData?.title}
            desc={globalPartenerData?.descriptions}
            logoSliderHeading={globalPartenerData?.logosliderheading}
            globalLogos={globalPartenerData?.globalpartnerimages}
          />
        )}
        {visitExploreData && (
          <VisitExplore
            title1={visitExploreData?.title1}
            title2={visitExploreData?.title2}
            desc={visitExploreData.description}
            visitexplorebtns={visitExploreData.visitexplorebtn}
          />
        )}
        {eventsNewsData && (
          <EventsAndNews
            title={eventsNewsData?.title}
            newsandeventbtn={eventsNewsData?.newsandeventbtn}
          />
        )}
        <PioneerExcellence />
      </main>
    </>
  );
}
