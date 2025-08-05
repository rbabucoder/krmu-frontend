import Image from "next/image";

const SchoolAdvantages = () => {
  return (
    <section className="py-8 bg-[url(/schools/advantages-bg.webp)] bg-no-repeat bg-center bg-cover relative px-4">
      <div className="absolute left-[35%] lg :left-[40%] 2xl:left-[43%] bottom-0 hidden lg:block">
        <Image
          src="/schools/advantages-girl.webp"
          width={400}
          height={705}
          alt="Girl Side image"
          className="w-[300px] xl:w-[400px]"
        />
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex flex-wrap lg:flex-nowrap items-center justify-between">
        <div className="w-full lg:w-1/2">
          <h4 className="text-6xl lg:text-9xl font-semibold">SOET</h4>
          <h5 className="text-5xl lg:text-[64px] font-semibold mb-5 lg:mb-0">
            Advantage
          </h5>
          <p className="xl:pr-28 font-medium text-[#0060aa]">
            The School of Engineering and Technology is renowned for its
            state-of-the-art facilities and industry-aligned curriculum designed
            to meet the demands of the dynamic tech industry. The learning
            environment at K.R. Mangalam University offers a spirit of inquiry
            and creativity among the students. Our teaching-learning approach
            transforms students into well-rounded and industry-ready
            professionals who are well-equipped to take on leadership
            opportunities. At SOET, we not only believe in educating engineers
            but also in shaping industry leaders to make a meaningful impact on
            the world.
          </p>
        </div>
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0 lg:flex flex-col items-end 2xl:block">
          <div className="p-4 bg-[#051630] text-white text-center flex flex-col items-center justify-center lg:max-w-[420px] w-full rounded-4xl xl:ml-[32%] 2xl:ml-0">
            <Image
              src="/schools/open-book.svg"
              width={49}
              height={49}
              alt="Dynamic Curriculum"
            />
            <h6 className="text-2xl font-semibold my-3">Dynamic Curriculum</h6>
            <p className="mb-5">
              Specifically Designed in Consultation with Industry Insiders and
              Experts
            </p>
          </div>
          <div className="p-4 bg-[#051630] text-white text-center flex flex-col items-center justify-center lg:max-w-[420px] w-full rounded-4xl xl:ml-[32%] 2xl:ml-[30%] mt-2.5">
            <Image
              src="/schools/museum.svg"
              width={57}
              height={57}
              alt="Pragmatic Learning Experience"
            />
            <h6 className="text-2xl font-semibold my-3">
              Pragmatic Learning Experience
            </h6>
            <p className="mb-5">
              Realistic Hands-on Training for Absolute Excellence
            </p>
          </div>
          <div className="p-4 bg-[#051630] text-white text-center flex flex-col items-center justify-center lg:max-w-[420px] w-full rounded-4xl xl:ml-[32%] 2xl:ml-[45%] mt-2.5">
            <Image
              src="/schools/best.svg"
              width={48}
              height={56}
              alt="Learn From The Best"
            />
            <h6 className="text-2xl font-semibold my-3">Learn From The Best</h6>
            <p className="mb-5">
              Consistent Mentoring by Acclaimed Academicians and Top Industry
              Experts
            </p>
          </div>
          <div className="p-4 bg-[#051630] text-white text-center flex flex-col items-center justify-center lg:max-w-[420px] w-full rounded-4xl xl:ml-[32%] 2xl:ml-[35%] mt-2.5">
            <Image
              src="/schools/industry.svg"
              width={56}
              height={64}
              alt="Industry Exposure"
            />
            <h6 className="text-2xl font-semibold my-3">Industry Exposure</h6>
            <p className="mb-5">
              Ensuring Absolute Preparedness for Successful Career Progression
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolAdvantages;
