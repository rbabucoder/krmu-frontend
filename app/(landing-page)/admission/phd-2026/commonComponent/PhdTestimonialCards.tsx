import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PhdTestimonialCards = () => {
  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2">
          <div>
            <div
              className="p-5 rounded-[20px] bg-white border-t-8 phdtestcard"
              style={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
              }}
            >
              <Image
                src="/landingpage/phd/star.svg"
                width={180}
                height={32}
                alt=""
              />
              <p className="my-5">
                One of the best aspects of the B.Ed. program at K. R. Mangalam
                University is the supportive learning environment created by the
                faculty and peers. The small class sizes and interactive
                teaching methods allow for meaningful discussions and a deeper
                understanding of the subject matter. Beyond theoretical
                knowledge, the program offers various opportunities to engage in
                practical learning through workshops, storytelling sessions, and
                peer teaching. I particularly enjoyed the focus on early
                childhood education and.
              </p>
              <div className="flex gap-5 items-center">
                <div className="border-2 border-[#ff1515] rounded-full">
                  <Image
                    src="/landingpage/phd/testimonial-1.webp"
                    width={80}
                    height={80}
                    alt=""
                  />
                </div>
                <div className="flex flex-col font-semibold">
                  <h4>Ms. Somya Aggarwal</h4>
                  <h5>B.A. (Hons/Hons with Research) Economics 4.8</h5>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2">
          <div>
            <div
              className="p-5 rounded-[20px] bg-white border-t-8 phdtestcard"
              style={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
            >
              <Image
                src="/landingpage/phd/star.svg"
                width={180}
                height={32}
                alt=""
              />
              <p className="my-5">
                One of the best aspects of the B.Ed. program at K. R. Mangalam
                University is the supportive learning environment created by the
                faculty and peers. The small class sizes and interactive
                teaching methods allow for meaningful discussions and a deeper
                understanding of the subject matter. Beyond theoretical
                knowledge, the program offers various opportunities to engage in
                practical learning through workshops, storytelling sessions, and
                peer teaching. I particularly enjoyed the focus on early
                childhood education and.
              </p>
              <div className="flex gap-5 items-center">
                <div className="border-2 border-[#ff1515] rounded-full">
                  <Image
                    src="/landingpage/phd/testimonial-1.webp"
                    width={80}
                    height={80}
                    alt=""
                  />
                </div>
                <div className="flex flex-col font-semibold">
                  <h4>Ms. Somya Aggarwal</h4>
                  <h5>B.A. (Hons/Hons with Research) Economics 4.8</h5>
                </div>
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

export default PhdTestimonialCards;
