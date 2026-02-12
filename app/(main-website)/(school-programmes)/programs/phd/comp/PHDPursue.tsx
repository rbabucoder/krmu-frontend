import { STRAPI_URL } from "@/app/constant";
import { Pursue } from "@/lib/types/phd-programmes";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

type Props = {
  pursueContent: Pursue;
};
const PHDPursue = ({ pursueContent }: Props) => {
  return (
    <section
      className="bg-cover bg-no-repeat py-section-lg px-4"
      style={{
        background: `url(${STRAPI_URL}${pursueContent?.bgimage?.url})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="flex flex-col lg:flex-row max-w-main mx-auto w-full">
        <div className="lg:w-2/5 text-white">
          <h3 className="text-3xl md:text-display font-semibold leading-[1.2] mb-5">
            {pursueContent?.title}
          </h3>
          <div className="lg:leading-[2]">
            <BlocksRenderer content={pursueContent?.pursue} />
          </div>
        </div>
        <div className="w-3/5"></div>
      </div>
    </section>
  );
};

export default PHDPursue;
