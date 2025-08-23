"use client";
import Image from "next/image";

const BeyondClassroomSlider = () => {
  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="flex animate-marquee">
        {/* Original slides */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="relative w-full sm:w-[calc(100%/3)] lg:w-[calc(100%/4)] mx-2 h-[336px] flex-shrink-0 rounded-xl overflow-hidden"
          >
            <Image
              src="/programmes/4.webp"
              alt={`Beyond ${i}`}
              fill
              className="object-cover"
            />
          </div>
        ))}

        {/* Duplicate slides for seamless loop */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`dup-${i}`}
            className="relative w-full sm:w-[calc(100%/3)] lg:w-[calc(100%/4)] h-[336px] flex-shrink-0 rounded-xl overflow-hidden"
          >
            <Image
              src="/programmes/4.webp"
              alt={`Beyond duplicate ${i}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeyondClassroomSlider;
