import Image from "next/image";

const CareerHeroSection = () => {
  return (
    <section className=" bg-[url(/careers/careerb-banner.webp)] bg-cover bg-center bg-no-repeat">
      <div className="max-w-[1664px] mx-auto w-full pt-[25%] pb-[5%]">
        <div className="w-3/5 text-white">
          <h3 className="text-4xl font-semibold  mb-5">
            We work together within a team environment of mutual respect,
            honesty and integrity
          </h3>
          <p>
            K.R. Mangalam University is committed to creating a future for the
            country’s young leaders, building upon research and innovation-based
            global academic institution striving to focus on bridging the
            knowledge gap between students and industry.
          </p>
        </div>
        <div className="w-2/5"></div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex items-center">
        <div className="w-1/2 text-white">
          <h2 className="text-4xl font-semibold mb-5">Why work with us</h2>
          <p>
            We are always on the lookout for well-accomplished, empathetic and
            knowledgeable academicians equipped with tools to help an upcoming
            generation of scholars become successful both in personal and
            professional endeavors.
          </p>
        </div>
        <div className="w-1/2">
          <Image src="/careers/19.png" width={768} height={543} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CareerHeroSection;
