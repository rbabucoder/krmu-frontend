"use client";

import EventsAndExperienceCard from "./EventsAndExperienceCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const SchoolEventsAndExperiencesCard = () => {
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
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 py-5">
            <EventsAndExperienceCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 py-5">
            <EventsAndExperienceCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 py-5">
            <EventsAndExperienceCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 py-5">
            <EventsAndExperienceCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 py-5">
            <EventsAndExperienceCard />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default SchoolEventsAndExperiencesCard;
