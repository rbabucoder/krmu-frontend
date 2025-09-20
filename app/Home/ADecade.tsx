import { ADecadeLeftCol, ADecadeRightCol } from "@/lib/types/home";
import Image from "next/image";
import Link from "next/link";

interface ADecadeProps { 
  leftContent: ADecadeLeftCol;
  rightContent: ADecadeRightCol;
}
type Counter = {
  counterText: string;
  counterContent: string;
};
const ADecade = ({ leftContent, rightContent }: ADecadeProps) => {
 
  const counters: Counter[] = [
    {
      counterText: rightContent.counter1text,
      counterContent: rightContent.counter1content,
    },
    {
      counterText: rightContent.counter2text,
      counterContent: rightContent.counter2content,
    },
    {
      counterText: rightContent.counter3text,
      counterContent: rightContent.counter3content,
    },
    {
      counterText: rightContent.counter4text,
      counterContent: rightContent.counter4content,
    },
  ];

  return (
    <>
      <section className="px-4 py-8 lg:mb-20">
        <div className="flex flex-col text-center lg:flex-row lg:gap-5    max-w-[1664px] mx-auto md:text-left">
          <div className="w-full lg:w-1/2 lg:px-4">                     
            <h2 className="leading-[1] text-2xl xl:text-[64px] font-medium lg:leading-[1.13] mb-2 md:mb-5 grad-text-color">
              {leftContent.adecadetitle}
            </h2>
            <h3 className="mb-4 text-4xl leading-[1.2]  xl:leading-[2] font-light grad-text-color">
              {leftContent.adecadesubtitle}
            </h3>
            <p className="font-normal mb-5">{leftContent.adecadedescription}</p>
            <div className="flex flex-col items-center md:items-start gap-5">
              {leftContent.button1link && (
                <Link
                  href={leftContent.button1link}
                  className="bg-primary text-white flex px-5 py-1.5 rounded-3xl gap-4"
                >
                  <span className="text-xs sm:text-xl">
                    {leftContent.button1text}
                  </span>
                  <Image
                    src="/arrow-2.svg"
                    alt="arrow 2"
                    width={39}
                    height={8}
                  />
                </Link>
              )}
              {leftContent.button2link && (
                <Link
                  href={leftContent.button2link}
                  className="bg-primary text-white flex px-5 py-1.5 rounded-3xl gap-4"
                >
                  <span className="text-xs sm:text-xl">
                    {leftContent.button2text}
                  </span>
                  <Image
                    src="/arrow-2.svg"
                    alt="arrow 2"
                    width={39}
                    height={8}
                  />
                </Link>
              )}
            </div>
          </div>
          <div className="w-full grid grid-cols-2 lg:w-1/2 2xl:px-6 text-center gap-2.5 lg:text-left mt-10 md:mt-0">
            {counters.map(({ counterText, counterContent }, idx) => (
              <div key={idx} className="flex flex-col text-[#0060aa] mb-5">
                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.4] font-medium">
                  {counterText}
                </span>
                <span className="text-sm md:text-xl font-normal leading-[1.3]">
                  {counterContent}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ADecade;
