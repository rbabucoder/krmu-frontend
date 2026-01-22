import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import CometoLifeSlide from "./CometoLifeSlide";
import { ComeToLifeSection } from "../admission/PGType";

type Props = {
  data: ComeToLifeSection;
};

const ComeToLife = ({ data }: Props) => {
  return (
    <section className="py-10 px-4 bg-[#051630]">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center">
          <h3
            className="
        text-3xl md:text-4xl lg:text-5xl
        font-semibold
        leading-tight
        mb-5
        text-white
      "
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />

          <p
            className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>
      </div>

      {/* Slider */}
      <div className="my-10">
        <CometoLifeSlide slides={data.slides} />
      </div>

      {/* Footer CTA */}
      <div className="my-10">
        <p
          className="text-[#666666] text-center"
          dangerouslySetInnerHTML={{ __html: data.footerText }}
        />

        <div className="flex justify-center my-10">
          <Link
            href={data.cta.href}
            className="group self-start lg:self-center flex items-center gap-3 border border-white/30 rounded-full px-6 py-2 text-sm hover:bg-white text-white hover:text-black transition"
          >
            {data.cta.label}
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-red-500 text-white group-hover:rotate-45 transition">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComeToLife;
