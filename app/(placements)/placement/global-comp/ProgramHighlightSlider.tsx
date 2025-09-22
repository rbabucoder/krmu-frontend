import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const ProgramHighlightSlider = () => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
           loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/2 sm:basis-1/4">
              <div>
                <Image
                  src="/programmes/Daksh-Mehta.webp"
                  width={390}
                  height={390}
                  alt="programme highlight"
                  className="w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 bg-[#000000b2] text-white rounded-none" />
        <CarouselNext className="right-0 bg-[#000000b2] text-white rounded-none" />
      </Carousel>
    </>
  );
};

export default ProgramHighlightSlider;
