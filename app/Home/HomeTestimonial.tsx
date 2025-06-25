import HomeTestimonials from "../components/Testimonials/HomeTestimonials";

interface HomeKRMTestimonialProps {
  title: string;
  desc: string;
}

const HomeTestimonial = ({ title, desc }: HomeKRMTestimonialProps) => {
  return (
    <>
      <section className="py-12 lg:py-40 px-5 lg:px-8 bg-[#051630] lg:-mt-[70px]">
        <div className="lg:mx-9 2xl:pl-52 ">
          <div className="lg:flex items-center text-white">
            <div className="lg:w-[40%] lg:pr-10 text-center lg:text-left">
              <h4 className="text-4xl lg:text-5xl xl:text-[64px] leading-[1.2] font-semibold mb-5">
                {title}
              </h4>
              <p>
                {desc}
              </p>
            </div>
            <div className="lg:w-[60%] mt-10 lg:mt-0">
              <div className="flex flex-col lg:flex-row gap-5 xl:gap-8">
                <HomeTestimonials />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeTestimonial;
