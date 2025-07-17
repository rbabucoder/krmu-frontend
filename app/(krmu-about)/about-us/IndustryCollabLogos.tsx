"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const IndustryCollabLogos = () => {
  return (
    <div>
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
          <CarouselItem className="basis-1/2 lg:basis-1/3">
            <Image src="/pranab.webp" width={201} height={115} alt="pranab" />
          </CarouselItem>
          <CarouselItem className="basis-1/2 lg:basis-1/3">
            <Image
              src="/Mugliann.webp"
              width={201}
              height={115}
              alt="Mugliann"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/2 lg:basis-1/3">
            <Image src="/rk.webp" width={201} height={115} alt="rk" />
          </CarouselItem>
          <CarouselItem className="basis-1/2 lg:basis-1/3">
            <Image src="/polite.webp" width={201} height={115} alt="rk" />
          </CarouselItem>
          <CarouselItem className="basis-1/2 lg:basis-1/3">
            <Image src="/odour.webp" width={201} height={115} alt="rk" />
          </CarouselItem>
          <CarouselItem className="basis-1/2 lg:basis-1/3">
            <Image src="/namqqi.webp" width={201} height={115} alt="rk" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default IndustryCollabLogos;
