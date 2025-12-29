import Image from "next/image";

const PhdGlobal = () => {
  return (
    <section className="py-20 bg-[url(/landingpage/phd/global.webp)] bg-cover bg-no-repeat px-4">
      <div className="max-w-[1300px] mx-auto w-full flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-2/5 text-center md:text-left">
          <h3 className="text-4xl md:text-[50px] text-white font-semibold leading-[1.2] mb-5">
            300+ GLOBAL <br /> MoUs
          </h3>
          <p className="text-[#828282]">
            K.R. Mangalam University’s 300+ global MoUs with leading
            universities, research centres and industries provide joint research
            opportunities, faculty exchange, and access to specialised
            labs—connecting every scholar to a truly international knowledge
            network.
          </p>
        </div>
        <div className="w-full lg:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-5">
          <div className="p-5 bg-white flex items-center justify-center">
            <Image
              src="/landingpage/phd/google.svg"
              width={175}
              height={95}
              alt=""
            />
          </div>
          <div className="p-5 bg-white flex items-center justify-center">
            <Image
              src="/landingpage/phd/google.svg"
              width={175}
              height={95}
              alt=""
            />
          </div>
          <div className="p-5 bg-white flex items-center justify-center">
            <Image
              src="/landingpage/phd/google.svg"
              width={175}
              height={95}
              alt=""
            />
          </div>
          <div className="p-5 bg-white flex items-center justify-center">
            <Image
              src="/landingpage/phd/google.svg"
              width={175}
              height={95}
              alt=""
            />
          </div>
          <div className="p-5 bg-white flex items-center justify-center">
            <Image
              src="/landingpage/phd/google.svg"
              width={175}
              height={95}
              alt=""
            />
          </div>
          <div className="p-5 bg-white flex items-center justify-center">
            <Image
              src="/landingpage/phd/google.svg"
              width={175}
              height={95}
              alt=""
            />
          </div>
          <div className="p-5 bg-white flex items-center justify-center">
            <Image
              src="/landingpage/phd/google.svg"
              width={175}
              height={95}
              alt=""
            />
          </div>
          <div className="p-5 bg-white flex items-center justify-center">
            <Image
              src="/landingpage/phd/google.svg"
              width={175}
              height={95}
              alt=""
            />
          </div>
          <div className="p-5 bg-white flex items-center justify-center">
            <Image
              src="/landingpage/phd/google.svg"
              width={175}
              height={95}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhdGlobal;
