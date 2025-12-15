import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  heading: string;
  highlightheading: string;
  description: string;
  point1: string;
  point2: string;
  point3: string;
  point4: string;
  point5: string;
  point6: string;
  point7: string;
  logos: StrapiMedia[];
};

const FinancialAssistance = ({
  heading,
  highlightheading,
  description,
  point1,
  point2,
  point3,
  point4,
  point5,
  point6,
  point7,
  logos,
}: Props) => {
  return (
    <section className="prog-global-padding bg-[#f8f9fd]">
      <div className="max-w-[1320px] mx-auto w-full px-2.5 sm:px-4">
        <div className="common-prog-container">
          <h2 className="heading">
            {heading}{" "}
            <span className="prog-highlight-text">{highlightheading}</span>
          </h2>
          <p className="sub-heading">{description}</p>
        </div>
        <div>
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 mt-6">
            <div
              className="px-5 py-[30px] font-medium text-base text-[#db2a1a] text-center rounded-[35px] flex items-center justify-center w-full md:w-2/12"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              {point1}
            </div>
            <div
              className="px-5 py-[30px] font-medium text-base text-[#db2a1a] text-center rounded-[35px]  flex items-center justify-center w-full md:w-5/12"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              {point2}
            </div>
            <div
              className="px-5 py-[30px] font-medium text-base text-[#db2a1a] text-center rounded-[35px]  flex items-center justify-center w-full md:w-4/12"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              {point3}
            </div>
            <div className="w-1/12"></div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 md:mt-6">
            <div
              className="px-5 py-[30px] font-medium text-base text-[#db2a1a] text-center rounded-[35px] flex items-center justify-center w-full md:w-3/12"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              {point4}
            </div>
            <div
              className="px-5 py-[30px] font-medium text-base text-[#db2a1a] text-center rounded-[35px]  flex items-center justify-center w-full md:w-4/12"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              {point5}
            </div>
            <div
              className="px-5 py-[30px] font-medium text-base text-[#db2a1a] text-center rounded-[35px]  flex items-center justify-center w-full md:w-5/12"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              {point6}
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap md:flex-nowrap justify-center items-center gap-6">
          <div
            className="px-5 py-[30px] font-medium text-base text-[#db2a1a] text-center rounded-[35px] flex items-center justify-center w-full md:w-4/12"
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            {point7}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center gap-5 w-full sm:w-8/12">
            {logos &&
              logos.map((logo) => {
                return (
                  <Image
                    key={logo?.id}
                    src={`${STRAPI_URL}${logo?.url}`}
                    width={126}
                    height={41}
                    alt={logo?.alternativeText || "Financial Assistance Logo"}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialAssistance;
