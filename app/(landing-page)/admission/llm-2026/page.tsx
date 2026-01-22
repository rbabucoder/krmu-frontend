import PlacementStats from "../../PGComponent/PlacementStats";
import HeroSection from "../../PGComponent/HeroSection";
import ProminentRecruiter from "../../PGComponent/ProminentRecruiter";
import AboutUs from "../../PGComponent/AboutUs";
import IndustryExperts from "../../PGComponent/IndustryExperts";
import BusinessLeader from "../../PGComponent/BusinessLeader";
import AdmissionProcess from "../../PGComponent/AdmissionProcess";
import BusinessHub from "../../PGComponent/BusinessHub";
import MbaComparison from "../../PGComponent/MBAComparison";
import Testimonials from "../../PGComponent/Testimonials";
import ProspectusDownload from "../../PGComponent/ProspectusDownload";
import { llm2026Id } from "../constant/lpnpf";
import {
  aboutUsContent,
  admissionProcessContent,
  businessHubData,
  businessLeaderContent,
  comeToLifeData,
  faqSectionData,
  heroContent,
  industryExpertsContent,
  lifeAsPhDScholarData,
  mbaComparisonContent,
  PGProgrammeCard,
  PGTestimonialsData,
  placementStatsContent,
  prominentRecruiterContent,
  prospectusDownloadContent,
} from "./content";
import FAQSection from "../../PGComponent/FAQ";
import LifeAsPhDScholar from "../../PGComponent/LifeAsPhDScholar";
import ComeToLife from "../../PGComponent/ComeToLife";

const page = () => {
  const llmFormId = llm2026Id;
  const { title, description, primaryCta, secondaryCta, image } = heroContent;
  const businessData = businessHubData;
  const faqData = faqSectionData;
  const lifeData = lifeAsPhDScholarData;
  const worldLifeData = comeToLifeData;

  const testiData = PGTestimonialsData;
  const admissionProcessData = admissionProcessContent;
  const aboutUsData = aboutUsContent;
  const mbaComparison = mbaComparisonContent;
  const prospectusData = prospectusDownloadContent;
  const indusExpData = industryExpertsContent;
  const whyChooseData = businessLeaderContent;
  const whyChooseProgCardData = PGProgrammeCard;
  const prominentData = prominentRecruiterContent;
  const placementData = placementStatsContent;

  return (
    <>
      <HeroSection
        title={title}
        description={description}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        image={image}
      />
      <PlacementStats data={placementData} />
      <ProminentRecruiter data={prominentData} />
      <AboutUs
        title={aboutUsContent?.title}
        description={aboutUsData?.description}
        image={aboutUsData?.image}
      />
      <IndustryExperts data={indusExpData} />
      <BusinessLeader data={whyChooseData} progData={whyChooseProgCardData} />
      <ProspectusDownload data={prospectusData} />
      <AdmissionProcess
        eyebrow={admissionProcessData?.eyebrow}
        title={admissionProcessData?.title}
        description={admissionProcessData?.description}
        cta={admissionProcessData?.cta}
        steps={admissionProcessData?.steps}
      />
      <MbaComparison data={mbaComparison} />
      <Testimonials data={testiData} />
      <ComeToLife data={worldLifeData} />
      <LifeAsPhDScholar data={lifeData} />
      <BusinessHub data={businessData} formId={llmFormId} />
      <FAQSection data={faqData} />
    </>
  );
};

export default page;
