import Image from "next/image";

const PhdCounter = () => {
  return (
    <section className="px-4">
      <div
        className="max-w-[1300px] mx-auto w-full rounded-button z-10 relative -mt-24 bg-white"
        style={{
          boxShadow: `rgba(149, 157, 165, 0.2) 0px 8px 24px`,
        }}
      >
        <div className="p-5 md:py-12 md:px-20 grid grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex flex-col sm:flex-row text-center sm:text-left gap-3.5 items-center">
            <div className="bg-[#00BFE7] rounded-full flex items-center justify-center w-[50px] h-[50px]">
              <Image
                src="/wp-content/landingpage/phd-2026/icons/patent.svg"
                width={27}
                height={24}
                alt="Patents"
              />
            </div>
            <span className="flex flex-col justify-center">
              <span className="text-h5 font-semibold">4,000</span>
              <span className="text-xs text-krmu-gray-400">
                Publications
              </span>
            </span>
          </div>
          <div className="flex flex-col sm:flex-row text-center sm:text-left gap-3.5 items-center">
            <div className="bg-[#00C1A1] rounded-full flex items-center justify-center w-[50px] h-[50px]">
              <Image
                src="/wp-content/landingpage/phd-2026/icons/scholar.svg"
                width={27}
                height={24}
                alt="Patents"
              />
            </div>
            <span className="flex flex-col justify-center">
              <span className="text-h5 font-semibold">16 Cr</span>
              <span className="text-xs text-krmu-gray-400">
                Research Grants  
              </span>
            </span>
          </div>
          <div className="flex flex-col sm:flex-row text-center sm:text-left gap-3.5 items-center">
            <div className="bg-[#FC654C] rounded-full flex items-center justify-center w-[50px] h-[50px]">
              <Image
                src="/wp-content/landingpage/phd-2026/icons/research.svg"
                width={27}
                height={24}
                alt="Patents"
              />
            </div>
            <span className="flex flex-col justify-center">
              <span className="text-h5 font-semibold">250+</span>
              <span className="text-xs text-krmu-gray-400">
                Patents 
              </span>
            </span>
          </div>
          <div className="flex flex-col sm:flex-row text-center sm:text-left gap-3.5 items-center">
            <div className="bg-[#FF9C00] rounded-full flex items-center justify-center w-[50px] h-[50px]">
              <Image
                src="/wp-content/images/book-search.svg"
                width={27}
                height={24}
                alt="Patents"
              />
            </div>
            <span className="flex flex-col justify-center">
              <span className="text-h5 font-semibold">7.9</span>
              <span className="text-xs text-krmu-gray-400">
                Citation Index 
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhdCounter;
