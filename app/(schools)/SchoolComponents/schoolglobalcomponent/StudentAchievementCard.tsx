"use client";

import { STRAPI_URL } from "@/app/constant";
import Image from "next/image";
import { useState } from "react";

type Props = {
  info: string;
  achieveImgUrl: string;
  imgALTText: string | null;
};

const StudentAchievementCard = ({ info, achieveImgUrl, imgALTText }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = info.length > 100;
  const displayText = isExpanded
    ? info
    : info.slice(0, 100).trim() + (isLong ? "..." : "");

  return (
    <div className="border border-[#e2e2e2] p-5 rounded-lg">
      <div className="mb-5 space-y-4">
        <Image
          src={`${STRAPI_URL}${achieveImgUrl}`}
          width={443}
          height={476}
          alt={imgALTText || ""}
          className="w-full h-[476px] object-cover"
        />
      </div>

      <div>
        <p className="text-gray-800 leading-relaxed text-sm">
          {displayText}{" "}
          {isLong && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#cd1c24] font-medium ml-1 focus:outline-none cursor-pointer"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default StudentAchievementCard;
