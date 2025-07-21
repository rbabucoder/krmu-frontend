import { ButtonType } from "@/lib/types/common";
import Link from "next/link";

interface VisitExploreProp {
  title: string;
  desc: string;
  visitexplorebtns: ButtonType[];
}

const VisitExplore = ({ title, desc, visitexplorebtns }: VisitExploreProp) => {
  return (
    <section className="py-12 px-5 lg:py-20 lg:px-8 bg-[url(/visitbg.webp)]">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="text-white text-center max-w-[1045px] mx-auto w-full">
          <h4 className="text-4xl md:text-6xl xl:text-[80px] font-light leading-[1.13] my-5">
            {title}
          </h4>
          <p className="mb-5">{desc}</p>
          <div className="flex flex-wrap gap-8 items-center justify-center">
            {visitexplorebtns &&
              visitexplorebtns.map((btn) => {
                return (
                  <Link
                    key={btn?.id}
                    href={btn?.buttonlink}
                    className={`py-2.5 px-[18px] text-white bg-[#cb000d] hover:bg-[#034272] inline-block rounded-md text-base md:text-xl font-bold ${btn?.buttonclass}`}
                  >
                    {btn?.buttontext}
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitExplore;
