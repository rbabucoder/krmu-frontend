import Image from "next/image";
import { HeroMarqueeSection } from "../law-2026/contentype";
import HeroMarquee from "./HeroMarquee";
import NoPaperFormsWidget from "./NoPaperFormsWidget";
type Props = {
  formId: string;
  content?: string;
  desc?: string;
  marqueeData: HeroMarqueeSection;
  heroBg?: string;
  middleImg?: string;
};

const HeroSection = ({
  formId,
  content,
  desc,
  marqueeData,
  heroBg,
  middleImg,
}: Props) => {
  return (
    <>
      <section
        className={`py-20 md:pt-14 md:pb-14 px-5`}
        style={{
          background: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center gap-5">
          <div className="w-full xl:w-1/3 text-white text-center md:text-left">
            <h1
              className="text-white font-semibold text-2xl md:text-5xl leading-[1.4]"
              dangerouslySetInnerHTML={{
                __html: content || "",
              }}
            />

            <p
              dangerouslySetInnerHTML={{
                __html: desc || "",
              }}
            />
          </div>
          <div className="w-1/3 hidden xl:block">
            {middleImg && (
              <Image
                src={middleImg}
                width={570}
                height={735}
                alt="Hero"
                className="-mb-28"
              />
            )}
          </div>
          <div className="w-full xl:w-1/3 mt-5 lg:mt-0" id="apply-section">
            {formId && <NoPaperFormsWidget widgetId={formId} />}
          </div>
        </div>
      </section>
      <HeroMarquee data={marqueeData} />
    </>
  );
};

export default HeroSection;
