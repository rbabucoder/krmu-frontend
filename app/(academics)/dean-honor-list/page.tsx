import { getDeansHonorsData } from "@/lib/api/dean-honors";
import DeanHonorHero from "./comp/DeanHonorHero";
import DeanHonorSemAcc from "./comp/DeanHonorSemAcc";

const page = async () => {
  const deanHonorsData = await getDeansHonorsData();

  return (
    <>
      <DeanHonorHero title={deanHonorsData?.title} bgImageUrl={deanHonorsData?.herobg?.url} />
      <DeanHonorSemAcc deanAccData={deanHonorsData?.dean_honor_acc} />
    </>
  );
};

export default page;
