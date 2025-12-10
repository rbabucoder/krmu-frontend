import Video from "@/app/components/Videos/Video";
import { getLifeAtKRMUOverviewData } from "@/lib/api/lkoverview";
import { StrapiMedia } from "@/lib/types/common";

type Props = {
  overviewVideo: StrapiMedia;
};

const OverviewHero = ({ overviewVideo }: Props) => {
  return (
    <section id="_overview_hero" className="relative overflow-hidden after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#00000099]">
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
    </section>
  );
};

export default OverviewHero;
