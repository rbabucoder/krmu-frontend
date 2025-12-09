import { getLifeAtKRMUOverviewData } from "@/lib/api/lkoverview";
import OverviewHearit from "./comp/OverviewHearit";
import OverviewHero from "./comp/OverviewHero";
import OverviewImpacting from "./comp/OverviewImpacting";
import OverviewInnovate from "./comp/OverviewInnovate";
import OverviewLifeBeyond from "./comp/OverviewLifeBeyond";
import OverviewTreasure from "./comp/OverviewTreasure";
import OveviewSecondHome from "./comp/OveviewSecondHome";
import OverviewYourInterest from "./comp/OverviewYourInterest";
import OverviewYourWellBeing from "./comp/OverviewYourWellBeing";

const page = async () => {
  const overviewData = await getLifeAtKRMUOverviewData();
  const overviewVideo = overviewData?.overview_video;
  const testimonials = overviewData?.hear_it_testimonials;
  return (
    <>
      <OverviewHero overviewVideo={overviewVideo} />
      <OverviewLifeBeyond />
      <OverviewInnovate />
      <OverviewYourWellBeing />
      <OverviewYourInterest />
      <OverviewHearit testimonials={testimonials} />
      <OveviewSecondHome />
      <section className="px-4">
        <div className="max-w-[1664px] mx-auto w-full">
          <OverviewImpacting />
          <OverviewTreasure />
        </div>
      </section>
    </>
  );
};

export default page;
