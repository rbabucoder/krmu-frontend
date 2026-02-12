import { HearItTestimonials } from "@/lib/api/lkoverview";
import OverviewTestimonial from "./OverviewTestimonial";

type Props = {
  testimonials: HearItTestimonials[];
};

const OverviewHearit = ({ testimonials }: Props) => {
  return (
    <section className="pt-12 pb-44 lg:py-40 px-5 lg:px-8 bg-krmu-navy">
      <div className="lg:mx-9 2xl:pl-52 ">
        <div className="xl:flex items-center text-white">
          <div className="xl:w-[40%] xl:pr-10 text-center lg:text-left">
            <h4 className="text-4xl lg:text-5xl xl:text-display leading-[1.2] font-semibold mb-5">
              Hear it from the students themselves
            </h4>
            <p>
              Discover what our satisfied students and alumni have to say about
              their transformative experiences at KRMU
            </p>
          </div>
          <div className="xl:w-[60%] mt-10 xl:mt-0">
            <div><OverviewTestimonial testiData={testimonials} /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewHearit;
