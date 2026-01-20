import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type SlideType = {
  imgUrl: string;
};

type Props = {
  data: SlideType[];
};

const CommonSlide = ({ data }: Props) => {
  return (
    <Carousel
      className="w-full"
      opts={{
        loop: true, // <-- ENABLE LOOP
      }}
    >
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index}>
            <Image
              src={item?.imgUrl}
              width={600}
              height={438}
              className="w-full"
              alt=""
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 rounded-none bg-black text-white" />
      <CarouselNext className="right-0 rounded-none bg-black text-white" />
    </Carousel>
  );
};

export default CommonSlide;
