import { SpecialisationSection } from "../law-2026/contentype";
import SpecialisationCard from "./Cards/SpecialisationCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  data: SpecialisationSection;
};

const Specialisation = ({ data }: Props) => {
  return (
    <section className="py-20 px-4 bg-[#f8f9fa]">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="flex lg:-mb-12">
          <div className="w-full xl:w-1/2 text-center sm:text-left">
            <h4
              className="text-xl sm:text-2xl"
              dangerouslySetInnerHTML={{
                __html: data.subheading,
              }}
            />
            <h3
              className="text-2xl sm:text-5xl font-medium text-[#013fa1]"
              dangerouslySetInnerHTML={{ __html: data.heading }}
            />
          </div>
          <div className="xl:w-1/2"></div>
        </div>
        <div className="w-full mt-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="mb-10 sm:my-12">
              {data?.specilisationCard.map((card, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <SpecialisationCard data={card} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="pt-10">
              <CarouselPrevious className="bottom-0 top-full left-[25%] sm:left-0 md:top-0 md:left-[85%] xl:left-[90%] xlright-0 landingpagePrevArrow" />
              <CarouselNext className="bottom-0 top-full md:top-0 right-[25%] sm:right-0 landingpageNextArrow" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Specialisation;
