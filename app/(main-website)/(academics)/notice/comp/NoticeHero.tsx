import { STRAPI_URL } from "@/app/constant";

type Props = {
  title: string;
  bgimageUrl: string;
};

const NoticeHero = ({ title, bgimageUrl }: Props) => {
  return (
    <section
      className="pt-hero-top pb-section lg:pt-[15%] lg:pb-[5%] bg-no-repeat bg-cover bg-center px-4"
      style={{
        background: `url(${STRAPI_URL}${bgimageUrl})`,
      }}
    >
      <div className="max-w-main mx-auto w-full">
        <h1 className="text-center text-white font-semibold text-2xl lg:text-display">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default NoticeHero;
