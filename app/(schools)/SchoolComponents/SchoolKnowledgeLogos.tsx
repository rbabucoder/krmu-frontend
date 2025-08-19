"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { StrapiMedia } from "@/lib/types/common";
import { STRAPI_URL } from "@/app/constant";

type Props = {
  logos: StrapiMedia[];
};
const SchoolKnowledgeLogos = ({ logos }: Props) => {
  return (
    <div className="bg-white  px-5 rounded-[20px]">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 1000,
          }),
        ]}
      >
        <CarouselContent className="items-center">
          {logos &&
            logos.map((logo) => {
              return (
                <CarouselItem
                  key={logo?.id}
                  className="basis-1/2 sm:basis-1/3 lg:basis-1/5"
                >
                  <Image
                    src={`${STRAPI_URL}${logo?.url}`}
                    width={logo?.width || 215}
                    height={logo.height || 115}
                    alt={logo.alternativeText || "Knowledge Partner Logo"}
                  />
                </CarouselItem>
              );
            })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SchoolKnowledgeLogos;
