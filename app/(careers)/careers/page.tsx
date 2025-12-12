import { getCareerPageData } from "@/lib/api/careers/career";
import CareerCurrentOpeningSection from "./comp/CareerCurrentOpeningSection";
import CareerHeroSection from "./comp/CareerHeroSection";
import CareerJobListings from "./comp/CareerJobListings";
import CareerSubmitResume from "./comp/CareerSubmitResume";

const page = async () => {
  const careerPageData = await getCareerPageData();

  const openings = careerPageData?.openings;

  return (
    <>
      <CareerHeroSection />
      <CareerCurrentOpeningSection />
      <CareerJobListings />
      <CareerSubmitResume openings={openings} />
    </>
  );
};

export default page;
