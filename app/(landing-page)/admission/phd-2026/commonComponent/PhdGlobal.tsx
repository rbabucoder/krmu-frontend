import Image from "next/image";

const PhdGlobal = () => {
  return (
    <section className="py-20 bg-[url(/landingpage/phd/global.webp)] bg-cover bg-no-repeat px-4">
      <div className="max-w-[1300px] mx-auto w-full flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-2/5 text-center md:text-left">
          <h3 className="text-4xl md:text-[50px] text-white font-semibold leading-[1.2] mb-5">
            International Collaboration
          </h3>
          <p className="text-[#828282]">
           Our international partnerships enable student and faculty exchange programmes, joint research, access to global labs, and study-abroad opportunities. Through strategic MoUs with leading universities and international organisations worldwide, KRMU equips students with global exposure and industry-ready skills—advancing its vision to emerge as a centre of world-class education.
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
