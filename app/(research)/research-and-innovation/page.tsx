import AcademicResources from "./comp/AcademicResources";
import CIF from "./comp/CIF";
import ContactEnquiries from "./comp/ContactEnquiries";
import IPR from "./comp/IPR";
import KEIC from "./comp/KEIC";
import MessageDeanResearch from "./comp/MessageDeanResearch";
import OnGoing from "./comp/OnGoing";
import PublicationAchievements from "./comp/PublicationAchievements";
import RDC from "./comp/RDC";
import ResearchAchievements from "./comp/ResearchAchievements";
import ResearchHighlight from "./comp/ResearchHighlight";
import ResearchInnovationHeroSection from "./comp/ResearchInnovationHeroSection";
import TeamLibrary from "./comp/TeamLibrary";
import TeamRDC from "./comp/TeamRDC";

const page = () => {
  return (
    <>
      <ResearchInnovationHeroSection />
      <section className="pt-[30px] pb-[50px] bg-[url(/research/bg-gradient.webp)] bg-cover bg-center">
        <RDC />
        <MessageDeanResearch />
        <TeamRDC />
      </section>
      <CIF />
      <KEIC />
      <IPR />
      <OnGoing />
      <ResearchHighlight />
      <ResearchAchievements />
      <PublicationAchievements />
      <section className="py-[50px] bg-[url(/research/acadbg.webp)] bg-cover">
        <AcademicResources />
        <TeamLibrary />
      </section>
      <ContactEnquiries />
    </>
  );
};

export default page;
