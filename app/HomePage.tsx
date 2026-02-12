import { Suspense } from "react";
import { getHomePageData } from "@/lib/api/home";
import ADecade from "./(main-website)/Home/ADecade";
import EventsAndNews from "./(main-website)/Home/EventsAndNews";
import GlobalPartner from "./(main-website)/Home/GlobalPartner";
import HeroSection from "./(main-website)/Home/HeroSection";
import HomeTestimonial from "./(main-website)/Home/HomeTestimonial";
import VisitExplore from "./(main-website)/Home/VisitExplore";
import WhyKRMUSection from "./(main-website)/Home/WhyKRMUSection";
import PlacementsSection from "./(main-website)/Home/PlacementsSection";
import Section from "./(main-website)/components/Section";

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
  const ourTopRecruitersData = homepageContent.find(
    (component) =>
      component.__component === "homepage-components.our-top-recruiters"
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
    (component) =>
      component.__component === "homepage-components.visit-explore"
  );
  const eventsNewsData = homepageContent.find(
    (component) =>
      component.__component === "homepage-components.home-events-and-news"
  );

  return (
    <>
      {/* 1. Hero */}
      {hero && (
        <HeroSection
          title={hero?.title}
          subtitle={hero?.subtitle}
          video={hero?.HeroSectionVideo}
          buttons={yourJourneyData?.button}
        />
      )}
      <main className="w-full">
        {/* 2. Stats */}
        {aDecadeData && (
          <ADecade
            leftContent={aDecadeData?.adecadeleftcol}
            rightContent={aDecadeData?.adecaderightcol}
          />
        )}

        {/* 3. Why KRMU */}
        {whyKRMUData && elevateCampusData && (
          <WhyKRMUSection
            title={whyKRMUData?.title}
            subtitle={whyKRMUData?.subtitle}
            description={whyKRMUData?.Descriptions}
            cards={[
              {
                content: elevateCampusData?.elevatecampus1,
                image: elevateCampusData?.elevatecampusimage1,
                accentColor: "#000e8b",
              },
              {
                content: elevateCampusData?.ElevateCampus2,
                image: elevateCampusData?.elevatecampusimage2,
                accentColor: "#e31e24",
              },
              {
                content: elevateCampusData?.elevatecampus3,
                image: elevateCampusData?.elevatecampusimage3,
                accentColor: "#0060aa",
              },
            ]}
          />
        )}

        {/* 4. Placements */}
        {ourTopRecruitersData && (
          <PlacementsSection
            title={ourTopRecruitersData?.title}
            counters={ourTopRecruitersData?.counter}
            logos={ourTopRecruitersData?.logos}
            shapingCounters={shapingFutureData?.shapingCounter}
            link1text={shapingFutureData?.link1text}
            link1={shapingFutureData?.link1}
            link2text={shapingFutureData?.link2text}
            link2={shapingFutureData?.link2}
          />
        )}

        {/* 5. Testimonials */}
        {homeKRMTestimonialData && (
          <Suspense
            fallback={
              <Section>
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-5 animate-pulse" />
                  <div className="h-4 w-96 bg-gray-200 rounded mx-auto animate-pulse" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[1, 2].map((i) => (
                    <div key={i} className="bg-gray-100 rounded-[30px] h-64 animate-pulse" />
                  ))}
                </div>
              </Section>
            }
          >
            <HomeTestimonial
              title={homeKRMTestimonialData?.title}
              desc={homeKRMTestimonialData?.description}
            />
          </Suspense>
        )}

        {/* 6. Partners */}
        {globalPartenerData && (
          <GlobalPartner
            title={globalPartenerData?.title}
            desc={globalPartenerData?.descriptions}
            logoSliderHeading={globalPartenerData?.logosliderheading}
            globalLogos={globalPartenerData?.globalpartnerimages}
          />
        )}

        {/* 7. News & Events */}
        {eventsNewsData && (
          <Suspense
            fallback={
              <Section className="bg-[var(--color-surface-light)]">
                <div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-12 animate-pulse" />
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i}>
                      <div className="bg-gray-200 h-[420px] rounded-t-3xl animate-pulse" />
                      <div className="pt-5 space-y-3">
                        <div className="h-3 w-32 bg-gray-200 rounded animate-pulse" />
                        <div className="h-5 w-48 bg-gray-200 rounded animate-pulse" />
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            }
          >
            <EventsAndNews
              title={eventsNewsData?.title}
              newsandeventbtn={eventsNewsData?.newsandeventbtn}
            />
          </Suspense>
        )}

        {/* 8. CTA Band */}
        {visitExploreData && (
          <VisitExplore
            title1={visitExploreData?.title1}
            title2={visitExploreData?.title2}
            desc={visitExploreData.description}
            visitexplorebtns={visitExploreData.visitexplorebtn}
          />
        )}
      </main>
    </>
  );
}
