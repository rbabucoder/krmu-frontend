import AcademicHero from "./comp/AcademicHero";
import WelcomeDean from "./comp/WelcomeDean";
import TeamBehind from "./comp/TeamBehind";
import NEP from "./comp/NEP";
import InnovativeTeaching from "./comp/InnovativeTeaching";
import AcademicPolicies from "./comp/AcademicPolicies";
import NurturingSuccess from "./comp/NurturingSuccess";
import AcademicSlide from "./comp/AcademicSlide";
import Assist from "./comp/Assist";

const page = () => {
  return (
    <>
      <AcademicHero />
      <WelcomeDean />
      <TeamBehind />
      <NEP />
      <InnovativeTeaching />
      <AcademicPolicies />
      <NurturingSuccess />
      <AcademicSlide />
      <Assist />
    </>
  );
};

export default page;
