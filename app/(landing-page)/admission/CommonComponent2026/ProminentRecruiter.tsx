import Image from "next/image";
import { ProminentRecruit } from "../law-2026/contentype";

type Props = {
  recruiters: ProminentRecruit[];
};

const ProminentRecruiter = ({ recruiters }: Props) => {
  return (
    <section className="py-5 sm:py-10 px-4 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full">
        <h3 className="text-4xl text-center text-[#003fa1] font-semibold">Our Prominent Recruiters</h3>

        {/* Infinite Scroll Wrapper */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-10 my-10">
            {/* duplicate list for seamless loop */}
            {[...recruiters, ...recruiters].map((rec, i) => (
              <div
                key={i}
                className="prominentrecruitShadow flex items-center justify-center min-w-[200px]"
              >
                <Image
                  src={rec.imgUrl}
                  width={170}
                  height={35}
                  alt={rec.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProminentRecruiter;
