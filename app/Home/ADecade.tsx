import Image from "next/image";
import Link from "next/link";

const ADecade = () => {
  return (
    <>
      <section className="px-5 py-8 lg:mb-20">
        <div className="flex flex-col text-center lg:flex-row lg:gap-10 items-center max-w-[1664px] mx-auto md:text-left">
          <div className="w-full lg:w-1/2 lg:px-4">
            <h2 className="primary-gradient-text-color leading-[1] text-2xl xl:text-[64px] font-medium lg:leading-[1.13] mb-2 md:mb-5 grad-text-color">
              A Decade of Educational Excellence
            </h2>
            <h3 className="primary-gradient-text-color mb-4 text-4xl leading-[1.2]  xl:leading-[2] font-light grad-text-color">
              Best University in Gurugram
            </h3>
            <p className="font-normal mb-5">
              K.R. Mangalam University, the top university in Gurugram, is
              committed to advancing ambitious students’ educational journeys
              and igniting their passions. We nurture a culture of innovation
              and intellectual discovery, empowering students to create new
              ideas, engage in deep learning, and achieve personal growth.
            </p>
            <div className="flex flex-col items-center md:items-start gap-5">
              <Link href="#" className="bg-primary text-white flex px-5 py-1.5 rounded-3xl gap-4"><span className="text-xs sm:text-xl">About Us</span><Image src="/arrow-2.svg" alt="arrow 2" width={39} height={8} /></Link>
              <Link href="#" className="bg-primary text-white flex px-5 py-1.5 rounded-3xl gap-4"><span className="text-xs sm:text-xl">University Student Handbook</span><Image src="/arrow-2.svg" alt="arrow 2" width={39} height={8} /></Link>
            </div>
          </div>
          <div className="w-full grid  grid-cols-2 lg:w-1/2 2xl:px-6 text-center lg:text-left mt-10 md:mt-0">
            <div className="flex flex-col text-[#0060aa] mb-5">
              <span className="text-4xl sm:text-6xl xl:text-8xl 2xl:text-9xl leading-[1.4] font-medium">10+</span>
              <span className="text-sm md:text-xl font-light leading-[1.3]">
                Years of Educational Experience
              </span>
            </div>
            <div className="flex flex-col text-[#0060aa] mb-5">
              <span className="text-4xl sm:text-6xl xl:text-8xl 2xl:text-9xl leading-[1.4] font-medium">100+</span>
              <span className="text-sm md:text-xl font-light leading-[1.3]">
                Multidisciplinary Programmes
              </span>
            </div>
            <div className="flex flex-col text-[#0060aa] mb-5">
              <span className="text-4xl sm:text-6xl xl:text-8xl 2xl:text-9xl leading-[1.4] font-medium">700+</span>
              <span className="text-sm md:text-xl font-light leading-[1.3]">
                Companies Visited for Placement
              </span>
            </div>
            <div className="flex flex-col text-[#0060aa] mb-5">
              <span className="text-4xl sm:text-6xl xl:text-8xl 2xl:text-9xl leading-[1.4] font-medium">16K+</span>
              <span className="text-sm md:text-xl font-light leading-[1.3]">
                Alumni Worldwide
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ADecade;
