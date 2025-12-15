"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { LabCard } from "@/lib/types/school-programme";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";

type Props = {
  labcards: LabCard[];
};

const LabFacilitiesSlider = ({ labcards }: Props) => {
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <div className="py-10">
      <Carousel
        opts={{
          align: "center", // center active slide
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 1000,
          }),
        ]}
        setApi={(api) => {
          if (!api) return;
          setCount(api.scrollSnapList().length);

          api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
          });
        }}
      >
        <CarouselContent className="px-0 my-5">
          {labcards &&
            labcards.map((item, i) => (
              <CarouselItem key={i} className="basis-2/3 md:basis-1/3 h-full">
                <div
                  className={`p-5 rounded-2xl text-center transition-all duration-300 shadow-md flex flex-col items-center justify-center h-full ${
                    current === i
                      ? "bg-[#0a41a1] scale-105"
                      : "bg-white scale-95"
                  }`}
                >
                  <h5
                    className={`font-semibold ${
                      current === i ? "text-white" : "text-black"
                    }`}
                  >
                    {item.title}
                  </h5>
                  <p
                    className={`mt-2 text-sm ${
                      current === i ? "text-[#97a6c0]" : "text-gray-600"
                    }`}
                  >
                    {item?.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${
                current === i ? "bg-[#0a41a1] w-6" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default LabFacilitiesSlider;
