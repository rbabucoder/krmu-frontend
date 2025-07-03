import { getAdmissionPageData } from "@/lib/api/admission";
import About from "../AdmissionSections/About";
import AboutHeroBanner from "../AdmissionSections/AboutHeroBanner";
import AdmissionProcess from "../AdmissionSections/AdmissionProcess";
import Alumni from "../AdmissionSections/Alumni";
import FAQ from "../AdmissionSections/FAQ";
import FeeDetails from "../AdmissionSections/FeeDetails";
import Programs from "../AdmissionSections/Programs";
import VisitUs from "../AdmissionSections/VisitUs";

const page = async () => {
  const admissionPageContent = await getAdmissionPageData();

  const admissionProcess = admissionPageContent.find(
    (component) =>
      component.__component ===
      "admissionpage-components.admissionprocesscomponent"
  );
  const whyChooseData = admissionPageContent.find(
    (component) =>
      component.__component === "aboutwhychooseus-component.why-choose-us"
  );
  const alumniData = admissionPageContent.find(
    (component) => component.__component === "admissionpage-components.alumni"
  );

  return (
    <>
      <AboutHeroBanner />
      {admissionProcess && (
        <AdmissionProcess
          highlighttext={admissionProcess?.highlighttext}
          beforehighlight={admissionProcess?.beforehighlight}
          badgetext={admissionProcess?.badgetext}
          desc={admissionProcess?.description}
          readybtns={admissionProcess?.readytobeginsbtns}
          needhelptext={admissionProcess?.needhelptext}
          needhelplink={admissionProcess?.needhelplink}
          needhelplinktext={admissionProcess?.needhelplinktext}
          descriptions2={admissionProcess?.descriptions2}
          title2={admissionProcess?.title2}
        />
      )}
      {whyChooseData && (
        <About
          badgeheading={whyChooseData?.badgeheading}
          blueText={whyChooseData?.titlebluetext}
          redtext={whyChooseData?.titlehighlighttext}
          beforeBlue={whyChooseData?.beforetitlebluetext}
          beforehighlight={whyChooseData?.beforehighlighttitletext}
          achievements={whyChooseData?.ourachievements}
          achievementsdescriptions={whyChooseData?.achievementstitle}
          achievementstitle={whyChooseData?.achievementstitle}
          maindesc={whyChooseData?.maindescription}
          awardsTitle={whyChooseData?.awardstitle}
        />
      )}
      <Programs />
      <FeeDetails />
      {alumniData && (
        <Alumni
          highlightext={alumniData?.highlighttext}
          beforehighlighttext={alumniData?.beforehighlighttext}
          desc={alumniData?.content}
          alumnis={alumniData?.alumniinfo}
        />
      )}
      <FAQ />
      <VisitUs />
    </>
  );
};

export default page;
