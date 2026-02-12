import Link from "next/link";
import OverviewUpdatedSlide from "./OverviewUpdatedSlide";
import { getOverviewEvents } from "@/lib/api/overviewslide";
import Image from "next/image";
const OverviewInnovate = async () => {
  const data = await getOverviewEvents();

  return (
    <section className="px-4">
      <div className="max-w-[1344px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-[44%] bg-krmu-navy px-5 py-10 lg:pt-section-lg lg:pr-[30px] lg:pb-section lg:pl-[60px] text-white">
            <p className="mb-5">Facilities That Foster Excellence</p>
            <h4 className="text-h4 md:text-5xl font-semibold">
              Innovate <br className="hidden md:block" />
              Engage <br className="hidden md:block" /> Succeed
            </h4>
          </div>

          <div className="lg:w-[56%] bg-krmu-red px-5 py-10 lg:pt-section-lg lg:pr-[30px] lg:pb-section lg:pl-[60px] text-white">
            <p className="text-xl mb-5">
              Every day is an opportunity to explore, learn, and connect at
              KRMU, where the sprawling campus is a bustling hub of activities,
              events, and interactions that cultivate a sense of belonging and
              community.
            </p>
            <Link
              href="/krmu-campus-facilities"
              target="_blank"
              className="py-[13px] px-[29px] bg-black text-white rounded-badge text-base font-medium inline-block"
            >
              Explore KRMU Facilities
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[44%]">
            <div className=" bg-krmu-red px-5 pb-10 lg:pt-section-lg lg:pr-[30px] lg:pb-section lg:pl-[60px] text-white">
              <p className="mb-5">What’s Happening at KRMU</p>
              <h4 className="text-h4 md:text-5xl font-semibold">
                Stay Updated <br /> with Campus <br /> Happenings
              </h4>
            </div>
            <div className="w-full text-center flex flex-col justify-center items-center">
              <div className="pt-[15px] pb-5 md:mb-0 px-container-px">
                <Image
                  src="/life-at-krmu/insta.webp"
                  width={388}
                  height={154}
                  alt=""
                />
                <p className="text-base text-[#51630] mb-5">
                  Follow us on Instagram for new updates
                </p>
                <Link
                  href="https://www.instagram.com/krmuniv/"
                  target="_blank"
                  className="border border-krmu-red py-2 px-5 rounded-full text-krmu-red inline-block"
                >
                  Check Instagram
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:w-[56%]">
            <div className="bg-krmu-navy px-5 py-10 lg:pt-section-lg lg:pr-[30px] lg:pb-section lg:pl-[60px] text-white">
              <OverviewUpdatedSlide data={data} />
              <div className="flex  justify-center lg:justify-end">
                <Link
                  href="/happenings/news-and-events"
                  className="text-white bg-krmu-red py-[11px] px-[23px] rounded-badge"
                  target="_blank"
                >
                  View More
                </Link>
              </div>
            </div>
            <div className="py-5 px-[60px] bg-[url(/bg.webp)] bg-cover bg-center bg-no-repeat">
              <Link
                href="#_overview_hero"
                className="flex items-center justify-end gap-2 text-krmu-red"
              >
                KEEP SCROLLING{" "}
                <Image
                  src="/life-at-krmu/chev.svg"
                  width={18}
                  height={18}
                  alt="chevron"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewInnovate;
