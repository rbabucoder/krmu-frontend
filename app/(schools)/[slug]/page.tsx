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
import {
  getEventsAndExperiencesBySchoolCat,
  getSchoolPage,
} from "@/lib/api/schools";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params; // ✅ await params

  const allSchools = await getSchoolPage();

  const school = allSchools.find((school) => school.urlslug === slug);
  // If not found, redirect to 404 page
  if (!school) return notFound();

  const schoolKnowComp = school.schoolcomps.find(
    (component) => component.__component === "schoolcomponent.knowledge"
  );

  const schoolCat = school?.school_category?.name;

  const schoolEventsAndExperience = await getEventsAndExperiencesBySchoolCat(
    schoolCat
  );

  const degreeName = school?.degree?.name;
  const schoolCategoryName = school?.school_category?.name;




  return (
    <>
      <SchoolHero
        herobanner={school?.schoolherobanner}
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
      <SchoolProgrammeOffered
        degName={degreeName}
        schoolCategoryName={schoolCategoryName}
      />
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
      <SchoolIndustryCollaboration
        title={school?.induscollabtitle}
        collabCards={school?.collabcards}
      />
      <SchoolLetsExplore
        content={school?.letsexplorecontent}
        list1={school?.listitem1?.listsitems}
        list2={school?.listitem2}
        list3={school?.listitem3}
      />
      <SchoolKnowledgePartner
        title={school?.knowledgetitle}
        logos={school?.knowledgepartenerlogos}
      />
      <SchoolExcellence
        title1={school?.coetitle1}
        title2={school?.coetitle2}
        btn1={school?.coebtn1}
        btn2={school?.coebtn2}
      />
      <SchoolTestimonials
        title={school?.tetimonialtitle}
        desc={school?.testimonialdesc}
        testis={school?.testimonials}
      />
      {school?.showdeaninfo && (
        <SchoolDeansVision
          deanName={school?.deansname}
          desg={school?.deandesignation}
          deanEmail={school?.deanemail}
          title={school?.deanvisiontitle}
          subtitle={school?.deanvisionsubtitle}
          desc={school?.deancontent}
        />
      )}
      <SchoolFacultyAdvisory schoolCat={schoolCat} />
      <SchoolEventAndExperience
        title={school?.eventstitle}
        desc={school?.eventsdesc}
        btn={school?.eventsbtn}
        eventsexp={schoolEventsAndExperience}
      />
      <SchoolStudentAchievements
        title={school?.studentachievementtitle}
        btn={school?.studentachievementsbtn}
        schoolCat={schoolCat}
      />
      <SchoolFacilities />
      <SchoolCommenceJourney />
    </>
  );
}
