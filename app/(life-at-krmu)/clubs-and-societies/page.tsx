import { getClubAndSocitiesData } from "@/lib/api/club-and-societies";
import { ClubAndSocitiesHero } from "./comp/ClubAndSocitiesHero";
import ClubAndSocietiesInfo from "./comp/ClubAndSocietiesInfo";
import ClubAndSocietiesAcc from "./comp/ClubAndSocietiesAcc";

const page = async () => {
  const clubsData = await getClubAndSocitiesData();
  return (
    <>
      <ClubAndSocitiesHero
        title={clubsData?.title}
        featured_image_url={clubsData?.featured_image?.url}
      />
      <ClubAndSocietiesInfo content={clubsData?.desc} />
      <ClubAndSocietiesAcc accordionsData={clubsData?.clubsaccordions} />
    </>
  );
};

export default page;
