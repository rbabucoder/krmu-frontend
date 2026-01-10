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
import { mca2026Id } from "../constant/lpnpf";
import {
  admissionProcessContent,
  businessHubData,
  comeToLifeData,
  faqSectionData,
  heroContent,
  lifeAsPhDScholarData,
  PGProgrammeCard,
  PGTestimonialsData,
} from "./content";
import FAQSection from "../../PGComponent/FAQ";
import LifeAsPhDScholar from "../../PGComponent/LifeAsPhDScholar";
import ComeToLife from "../../PGComponent/ComeToLife";

const page = () => {
  const mcaFormId = mca2026Id;
  const { title, description, primaryCta, secondaryCta, image } = heroContent;
  const businessData = businessHubData;
  const faqData = faqSectionData;
  const lifeData = lifeAsPhDScholarData;
  const worldLifeData = comeToLifeData;
  const semesterTabProgCard = PGProgrammeCard;
  const testiData = PGTestimonialsData;
  const admissionProcessData = admissionProcessContent;
  return (
    <>
      <HeroSection
        title={title}
        description={description}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        image={image}
      />
      <PlacementStats />
      <ProminentRecruiter />
      <AboutUs />
      <IndustryExperts />
      <BusinessLeader data={semesterTabProgCard} />
      <ProspectusDownload />
      <AdmissionProcess
        eyebrow={admissionProcessData?.eyebrow}
        title={admissionProcessData?.title}
        description={admissionProcessData?.description}
        cta={admissionProcessData?.cta}
        steps={admissionProcessData?.steps}
      />
      <MbaComparison />
      <Testimonials data={testiData} />
      <ComeToLife data={worldLifeData} />
      <LifeAsPhDScholar data={lifeData} />
      <BusinessHub data={businessData} formId={mcaFormId} />
      <FAQSection data={faqData} />
    </>
  );
};

export default page;
