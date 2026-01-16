import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import CometoLifeSlide from "./CometoLifeSlide";
import { ComeToLifeSection } from "../law-2026/contentype";

type Props = {
  data: ComeToLifeSection;
};

const ComeToLife = ({ data }: Props) => {
  return (
    <section className=" px-4">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <div>
          <h3
            className="text-4xl text-[#013fa1] font-semibold text-center mb-5"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />
          <p
            className="text-[#666666] text-center"
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
            className="flex items-center bg-[#0060aa] text-white justify-between w-fit py-0.5 pl-3 pr-2 text-sm gap-2 border border-white rounded-full"
          >
            <span className="w-4/5 text-center">{data.cta.label}</span>
            <span className="bg-white p-3 rounded-full w-1/5">
              <MoveUpRight className="text-[#0060aa]" size={30} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComeToLife;
