import Link from "next/link";

const SchoolNewsletter = () => {
  return (
    <section className="bg-[url(/schools/excited-bg.webp)] bg-cover bg-center py-14 mt-14 px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="w-full xl:w-2/3 text-white text-center">
          <h4 className="text-3xl sm:text-6xl lg:text-8xl font-medium mb-5 lg:mb-0">
            Our Newsletters
          </h4>
          <p className="text-sm sm:text-2xl lg:text-[32px] font-normal mb-5">
            Stay Updated with the Latest Events at KRMU
          </p>
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-5 md:gap-12">
            <Link
              href="#"
              className="py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm inline-block text-sm md:text-base"
            >
              Download Prospectus
            </Link>
            <Link
              href="#"
              className="py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm inline-block text-sm md:text-base"
            >
              Download Prospectus
            </Link>
            <Link
              href="#"
              className="py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm inline-block text-sm md:text-base"
            >
              Download Prospectus
            </Link>
          </div>
        </div>
        <div className="w-full xl:w-1/3"></div>
      </div>
    </section>
  );
};

export default SchoolNewsletter;
