export type TestimonialItem = {
  image: string;
  videoUrl?: string;
  quote: string;
  name: string;
  programme: string;
};

// Testimonials section
export type TestimonialsSection = {
  subheading: string;
  heading: string; // supports <br />
  testimonials: TestimonialItem[];
};

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProgTestimonialCard from "./ProgTestimonialCard";

type Props = {
  data: TestimonialsSection;
};

const ProgTestimonials = ({ data }: Props) => {
  return (
    <section className="py-20 sm:pt-20 px-4 overflow-hidden w-full">
      <div className="w-full mx-auto">
        {/* Header */}

        <div className="w-full text-center">
          <h4
            className="text-xl md:text-3xl"
            dangerouslySetInnerHTML={{
              __html: data.subheading,
            }}
          />
          <h3
            className="text-2xl md:text-[40px] font-semibold text-[#013fa1]"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />
        </div>

        {/* Carousel */}
        <div className="w-full mt-5">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            {/* <CarouselContent className="mb-10 sm:my-12 sm:pr-[20%]"> */}
            <CarouselContent className="mb-10 sm:my-12f justify-center">
              {data.testimonials.map((item, index) => (
                // <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-2">
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-2"
                >
                  <ProgTestimonialCard data={item} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {data?.testimonials?.length > 4 && (
              <div className="pt-10 hidden sm:block">
                <CarouselPrevious className="bottom-0 top-full left-[25%] sm:left-0 md:top-0 md:left-[85%] xl:left-[90%] landingpagePrevArrow" />
                <CarouselNext className="bottom-0 top-full md:top-0 right-[25%] sm:right-0 landingpageNextArrow" />
              </div>
            )}
            <div className="sm:hidden">
              <CarouselPrevious className="bottom-0 top-full left-[25%] sm:left-0 md:top-0 md:left-[85%] xl:left-[90%] landingpagePrevArrow" />
              <CarouselNext className="bottom-0 top-full md:top-0 right-[25%] sm:right-0 landingpageNextArrow" />
            </div>
            {/* <div className="pt-10">
              <CarouselPrevious className="bottom-0 top-full left-[25%] sm:left-0 md:top-0 md:left-[85%] xl:left-[90%] landingpagePrevArrow" />
              <CarouselNext className="bottom-0 top-full md:top-0 right-[25%] sm:right-0 landingpageNextArrow" />
            </div> */}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProgTestimonials;
