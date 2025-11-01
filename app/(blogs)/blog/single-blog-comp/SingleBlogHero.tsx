import Image from "next/image";
import SingleBlogHeroAuthor from "./SingleBlogHeroAuthor";
import { STRAPI_URL } from "@/app/constant";

type SingleBlogProps = {
  title: string;
  imgUrl: string;
};

const SingleBlogHero = ({ title, imgUrl }: SingleBlogProps) => {
  return (
    <section
      className="pt-[106px] pb-10 px-5 sm:px-10"
      style={{
        background: `linear-gradient(90deg,rgba(0, 107, 214, 1) 0%, rgba(194, 17, 17, 1) 100%)`,
      }}
    >
      <div className="max-w-[1664px] mx-auto w-full lg:flex items-center gap-[50px] pt-[50px]">
        <div className="lg:w-1/2">
          <h1 className="text-[30px] md:text-[42px] 2xl:text-[64px] mb-10 text-white leading-[1.2] font-semibold">
            {title}
          </h1>
          <SingleBlogHeroAuthor />
          <div className="py-[5px]">
            <span className="text-[13px] text-white">
              Published On: October 31, 2025
            </span>
          </div>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center">
          {imgUrl && (
            <Image
              src={`${STRAPI_URL}${imgUrl}`}
              width={768}
              height={432}
              alt="Single Blog Title"
              className="rounded-lg w-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default SingleBlogHero;
