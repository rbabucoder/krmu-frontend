"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const deans = [
  { name: "Dr. Tanaya Verma", role: "Dean- SOAD", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Tanaya_Verma_SOAD_0c930f1c6b.jpg" },
  { name: "Dr. Tania Gupta", role: "Professor & Dean- SOED", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Prof_Tania_Gupta_SOED_3cafa605a2.jpg" },
  { name: "Dr. Joginder Singh Yadav", role: "Professor & Dean- SOAS", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Prof_Dr_J_S_Yadav_SOAS_06631d634a.png" },
  { name: "Dr. Pankaj Agarwal", role: "Professor & Dean, SOET", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Pankaj_Agarwal_DEAN_SOET_2e63c16f24.png" },
  { name: "Dr. Hema Chaudhary", role: "Professor & Dean, SMAS", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Hema_Chaudhary_f8b6ce6363.jpg" },
  { name: "Dr. Meena Bhandari", role: "Associate Professor & Dean, SBAS", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Meena_Bhandari_SBAS_81ba776ac8.jpg" },
  { name: "Dr. Amit Chawla", role: "Professor & Dean, SJMC", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Amit_Chawla_SEMCE_54fb0f6497.png" },
  { name: "Prof (Dr.) Kaveri Sharma", role: "Professor & Dean, SOLS", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/16_5ba7e2ac00.jpg" },
  { name: "Mamta Shankar", role: "School Coordinator, SPRS", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Mamta_Shankar_P_T_SPRS_7350075f69.jpg" },
  { name: "Prof. Shravan Kumar", role: "Professor and Dean", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Shravan_Kumar_095984b81a.png" },
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
