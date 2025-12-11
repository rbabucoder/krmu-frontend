import { getKRMUTimesPageData } from "@/lib/api/krmu-times";
import KRMUPDFCards from "./comp/KRMUPDFCards";
import KRMUTimesHeroSection from "./comp/KRMUTimesHeroSection";

const page = async () => {
  const pageData = await getKRMUTimesPageData();

  const heading = pageData?.heading;
  const pdfCards = pageData?.krmu_time_cards

  return (
    <>
      <KRMUTimesHeroSection heading={heading} />
      <KRMUPDFCards data={pdfCards} />
    </>
  );
};

export default page;
