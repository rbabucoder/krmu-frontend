import EligibilityAdmissionFees from "./comp/EligibilityAdmissionFees";
import FaqSection from "./comp/FaqSection";
import HeroSection from "./comp/HeroSection";
import LearnByDoingSection from "./comp/LearnByDoingSection";
import PostgraduateCreateSection from "./comp/PostgraduateCreateSection";
import ProgrammeSection from "./comp/ProgrammeSection";
import WhatWillYouStudy from "./comp/WhatWillYouStudy";

const page = () => {
  return (
    <>
      <HeroSection />
      <ProgrammeSection />
      <LearnByDoingSection />
      <EligibilityAdmissionFees />
      <WhatWillYouStudy />
      <PostgraduateCreateSection />
      <FaqSection />
    </>
  );
};

export default page;
