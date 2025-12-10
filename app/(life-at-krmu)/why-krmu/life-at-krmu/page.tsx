import Image from "next/image";
import LifeKRMUHero from "./comp/LifeKRMUHero";
import LifeKRMUContent from "./comp/LifeKRMUContent";
import { LifeKRMUVideoGrid } from "./comp/LifeKRMUVideoGrid";
import LifeKRMUInfra from "./comp/LifeKRMUInfra";
import LifeKRMUDynamic from "./comp/LifeKRMUDynamic";
import LifeKRMUPeek from "./comp/LifeKRMUPeek";
import LifeKRMUTabs from "./comp/LifeKRMUTabs";

const page = () => {
  return (
    <>
      <LifeKRMUHero />
      <Image
        src="/life-at-krmu/why-krmu.webp"
        width={1910}
        height={750}
        alt="Big Image"
        className="w-full h-full"
      />
      <LifeKRMUContent />
      <LifeKRMUVideoGrid />
      <LifeKRMUInfra />
      <LifeKRMUDynamic />
      <LifeKRMUTabs />
      <LifeKRMUPeek />
    </>
  );
};

export default page;
