import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";

type Props = {
  title: string;

};

const NewsEventsHero = ({ title }: Props) => {
  return (
    <section
      className="pt-hero-top pb-[10%] lg:py-[10%] bg-[url(/newseventsbg.webp)] bg-cover bg-no-repeat px-4"
      
    >
      <div className="max-w-main mx-auto w-full">
        <h1 className="text-4xl lg:text-display text-white font-semibold">{title}</h1>
      </div>
    </section>
  );
};

export default NewsEventsHero;
