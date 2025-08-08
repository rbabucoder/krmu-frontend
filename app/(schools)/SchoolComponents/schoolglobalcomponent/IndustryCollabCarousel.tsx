"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import IndustryCollabCard from "./IndustryCollabCard";
const IndustryCollabCarousel = () => {
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
        <CarouselItem className="md:basis-1/2">
          <IndustryCollabCard />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2">
          <IndustryCollabCard />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2">
          <IndustryCollabCard />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2">
          <IndustryCollabCard />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious
        className="bg-[#2c3a4f] text-[#bfc4ca] hover:bg-[#051630] hover:text-white cursor-pointer buttonPrevNextSize w-[60px] h-[60px]
         top-[115%] left-[20%] sm:left-[30%] xl:top-[80%] xl:left-[-66%]"
      />
      <CarouselNext
        className="bg-[#2c3a4f] text-[#bfc4ca] hover:bg-[#051630] hover:text-white cursor-pointer buttonPrevNextSize w-[60px] h-[60px] 
         top-[115%] right-[20%] sm:right-[30%] xl:top-[80%] xl:right-[145%]"
      />
    </Carousel>
  );
};

export default IndustryCollabCarousel;
