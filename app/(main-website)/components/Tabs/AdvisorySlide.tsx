"use client";

import { useState } from "react";
import { STRAPI_URL } from "@/app/constant";
import { Button } from "@/components/ui/button";
import { Advisory } from "@/lib/api/facAdv";
import Image from "next/image";

type Props = {
  data: Advisory[];
};

const ITEMS_PER_LOAD = 5;

const AdvisorySlide = ({ data }: Props) => {
  const [visibleCount, setVisibleCount] = useState(5);

  if (!data || data.length === 0) return null;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 xl:gap-10">
        {data.slice(0, visibleCount).map((item, i) => (
          <div key={i} className="w-full text-center">
            <div className="-z-10 rounded-tr-2xl">
              <Image
                src={`${STRAPI_URL}${item?.faculty_img?.url}`}
                alt={item?.faculty_name || ""}
                width={264}
                height={295}
                className="w-full h-[295px] object-fill"
                unoptimized
              />
            </div>

            <div className="p-10 h-[200px] text-white bg-[#051630] -mt-5 flex items-center justify-center flex-col">
              <h5 className="text-2xl font-semibold">
                {item?.faculty_name}
              </h5>
              <p className="text-sm font-semibold text-center">
                {item?.faculty_card_desg}
              </p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < data.length && (
        <div className="flex justify-center">
          <Button
            onClick={handleLoadMore}
            className="text-[#051630] bg-[#f2f3f5] h-[50px] border border-[#051630] font-semibold text-base hover:bg-[#cb000d] hover:text-white mt-10"
          >
            Load More
          </Button>
        </div>
      )}
    </>
  );
};

export default AdvisorySlide;
