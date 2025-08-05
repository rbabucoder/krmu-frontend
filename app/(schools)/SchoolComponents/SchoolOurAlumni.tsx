"use client";
import AlumniLogoCard from "./schoolglobalcomponent/AlumniLogoCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const SchoolOurAlumni = () => {
  return (
    <section className="py-10 md:py-14 px-4">
      <div className="max-w-[1664px] mx-auto w-full text-center">
        <h3 className="mb-5 lg:mb-14 text-2xl md:text-4xl font-bold">Our Alumni Work At</h3>
        <div className="w-full">
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
        </div>
      </div>
    </section>
  );
};

export default SchoolOurAlumni;
