import { ChevronRight, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HeroCTA, ImageType } from "../admission/PGType";
import NoPaperFormsWidget from "../admission/CommonComponent2026/NoPaperFormsWidget";

type Props = {
  title: string;
  description: string;
  primaryCta: HeroCTA;
  secondaryCta: HeroCTA;
  image: ImageType;
  bgImage: string;
  formId: string;
};

const HeroSection = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  bgImage,
  formId,
}: Props) => {
  return (
    <section
      className="py-12 md:py-16 lg:py-20"
      style={{
        background: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left Content */}
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <div className="max-w-[600px] w-full">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold leading-tight lg:leading-[1.3] mb-4"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />

            {/* <p className="text-[#9ba2ac] text-base sm:text-lg mb-6"> */}
            <p
              className="text-white text-base sm:text-lg mb-6"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 justify-center lg:justify-start">
            {/* Primary CTA */}
            <Link
              href={primaryCta.href}
              className="flex items-center justify-between w-full sm:max-w-[280px] py-1 px-2 gap-2 border border-white rounded-full"
            >
              <span className="w-4/5 text-center text-white text-sm sm:text-base">
                {primaryCta.label}
              </span>
              <div className="bg-white p-2 sm:p-3 rounded-full">
                <MoveUpRight className="text-[#0060aa]" size={24} />
              </div>
            </Link>

            {/* Secondary CTA */}
            <Link
              href={secondaryCta.href}
              className="text-white text-sm sm:text-base flex items-center gap-2 sm:gap-4"
            >
              {secondaryCta.label}
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/3">
          {/* {image.src && (
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
              priority
              className="w-full h-auto max-w-[500px] lg:max-w-full mx-auto"
            />
          )} */}
          {formId && (
            <div className="heroBannerForm__form">
              <div className="heroBannerForm-header">
                <h3 className="mb-0">
                  <strong>
                    Apply Today for <span>K.R. Mangalam University</span>
                  </strong>
                </h3>
              </div>

              <NoPaperFormsWidget widgetId={formId} height="480px" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
