import Image from "next/image";

const PhdWelcomeUniversity = () => {
  return (
    <section className="py-10 bg-[#F8F9FA] px-4">
      <div className="max-w-[1300px] mx-auto w-full flex flex-col xl:flex-row gap-10">
        <div className="w-full xl:w-1/3">
          <h3 className="text-[32px] font-semibold mb-5">
            Welcome to K.R. Mangalam University
          </h3>
          <div className="custom-border"></div>
          <p className="my-5">
            K.R. Mangalam University has over the years become one of the
            leading centres of education, research and innovation in Delhi NCR
            region. Established through an act of State Legislature of Uttar
            Pradesh (14 of 2009),
          </p>
          <p className="mb-5">
            <strong>
              K.R. Mangalam University offers over 135+ programmes
            </strong>{" "}
            <br />
            in various disciplines. It's a part of the renowned K.R. Mangalam
            Group with operations in areas like Education, Healthcare and IT.
            Being the only global university in India with students from 95+
            countries, and academic partnerships with 300+ Universities across
            the world-USA, UK, Italy, Canada, Russia, Slovenia, et al, the
            University offers a truly international learning environment.
            <br />
            <strong>
              <i>That’s why it says, “The World is Here, Where are You?”</i>
            </strong>
          </p>
        </div>
        <div className="w-full xl:w-1/3">
          <Image
            src="/landingpage/phd/welcome.webp"
            width={364}
            height={430}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full xl:w-1/3 flex flex-col gap-5 text-center sm:text-left md:gap-x-10 md:gap-y-20">
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <h4 className="text-2xl sm:text-4xl text-[#E50404] font-semibold">
                56.6 LPA
              </h4>
              <h5 className="font-semibold">Highest Package</h5>
            </div>
            <div className="flex flex-col">
              <h4 className="text-2xl sm:text-4xl text-[#005DA9] font-semibold">700+</h4>
              <h5 className="font-semibold">Campus Recruiters</h5>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <h4 className="text-2xl sm:text-4xl text-[#005DA9] font-semibold">100%</h4>
              <h5 className="font-semibold">Placement Assistance</h5>
            </div>
            <div className="flex flex-col">
              <h4 className="text-2xl sm:text-4xl text-[#E50404] font-semibold">16K+</h4>
              <h5 className="font-semibold">Alumni Base</h5>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <h4 className="text-2xl sm:text-4xl text-[#E50404] font-semibold">100%</h4>
              <h5 className="font-semibold">Placement Assistance</h5>
            </div>
            <div className="flex flex-col">
              <h4 className="text-2xl sm:text-4xl text-[#005DA9] font-semibold">16K+</h4>
              <h5 className="font-semibold">Alumni Base</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhdWelcomeUniversity;
