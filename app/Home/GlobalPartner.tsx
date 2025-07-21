import { StrapiMedia } from "@/lib/types/common";
import HomeGlobalCarousel from "../components/Carousels/HomeGlobalCarousel";

interface GlobalPartenerProp {
  title: string;
  desc: string;
  logoSliderHeading: string;
  globalLogos: StrapiMedia[]
}

const GlobalPartner = ({
  title,
  desc,
  logoSliderHeading,
  globalLogos
}: GlobalPartenerProp) => {
  return (
    <>
      <section className="py-12 lg:py-20 px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row max-w-[1664px] mx-auto w-full">
          <div className="w-full lg:w-1/3 lg:mx-8 text-center lg:text-left">
            <h5 className="text-[32px] leading-[1.34] font-medium mt-2.5 mb-4 ">
              {title}
            </h5>
            <p>{desc}</p>
          </div>
          <div className="w-full lg:w-2/3 lg:mx-8">
            <div className="text-center">
              <h4 className="text-4xl md:text-5xl leading-[1.5] mt-2.5 mb-4">
                {logoSliderHeading}
              </h4>
            </div>
            <div>
              <HomeGlobalCarousel logos={globalLogos} /> 
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GlobalPartner;
