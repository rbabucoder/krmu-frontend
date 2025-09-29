import { STRAPI_URL } from "@/app/constant";
import { Pursue } from "@/lib/types/phd-programmes";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

type Props = {
  pursueContent: Pursue;
};
const PHDPursue = ({ pursueContent }: Props) => {
  return (
    <section
      className="bg-cover bg-no-repeat py-[60px]"
      style={{
        background: `url(${STRAPI_URL}${pursueContent?.bgimage?.url})`,
      }}
    >
      <div className="flex max-w-[1664px] mx-auto w-full">
        <div className="w-2/5">
          <h3 className="text-[64px] font-semibold leading-[1.2] mb-5">
            {pursueContent?.title}
          </h3>
          <div className="leading-[2]">
            <BlocksRenderer content={pursueContent?.pursue} />
          </div>
        </div>
        <div className="w-3/5"></div>
      </div>
    </section>
  );
};

export default PHDPursue;
