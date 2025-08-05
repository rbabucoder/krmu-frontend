"use client";

import TestimonialCard from "./schoolglobalcomponent/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const SchoolTestimonialsCard = () => {
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
          <CarouselItem className="md:basis-1/2 py-5">
            <TestimonialCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 py-5">
            <TestimonialCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 py-5">
            <TestimonialCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 py-5">
            <TestimonialCard />
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
      {/* <TestimonialCard /> */}
    </>
  );
};

export default SchoolTestimonialsCard;
