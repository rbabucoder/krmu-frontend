import Video from "@/app/(main-website)/components/Videos/Video";

import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";
import Link from "next/link";

type Props = {
  overviewVideo: StrapiMedia;
};

const OverviewHero = ({ overviewVideo }: Props) => {
  return (
    <section
      id="_overview_hero"
      className="relative overflow-hidden after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#00000099]"
    >
      <Video video={overviewVideo} />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col text-center text-white px-4 md:px-0">
        <p className="text-xl md:text-2xl font-light z-10">
          Discover the world of possibilities with K.R. Mangalam University
          where
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mt-4 z-10">
          We Shape Futures
        </h1>
     
      </div>
         <Link href="#lifeBeyond" className="z-10 absolute bottom-5 left-[50%]">
          <Image src="/rotate-360.svg" width={100} height={100} alt="Scroll" />
        </Link>
    </section>
  );
};

export default OverviewHero;
