import { getNSSCommunityConnectData } from "@/lib/api/community-connect";
import CommunityConnectBenefitNss from "./comp/CommunityConnectBenefitNss";
import CommunityConnectHero from "./comp/CommunityConnectHero";
import CommunityConnectMagazine from "./comp/CommunityConnectMagazine";
import CommunityConnectMotto from "./comp/CommunityConnectMotto";
import CommunityConnectNationalService from "./comp/CommunityConnectNationalService";
import CommunityConnectNSSAward from "./comp/CommunityConnectNSSAward";
import CommunityConnectNSSCommittee from "./comp/CommunityConnectNSSCommittee";
import CommunityConnectNSSJoin from "./comp/CommunityConnectNSSJoin";
import CommunityConnectImgGrid from "./comp/CommunityConnectImgGrid";

const page = async () => {
  const NSSCommunityConnectData = await getNSSCommunityConnectData();

  const imgGridData = NSSCommunityConnectData?.nss_connect_connect_img_grid;

  return (
    <>
      <CommunityConnectHero />
      <CommunityConnectMotto />
      <CommunityConnectNationalService />
      <CommunityConnectMagazine />
      <CommunityConnectBenefitNss />
      <CommunityConnectNSSCommittee />
      <CommunityConnectNSSJoin />
      <CommunityConnectImgGrid data={imgGridData} />
      <CommunityConnectNSSAward />
    </>
  );
};

export default page;
