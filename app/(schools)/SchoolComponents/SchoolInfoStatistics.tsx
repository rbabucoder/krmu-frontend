import { ParagraphBlock } from "@/lib/types/about";
import StatisticsCounter from "./schoolglobalcomponent/StatisticsCounter";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
type Props = {
  heading: string;
  subheading: string;
  desc: ParagraphBlock[];
};

const SchoolInfoStatistics = ({ heading, subheading, desc }: Props) => {
  return (
    <section className="bg-[#fefefe00] px-4 pb-10">
      <div className="max-w-[1664px] mx-auto w-full flex items-center flex-col xl:flex-row">
        <div className="w-full xl:w-3/5 text-black">
          <p className="text-2xl font-medium mb-5">{subheading}</p>
          <h3 className="text-4xl md:text-5xl lg:text-[64px] font-semibold leading-[1.23] mb-5">
            {heading}
          </h3>
          <BlocksRenderer content={desc} />
        </div>
        <div className="w-full xl:w-2/5 lg:px-28 flex flex-col gap-5 mt-5 xl:mt-0">
          <StatisticsCounter />
          <StatisticsCounter />
          <StatisticsCounter />
        </div>
      </div>
    </section>
  );
};

export default SchoolInfoStatistics;
