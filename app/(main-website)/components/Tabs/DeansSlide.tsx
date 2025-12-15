"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const deans = [
  { name: "Dr. Tanaya Verma", role: "Dean- SOAD", img: "/deans/tanaya.png" },
  { name: "Dr. Tania Gupta", role: "Professor & Dean- SOED", img: "/deans/tania.png" },
  { name: "Dr. Joginder Singh Yadav", role: "Professor & Dean- SOAS", img: "/deans/joginder.png" },
  { name: "Dr. Pankaj Agarwal", role: "Professor & Dean, SOET", img: "/deans/pankaj.png" },
  { name: "Dr. Hema Chaudhary", role: "Professor & Dean, SMAS", img: "/deans/hema.png" },
  { name: "Dr. Meena Bhandari", role: "Associate Professor & Dean, SBAS", img: "/deans/meena.png" },
  { name: "Dr. Amit Chawla", role: "Professor & Dean, SJMC", img: "/deans/amit-chawla.png" },
  { name: "Prof (Dr.) Kaveri Sharma", role: "Professor & Dean, SOLS", img: "/deans/kaveri.png" },
  { name: "Mamta Shankar", role: "School Coordinator, SPRS", img: "/deans/mamta.png" },
  { name: "Prof. Shravan Kumar", role: "Professor and Dean", img: "/deans/shravan.png" },
];

const ITEMS_PER_LOAD = 5;

const DeansSlide = () => {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 xl:gap-10">
        {deans.slice(0, visibleCount).map((dean, index) => (
          <div
            key={index}
            className="w-full text-center faculty-post-card-image rounded-tr-3xl"
          >
            <div className="-z-10 rounded-tr-2xl">
              <Image
                src={dean.img}
                alt={dean.name}
                width={264}
                height={295}
                className="w-full h-[295px] object-fill"
              />
            </div>

            <div className="p-5 md:p-10 h-[200px] text-white bg-[#051630] -mt-5 flex items-center justify-center flex-col">
              <h5 className="text-2xl font-semibold">{dean.name}</h5>
              <p className="text-sm font-semibold text-center">{dean.role}</p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < deans.length && (
        <div className="flex justify-center">
          <Button
            onClick={handleLoadMore}
            className="text-[#051630] bg-[#f2f3f5] h-[50px] border border-[#051630] font-semibold text-base hover:bg-[#cb000d] hover:text-white mt-10"
          >
            Load More
          </Button>
        </div>
      )}
    </>
  );
};

export default DeansSlide;
