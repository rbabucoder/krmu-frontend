"use client";

import { useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import AlumniSlide from "./AlumniSlide";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const ProgrammeAlumniSlides = () => {
  const [api, setApi] = useState<EmblaCarouselType | undefined>(undefined);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const totalSlides = 5;

  // Accept EmblaCarouselType | undefined and handle both cases
  const onInit = (emblaApi: EmblaCarouselType | undefined) => {
    if (!emblaApi) {
      // Carousel might be unmounted or not initialized yet
      setApi(undefined);
      setSelectedIndex(0);
      return;
    }

    setApi(emblaApi);
    setSelectedIndex(emblaApi.selectedScrollSnap());

    // update selectedIndex when selection changes
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  };

  return (
    <div className="w-full">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={onInit}
      >
        <CarouselContent className="-ml-1">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <CarouselItem key={index} className="lg:basis-1/2">
              <div className="p-1">
                <AlumniSlide />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* --- Pagination Dots --- */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              selectedIndex === index
                ? "bg-[#1461ac] w-[30px]"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgrammeAlumniSlides;
