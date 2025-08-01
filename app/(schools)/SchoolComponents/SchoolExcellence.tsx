import Link from "next/link";
import React from "react";

const SchoolExcellence = () => {
  return (
    <section className="bg-[#004e8a] py-[30px]">
      <div className="max-w-[1664px] mx-auto w-full flex items-center">
        <div className="w-1/2 text-center">
          <h4 className="text-white text-5xl mb-5 font-medium">
            Centre of Excellence in Robotics and Automation
          </h4>
          <Link
            href="#"
            className="py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm inline-block text-white"
          >
            Centre of Excellence in Robotics and Automation
          </Link>
        </div>
        <div className="w-1/2 text-center">
          <h4 className="text-white text-5xl mb-5 font-medium">
            Centre of Excellence- Artificial Intelligence
          </h4>
          <Link
            href="#"
            className="py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm inline-block text-white"
          >
            Centre of Excellence- Artificial Intelligence
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SchoolExcellence;
