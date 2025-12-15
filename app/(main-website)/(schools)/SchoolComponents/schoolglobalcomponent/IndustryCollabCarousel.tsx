"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import IndustryCollabCard from "./IndustryCollabCard";
import { CollabCards } from "@/lib/types/schools";

type Props = {
  collabData: CollabCards[];
};

const IndustryCollabCarousel = ({ collabData }: Props) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {collabData &&
          collabData?.map((card) => {
            return (
              <CarouselItem key={card?.id} className="md:basis-1/2">
                <IndustryCollabCard
                  cardImg={card?.cardimg}
                  cardDesc={card?.card_desc}
                  cardLists={card?.card_list_item}
                />
              </CarouselItem>
            );
          })}
      </CarouselContent>
      <CarouselPrevious className="bg-[#2c3a4f] text-[#bfc4ca] hover:bg-[#051630] hover:text-white cursor-pointer buttonPrevNextSize w-[60px] h-[60px] top-[115%] xl:top-[50%] left-[20%] sm:left-[35%] 2xl:left-[-10%]" />
      <CarouselNext className="bg-[#2c3a4f] text-[#bfc4ca] hover:bg-[#051630] hover:text-white cursor-pointer buttonPrevNextSize w-[60px] h-[60px] top-[115%] xl:top-[50%] right-[20%] sm:right-[35%] 2xl:right-[-10%]" />
    </Carousel>
  );
};

export default IndustryCollabCarousel;
