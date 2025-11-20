import CareerCurrentOpeningSection from "./comp/CareerCurrentOpeningSection";
import CareerHeroSection from "./comp/CareerHeroSection";
import CareerJobListings from "./comp/CareerJobListings";
import CareerSubmitResume from "./comp/CareerSubmitResume";

const page = () => {
  return (
    <>
      <CareerHeroSection />
      <CareerCurrentOpeningSection />
      <CareerJobListings />
      <CareerSubmitResume />
    </>
  );
};

export default page;
