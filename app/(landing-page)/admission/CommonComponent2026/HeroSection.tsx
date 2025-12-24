import { HeroMarqueeSection } from "../law-2026/contentype";
import HeroMarquee from "./HeroMarquee";
import NoPaperFormsWidget from "./NoPaperFormsWidget";
type Props = {
  formId: string;
  content?: string;
  desc?: string;
  marqueeData: HeroMarqueeSection;
};

const HeroSection = ({ formId, content, desc, marqueeData }: Props) => {
  return (
    <>
      <section className="py-20 md:pt-36 md:pb-20 px-5 bg-[url(/landingpage/common/dummyherobg.png)] bg-cover bg-no-repeat">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-2/5 text-white text-center md:text-left">
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
          <div className="w-full lg:w-3/5 flex justify-center md:justify-end mt-5 lg:mt-0">
            {formId && <NoPaperFormsWidget widgetId={formId} />}
          </div>
        </div>
      </section>
      <HeroMarquee data={marqueeData} />
    </>
  );
};

export default HeroSection;
