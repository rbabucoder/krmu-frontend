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
  businessHubData,
  comeToLifeData,
  faqSectionData,
  lifeAsPhDScholarData,
} from "./content";
import FAQSection from "../../PGComponent/FAQ";
import LifeAsPhDScholar from "../../PGComponent/LifeAsPhDScholar";
import ComeToLife from "../../PGComponent/ComeToLife";

const page = () => {
  const mcaFormId = mca2026Id;

  const businessData = businessHubData;
  const faqData = faqSectionData;
  const lifeData = lifeAsPhDScholarData;
  const worldLifeData = comeToLifeData;

  return (
    <>
      <HeroSection />
      <PlacementStats />
      <ProminentRecruiter />
      <AboutUs />
      <IndustryExperts />
      <BusinessLeader />
      <ProspectusDownload />
      <AdmissionProcess />
      <MbaComparison />
      <Testimonials />
      <ComeToLife data={worldLifeData} />
      <LifeAsPhDScholar data={lifeData} />
      <BusinessHub data={businessData} formId={mcaFormId} />
      <FAQSection data={faqData} />
    </>
  );
};

export default page;
