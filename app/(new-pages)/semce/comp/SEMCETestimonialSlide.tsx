"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import SEMCETestimonialCard from "./SEMCETestimonialCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SEMCETestimonialSlide = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <Carousel
      plugins={[autoplay.current]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full overflow-visible"   // ✅ VERY IMPORTANT
    >
      <CarouselContent className="pb-24 md:pb-40 overflow-visible">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="
              basis-full
              md:basis-1/2
              lg:basis-1/3
              px-4 md:px-10
              overflow-visible
            "
          >
            <SEMCETestimonialCard />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default SEMCETestimonialSlide;
