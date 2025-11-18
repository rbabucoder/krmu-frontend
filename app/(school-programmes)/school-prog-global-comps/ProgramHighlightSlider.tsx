"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { HiglightCard } from "@/lib/types/school-programme";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";
import { useState, useEffect } from "react";

type Props = {
  highlights: HiglightCard[];
};

const ProgramHighlightSlider = ({ highlights }: Props) => {
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [api, setApi] = useState<EmblaCarouselType | null>(null);

  // attach event listener once api is ready
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect(); // run initially

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="py-10">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        setApi={(api) => setApi(api ?? null)} // ✅ normalize undefined → null
      >
        <CarouselContent className="px-0 my-5">
          {highlights?.map((highlight, i) => (
            <CarouselItem
              key={highlight?.id}
              className="basis-2/3 md:basis-1/3 h-full"
            >
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
                  {highlight?.title}
                </h5>
                <p
                  className={`mt-2 text-sm ${
                    current === i ? "text-[#97a6c0]" : "text-gray-600"
                  }`}
                >
                  {highlight?.subtitle}
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
              onClick={() => api?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === i ? "bg-[#0a41a1] w-6" : "bg-gray-400 w-2"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default ProgramHighlightSlider;
