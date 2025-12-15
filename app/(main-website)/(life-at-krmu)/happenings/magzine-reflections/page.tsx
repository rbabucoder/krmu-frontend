import { getMagazineReflection } from "@/lib/api/magazine-reflection";
import EditorialReflection from "./comp/EditorialReflection";
import MagazineHero from "./comp/MagazineHero";
import ReflectionCards from "./comp/ReflectionCards";

const page = async () => {
  const magazineData = await getMagazineReflection();

  return (
    <>
      <MagazineHero title={magazineData?.title} bgImage={magazineData?.bgimage} />
      <EditorialReflection content={magazineData?.reflectioncontent} />
      <ReflectionCards magazinecards={magazineData?.magazinecard} />
    </>
  );
};

export default page;
