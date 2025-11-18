import { StrapiMedia } from "@/lib/types/common";
import SchoolKnowledgeLogos from "./SchoolKnowledgeLogos";

type Props = {
  title: string;
  logos: StrapiMedia[];
};
const SchoolKnowledgePartner = ({ title, logos }: Props) => {
  return (
    <section className="py-[30px] bg-[#051630] px-4">
      <div className="max-w-[1664px] mx-auto w-full xl:flex items-center">
        <div className="w-full xl:w-1/4">
          <h4 className="text-white font-medium text-3xl  md:text-5xl  2xl:text-[64px] leading-[1.2] mb-5 xl:mb-0">
            {title}
          </h4>
        </div>
        <div className="w-full xl:w-3/4">
          <SchoolKnowledgeLogos logos={logos} />
        </div>
      </div>
    </section>
  );
};

export default SchoolKnowledgePartner;
