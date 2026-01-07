"use client";

import Image from "next/image";
import { placementStatsContent } from "../admission/mca-2026/content";


const PlacementStats = () => {
  const { stats, image } = placementStatsContent;

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-y-12 sm:gap-y-16 gap-x-8 sm:gap-x-12 relative">
          {stats.map((item, index) => (
            <div key={index} className="relative text-center sm:text-left">
              <h3 className="text-3xl sm:text-4xl lg:text-[44px] leading-none font-bold text-red-600">
                {item.value}
              </h3>
              <p className="mt-3 text-gray-600 text-base sm:text-lg">
                {item.label}
              </p>
            </div>
          ))}

          {/* Divider Lines (Desktop Only) */}
          <span className="hidden sm:block absolute left-1/2 top-0 h-full w-px bg-gray-200" />
          <span className="hidden sm:block absolute top-1/2 left-0 w-full h-px bg-gray-200" />
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <div className="relative w-[260px] sm:w-[320px] md:w-[380px] h-[360px] sm:h-[420px] md:h-[480px] bg-gradient-to-b from-blue-700 to-blue-900 overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementStats;
