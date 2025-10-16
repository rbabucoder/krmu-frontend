"use client";

import { STRAPI_URL } from "@/app/constant";
import { loadNpfScript } from "@/lib/constants/loadNpfScript";
import { ButtonType, StrapiMedia } from "@/lib/types/common";
import { AdmisionProcessCard } from "@/lib/types/school-programme";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
type Props = {
  heading: string;
  highlight: string;
  desc: string;
  deskimg: StrapiMedia;
  admissionCards: AdmisionProcessCard[];
  admisbtn: ButtonType;
  formId?: string; // optional dynamic NPF form ID
};

const AdmissionProcessComp = ({
  heading,
  highlight,
  desc,
  deskimg,
  admissionCards,
  admisbtn,
  formId,
}: Props) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!formId || !btnRef.current) return;

    loadNpfScript()
      .then(() => {
        // Use window.NpfWidgetsInit to access the global object
        new window.NpfWidgetsInit({
          widgetId: formId,
          baseurl: "widgets.nopaperforms.com",
          formTitle: admisbtn?.buttontext || "Enroll Now",
          titleColor: "#FF0033",
          backgroundColor: "#ddd",
          iframeHeight: "500px",
          buttonTextColor: "#FFF",
          target: btnRef.current,
        });
      })
      .catch((err) => console.error("Failed to load NPF script:", err));
  }, [formId, admisbtn?.buttontext]);

  return (
    <section className="prog-global-padding bg-[#f9f9f9]">
      <div className="common-prog-container">
        <h2 className="heading">
          {heading} <span className="prog-highlight-text">{highlight}</span>
        </h2>
        <p className="sub-heading">{desc}</p>
      </div>

      {/* Desktop view */}
      <div className="max-w-[1320px] mx-auto w-full mt-2.5 hidden lg:block px-4">
        <Image
          src={`${STRAPI_URL}${deskimg?.url}`}
          width={1296}
          height={170}
          alt={deskimg?.alternativeText || "Admission Process"}
        />
        <div className="admis_proc_btn_grid_items">
          {admissionCards?.map((card) =>
            card?.link ? (
              <Link
                href={card.link}
                key={card.id}
                className="admis_proc_btn_grid_item"
                target="_blank"
              >
                <div className="admis_proc_btn_content">
                  <button className="btn_text">{card.title}</button>
                  <p className="admis_btn_below_text">{card.description}</p>
                </div>
              </Link>
            ) : (
              <div key={card.id} className="admis_proc_btn_grid_item">
                <div className="admis_proc_btn_content">
                  <button className="btn_text">{card.title}</button>
                  <p className="admis_btn_below_text">{card.description}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Mobile view */}
      <div className="max-w-[540px] mx-auto w-full flex lg:hidden items-center justify-center px-2.5 md:px-4">
        <div className="grid grid-cols-2 gap-2.5 md:gap-6">
          {admissionCards?.map((card) => (
            <div
              key={card.id}
              className="w-full text-center relative mob_admis_proc_col flex flex-col justify-end h-[150px] md:h-[180px]"
            >
              <h4 className="text-lg text-[#e61f21] z-10 break-all">
                {card.title}
              </h4>
              <p className="z-10 leading-[1] text-sm text-[#0d6efd] break-all">
                <Link href={card.link || "#"} target="_blank">
                  {card.description}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Enroll Now Button */}
      <div className="flex items-center justify-center">
        {formId ? (
          <button
            ref={btnRef}
            className={`${
              admisbtn.buttonclass || ""
            } text-white bg-[#db2a1a] p-[15px] flex items-center justify-around max-w-3xs w-full rounded-lg font-semibold mt-10`}
          >
            <span>{admisbtn.buttontext || "Enroll Now"}</span> <ArrowRight />
          </button>
        ) : (
          <Link
            href={admisbtn.buttonlink || "#"}
            className={`${
              admisbtn.buttonclass || ""
            } text-white bg-[#db2a1a] p-[15px] flex items-center justify-around max-w-3xs w-full rounded-lg font-semibold mt-10`}
          >
            <span>{admisbtn.buttontext || "Enroll Now"}</span> <ArrowRight />
          </Link>
        )}
      </div>
    </section>
  );
};

export default AdmissionProcessComp;

// import Popup from "@/app/components/Popup";
// import { STRAPI_URL } from "@/app/constant";
// import { ButtonType, StrapiMedia } from "@/lib/types/common";
// import { AdmisionProcessCard } from "@/lib/types/school-programme";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// type Props = {
//   heading: string;
//   highlight: string;
//   desc: string;
//   deskimg: StrapiMedia;
//   admissionCards: AdmisionProcessCard[];
//   admisbtn: ButtonType;
// };

// const AdmissionProcessComp = ({
//   heading,
//   highlight,
//   desc,
//   deskimg,
//   admissionCards,
//   admisbtn,
// }: Props) => {
//   return (
//     <section className="prog-global-padding bg-[#f9f9f9]">
//       <div className="common-prog-container">
//         <h2 className="heading">
//           {heading} <span className="prog-highlight-text">{highlight}</span>
//         </h2>
//         <p className="sub-heading">{desc}</p>
//       </div>
//       <div className="max-w-[1320px] mx-auto w-full mt-2.5 hidden lg:block px-4">
//         <Image
//           src={`${STRAPI_URL}${deskimg?.url}`}
//           width={1296}
//           height={170}
//           alt={deskimg?.alternativeText || "Admission Process"}
//         />
//         <div className="admis_proc_btn_grid_items">
//           {admissionCards &&
//             admissionCards.map((card) => {
//               if (card?.link) {
//                 return (
//                   <Link
//                     href={card?.link}
//                     key={card?.id}
//                     className="admis_proc_btn_grid_item"
//                     target="_blank"
//                   >
//                     <div className="admis_proc_btn_content">
//                       <button className="btn_text">{card?.title}</button>
//                       <p className="admis_btn_below_text">
//                         {card?.description}
//                       </p>
//                     </div>
//                   </Link>
//                 );
//               } else {
//                 return (
//                   <div key={card?.id} className="admis_proc_btn_grid_item">
//                     <div className="admis_proc_btn_content">
//                       <button className="btn_text">{card?.title}</button>
//                       <p className="admis_btn_below_text">
//                         {card?.description}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               }
//             })}
//         </div>
//       </div>
//       <div className="max-w-[540px] mx-auto w-full flex lg:hidden items-center justify-center px-2.5 md:px-4">
//         <div className="grid grid-cols-2 gap-2.5 md:gap-6">
//           {admissionCards &&
//             admissionCards.map((card) => {
//               return (
//                 <div
//                   key={card?.id}
//                   className={`w-full text-center relative  mob_admis_proc_col flex flex-col justify-end h-[150px] md:h-[180px]`}
//                 >
//                   <h4 className="text-lg text-[#e61f21] z-10 break-all">
//                     {card?.title}
//                   </h4>
//                   <p className="z-10 leading-[1] text-sm text-[#0d6efd] break-all">
//                     <Link href={card?.link || "#"} target="_blank">
//                       {card?.description}
//                     </Link>
//                   </p>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//       <div className="flex items-center justify-center">

//          <button

//                 className={`${
//                   admisbtn.buttonclass || ""
//                 } text-white bg-[#db2a1a] p-[15px] flex items-center justify-around max-w-3xs w-full rounded-lg font-semibold mt-10`}
//               >
//                 <span>Enroll Now</span> <ArrowRight />
//               </button>

//          <button
//               ref={btnRef}
//               className={`hero-common-btn-b mt-12 ${admisbtn.herobtn.buttonclass || ""}`}
//             >
//               {admisbtn.herobtn.buttontext || "Apply Now"} <MoveRight />
//             </button>
//         {admisbtn && (
//           <div>
//             {admisbtn.buttonclass === "progPopup" ? (
//               <Popup
//                 buttonText={admisbtn.buttontext || "Apply Now"}
//                 buttonClass={`${admisbtn?.buttonclass} text-white bg-[#db2a1a] p-[15px] flex items-center justify-around w-3xs flex text-center rounded-lg font-semibold mt-10`}
//                 buttonIcon={<ArrowRight />}
//               >
//                 <p>This is the content inside the popup.</p>
//               </Popup>
//             ) : admisbtn.buttonlink ? (
//               <Link
//                 href={admisbtn.buttonlink}
//                 className={`${
//                   admisbtn.buttonclass || ""
//                 } text-white bg-[#db2a1a] p-[15px] flex items-center justify-around max-w-3xs w-full rounded-lg font-semibold mt-10`}
//               >
//                 <span>{admisbtn.buttontext}</span> <ArrowRight />
//               </Link>
//             ) : null}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default AdmissionProcessComp;
