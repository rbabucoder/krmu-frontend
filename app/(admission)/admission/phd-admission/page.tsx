import { getPhdAdmissionData } from "@/lib/api/admissionenroll";
import PersonalInterview from "./comp/PersonalInterview";
import PHDAdmissionAccordion from "./comp/PHDAdmissionAccordion";
import PHDAdmissionHero from "./comp/PHDAdmissionHero";
import PHDOfferedProgrammes from "./comp/PHDOfferedProgrammes";

const page = async () => {
  const phdAdmissionData = await getPhdAdmissionData();

  return (
    <>
      <PHDAdmissionHero
        heading={phdAdmissionData?.heading}
        subheading={phdAdmissionData?.subheading}
        content={phdAdmissionData?.content}
        herobtn={phdAdmissionData?.hero_btn}
        heroimg={phdAdmissionData?.heroimg}
      />
      <PHDOfferedProgrammes
        heading={phdAdmissionData?.phdprogramme_offered?.phdOffered_heading}
        offeredSchools={
          phdAdmissionData?.phdprogramme_offered?.phd_programmes_schools
        }
        evenOddCards={phdAdmissionData?.phdprogramme_offered?.even_odd_sem_card}
      />
      <PHDAdmissionAccordion acc={phdAdmissionData?.phd_admission_acc} />
      <PersonalInterview
        heading={phdAdmissionData?.personal_interview?.heading}
        content={phdAdmissionData?.personal_interview?.content}
        info_heading={phdAdmissionData?.personal_interview?.info_heading}
        interview_img_url={
          phdAdmissionData?.personal_interview?.personal_interview_img?.url
        }
      />
    </>
  );
};

export default page;
