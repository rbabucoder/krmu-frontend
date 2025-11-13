import { CareerOptions } from "@/lib/types/phd-programmes";
import PHDTestimonial from "./PHDTestimonial";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
type Props = {
  careerOptions: CareerOptions;
};

const PHDCareer = ({ careerOptions }: Props) => {
  return (
    <section className="py-[60px]">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-[64px] text-[#0060aa] font-semibold">
          {careerOptions?.title}
        </h3>
        <p>{careerOptions?.desc}</p>
      </div>
      <div className="max-w-[1664px] mx-auto w-full mt-10 flex gap-10">
        <div className="w-1/2">
          <ul className="text-xl ml-5">
            {careerOptions?.careerpointers &&
              careerOptions?.careerpointers.map((counter) => {
                return (
                  <li
                    key={counter?.id}
                    className="relative before:content-[''] before:absolute before:top-[11px] before:left-[-25px] before:bg-[url(/phdtick.svg)] before:w-[30px] before:h-[20px] before:bg-contain
             before:bg-no-repeat py-1.5
            "
                  >
                    <span className="text-[#0060aa]">{counter?.listtext}</span>
                    {counter?.listlink}
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="w-1/2">
          <div className="pt-[50px] pb-[100px] px-[70px] bg-[#051630] rounded-[58px]">
            <h4 className="text-2xl font-semibold text-center text-white mb-5">
              {careerOptions?.testimonialheading}
            </h4>
            <Carousel>
              <CarouselContent>
                {careerOptions?.testimonials &&
                  careerOptions?.testimonials?.map((item) => {
                    return (
                      <CarouselItem key={item?.id}>
                        <PHDTestimonial
                          name={item?.countertext}
                          content={item?.countercontent}
                        />
                      </CarouselItem>
                    );
                  })}
              </CarouselContent>
              <CarouselPrevious
                className="border border-white bg-transparent text-white cursor-pointer buttonPrevNextSize w-[60px] h-[60px]
         top-[115%] left-[20%] sm:left-[30%] xl:top-[125%] "
              />
              <CarouselNext
                className="border border-white bg-transparent text-white cursor-pointer buttonPrevNextSize w-[60px] h-[60px]
         top-[115%] right-[20%] sm:right-[30%] xl:top-[125%] "
              />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PHDCareer;
