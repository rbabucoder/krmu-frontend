import React from "react";
import LifePeekSlide from "./LifePeekSlide";

const LifeKRMUPeek = () => {
  return (
    <section className="py-10 lg:py-20 px-4">
      <div className="flex flex-col lg:flex-row max-w-[1664px] mx-auto w-full">
        <div className="w-full lg:w-1/2">
          <h4 className="text-3xl md:text-5xl font-semibold leading-[1.3]">
            Unveiling the Dynamic
            <br className="hidden md:block" /> World of K.R. Mangalam
            <br className="hidden md:block" /> University’s Campus
            <br className="hidden md:block" />
            Facilities
          </h4>
        </div>
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
          <LifePeekSlide />
        </div>
      </div>
    </section>
  );
};

export default LifeKRMUPeek;
