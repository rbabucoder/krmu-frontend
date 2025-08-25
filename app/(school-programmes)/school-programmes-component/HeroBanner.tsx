import { STRAPI_URL } from "@/app/constant";
import { HeroSection } from "@/lib/types/school-programme";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  heroSection: HeroSection;
};

const HeroBanner = ({ title, heroSection }: Props) => {
  return (
    <section className="pt-24 sm:pt-40 sm:pb-[50px] px-2.5 sm:px-4">
      <div className="max-w-[1664px] mx-auto w-full md:flex items-center justify-between">
        <div className="w-full md:w-1/2">
          <h4 className="text-xs sm:text-2xl font-medium leading-[1.2] mb-2">
            {heroSection?.subtitle}
          </h4>
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#0060aa] leading-[1.2]">
            {title}
          </h1>
          <p className="text-xs sm:text-[15px] font-medium mt-6 mb-4">
            {heroSection?.description}
          </p>
          {(heroSection?.herobtn?.buttonclass ||
            heroSection?.herobtn?.buttonlink) && (
            <Link
              href={heroSection?.herobtn?.buttonlink}
              className={`hero-common-btn-b ${heroSection?.herobtn?.buttonclass}`}
            >
              {heroSection?.herobtn?.buttontext} <MoveRight />
            </Link>
          )}
        </div>
        <div className="hidden  w-full md:w-1/2 md:flex items-center justify-center">
          {heroSection?.heroimg && (
            <Image
              src={`${STRAPI_URL}${heroSection?.heroimg?.url}`}
              width={600}
              height={500}
              alt={heroSection?.heroimg?.alternativeText || "Hero Image"}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
