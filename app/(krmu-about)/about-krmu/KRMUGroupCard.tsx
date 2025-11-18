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

interface KRMBRANCHPROP {
  krmBranchImages: StrapiMedia[];
}

const KRMUGroupCard: React.FC<KRMBRANCHPROP> = ({ krmBranchImages }) => {
  return (
    <>
      <div className="cursor-pointer relative after:content-[''] after:absolute after:top-0 after:right-0 after:w-[17%] after:h-full after:z-[100] after:bg-gradient-to-r after:from-white/0 after:to-white ">
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
            {krmBranchImages &&
              krmBranchImages.map((branch) => {
                return (
                  <CarouselItem
                    key={branch?.id}
                    className="basis-1/2 lg:basis-1/5"
                  >
                    <div key={branch?.id}>
                      <Image
                        src={`${STRAPI_URL}${branch.url}`}
                        alt={branch?.alternativeText || "KRM Branch School"}
                        width={312}
                        height={342}
                      />
                    </div>
                  </CarouselItem>
                );
              })}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default KRMUGroupCard;
