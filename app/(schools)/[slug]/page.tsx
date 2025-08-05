import SchoolAdmissionOpen from "../SchoolComponents/SchoolAdmissionOpen";
import SchoolAdvantages from "../SchoolComponents/SchoolAdvantages";
import SchoolCommenceJourney from "../SchoolComponents/SchoolCommenceJourney";
import SchoolDeansVision from "../SchoolComponents/SchoolDeansVision";
import SchoolEventAndExperience from "../SchoolComponents/SchoolEventAndExperience";
import SchoolExcellence from "../SchoolComponents/SchoolExcellence";
import SchoolExcitedAlready from "../SchoolComponents/SchoolExcitedAlready";
import SchoolFacilities from "../SchoolComponents/SchoolFacilities";
import SchoolFacultyAdvisory from "../SchoolComponents/SchoolFacultyAdvisory";
import SchoolHero from "../SchoolComponents/SchoolHero";
import SchoolIndustryCollaboration from "../SchoolComponents/SchoolIndustryCollaboration";
import SchoolInfoStatistics from "../SchoolComponents/SchoolInfoStatistics";
import SchoolKnowledgePartner from "../SchoolComponents/SchoolKnowledgePartner";
import SchoolLetsExplore from "../SchoolComponents/SchoolLetsExplore";
import SchoolNewsletter from "../SchoolComponents/SchoolNewsletter";
import SchoolOurAlumni from "../SchoolComponents/SchoolOurAlumni";
import SchoolStudentAchievements from "../SchoolComponents/SchoolStudentAchievements";
import SchoolTestimonials from "../SchoolComponents/SchoolTestimonials";

export default async function Page() {
  return (
    <>
      <SchoolHero />
      <SchoolAdmissionOpen />
      <SchoolInfoStatistics />
      <SchoolOurAlumni />
      <SchoolExcitedAlready />
      <SchoolNewsletter />
      <SchoolAdvantages />
      <SchoolIndustryCollaboration />
      <SchoolLetsExplore />
      <SchoolKnowledgePartner />
      <SchoolExcellence />
      <SchoolTestimonials />
      <SchoolDeansVision />
      {/* <SchoolFacultyAdvisory /> */}
      <SchoolEventAndExperience />
      <SchoolStudentAchievements />
      {/* <SchoolFacilities /> */}
      <SchoolCommenceJourney />
    </>
  );
}
