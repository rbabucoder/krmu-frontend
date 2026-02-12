import { ParagraphBlock } from "@/lib/types/about";
import IndustryCollabCarousel from "./schoolglobalcomponent/IndustryCollabCarousel";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { CollabCards } from "@/lib/types/schools";
type Props = {
  title: ParagraphBlock[];
  collabCards: CollabCards[];
};

const SchoolIndustryCollaboration = ({ title, collabCards }: Props) => {
  return (
    <section className="bg-krmu-navy pt-8 pb-40 xl:py-8 px-4">
      <div className="max-w-main mx-auto w-full xl:flex">
        <div className="w-full xl:w-2/5">
          <div className="text-3xl mb-5 xl:mb-0 lg:text-5xl lg:text-display text-white font-medium leading-[1.2] schIndCollbaheadingPara">
            {title && <BlocksRenderer content={title} />}
          </div>
        </div>
        <div className="w-full xl:w-3/5 py-section-sm md:px-16 2xl:px-[100px]">
          <IndustryCollabCarousel collabData={collabCards} />
        </div>
      </div>
    </section>
  );
};

export default SchoolIndustryCollaboration;
