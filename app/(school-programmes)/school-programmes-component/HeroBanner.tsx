import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section>
      <div className="max-w-[1664px] mx-auto w-full flex items-center justify-between">
        <div>
          <h4 className="text-2xl font-medium leading-[1.2] mb-2">
            Shaping Thoughtful Leaders for a Better Tomorrow
          </h4>
          <h1 className="text-5xl font-semibold text-[#0060aa] leading-[1.2]">
            B.A. (Hons.) Psychology
          </h1>
          <p className="text-[15px] font-medium  mt-6 mb-4">
            Pursue a dynamic programme that blends theory, research, and
            real-world practice to help you make a lasting impact in society.
          </p>
          <Link href="#" className="common-btn-b">
            Apply Now <MoveRight />
          </Link>
        </div>
        <div>
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
