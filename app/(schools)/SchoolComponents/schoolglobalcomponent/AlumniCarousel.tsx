"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import AlumniLogoCard from "./AlumniLogoCard";

const AlumniCarousel = () => {
  return (
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
      <CarouselContent>
        <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
          <AlumniLogoCard />
        </CarouselItem>
        <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
          <AlumniLogoCard />
        </CarouselItem>
        <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
          <AlumniLogoCard />
        </CarouselItem>
        <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
          <AlumniLogoCard />
        </CarouselItem>
        <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
          <AlumniLogoCard />
        </CarouselItem>
        <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
          <AlumniLogoCard />
        </CarouselItem>
        <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
          <AlumniLogoCard />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default AlumniCarousel;
