import { getStudentWelfareData } from "@/lib/api/student-welfare";
import AssistantDSWMessage from "./comp/AssistantDSWMessage";
import DSWMessage from "./comp/DSWMessage";
import { PhotoGallery } from "./comp/PhotoGallery";
import TeamMember from "./comp/TeamMember";
import VisionMission from "./comp/VisionMission";
import WelfareHero from "./comp/WelfareHero";
import WelfareImage from "./comp/WelfareImage";
import TabScroll from "./comp/TabScroll";

const page = async () => {
  const studentWelfare = await getStudentWelfareData();

  // const tabScroll = studentWelfare?.tab_scroll;
  const photoGallery = studentWelfare?.photo_gallery;

  return (
    <>
      <WelfareHero />
      <DSWMessage />
      <AssistantDSWMessage />
      <VisionMission />
      <TeamMember />
      <WelfareImage />
      <TabScroll />
      {photoGallery && <PhotoGallery photoGallery={photoGallery} />}
    </>
  );
};

export default page;
