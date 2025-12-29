import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PhdWhatHappCard = () => {
  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="flex flex-col">
            <div className="mb-5">
              <Image
                src="/landingpage/phd/card.jpg"
                width={415}
                height={268}
                alt=""
                className="w-full"
              />
            </div>
            <div className="text-center">
              <h4 className="text-2xl">Unlock Your Future</h4>
              <div className="text-sm text-[#7F7F7F]">
                <p>
                   The Achievers Dialogue programme at  K.R. Mangalam University
                </p>
                <p>
                  <i>14th Oct. 2025</i>
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="bottom-0 top-[111%] left-[40%]  rounded-full bg-[#D9D9D9] hover:bg-[#FF5757] text-white phdwhatbtn" />
      <CarouselNext className="bottom-0 top-[111%] right-[40%] rounded-full bg-[#D9D9D9] hover:bg-[#FF5757] text-white phdwhatbtn" />
    </Carousel>
  );
};

export default PhdWhatHappCard;
