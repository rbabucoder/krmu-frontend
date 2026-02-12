import { STRAPI_URL } from "@/app/constant";
import { ButtonType, StrapiMedia } from "@/lib/types/common";
import { CareerCard } from "@/lib/types/school-programme";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

type Props = {
  heading: string;
  highlight: string;
  desc: string;
  btn: ButtonType;
  careerimg: StrapiMedia;
  careercards: CareerCard[];
};

const CareerProspects = ({
  heading,
  highlight,
  desc,
  btn,
  careerimg,
  careercards,
}: Props) => {
  return (
    <>
      <section className="prog-global-padding bg-[#f8f9fd]">
        <div className="max-w-content mx-auto w-full xl:flex px-2.5 md:px-4">
          <div className="w-full xl:w-1/2">
            <h3 className="text-4xl md:text-h1 font-semibold text-krmu-blue-dark mb-6 text-center sm:text-left">
              {heading} <span className="text-krmu-red-dark">{highlight}</span>
            </h3>
            {careerimg?.url && (
              <Image
                src={`${STRAPI_URL}${careerimg?.url}`}
                width={660}
                height={660}
                className="w-full h-full lg:hidden"
                alt={careerimg?.alternativeText || "Career Prospectus"}
              />
            )}
            <p className="mb-6">{desc}</p>
            <div>
              {careercards &&
                careercards.map((card) => {
                  return (
                    <div key={card?.id} className="pl-10 relative">
                      <span className="absolute -left-2 top-0 px-2.5 py-[5px] rounded-button text-white bg-krmu-red-dark">
                        {card?.num}
                      </span>
                      <h4 className="font-medium text-2xl">{card?.title}</h4>
                      <p className="mb-4">{card?.description}</p>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="w-full xl:w-1/2 hidden lg:block">
            {careerimg?.url && (
              <Image
                src={`${STRAPI_URL}${careerimg?.url}`}
                width={660}
                height={660}
                className="w-full h-full"
                alt={careerimg?.alternativeText || "Career Prospectus"}
              />
            )}
          </div>
        </div>
        <div className="max-w-content mx-auto w-full flex justify-center mt-4">
          {(btn?.buttonclass || btn?.buttonlink) && (
            <button
              // href={btn?.buttonlink}
              className={`text-white bg-krmu-red-dark p-[15px] flex items-center justify-around max-w-3xs w-full rounded-lg font-semibold cursor-pointer ${btn?.buttonclass}`}
            >
              <span>{btn?.buttontext}</span> <ArrowRight />
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default CareerProspects;
