import PersonalInterview  from "./comp/PersonalInterview";
import PHDAdmissionAccordion from "./comp/PHDAdmissionAccordion";
import PHDAdmissionHero from "./comp/PHDAdmissionHero";
import PHDOfferedProgrammes from "./comp/PHDOfferedProgrammes";


const page = () => {
  return (
    <>
     <PHDAdmissionHero />
     <PHDOfferedProgrammes />
     <PHDAdmissionAccordion />
     <PersonalInterview />
    </>
  );
};

export default page;
