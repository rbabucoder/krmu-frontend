import { CareerOptions } from "@/lib/types/phd-programmes";
import PHDTestimonial from "./PHDTestimonial";

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
          <div className="py-[50px] px-[70px] bg-[#051630] rounded-[58px]">
            <h4 className="text-2xl font-semibold text-center text-white mb-5">
              {careerOptions?.testimonialheading}
            </h4>
            <PHDTestimonial />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PHDCareer;
