"use client";
import { useState } from "react";
import { STRAPI_URL } from "@/app/constant";
import NoPaperForm from "@/lib/constants/NoPaperForm";
import { CounterBlock } from "@/lib/types/phd-programmes";

type Props = {
  heading: string;
  duration: CounterBlock;
  feePerYear: CounterBlock;
  eligibleCriteria: CounterBlock;
  bgimg: string;
};

const PHDprogramHero = ({
  heading,
  duration,
  feePerYear,
  eligibleCriteria,
  bgimg,
}: Props) => {
  const [readMore, setReadMore] = useState(false);

  // Limit eligible criteria text to ~120 characters before "Read more"
  const shortText = eligibleCriteria?.countercontent?.slice(0, 120) || "";
  const isLong =
    eligibleCriteria?.countercontent &&
    eligibleCriteria.countercontent.length > 120;

  return (
    <>
      <section
        className="pt-[140px] pb-32 lg:py-[8%]"
        style={{
          background: `url(${STRAPI_URL}${bgimg}) center/cover no-repeat`,
        }}
      >
        <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center">
          <div className="lg:w-3/5 text-white text-3xl md:text-5xl font-semibold p-5">
            <h1
              dangerouslySetInnerHTML={{
                __html: heading,
              }}
            />
          </div>
          <div className="lg:w-2/5">
            <NoPaperForm
              // formId="0d2d6e28c86e4213b353bfe132035965"
              formId="b8a1d46829929a0a7c19f4fc185e7d45"
              height="600px"
            />
          </div>
        </div>
      </section>

      {/* Info Counters Section */}
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-1.5 relative z-10 -mt-[33px] px-4 md:px-0">
        {/* Duration */}
        <div
          className="w-full md:w-1/2 lg:w-[20%] flex items-center justify-center text-2xl font-semibold h-[130px] bg-white rounded-[30px]"
          style={{
            boxShadow:
              "0px 1.96475px 2.21381px rgba(0,0,0,.02),0px 4.72157px 5.32008px rgba(0,0,0,.03),0px 8.8903px 10.01724px rgba(0,0,0,.04),0px 15.85878px 17.86905px rgba(0,0,0,.04),0px 29.6621px 33.42209px rgba(0,0,0,.05),0px 71px 80px rgba(0,0,0,.07)",
          }}
        >
          {duration?.countertext} {duration?.countercontent}
        </div>

        {/* Fee per Year */}
        <div
          className="w-full md:w-1/2 lg:w-[20%] flex flex-col lg:flex-row items-center justify-center text-2xl font-semibold h-[130px] p-5 bg-white rounded-[30px]"
          style={{
            boxShadow:
              "0px 1.96475px 2.21381px rgba(0,0,0,.02),0px 4.72157px 5.32008px rgba(0,0,0,.03),0px 8.8903px 10.01724px rgba(0,0,0,.04),0px 15.85878px 17.86905px rgba(0,0,0,.04),0px 29.6621px 33.42209px rgba(0,0,0,.05),0px 71px 80px rgba(0,0,0,.07)",
          }}
        >
          <div className="w-full lg:w-1/2">{feePerYear?.countertext}</div>
          <div className="w-full lg:w-1/2">{feePerYear?.countercontent}</div>
        </div>

        {/* Eligibility Criteria with Read More */}
        <div
          className="w-full lg:w-[50%] flex flex-col lg:flex-row gap-5 items-center justify-center h-auto p-5 bg-white rounded-[30px]"
          style={{
            boxShadow:
              "0px 1.96475px 2.21381px rgba(0,0,0,.02),0px 4.72157px 5.32008px rgba(0,0,0,.03),0px 8.8903px 10.01724px rgba(0,0,0,.04),0px 15.85878px 17.86905px rgba(0,0,0,.04),0px 29.6621px 33.42209px rgba(0,0,0,.05),0px 71px 80px rgba(0,0,0,.07)",
          }}
        >
          <div className="text-2xl font-semibold w-full lg:w-[32%]">
            {eligibleCriteria?.countertext}
          </div>
          <div className="w-full lg:w-[68%] text-base h-auto">
            <p>
              {readMore
                ? eligibleCriteria?.countercontent
                : shortText + (isLong ? "..." : "")}
            </p>
            {isLong && (
              <button
                onClick={() => setReadMore(!readMore)}
                className="text-red-600 no-underline text-sm mt-1 cursor-pointer "
              >
                {readMore ? "Read less" : "Read more"}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PHDprogramHero;
