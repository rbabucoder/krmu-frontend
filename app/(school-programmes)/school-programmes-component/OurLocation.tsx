import Image from "next/image";
import React from "react";

const OurLocation = () => {
  return (
    <section className="py-[50px] px-2.5 sm:px-4">
      <div className="max-w-[1320px] mx-auto w-full p-4 md:p-12 bg-[#1461ac] rounded-[25px] sm:flex gap-3 md:gap-6 text-center sm:text-left">
        <div className="sm:w-5/12">
          <Image
            src="/programmes/cyber-city.webp"
            width={486}
            height={418}
            className="w-full h-full border-[10px] border-white rounded-[10px] md:rounded-[30px] object-cover"
            alt="our location"
          />
        </div>
        <div className="sm:w-7/12 pt-6 sm:px-3">
          <span className="py-2.5 px-4 font-normal rounded-full border border-white text-white text-sm inline-block mb-2">
            OUR LOCATION
          </span>
          <h3 className="text-white text-2xl md:text-[28px] font-medium leading-[1] mb-4">{`Learn at One of India’s Biggest Business Hubs, Gurgaon`}</h3>

          <Image
            src="/programmes/map.webp"
            alt="our location Map"
            width={608}
            height={258}
            className="w-full h-auto border-[10px] border-white rounded-[10px] md:rounded-[30px] inline-block"
          />
        </div>
      </div>
    </section>
  );
};

export default OurLocation;
