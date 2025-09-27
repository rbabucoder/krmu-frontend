import Image from "next/image";
import React from "react";

const PHDConnectingDream = () => {
  return (
    <section className="py-[50px] relative">
      <div className="max-w-[1664px] mx-auto w-full flex gap-10">
        <div className="w-3/5">
          <h3 className="text-[64px] font-semibold leading-[1.2]">
            Connecting Talent to Dream Careers
          </h3>
          <p>
            The Ph.D. in Computer Science and Engineering programme at KRMU is
            distinguished by its strong industry connections with Google,
            Microsoft, Apple, IBM, Amazon, Facebook, Intel etc. to foster
            innovation and deep technological expertise. These collaborations
            actively participate in our campus recruitment initiatives and offer
            our students invaluable internship opportunities.
          </p>
        </div>
        <div className="w-2/5">
          <Image src="/214.webp" width={633} height={326} alt="F" />
        </div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex gap-10 mt-10">
        <div className="prog-counter-container w-1/3">
          <span className="counter">700+</span>
          <span className="counter_content">Campus Recruiters</span>
        </div>
        <div className="prog-counter-container w-1/3">
          <span className="counter">56.6 LPA</span>
          <span className="counter_content">Highest Package</span>
        </div>
        <div className="prog-counter-container w-1/3">
          <span className="counter">100%</span>
          <span className="counter_content">Placement Assistance</span>
        </div>
      </div>
    </section>
  );
};

export default PHDConnectingDream;
