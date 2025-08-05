"use client";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const SchoolKnowledgeLogos = () => {
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
          <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/5">
            <Image
              src="/schools/networkbulls.webp"
              width={161}
              height={115}
              alt="networkbulls"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/5">
            <Image
              src="/schools/princeton.webp"
              width={196}
              height={115}
              alt="princeton"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/5">
            <Image src="/schools/qsd.webp" width={162} height={115} alt="QSD" />
          </CarouselItem>
          <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/5">
            <Image src="/schools/srm.webp" width={200} height={115} alt="SRM" />
          </CarouselItem>
          <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/5">
            <Image
              src="/schools/enviro.webp"
              width={215}
              height={115}
              alt="Enviro"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/5">
            <Image
              src="/schools/enviro.webp"
              width={215}
              height={115}
              alt="Enviro"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/5">
            <Image
              src="/schools/enviro.webp"
              width={215}
              height={115}
              alt="Enviro"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SchoolKnowledgeLogos;
