"use client";

import IndustryCollabCard from "./schoolglobalcomponent/IndustryCollabCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; 
import Autoplay from "embla-carousel-autoplay";
const SchoolIndustryCollaboration = () => {
  return (
    <section className="bg-[#051630] pt-8 pb-40 xl:py-8 px-4">
      <div className="max-w-[1664px] mx-auto w-full xl:flex">
        <div className="w-full xl:w-2/5">
          <h3 className="text-3xl mb-5 xl:mb-0 lg:text-5xl lg:text-[64px] text-white font-medium leading-[1.2]">
            Industry
            <br />
            Collaborations
          </h3>
        </div>
        <div className="w-full xl:w-3/5">
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
        </div>
      </div>
    </section>
  );
};

export default SchoolIndustryCollaboration;
