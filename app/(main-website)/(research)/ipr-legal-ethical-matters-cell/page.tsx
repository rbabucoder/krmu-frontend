import IPRFacilities from "../research-and-innovation/comp/IPRFacilities";
import IPRAchievement from "./comp/IPRAchievement";
import IPRContactandEnquiries from "./comp/IPRContactandEnquiries";
import IPRContent from "./comp/IPRContent";
import IPRDrMessage from "./comp/IPRDrMessage";
import IPRGoal from "./comp/IPRGoal";
import IPRHeroSection from "./comp/IPRHeroSection";
import IPRMember from "./comp/IPRMember";
import IPRupcomingevent from "./comp/IPRupcomingevent";

const page = () => {
  return (
    <>
      <IPRHeroSection />
      <IPRContent />
      <section className="py-[50px] px-4 bg-[url(/ipr/grad-2.png)]">
        <IPRDrMessage />
        <IPRMember />
      </section>
      <IPRGoal />
      <IPRFacilities />
      <IPRAchievement />
      <IPRupcomingevent />
      <IPRContactandEnquiries />
    </>
  );
};

export default page;
