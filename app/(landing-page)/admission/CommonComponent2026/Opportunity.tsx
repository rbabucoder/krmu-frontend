import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { OpportunitySection } from "../law-2026/contentype";

type Props = {
  data: OpportunitySection;
};

const Opportunity = ({ data }: Props) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1400px] mx-auto w-full bg-[#0060aa] flex flex-col-reverse sm:flex-row items-center justify-between pt-10 px-10 rounded-4xl lg:h-[250px]">
        {/* Image */}
        <div className="sm:w-1/2 h-full relative">
          <div className="lg:absolute bottom-0">
            <Image
              src={data.image.src}
              width={data.image.width}
              height={data.image.height}
              alt={data.image.alt}
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center sm:text-right sm:w-1/2">
          <h4 className="text-xl sm:text-3xl text-white font-semibold">
            {data.heading}
          </h4>
          <h5 className="text-2xl sm:text-4xl text-[#f3cc5a] font-semibold italic">
            {data.highlight}
          </h5>

          <div className="flex justify-center sm:justify-end">
            <Link
              href={data.cta.href}
              className="bg-white rounded-full pl-5 pr-2.5 py-2.5 flex w-fit items-center gap-2.5 mt-5"
            >
              {data.cta.label}
              <span className="bg-black p-2.5 flex items-center justify-center rounded-full">
                <MoveUpRight color="#fff" size={20} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
