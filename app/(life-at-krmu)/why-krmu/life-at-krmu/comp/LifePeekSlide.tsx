import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const LifePeekSlide = () => {
  return (
    <>
      <Carousel className="w-full">
        <CarouselContent className="items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="PeekSlideItem flex justify-center">
              <Image
                src="/life-at-krmu/peek/nora-a.webp"
                width={500}
                height={500}
                alt=""
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 rounded-none bg-black text-white opacity-10" />
        <CarouselNext className="right-0 rounded-none bg-black text-white opacity-10" />
      </Carousel>
    </>
  );
};

export default LifePeekSlide;
