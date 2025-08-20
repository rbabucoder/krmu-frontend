import Image from "next/image";
import React from "react";

const OurLocation = () => {
  return (
    <section className="prog-global-padding">
      <div className="max-w-[1320px] mx-auto w-full p-12 bg-[#1461ac] rounded-[25px] flex gap-6">
        <div className="w-5/12">
          <Image
            src="/programmes/cyber-city.webp"
            width={486}
            height={418}
            className="w-full h-full border-[10px] border-white rounded-[30px]"
            alt="our location"
          />
        </div>
        <div className="w-7/12 pt-6 px-3">
          <span className="py-2.5 px-4 font-normal rounded-full border border-white text-white text-sm inline-block mb-2">
            OUR LOCATION
          </span>
          <h3 className="text-white text-[28px] font-medium leading-[1] mb-4">{`Learn at One of India’s Biggest Business Hubs, Gurgaon`}</h3>

          <Image
            src="/programmes/map.webp"
            alt="our location Map"
            width={608}
            height={258}
            className="w-full h-auto border-[10px] border-white rounded-[30px] inline-block"
          />
        </div>
      </div>
    </section>
  );
};

export default OurLocation;
