import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Admission2Hero = () => {
  return (
    <section className="pt-[140px] pb-[50px] px-4">
      <div className="max-w-[1320px] mx-auto w-full items-center gap-6 ">
        <div className="lg:w-1/2">
          <h1 className="text-[#0060aa] text-[60px] leading-[1.2] font-semibold">
            Step Into A Successful Future{" "}
            <span className="text-[#e61f21]">
              With K.R. Mangalam University
            </span>
          </h1>
          <p className="font-semibold mt-6 mb-4">
            Dive into a world of diverse programmes curated to guide you on your
            successful journey
          </p>
          <Link href="#" className="common-btn-1 w-fit">
            Apply Now <ArrowRight color="#fff" />
          </Link>
        </div>
        <div className="lg:w-1/2">
          <Image src="/admission2/hero.png" width={636} height={523} alt="" />
        </div>
      </div>
      {/* <div className="max-w-[1320px] mx-auto w-full">

      </div> */}
    </section>
  );
};

export default Admission2Hero;
