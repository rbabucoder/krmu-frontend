"use client";

import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface ACCREDIATIONLOGOPROP {
  logosData: StrapiMedia[]; 
}

const AccrediationLogo: React.FC<ACCREDIATIONLOGOPROP> = ({ logosData }) => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {logosData &&
            logosData.map((logo) => {
              return (
                <CarouselItem
                  key={logo?.id}
                  className="basis-1/3 lg:basis-1/5"
                >
                  <div className="flex justify-center">
                    <Image
                      src={`${STRAPI_URL}${logo?.url}`}
                      width={115}
                      height={115}
                      alt={logo?.alternativeText || "Accrediation Logo"}
                    />
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default AccrediationLogo;
