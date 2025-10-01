import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";

type Props = {
  title: string;
  bgimage: StrapiMedia;
};
const GalleryPageHero = ({ title, bgimage }: Props) => {
  return (
    <section
      className="h-[800px] bg-cover bg-no-repeat"
      style={{
        background: `url(${STRAPI_URL}${bgimage?.url})`,
      }}
    >
      <div className="max-w-[800px] mx-auto w-full h-full text-white text-6xl font-semibold flex items-center justify-center">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default GalleryPageHero;
