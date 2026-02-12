import { STRAPI_URL } from "@/app/constant";

type Props = {
  title: string;
  featured_image_url: string;
};

export const ClubAndSocitiesHero = ({ title, featured_image_url }: Props) => {
  return (
    <section
      className="pt-hero-top pb-5 md:pt-64 md:pb-36 bg-cover bg-center common-overlay"
      style={{
        background: `url(${STRAPI_URL}${featured_image_url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-main mx-auto w-full text-center text-white z-10 relative lg:-bottom-[70px]">
        <h1 className="text-2xl sm:text-5xl md:text-display font-semibold">{title}</h1>
      </div>
    </section>
  );
};
