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
import SchoolProgrammeOffered from "../SchoolComponents/SchoolProgrammeOffered";
import SchoolStudentAchievements from "../SchoolComponents/SchoolStudentAchievements";
import SchoolTestimonials from "../SchoolComponents/SchoolTestimonials";
import { notFound } from "next/navigation";
import { getSchoolPage } from "@/lib/api/schools";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const slug = params.slug;

  const allSchools = await getSchoolPage();

  const school = allSchools.find((school) => school.urlslug === slug);
  // If not found, redirect to 404 page
  if (!school) return notFound();

  const schoolKnowComp = school.schoolcomps.find(
    (component) => component.__component === "schoolcomponent.knowledge"
  );

  return (
    <>
      <SchoolHero
        title={school.schoolname}
        subheading={school.subheading}
        heroBtns={school.herobutton}
        videoFmt={school.videoformat}
        iframeContent={school.iframe}
        videoLink={school.videolink}
      />
      <SchoolAdmissionOpen
        title={school.admissionsessiontitle}
        admBtn={school.admissionbtn}
      />
      {schoolKnowComp && (
        <SchoolInfoStatistics
          heading={schoolKnowComp?.heading}
          subheading={schoolKnowComp?.subheading}
          desc={schoolKnowComp?.description}
          counters={schoolKnowComp?.counter}
        />
      )}
      <SchoolOurAlumni
        title={school?.alumnititle}
        alumniLogos={school.alumnilogo}
      />
      <SchoolProgrammeOffered />
      <SchoolExcitedAlready
        heading={school?.excitedtitle}
        desc={school?.exciteddescription}
        excbtns={school?.excitedbtns}
      />
      <SchoolNewsletter
        heading={school?.newslettertitle}
        desc={school?.newsletterdesc}
        btns={school?.newsletterbtns}
      />
      <SchoolAdvantages
        heading={school?.advantagetitle}
        desc={school?.advantagedesc}
        subtitle={school?.advantagesubtitle}
        advimg={school?.advantagimg}
        advcards={school?.advantageCards}
      />
      <SchoolIndustryCollaboration title={school?.induscollabtitle} />
      <SchoolLetsExplore />
      <SchoolKnowledgePartner />
      <SchoolExcellence />
      <SchoolTestimonials />
      <SchoolDeansVision />
      <SchoolFacultyAdvisory />
      <SchoolEventAndExperience />
      <SchoolStudentAchievements />
      <SchoolFacilities />
      <SchoolCommenceJourney />
    </>
  );
}
