import React from "react";

const Eligibility = () => {
  return (
    <>
      <div className="max-w-[1664px] w-full mx-auto flex pb-[50px] mt-12">
        <div className="w-1/4 px-3 border-r border-[#dee2e6]">
          <h2 className="text-2xl leading-[1.2] text-[#0060aa] font-semibold mb-2">
            3 Years
          </h2>
          <p className="mb-2.5">Duration</p>
        </div>
        <div className="w-1/4 px-3 border-r border-[#dee2e6]">
          <h2 className="text-2xl leading-[1.2] text-[#0060aa] font-semibold mb-2">
            Rs. 1,30,000
          </h2>
          <p className="mb-2.5">Programme Fee / Year</p>
        </div>
        <div className="w-2/4 px-3">
          <h2 className="text-2xl leading-[1.2] text-[#0060aa] font-semibold mb-2">
            Passed 10+2 or equivalent examination Read more
          </h2>
          <p className="mb-2.5">Eligibility</p>
        </div>
      </div>
    </>
  );
};

export default Eligibility;
