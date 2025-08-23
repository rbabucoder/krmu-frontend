import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="pt-24 sm:pt-40 sm:pb-[50px] px-2.5 sm:px-4">
      <div className="max-w-[1664px] mx-auto w-full md:flex items-center justify-between">
        <div className="w-full md:w-1/2">
          <h4 className="text-xs sm:text-2xl font-medium leading-[1.2] mb-2">
            Shaping Thoughtful Leaders for a Better Tomorrow
          </h4>
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#0060aa] leading-[1.2]">
            B.A. (Hons.) Psychology
          </h1>
          <p className="text-xs sm:text-[15px] font-medium mt-6 mb-4">
            Pursue a dynamic programme that blends theory, research, and
            real-world practice to help you make a lasting impact in society.
          </p>
          <Link href="#" className="hero-common-btn-b">
            Apply Now <MoveRight />
          </Link>
        </div>
        <div className="hidden  w-full md:w-1/2 md:flex items-center justify-center">
          <Image
            width={600}
            height={500}
            alt="Programmes"
            src="/programmes/hero-image.webp"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
