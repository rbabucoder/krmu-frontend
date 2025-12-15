import { STRAPI_URL } from "@/app/constant";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SportFacilityImageItem } from "@/lib/api/sport-facility";
import Image from "next/image";

type Props = {
  data: SportFacilityImageItem[];
};

const SportFacilitySlide = ({ data }: Props) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {data.map((imgItem, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div key={index}>
              <Image
                src={`${STRAPI_URL}${imgItem?.img?.url}`}
                width={524}
                height={350}
                alt={imgItem?.caption || ""}
                unoptimized={true}
                className="w-full"
              />

              <div className="text-center">
                <h4 className="font-bold my-5">{imgItem?.caption}</h4>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default SportFacilitySlide;
