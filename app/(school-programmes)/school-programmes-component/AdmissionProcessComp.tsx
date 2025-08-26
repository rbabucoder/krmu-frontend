import { STRAPI_URL } from "@/app/constant";
import { ButtonType, StrapiMedia } from "@/lib/types/common";
import { AdmisionProcessCard } from "@/lib/types/school-programme";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  heading: string;
  highlight: string;
  desc: string;
  deskimg: StrapiMedia;
  admissionCards: AdmisionProcessCard[];
  admisbtn: ButtonType;
  // admissioncards: AdmissionProcessCard[];
};

const AdmissionProcessComp = ({
  heading,
  highlight,
  desc,
  deskimg,
  admissionCards,
  admisbtn,
}: Props) => {
  return (
    <section className="prog-global-padding bg-[#f9f9f9]">
      <div className="common-prog-container">
        <h2 className="heading">
          {heading} <span className="prog-highlight-text">{highlight}</span>
        </h2>
        <p className="sub-heading">{desc}</p>
      </div>
      <div className="max-w-[1320px] mx-auto w-full mt-2.5 hidden lg:block px-4">
        <Image
          src={`${STRAPI_URL}${deskimg?.url}`}
          width={1296}
          height={170}
          alt={deskimg?.alternativeText || "Admission Process"}
        />
        <div className="admis_proc_btn_grid_items">
          {admissionCards &&
            admissionCards.map((card) => {
              return (
                <div key={card?.id} className="admis_proc_btn_grid_item">
                  <div className="admis_proc_btn_content">
                    <button className="btn_text">{card?.title}</button>
                    <p className="admis_btn_below_text">{card?.description}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="max-w-[540px] mx-auto w-full flex lg:hidden items-center justify-center px-2.5 md:px-4">
        <div className="grid grid-cols-2 gap-2.5 md:gap-6">
          {admissionCards &&
            admissionCards.map((card) => {
              return (
                <div
                  key={card?.id}
                  className={`w-full text-center relative  mob_admis_proc_col flex flex-col justify-end h-[150px] md:h-[180px]`}
                >
                  <h4 className="text-lg text-[#e61f21] z-10 break-all">
                    {card?.title}
                  </h4>
                  <p className="z-10 leading-[1] text-sm text-[#0d6efd] break-all">
                    {card?.description}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex items-center justify-center">
        {(admisbtn?.buttonclass || admisbtn?.buttonlink )&& (
          <Link
            href={admisbtn?.buttonlink}
            className={`${admisbtn?.buttonclass} text-white bg-[#db2a1a] p-[15px] flex items-center justify-around max-w-3xs w-full rounded-lg font-semibold mt-10`}
          >
            <span>{admisbtn?.buttontext}</span> <ArrowRight />
          </Link>
        )}
      </div>
    </section>
  );
};

export default AdmissionProcessComp;
