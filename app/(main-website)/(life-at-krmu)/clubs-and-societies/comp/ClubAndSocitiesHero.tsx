import { STRAPI_URL } from "@/app/constant";

type Props = {
  title: string;
  featured_image_url: string;
};

export const ClubAndSocitiesHero = ({ title, featured_image_url }: Props) => {
  return (
    <section
      className="pt-64 pb-36 bg-cover bg-center"
      style={{
        background: `url(${STRAPI_URL}${featured_image_url})`,
      }}
    >
      <div className="max-w-[1664px] mx-auto w-full text-center text-white">
        <h1 className="text-[64px] font-semibold">{title}</h1>
      </div>
    </section>
  );
};
