import Image from "next/image";
import Link from "next/link";

const ResearchHighlight = () => {
  return (
    <section className="bg-[url(/research/gradient-1.webp)] bg-cover bg-no-repeat py-8">
      <div className="text-white max-w-[1664px] mx-auto w-full">
        <h3 className="text-5xl font-semibold">Research Highlights</h3>

        <div className="grid grid-cols-3 gap-10 mt-10">
          <div>
            <div>
              <Image
                src="/research/highlightbg.webp"
                width={483}
                height={310}
                className="w-full h-80"
                alt=""
              />
            </div>
            <div className="text-center mt-2.5">
              <Link href="#" className="text-white">
                INVESTIGATION INTO THE VIBRATIONAL CHARACTERISTICS OF
                MONOLAYERED RUDDLESDEN-POPPER COMPOUNDS (SR, BA)2HFO4
                <Image
                  src="/research/new-icon-gif-animation-14.gif"
                  width={45}
                  height={32}
                  className="inline"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/research/highlightbg.webp"
                width={483}
                height={310}
                className="w-full h-80"
                alt=""
              />
            </div>
            <div className="text-center mt-2.5">
              <Link href="#" className="text-white">
                INVESTIGATION INTO THE VIBRATIONAL CHARACTERISTICS OF
                MONOLAYERED RUDDLESDEN-POPPER COMPOUNDS (SR, BA)2HFO4
                <Image
                  src="/research/new-icon-gif-animation-14.gif"
                  width={45}
                  height={32}
                  className="inline"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/research/highlightbg.webp"
                width={483}
                height={310}
                className="w-full h-80"
                alt=""
              />
            </div>
            <div className="text-center mt-2.5">
              <Link href="#" className="text-white">
                INVESTIGATION INTO THE VIBRATIONAL CHARACTERISTICS OF
                MONOLAYERED RUDDLESDEN-POPPER COMPOUNDS (SR, BA)2HFO4
                <Image
                  src="/research/new-icon-gif-animation-14.gif"
                  width={45}
                  height={32}
                  className="inline"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchHighlight;
