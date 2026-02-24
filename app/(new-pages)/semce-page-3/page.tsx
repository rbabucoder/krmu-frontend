import EligibilityAdmissionFees from "./comp/EligibilityAdmissionFees";
import FaqSection from "./comp/FaqSection";
import LearnByDoingSection from "./comp/LearnByDoingSection";
import ProgrammeSection from "./comp/ProgrammeSection";

const page = () => {
  return (
    <>
      <ProgrammeSection />
      <LearnByDoingSection />
      <EligibilityAdmissionFees />
      <FaqSection />
    </>
  );
};

export default page;
