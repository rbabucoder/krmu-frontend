"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { HearItTestimonials } from "@/lib/api/lkoverview";
import OverviewTestiCard from "./OverviewTestiCard";

interface TestimonialProp {
  testiData: HearItTestimonials[];
}

const OverviewTestimonial = ({ testiData }: TestimonialProp) => {
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
          {testiData &&
            testiData.map((item) => {
              return (
                <CarouselItem key={item?.id} className="md:basis-1/2">
                  <OverviewTestiCard
                    profilename={item?.name}
                    info={item?.info}
                    qualification={item?.qualification}
                    profileImage={item?.img}
                  />
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious
          className="bg-krmu-slate text-krmu-gray-300 hover:bg-krmu-navy hover:text-white cursor-pointer buttonPrevNextSize w-[60px] h-[60px]
         top-[115%] left-[20%] sm:left-[30%] xl:top-[100%] xl:left-[-66%]"
        />
        <CarouselNext
          className="bg-krmu-slate text-krmu-gray-300 hover:bg-krmu-navy hover:text-white cursor-pointer buttonPrevNextSize w-[60px] h-[60px] 
         top-[115%] right-[20%] sm:right-[30%] xl:top-[100%] xl:right-[145%]"
        />
      </Carousel>
    </>
  );
};

export default OverviewTestimonial;
