import { getPlacementRecruitersData } from "@/lib/api/placement";
import OurRecruiterCounter from "./component/OurRecruiterCounter";
import OurRecruitersHeroSection from "./component/OurRecruitersHeroSection";
import ProminentRecruiters from "./component/ProminentRecruiters";

const page = async () => {
  const placementRecruitersData = await getPlacementRecruitersData();

  const recruitLogos = placementRecruitersData?.recruiters_logo;

  return (
    <>
      <OurRecruitersHeroSection />
      <OurRecruiterCounter />
      <ProminentRecruiters recruitLogos={recruitLogos} />
    </>
  );
};

export default page;
