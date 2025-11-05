import CareerCurrentOpeningSection from "./comp/CareerCurrentOpeningSection";
import CareerHeroSection from "./comp/CareerHeroSection";
import CareerJobListings from "./comp/CareerJobListings";

const page = () => {
  return (
    <>
      <CareerHeroSection />
      <CareerCurrentOpeningSection />
      <CareerJobListings />
    </>
  );
};

export default page;
