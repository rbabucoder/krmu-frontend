import { getAdmission2PageData } from "@/lib/api/Admission/admission2";
import AdmissionLocation from "./admission2Comp/AdmissionLocation";
import AdmissionTableOfContent from "./admission2Comp/AdmissionTableOfContent";
import ContactWithUs from "./admission2Comp/ContactWithUs";
import Admission2Alumni from "./admission2Comp/Admission2Alumni";
import Admission2Search from "./admission2Comp/Admission2Search";
import Admission2WhatMakes from "./admission2Comp/Admission2WhatMakes";
import Admission2Process from "./admission2Comp/Admission2Process";
import Admission2Hero from "./admission2Comp/Admission2Hero";
import Admission2Fee from "./admission2Comp/Admission2Fee";

const page = async () => {
  const admission2Data = await getAdmission2PageData();

  const admTOC = admission2Data?.adm_toc;
  const admAlumni = admission2Data?.adm2_alumni;


  return (
    <>
      <Admission2Hero />
      <Admission2Process />
      <Admission2WhatMakes />
      <Admission2Search />
      <Admission2Fee />
      <AdmissionTableOfContent
        heading={admTOC?.heading}
        highlight={admTOC?.highlightheading}
        desc={admTOC?.description}
        tocfaqs={admTOC?.tocfaq}
        tocimg={admTOC?.tocimg}
        tocbtn={admTOC?.tocbtn}
      />
      <Admission2Alumni admAlumni={admAlumni} />
      <AdmissionLocation />
      <ContactWithUs />
      {/* 



  */}
    </>
  );
};

export default page;
