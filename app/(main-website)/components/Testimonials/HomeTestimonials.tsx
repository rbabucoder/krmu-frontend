"use client";

import { TestimonialItem } from "@/lib/constants/testimonial";
import HomeTestimonialCard from "../Cards/HomeTestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface TestimonialProp {
  testiData: TestimonialItem[];
}

const HomeTestimonials = ({ testiData }: TestimonialProp) => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent>
          {testiData &&
            testiData.map((item) => {
              return (
                <CarouselItem key={item?.id} className="md:basis-1/2">
                  <HomeTestimonialCard
                    profilename={item?.profilename}
                    info={item?.profileinfo}
                    desg={item?.profiledesignation}
                    profileImage={item?.profile}
                  />
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious
          aria-label="Previous testimonial"
          className="bg-krmu-slate text-krmu-gray-300 hover:bg-krmu-navy hover:text-white cursor-pointer buttonPrevNextSize w-[60px] h-[60px]
         top-[115%] left-[20%] sm:left-[30%] xl:top-[100%] xl:left-[-66%]"
        />
        <CarouselNext
          aria-label="Next testimonial"
          className="bg-krmu-slate text-krmu-gray-300 hover:bg-krmu-navy hover:text-white cursor-pointer buttonPrevNextSize w-[60px] h-[60px]
         top-[115%] right-[20%] sm:right-[30%] xl:top-[100%] xl:right-[145%]"
        />
      </Carousel>
    </>
  );
};

export default HomeTestimonials;
