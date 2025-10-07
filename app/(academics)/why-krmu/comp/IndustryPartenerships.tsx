import Image from "next/image";
import React from "react";

const IndustryPartenerships = () => {
  return (
    <section className="py-[50px]">
      <div className="max-w-[1664px] mx-auto w-full">
        <h2 className="text-[38px] text-center font-semibold mb-10">
          Our Industry Partnerships
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Image
            src="/industry-connect/emer.svg"
            width={234}
            height={134}
            alt="Emversity"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default IndustryPartenerships;
