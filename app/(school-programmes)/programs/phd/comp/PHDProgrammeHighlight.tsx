import { STRAPI_URL } from "@/app/constant";
import { ProgrammeHighlight } from "@/lib/types/phd-programmes";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

type Props = {
  highlightContent: ProgrammeHighlight;
};

const PHDProgrammeHighlight = ({ highlightContent }: Props) => {
  return (
    <section
      className="bg-cover bg-no-repeat py-[60px]"
      style={{
        background: `url(${STRAPI_URL}${highlightContent?.bgimage?.url})`,
      }}
    >
      <div className="flex max-w-[1664px] mx-auto w-full">
        <div className="w-2/5">
          <h3 className="text-[64px] font-semibold leading-[1.2] mb-5">
            {highlightContent?.heading}
          </h3>
          <BlocksRenderer content={highlightContent?.phdcontent} />
        </div>
        <div className="w-3/5"></div>
      </div>
    </section>
  );
};

export default PHDProgrammeHighlight;
