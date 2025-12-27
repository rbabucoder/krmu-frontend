import Image from "next/image";

const PhdCounter = () => {
  return (
    <section>
      <div
        className="max-w-[1300px] mx-auto w-full rounded-[10px] z-10 relative -mt-24 bg-white"
        style={{
          boxShadow: `rgba(149, 157, 165, 0.2) 0px 8px 24px;`,
        }}
      >
        <div className="py-12 px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex gap-3.5 items-center">
            <div className="bg-[#00BFE7] rounded-full flex items-center justify-center w-[50px] h-[50px]">
              <Image
                src="/landingpage/phd/icon-1.svg"
                width={27}
                height={24}
                alt="Patents"
              />
            </div>
            <span className="flex flex-col justify-center">
              <span className="text-[22px] font-semibold">
                1023
              </span>
              <span className="text-xs text-[#7F7F7F]">Patents Published and 412 Granted</span>
            </span>
          </div>
               <div className="flex gap-3.5 items-center">
            <div className="bg-[#00BFE7] rounded-full flex items-center justify-center w-[50px] h-[50px]">
              <Image
                src="/landingpage/phd/icon-1.svg"
                width={27}
                height={24}
                alt="Patents"
              />
            </div>
            <span className="flex flex-col justify-center">
              <span className="text-[22px] font-semibold">
                1023
              </span>
              <span className="text-xs text-[#7F7F7F]">Patents Published and 412 Granted</span>
            </span>
          </div>
               <div className="flex gap-3.5 items-center">
            <div className="bg-[#00BFE7] rounded-full flex items-center justify-center w-[50px] h-[50px]">
              <Image
                src="/landingpage/phd/icon-1.svg"
                width={27}
                height={24}
                alt="Patents"
              />
            </div>
            <span className="flex flex-col justify-center">
              <span className="text-[22px] font-semibold">
                1023
              </span>
              <span className="text-xs text-[#7F7F7F]">Patents Published and 412 Granted</span>
            </span>
          </div>
               <div className="flex gap-3.5 items-center">
            <div className="bg-[#00BFE7] rounded-full flex items-center justify-center w-[50px] h-[50px]">
              <Image
                src="/landingpage/phd/icon-1.svg"
                width={27}
                height={24}
                alt="Patents"
              />
            </div>
            <span className="flex flex-col justify-center">
              <span className="text-[22px] font-semibold">
                1023
              </span>
              <span className="text-xs text-[#7F7F7F]">Patents Published and 412 Granted</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhdCounter;
