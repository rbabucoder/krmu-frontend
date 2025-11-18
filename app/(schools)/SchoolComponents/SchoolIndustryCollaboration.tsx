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
    <section className="bg-[#051630] pt-8 pb-40 xl:py-8 px-4">
      <div className="max-w-[1664px] mx-auto w-full xl:flex">
        <div className="w-full xl:w-2/5">
          <h3 className="text-3xl mb-5 xl:mb-0 lg:text-5xl lg:text-[64px] text-white font-medium leading-[1.2]">
            {title && <BlocksRenderer content={title} />}
          </h3>
        </div>
        <div className="w-full xl:w-3/5 py-[30px] md:px-16 2xl:px-[100px]">
          <IndustryCollabCarousel collabData={collabCards} />
        </div>
      </div>
    </section>
  );
};

export default SchoolIndustryCollaboration;
