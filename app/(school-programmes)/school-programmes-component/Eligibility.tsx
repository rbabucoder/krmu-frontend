import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Eligibility = () => {
  return (
    <>
      <div className="max-w-[1664px] w-full mx-auto sm:flex pb-[50px] px-2.5 md:px-4 mt-12md:mt-0">
        <div className="w-full sm:w-1/3 lg:w-1/4 sm:px-3 border-r sm:border-r border-[#dee2e6]">
          <h2 className="text-2xl leading-[1.2] text-[#0060aa] font-semibold mb-2">
            3 Years
          </h2>
          <p className="mb-2.5">Duration</p>
        </div>
        <div className="w-full sm:w-1/3 lg:w-1/4 sm:px-3 border-r sm:border-r border-[#dee2e6]">
          <h2 className="text-2xl leading-[1.2] text-[#0060aa] font-semibold mb-2">
            Rs. 1,30,000
          </h2>
          <p className="mb-2.5">Programme Fee / Year</p>
        </div>
        <div className="w-full sm:w-1/3 lg:w-2/4 sm:px-3">
          <h2 className="text-2xl leading-[1.2] text-[#0060aa] font-semibold mb-2">
            Passed 10+2 or equivalent examination Read more
          </h2>
          <p className="mb-2.5">Eligibility</p>
        </div>
        <Link
          href="#"
          className="bg-[#0a41a1] py-2.5 px-[30px] cursor-pointer flex items-center justify-around sm:hidden text-white rounded-[10px] w-fit mt-5"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <span>Apply Now</span> <ArrowRight />
        </Link>
      </div>
    </>
  );
};

export default Eligibility;
