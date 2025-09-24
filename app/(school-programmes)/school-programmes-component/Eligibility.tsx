"use client";

import { ButtonType } from "@/lib/types/common";
import { EligibilityItem } from "@/lib/types/school-programme";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  elgibilities: EligibilityItem[];
  mobherobtn: ButtonType;
};

const Eligibility = ({ elgibilities, mobherobtn }: Props) => {
  const [expanded, setExpanded] = useState(false);

  // limit characters for h2
  const maxChars = 50;
  const longTitle = elgibilities[2]?.title || "";
  const isLong = longTitle.length > maxChars;
  const displayTitle = expanded ? longTitle : longTitle.slice(0, maxChars);

  return (
    <>
      <div className="max-w-[1664px] w-full mx-auto sm:flex pb-[50px] px-2.5 md:px-4 mt-12md:mt-0">
        <div className="w-full sm:w-1/3 lg:w-1/4 sm:px-3 border-r sm:border-r border-[#dee2e6]">
          <h2 className="text-2xl leading-[1.2] text-[#0060aa] font-semibold mb-2">
            {elgibilities[0]?.title}
          </h2>
          <p className="mb-2.5">{elgibilities[0]?.subtitle}</p>
        </div>

        <div className="w-full sm:w-1/3 lg:w-1/4 sm:px-3 border-r sm:border-r border-[#dee2e6]">
          <h2 className="text-2xl leading-[1.2] text-[#0060aa] font-semibold mb-2">
            {elgibilities[1]?.title}
          </h2>
          <p className="mb-2.5">{elgibilities[1]?.subtitle}</p>
        </div>

        {/* Third column with Read More */}
        <div className="w-full sm:w-1/3 lg:w-2/4 sm:px-3">
          
            <h2 className="text-2xl leading-[1.2] text-[#0060aa] font-semibold mb-2 inline-block">
              {displayTitle}
              {isLong && !expanded && " "}
            
            {isLong && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-xl leading-[1.2] text-[#0060aa] font-semibold mb-2 cursor-pointer ml-2"
              >
                {expanded ? "Read Less" : "Read More"}
              </button>
            )}
            </h2>
          
          <p className="mb-2.5">{elgibilities[2]?.subtitle}</p>
        </div>

        {(mobherobtn?.buttonclass || mobherobtn?.buttonlink) && (
          <Link
            href={mobherobtn?.buttonlink}
            className={`bg-[#0a41a1] py-2.5 px-[30px] cursor-pointer flex items-center justify-around sm:hidden text-white rounded-[10px] w-fit mt-5 ${mobherobtn?.buttonclass}`}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <span>{mobherobtn?.buttontext}</span> <ArrowRight />
          </Link>
        )}
      </div>
    </>
  );
};

export default Eligibility;
