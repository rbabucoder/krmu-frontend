import Image from "next/image";
import Link from "next/link";
import ProgramHighlightSlider from "../global-comp/ProgramHighlightSlider";

const PlacementHighlight = () => {
  return (
    <>
      <section className="py-[30px] mt-5 px-4">
        <div className="max-w-[1664px] mx-auto w-full mb-7">
          <h2 className="text-[26px] md:text-5xl text-center font-semibold md:leading-[1.5] mb-5">
            Placement Highlights
          </h2>
          <div className="hidden lg:grid grid-cols-4 gap-2.5 mb-10">
            <div>
              <Image
                src="/programmes/Daksh-Mehta.webp"
                width={390}
                height={390}
                alt="programme highlight"
                className="w-full h-full"
              />
            </div>
            <div>
              <Image
                src="/programmes/Daksh-Mehta.webp"
                width={390}
                height={390}
                alt="programme highlight"
                className="w-full h-full"
              />
            </div>
            <div>
              <Image
                src="/programmes/Daksh-Mehta.webp"
                width={390}
                height={390}
                alt="programme highlight"
                className="w-full h-full"
              />
            </div>
            <div>
              <Image
                src="/programmes/Daksh-Mehta.webp"
                width={390}
                height={390}
                alt="programme highlight"
                className="w-full h-full"
              />
            </div>
          </div>                                              
          <div className="lg:hidden">
            <ProgramHighlightSlider />
          </div>
          <div className="text-center mt-5">
            <Link
              href="#"
              className="py-[11px] px-[23px] text-sm text-white bg-[#e20910] hover:bg-[#034272] rounded-sm font-medium inline-block"
            >
              Know More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlacementHighlight;
