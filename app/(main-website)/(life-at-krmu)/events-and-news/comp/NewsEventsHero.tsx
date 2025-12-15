import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";

type Props = {
  title: string;
  bgimage: StrapiMedia;
};

const NewsEventsHero = ({ title, bgimage }: Props) => {
  return (
    <section
      className="py-[10%] bg-cover bg-no-repeat"
      style={{
        background: `url(${STRAPI_URL}${bgimage?.url})`,
      }}
    >
      <div className="max-w-[1664px] mx-auto w-full">
        <h1 className="text-[64px] text-white font-semibold">{title}</h1>
      </div>
    </section>
  );
};

export default NewsEventsHero;
