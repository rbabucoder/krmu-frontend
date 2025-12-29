import Image from "next/image";

const PhdWhyphd = () => {
  return (
    <section className="bg-[#F8F9FA] py-[140px] px-4">
      <div className="max-w-[1300px] mx-auto w-full">
        <div className="whyphdHeading relative">
          <h2 className="text-[32px] font-semibold mb-2.5 text-center">
            Why Ph.D at K.R. Mangalam
          </h2>
          <div
            className="faded-text font-bold text-gray-300 opacity-30
      tracking-wide uppercase
      select-none pointer-events-none"
          >
            Why Ph.D at K.R. Mangalam
          </div>
          <div className="custom-border absolute left-[50%] translate-x-[-50%]"></div>
        </div>

        <div className="flex flex-col xl:flex-row gap-10 mt-20">
          <div className="w-full xl:w-1/2">
            <Image
              src="/landingpage/phd/whyphd.webp"
              width={644}
              height={532}
              alt=""
              className="w-full"
            />
          </div>
          <div className="w-full xl:w-1/2">
            <ul>
              <li className="flex items-start gap-2 border-b-2 border-[#E2E8F0] pb-3 text-lg">
                <div className="mt-1">
                  <Image
                    src="/landingpage/phd/why-phd/item-1.svg"
                    width={18}
                    height={24}
                    alt=""
                    className="w-12 h-12"
                  />
                </div>
                <div className="font-light">
                  The University publishes two research journals namely, Journal
                  of Scientific and Technical Research (JSTR), and International
                  Journal of Management Issues and Research (IJMIR) regularly.
                </div>
              </li>
              <li className="flex items-start gap-2 border-b-2 border-[#E2E8F0] py-3 text-lg">
                <span className="mt-1">
                  <Image
                    src="/landingpage/phd/why-phd/item-2.svg"
                    width={18}
                    height={24}
                    alt=""
                  />
                </span>
                <div className="font-light">
                  Internationally Recognised Degrees, Approved by UGC, Govt. of{" "}
                  <br /> India
                </div>
              </li>

              <li className="flex items-start gap-2 border-b-2 border-[#E2E8F0] py-3 text-lg">
                <span className="mt-1">
                  <Image
                    src="/landingpage/phd/why-phd/item-3.svg"
                    width={18}
                    height={24}
                    alt=""
                  />
                </span>
                <div className="font-light">
                  Major funded research projects worth Rs. 22.74 crores are
                  running in the university
                </div>
              </li>

              <li className="flex items-start gap-2 border-b-2 border-[#E2E8F0] py-3 text-lg">
                <span className="mt-1">
                  <Image
                    src="/landingpage/phd/why-phd/item-4.svg"
                    width={18}
                    height={24}
                    alt=""
                  />
                </span>
                <div className="font-light">
                  12 Research lab and 6 high-end research centres
                </div>
              </li>
              <li className="flex items-start gap-2 border-b-2 border-[#E2E8F0] py-3 text-lg">
                <span className="mt-1">
                  <Image
                    src="/landingpage/phd/why-phd/item-2.svg"
                    width={18}
                    height={24}
                    alt=""
                  />
                </span>
                <div className="font-light">
                  Education Excellence Award by ASSOCHAM supported by Ministry
                  of Commerce, Govt. of India
                </div>
              </li>
              <li className="flex items-start gap-2 border-b-2 border-[#E2E8F0] py-3 text-lg">
                <span className="mt-1">
                  <Image
                    src="/landingpage/phd/why-phd/item-5.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                </span>
                <div className="font-light">
                  The faculty members/researchers have twelve patents pertaining
                  to their innovative research work under their name.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhdWhyphd;
