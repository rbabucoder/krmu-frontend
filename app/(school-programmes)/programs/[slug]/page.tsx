import { getSchoolProgrammeData } from "@/lib/api/school-programmes";
import BeyondClassroom from "../../school-programmes-component/BeyondClassroom";
import CareerProspects from "../../school-programmes-component/CareerProspects";
import { ConnectWithUs } from "../../school-programmes-component/ConnectWithUs";
import Curriculum from "../../school-programmes-component/Curriculum";
import DreamCareer from "../../school-programmes-component/DreamCareer";
import Eligibility from "../../school-programmes-component/Eligibility";
import FinancialAssistance from "../../school-programmes-component/FinancialAssistance";
import HeroBanner from "../../school-programmes-component/HeroBanner";
import LabsFacilities from "../../school-programmes-component/LabsFacilities";
import OurLocation from "../../school-programmes-component/OurLocation";
import ProgrammeHighlight from "../../school-programmes-component/ProgrammeHighlight";
import ProgrammeScope from "../../school-programmes-component/ProgrammeScope";
import Specialisation from "../../school-programmes-component/Specialisation"; 
import TableOfContent from "../../school-programmes-component/TableOfContent";
import { notFound } from "next/navigation";
import AdmissionProcessComp from "../../school-programmes-component/AdmissionProcessComp";
import { getPHDProgramme } from "@/lib/api/phd-programmes";
import PHDProgrammes from "../PHDProgramme";

type Props = {
  params: Promise<{ slug: string }>;
};
 
const page = async ({ params }: Props) => {
  const { slug } = await params; // ✅ await params

  const allSchoolProgrammeData = await getSchoolProgrammeData(slug);
  const allSinglePHDProgramme = await getPHDProgramme(slug);

  console.log('allSchoolProgrammeData', allSchoolProgrammeData);

  const singleSchoolProgramme = allSchoolProgrammeData.find(
    (programme) => programme.programmeslug === slug
  );

  const singlePHDProgramme = allSinglePHDProgramme?.find(
    (phdprogram) => phdprogram?.phdslug === slug
  );

  // If not found, redirect to 404 page
  // if (!singleSchoolProgramme) return notFound();

  // Return 404 if either is missing
  if (!singleSchoolProgramme && !singlePHDProgramme) {
    return notFound();
  }

  const title = singleSchoolProgramme?.title;
  const highlightTitle = singleSchoolProgramme?.highlightitle;

  const heroSection = singleSchoolProgramme?.herosection;
  const eligibilitySection = singleSchoolProgramme?.programmeeligibility;
  const programmeScopeSection = singleSchoolProgramme?.programmescope;
  const programmeHighlightSection = singleSchoolProgramme?.programmehighlight;
  const specialisationSection = singleSchoolProgramme?.specialisation;
  const admissionProcessSection = singleSchoolProgramme?.admissionprocess;
  const curriculumSection = singleSchoolProgramme?.curriculum;
  const labfacilitiesSection = singleSchoolProgramme?.labsfacilities;
  const beyondclassSection = singleSchoolProgramme?.beyondclassroom;
  const careerProspectsSection = singleSchoolProgramme?.career;
  const dreamcareerSection = singleSchoolProgramme?.dreamcareer;
  const financialAssistanceSection = singleSchoolProgramme?.financialassistance;
  const tocSection = singleSchoolProgramme?.toc;
  const ourLocationSection = singleSchoolProgramme?.ourlocation;

  if (singlePHDProgramme?.degree === "Doctoral Programme") {
    return <PHDProgrammes phdData={singlePHDProgramme} />;
  }

  return (
    <>
      <main className="school-prog-font">
        {heroSection && (
          <HeroBanner
            title={title || ""}
            highlightitle={highlightTitle || ""}
            heroSection={heroSection}
            formId={heroSection?.formId}
          />
        )}
        {eligibilitySection && (
          <Eligibility
            elgibilities={eligibilitySection?.elgibility}
            mobherobtn={eligibilitySection?.mobherobtn}
          />
        )}
        {programmeScopeSection && (
          <ProgrammeScope scopeData={programmeScopeSection} />
        )}
        {programmeHighlightSection && (
          <ProgrammeHighlight
            heading={programmeHighlightSection?.heading}
            highlightHeading={programmeHighlightSection?.highlightheading}
            desc={programmeHighlightSection?.subheading}
            highlights={programmeHighlightSection?.programmehighlightcards}
          />
        )}
        {specialisationSection && (
          <Specialisation
            heading={specialisationSection?.heading}
            highlightheading={specialisationSection?.highlightheading}
            specialisations={specialisationSection?.specialisationcards}
          />
        )}
        {admissionProcessSection && (
          <AdmissionProcessComp
            heading={admissionProcessSection?.heading}
            highlight={admissionProcessSection?.highlightheading}
            desc={admissionProcessSection?.description}
            deskimg={admissionProcessSection?.desktopadmissionprocessimg}
            admissionCards={admissionProcessSection?.admissionprocesscard}
            admisbtn={admissionProcessSection?.admissionbtn}
            formId={admissionProcessSection?.admissionFormId}
          />
        )}
        {curriculumSection && (
          <Curriculum
            heading={curriculumSection?.heading}
            highlight={curriculumSection?.highlightheading}
            desc={curriculumSection?.description}
            programStruct={curriculumSection?.years}
            currbtn={curriculumSection?.currbtn}
          />
        )}
        {labfacilitiesSection && (
          <LabsFacilities
            heading={labfacilitiesSection?.heading}
            highlight={labfacilitiesSection?.highlightheading}
            btn={labfacilitiesSection?.labbtn}
            labimg={labfacilitiesSection?.labsimage}
            labcontent={labfacilitiesSection?.labscontent}
            labcards={labfacilitiesSection?.labcards}
          />
        )}
        {beyondclassSection && (
          <BeyondClassroom
            heading={beyondclassSection?.heading}
            highlight={beyondclassSection?.highlightheading}
            desc={beyondclassSection?.description}
            beyondclassimages={beyondclassSection?.beyondclassroomimages}
          />
        )}
        {careerProspectsSection && (
          <CareerProspects
            heading={careerProspectsSection?.heading}
            highlight={careerProspectsSection?.highlightheading}
            desc={careerProspectsSection?.description}
            btn={careerProspectsSection?.careerbtn}
            careerimg={careerProspectsSection?.careerimg}
            careercards={careerProspectsSection?.careercards}
            careerFormId={careerProspectsSection?.careerFormId}
          />
        )}
        {dreamcareerSection && (
          <DreamCareer
            heading={dreamcareerSection.heading}
            description={dreamcareerSection.description}
            highestpackagenum={dreamcareerSection.highestpackagenum}
            highestpackagetitle={dreamcareerSection.highestpackagetitle}
            campusrecruitersnum={dreamcareerSection.campusrecruitersnum}
            campusrecruitertitle={dreamcareerSection.campusrecruitertitle}
            placementassistnum={dreamcareerSection.placementassistnum}
            placementassisttitle={dreamcareerSection.placementassisttitle}
            logos={dreamcareerSection?.careerlogos}
          />
        )}

        {financialAssistanceSection && (
          <FinancialAssistance
            heading={financialAssistanceSection?.heading}
            highlightheading={financialAssistanceSection?.highlightheading}
            description={financialAssistanceSection?.description}
            point1={financialAssistanceSection?.point1}
            point2={financialAssistanceSection?.point2}
            point3={financialAssistanceSection?.point3}
            point4={financialAssistanceSection?.point4}
            point5={financialAssistanceSection?.point5}
            point6={financialAssistanceSection?.point6}
            point7={financialAssistanceSection?.point7}
            logos={financialAssistanceSection?.financelogos}
          />
        )}
        {tocSection && (
          <TableOfContent
            heading={tocSection?.heading}
            highlight={tocSection?.highlightheading}
            desc={tocSection?.description}
            tocfaqs={tocSection?.tocfaq}
            tocimg={tocSection?.tocimg}
            tocbtn={tocSection?.tocbtn}
          />
        )}
        {ourLocationSection && (
          <OurLocation
            badgetext={ourLocationSection?.badgetext}
            heading={ourLocationSection?.badgetext}
            img1={ourLocationSection?.img1}
            img2={ourLocationSection?.img2}
          />
        )}
        <ConnectWithUs />
      </main>
    </>
  );
};

export default page;
