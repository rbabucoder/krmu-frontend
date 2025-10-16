"use client";

import { STRAPI_URL } from "@/app/constant";
import { loadNpfScript } from "@/lib/constants/loadNpfScript";
import { ButtonType, StrapiMedia } from "@/lib/types/common";
import { CareerCard } from "@/lib/types/school-programme";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

type Props = {
  heading: string;
  highlight: string;
  desc: string;
  btn: ButtonType;
  careerimg: StrapiMedia;
  careercards: CareerCard[];
  careerFormId?: string; // optional NPF form ID
};

const CareerProspects = ({
  heading,
  highlight,
  desc,
  btn,
  careerimg,
  careercards,
  careerFormId,
}: Props) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!careerFormId || !btnRef.current) return;

    loadNpfScript()
      .then(() => {
        // NPF script exposes a function, not a constructor
     
        window.NpfWidgetsInit({
          widgetId: careerFormId,
          baseurl: "widgets.nopaperforms.com",
          formTitle: btn?.buttontext || "Kick Off Journey",
          titleColor: "#FF0033",
          backgroundColor: "#ddd",
          iframeHeight: "500px",
          buttonTextColor: "#FFF",
          target: btnRef.current,
        });
      })
      .catch((err) => console.error("Failed to load NPF script:", err));
  }, [careerFormId, btn?.buttontext]);

  return (
    <section className="prog-global-padding bg-[#f8f9fd]">
      <div className="max-w-[1320px] mx-auto w-full xl:flex px-2.5 md:px-4">
        <div className="w-full xl:w-1/2">
          <h3 className="text-4xl md:text-[40px] font-semibold text-[#0a41a1] mb-6 text-center sm:text-left">
            {heading} <span className="text-[#db2a1a]">{highlight}</span>
          </h3>

          {/* Mobile Image */}
          <Image
            src={`${STRAPI_URL}${careerimg?.url}`}
            width={660}
            height={660}
            className="w-full h-full lg:hidden"
            alt={careerimg?.alternativeText || "Career Prospectus"}
          />

          <p className="mb-6">{desc}</p>

          <div>
            {careercards?.map((card) => (
              <div key={card?.id} className="pl-10 relative">
                <span className="absolute -left-2 top-0 px-2.5 py-[5px] rounded-[10px] text-white bg-[#db2a1a]">
                  {card?.num}
                </span>
                <h4 className="font-medium text-2xl">{card?.title}</h4>
                <p className="mb-4">{card?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Image */}
        <div className="w-full xl:w-1/2 hidden lg:block">
          <Image
            src={`${STRAPI_URL}${careerimg?.url}`}
            width={660}
            height={660}
            className="w-full h-full"
            alt={careerimg?.alternativeText || "Career Prospectus"}
          />
        </div>
      </div>

      {/* Button Section */}
      <div className="max-w-[1320px] mx-auto w-full flex justify-center mt-4">
        {careerFormId ? (
          <button
            ref={btnRef}
            className={`text-white bg-[#db2a1a] p-[15px] flex items-center justify-around max-w-3xs w-full rounded-lg font-semibold ${btn?.buttonclass}`}
          >
            <span>{btn?.buttontext || "Kick Off Journey"}</span> <ArrowRight />
          </button>
        ) : btn?.buttonlink ? (
          <Link
            href={btn.buttonlink}
            className={`text-white bg-[#db2a1a] p-[15px] flex items-center justify-around max-w-3xs w-full rounded-lg font-semibold ${btn?.buttonclass}`}
          >
            <span>{btn?.buttontext || "Kick Off Journey"}</span> <ArrowRight />
          </Link>
        ) : null}
      </div>
    </section>
  );
};

export default CareerProspects;


// import { STRAPI_URL } from "@/app/constant";
// import { ButtonType, StrapiMedia } from "@/lib/types/common";
// import { CareerCard } from "@/lib/types/school-programme";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// type Props = {
//   heading: string;
//   highlight: string;
//   desc: string;
//   btn: ButtonType;
//   careerimg: StrapiMedia;
//   careercards: CareerCard[];
//   careerFormId: string;
// };

// const CareerProspects = ({
//   heading,
//   highlight,
//   desc,
//   btn,
//   careerimg,
//   careercards,
//   careerFormId
// }: Props) => {

//   console.log('careerFormId', careerFormId);
//   return (
//     <>
//       <section className="prog-global-padding bg-[#f8f9fd]">
//         <div className="max-w-[1320px] mx-auto w-full xl:flex px-2.5 md:px-4">
//           <div className="w-full xl:w-1/2">
//             <h3 className="text-4xl md:text-[40px] font-semibold text-[#0a41a1] mb-6 text-center sm:text-left">
//               {heading} <span className="text-[#db2a1a]">{highlight}</span>
//             </h3>
//             <Image
//               src={`${STRAPI_URL}${careerimg?.url}`}
//               width={660}
//               height={660}
//               className="w-full h-full lg:hidden"
//               alt={careerimg?.alternativeText || "Career Prospectus"}
//             />
//             <p className="mb-6">{desc}</p>
//             <div>
//               {careercards &&
//                 careercards.map((card) => {
//                   return (
//                     <div key={card?.id} className="pl-10 relative">
//                       <span className="absolute -left-2 top-0 px-2.5 py-[5px] rounded-[10px] text-white bg-[#db2a1a]">
//                         {card?.num}
//                       </span>
//                       <h4 className="font-medium text-2xl">{card?.title}</h4>
//                       <p className="mb-4">{card?.description}</p>
//                     </div>
//                   );
//                 })}
//             </div>
//           </div>
//           <div className="w-full xl:w-1/2 hidden lg:block">
//             <Image
//               src={`${STRAPI_URL}${careerimg?.url}`}
//               width={660}
//               height={660}
//               className="w-full h-full"
//               alt={careerimg?.alternativeText || "Career Prospectus"}
//             />
//           </div>
//         </div>
//         <div className="max-w-[1320px] mx-auto w-full flex justify-center mt-4">
//           {(btn?.buttonclass || btn?.buttonlink) && (
//             <Link
//               href={btn?.buttonlink}
//               className={`text-white bg-[#db2a1a] p-[15px] flex items-center justify-around max-w-3xs w-full rounded-lg font-semibold ${btn?.buttonclass}`}
//             >
//               <span>{btn?.buttontext}</span> <ArrowRight />
//             </Link>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default CareerProspects;
