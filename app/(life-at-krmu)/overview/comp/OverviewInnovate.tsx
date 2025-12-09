import Link from "next/link";
import OverviewUpdatedSlide from "./OverviewUpdatedSlide";
import { getOverviewEvents } from "@/lib/api/overviewslide";

const OverviewInnovate = async () => {

  const data = await getOverviewEvents();

  return (
    <section>
      <div className="max-w-[1344px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="w-[44%] bg-[#051630] lg:pt-[60px] lg:pr-[30px] lg:pb-[50px] lg:pl-[60px] text-white">
            <p className="mb-5">Facilities That Foster Excellence</p>
            <h4 className="text-5xl font-semibold">
              Innovate <br />
              Engage <br /> Succeed
            </h4>
          </div>

          <div className="w-[56%] bg-[#e31e24] lg:pt-[60px] lg:pr-[30px] lg:pb-[50px] lg:pl-[60px] text-white">
            <p className="text-xl mb-5">
              Every day is an opportunity to explore, learn, and connect at
              KRMU, where the sprawling campus is a bustling hub of activities,
              events, and interactions that cultivate a sense of belonging and
              community.
            </p>
            <Link
              href="/krmu-campus-facilities"
              target="_blank"
              className="py-[13px] px-[29px] bg-black text-white rounded-[4px] text-base font-medium inline-block"
            >
              Explore KRMU Facilities
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="w-[44%] bg-[#e31e24] lg:pt-[60px] lg:pr-[30px] lg:pb-[50px] lg:pl-[60px] text-white">
            <p className="mb-5">What’s Happening at KRMU</p>
            <h4 className="text-5xl font-semibold">
              Stay Updated <br /> with Campus <br /> Happenings
            </h4>
          </div>

          <div className="w-[56%] bg-[#051630] lg:pt-[60px] lg:pr-[30px] lg:pb-[50px] lg:pl-[60px] text-white">
            <OverviewUpdatedSlide data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewInnovate;
