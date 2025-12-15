import CDC from "./comp/CDC";
import { HeroSection } from "./comp/HeroSection";
import PlacementSupport from "./comp/PlacementSupport";
import Restriction from "./comp/Restriction";
import StudentEncouraged from "./comp/StudentEncouraged";

const page = () => {
  return (
    <>
      <HeroSection />
      <StudentEncouraged />
      <PlacementSupport />
      <CDC />
      <Restriction />
    </>
  );
};

export default page;
