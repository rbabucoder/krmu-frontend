import Image from "next/image";

const DreamCareer = () => {
  return (
    <>
      <section className="prog-global-padding">
        <div className="max-w-[1320px] mx-auto w-full flex gap-6">
          <div className="w-1/2">
            <div className="p-[30px] border border-[#d8d8d8] rounded-[30px] grid grid-cols-2">
              <div className="py-10 flex items-center justify-center">
                <Image
                  src="/programmes/gm.webp"
                  width={88}
                  height={92}
                  alt="gm"
                />
              </div>
              <div className="py-10 flex items-center justify-center">
                <Image
                  src="/programmes/gm.webp"
                  width={88}
                  height={92}
                  alt="gm"
                />
              </div>
              <div className="py-10 flex items-center justify-center">
                <Image
                  src="/programmes/gm.webp"
                  width={88}
                  height={92}
                  alt="gm"
                />
              </div>
              <div className="py-10 flex items-center justify-center">
                <Image
                  src="/programmes/gm.webp"
                  width={88}
                  height={92}
                  alt="gm"
                />
              </div>
              <div className="py-10 flex items-center justify-center">
                <Image
                  src="/programmes/gm.webp"
                  width={88}
                  height={92}
                  alt="gm"
                />
              </div>
              <div className="py-10 flex items-center justify-center">
                <Image
                  src="/programmes/gm.webp"
                  width={88}
                  height={92}
                  alt="gm"
                />
              </div>
            </div>
            <div className="flex gap-6 mt-6">
              <div className="w-3/5 p-5 border border-[#d8d8d8] rounded-[30px] flex items-center justify-center">
                <div className="text-center">
                  <h4 className="text-[#db2a1a] text-[45px] font-normal">
                    56.6 LPA
                  </h4>
                  <p>Highest Package</p>
                </div>
              </div>
              <div className="w-2/5 p-5 border border-[#d8d8d8] rounded-[30px]">
                <div className="text-center">
                  <h4 className="text-[#db2a1a] text-[45px] font-normal">
                    700+
                  </h4>
                  <p>Campus Recruiters</p>
                </div>
                <div className="text-center mt-4">
                  <h4 className="text-[#db2a1a] text-[45px] font-normal">
                    100%
                  </h4>
                  <p>Placement Assistance</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="pt-[150px] px-[50px] pb-[50px] rounded-[20px] bg-[#0a41a1] h-full text-white">
              <h4 className="text-[50px] mb-5 font-normal leading-[1.2]">
                Connecting Talent to Dream Careers
              </h4>
              <p className="font-light text-xl leading-[2]">
                K.R. Mangalam University has collaborated with various top
                industry giants like Infosys, Wipro, TCS, Accenture, Genpact,
                and many more to offer our students a platform to secure good
                internships and placements. Graduates embark on rewarding
                careers in various roles, reflecting the university’s commitment
                to producing industry-ready professionals who excel in the
                competitive global market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DreamCareer;
