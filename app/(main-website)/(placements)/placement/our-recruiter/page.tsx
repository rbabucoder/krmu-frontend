import OurRecruiterCounter from "./component/OurRecruiterCounter";
import OurRecruitersHeroSection from "./component/OurRecruitersHeroSection";
import ProminentRecruiters from "./component/ProminentRecruiters";

const page = () => {
  return (
    <>
      <OurRecruitersHeroSection />
      <OurRecruiterCounter />
      <ProminentRecruiters />
    </>
  );
};

export default page;
