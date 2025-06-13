import Image from "next/image";

const OurTopRecruiters = () => {
  return (
    <>
      <section className="bg-[#051630] overflow-hidden">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="w-full lg:w-1/2 pt-12 lg:py-20 px-5 lg:px-0 lg:mx-8 text-center md:text-left">
            <h4 className="text-4xl md:text-5xl xl:text-[80px] font-medium leading-[1.13] grad-text-color">
              Our Top <br className="hidden lg:block" /> Recruiters are
              <br className="hidden lg:block" /> Waiting for You
            </h4>
            <div className="grid grid-cols-2 text-white mt-10 xl:mt-0">
              <div className="flex flex-col mb-5">
                <span className="text-2xl md:text-5xl xl:text-[55px] font-semibold">56.6 LPA</span>
                <span className="text-sm md:text-xl xl:text-2xl font-semibold">Highest Package</span>
              </div>
              <div className="flex flex-col mb-5">
                <span className="text-2xl md:text-5xl xl:text-[55px] font-semibold">16K+</span>
                <span className="text-sm md:text-xl xl:text-2xl font-semibold">Alumni Base</span>
              </div>
              <div className="flex flex-col mb-5">
                <span className="text-2xl md:text-5xl xl:text-[55px] font-semibold">700+</span>
                <span className="text-sm md:text-xl xl:text-2xl font-semibold">
                  Campus Recruiters
                </span>
              </div>
              <div className="flex flex-col mb-5">
                <span className="text-2xl md:text-5xl xl:text-[55px] font-semibold">100%</span>
                <span className="text-sm md:text-xl xl:text-2xl font-semibold">
                  Placement Assistance
                </span>
              </div>
            </div>
          </div>
          <div
            className={`grid grid-cols-2 md:grid-cols-3 pb-12 px-5 w-full lg:w-1/2 lg:px-5 lg:pt-8 lg:pb-2.5 lg:mx-8 bg-[linear-gradient(0deg,_#0060aa_0%,_#051630_100%)]`}
          >
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/apple.webp"
                width={154}
                height={67}
                alt="Apple Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/amazon.webp"
                width={130}
                height={39}
                alt="Amazon Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/ibm.webp"
                width={142}
                height={47}
                alt="IBM Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/cisco.webp"
                width={124}
                height={66}
                alt="Cisco Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/meta.webp"
                width={147}
                height={83}
                alt="Meta Logo"
              />
            </div>

            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/microsoft.webp"
                width={171}
                height={36}
                alt="Microsoft Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/linked.webp"
                width={124}
                height={33}
                alt="Apple Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/ey.webp"
                width={68}
                height={78}
                alt="EY Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/jp-morgan.webp"
                width={140}
                height={30}
                alt="JP Morgan Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/media.webp"
                width={87}
                height={74}
                alt="Media Logo"
              />
            </div>

            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/tata.webp"
                width={166}
                height={20}
                alt="Tata Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/accenture.webp"
                width={158}
                height={41}
                alt="Accenture Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/flipkart.webp"
                width={142}
                height={38}
                alt="Flipkart Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/itc.webp"
                width={71}
                height={73}
                alt="ITC Logo"
              />
            </div>

            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/axis.webp"
                width={177}
                height={46}
                alt="Axis Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/infosys.webp"
                width={142}
                height={52}
                alt="Infosys Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl sm:mb-5 flex items-center justify-center">
              <Image
                src="/public-issapient.webp"
                width={114}
                height={62}
                alt="Publicis sapient Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl  sm:mb-5 flex items-center justify-center">
              <Image
                src="/google.webp"
                width={134}
                height={44}
                alt="Google Logo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTopRecruiters;
