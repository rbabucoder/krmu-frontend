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
import { getSchoolSEO } from "@/lib/api/common";
import { Metadata } from "next";
import SchoolIndustyVideo from "../SchoolComponents/SchoolIndustyVideo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // ✅ no await

  const seoData = await getSchoolSEO(slug);

  const seo = seoData?.school_seo;
  return {
    title: seo?.metaTitle || "K.R. Mangalam University", // ✅ no semicolon here
    description:
      seo?.metaDescription || "Explore top programs and courses at KRMU.",
    keywords: seo?.metaKeyword || "",
    alternates: {
      canonical: seo?.canonical || "",
    },
    robots: {
      index: seo?.noIndex === false, // if noIndex is false, index the page
      follow: true, // you can customize follow if needed
    },
  };
}

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
  const WordSchoolslug = school?.wordschoolslug;

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
        fullWidth={school?.fullwidthhero}
      />
      {school.admissionsessiontitle && (
        <SchoolAdmissionOpen
          title={school.admissionsessiontitle}
          admBtn={school.admissionbtn}
        />
      )}
      {schoolKnowComp && (
        <SchoolInfoStatistics
          heading={schoolKnowComp?.heading}
          subheading={schoolKnowComp?.subheading}
          desc={schoolKnowComp?.description}
          counters={schoolKnowComp?.counter}
        />
      )}
      {school?.alumnititle && (
        <SchoolOurAlumni
          title={school?.alumnititle}
          alumniLogos={school.alumnilogo}
        />
      )}
      (
      <SchoolProgrammeOffered
        degName={degreeName}
        schoolCategoryName={schoolCategoryName}
        title={school?.programme_offered?.title}
        content={school?.programme_offered?.content}
      />
      )
      <SchoolExcitedAlready
        heading={school?.excitedtitle}
        desc={school?.exciteddescription}
        excbtns={school?.excitedbtns}
        excbg={school?.excitedbg?.url}
      />
      {school?.newslettertitle && (
        <SchoolNewsletter
          heading={school?.newslettertitle}
          desc={school?.newsletterdesc}
          btns={school?.newsletterbtns}
          newsletterbg={school?.newsletterbg?.url}
        />
      )}
      {school?.advantagetitle && (
        <SchoolAdvantages
          heading={school?.advantagetitle}
          desc={school?.advantagedesc}
          subtitle={school?.advantagesubtitle}
          advimg={school?.advantagimg}
          advcards={school?.advantageCards}
          school_advantage={school?.school_advantage?.advantage_content}
        />
      )}
      {school?.induscollabtitle &&
        Array.isArray(school?.collabcards) &&
        school.collabcards.length > 0 && (
          <SchoolIndustryCollaboration
            title={school.induscollabtitle}
            collabCards={school.collabcards}
          />
        )}
      {school?.letsexplorecontent && (
        <SchoolLetsExplore
          content={school?.letsexplorecontent}
          list1={school?.listitem1?.listsitems}
          list2={school?.listitem2}
          list3={school?.listitem3}
        />
      )}
      {school?.knowledgetitle && (
        <SchoolKnowledgePartner
          title={school?.knowledgetitle}
          logos={school?.knowledgepartenerlogos}
        />
      )}
      {school?.coetitle1 && (
        <SchoolExcellence
          title1={school?.coetitle1}
          title2={school?.coetitle2}
          btn1={school?.coebtn1}
          btn2={school?.coebtn2}
        />
      )}
      {school?.tetimonialtitle && (
        <SchoolTestimonials
          title={school?.tetimonialtitle}
          desc={school?.testimonialdesc}
          testis={school?.testimonials}
        />
      )}
      {school?.showdeaninfo && (
        <SchoolDeansVision
          deanName={school?.deansname}
          desg={school?.deandesignation}
          deanEmail={school?.deanemail}
          title={school?.deanvisiontitle}
          subtitle={school?.deanvisionsubtitle}
          desc={school?.deancontent}
          deanImgUrl={school?.deanimg?.url}
        />
      )}
      {school?.fac_adv && (
        <SchoolFacultyAdvisory
          fac_adv={school?.fac_adv}
          schoolCat={schoolCat}
          WordSchoolslug={WordSchoolslug}
        />
      )}
      {school?.video_comp && (
        <SchoolIndustyVideo
          heading={school?.video_comp?.heading}
          videoCards={school?.video_comp?.video_iframe_fields}
        />
      )}
      {school?.eventstitle && (
        <SchoolEventAndExperience
          title={school?.eventstitle}
          desc={school?.eventsdesc}
          btn={school?.eventsbtn}
          eventsexp={schoolEventsAndExperience}
        />
      )}
      {school?.studentachievementtitle && (
        <SchoolStudentAchievements
          title={school?.studentachievementtitle}
          btn={school?.studentachievementsbtn}
          schoolCat={schoolCat}
        />
      )}
      {school?.facility_slide && (
        <SchoolFacilities fac_slides={school?.facility_slide} />
      )}
      {school?.commence_journey && (
        <SchoolCommenceJourney
          highlight_heading={school?.commence_journey?.highlight_heading}
          heading={school?.commence_journey?.heading}
          imgUrl={school?.commence_journey?.commence_img?.url}
          btn={school?.commence_journey?.commence_btn}
        />
      )}
    </>
  );
}
