import { STRAPI_URL } from "@/app/constant";
import NoPaperForm from "@/lib/constants/NoPaperForm";
import { StrapiMedia } from "@/lib/types/common";
import {
  Duration,
  EligibilityCriteria,
  FeePerYear,
} from "@/lib/types/phd-programmes";

type Props = {
  heading: string;
  duration: Duration;
  feePerYear: FeePerYear;
  eligibleCriteria: EligibilityCriteria;
  bgimg: StrapiMedia;
  formfield: string;
};

const PHDprogramHero = ({
  heading,
  duration,
  feePerYear,
  eligibleCriteria,
  bgimg,
}: Props) => {
  return (
    <>
      <section
        className="py-[8%] bg-no-repeat bg-cover"
        style={{
          background: `url(${STRAPI_URL}${bgimg?.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1664px] mx-auto w-full flex items-center h-[784px]">
          <div className="w-3/5 text-white text-5xl font-semibold p-5">
            <h1
              dangerouslySetInnerHTML={{
                __html: heading,
              }}
            />
          </div>
          <div className="w-2/5">
            <NoPaperForm
              formId="0d2d6e28c86e4213b353bfe132035965"
              height="500px"
            />
          </div>
        </div>
      </section>
      <div className="max-w-[1664px] mx-auto w-full flex  gap-1.5 relative z-10 -mt-[33px]">
        <div
          className="w-[20%] flex items-center justify-center text-2xl font-semibold h-[130px] bg-white"
          style={{
            boxShadow:
              "0px 1.96475px 2.21381px 0px rgba(0,0,0,.02),0px 4.72157px 5.32008px 0px rgba(0,0,0,.03),0px 8.8903px 10.01724px 0px rgba(0,0,0,.04),0px 15.85878px 17.86905px 0px rgba(0,0,0,.04),0px 29.6621px 33.42209px 0px rgba(0,0,0,.05),0px 71px 80px 0px rgba(0,0,0,.07)",
            borderRadius: "30px",
          }}
        >
          {duration?.countertext}
          {duration?.countercontent}
        </div>
        <div
          className="w-[25%] flex items-center justify-center text-2xl font-semibold h-[130px] p-5 bg-white"
          style={{
            boxShadow:
              "0px 1.96475px 2.21381px 0px rgba(0,0,0,.02),0px 4.72157px 5.32008px 0px rgba(0,0,0,.03),0px 8.8903px 10.01724px 0px rgba(0,0,0,.04),0px 15.85878px 17.86905px 0px rgba(0,0,0,.04),0px 29.6621px 33.42209px 0px rgba(0,0,0,.05),0px 71px 80px 0px rgba(0,0,0,.07)",
            borderRadius: "30px",
          }}
        >
          <div className="w-1/2">{feePerYear?.countertext}</div>
          <div className="w-1/2">{feePerYear?.countercontent}</div>
        </div>
        <div
          className="w-[50%] flex items-center justify-center h-[130px] p-5 bg-white"
          style={{
            boxShadow:
              "0px 1.96475px 2.21381px 0px rgba(0,0,0,.02),0px 4.72157px 5.32008px 0px rgba(0,0,0,.03),0px 8.8903px 10.01724px 0px rgba(0,0,0,.04),0px 15.85878px 17.86905px 0px rgba(0,0,0,.04),0px 29.6621px 33.42209px 0px rgba(0,0,0,.05),0px 71px 80px 0px rgba(0,0,0,.07)",
            borderRadius: "30px",
          }}
        >
          <div className="text-2xl font-semibold w-[32%]">
            {eligibleCriteria?.countertext}
          </div>
          <div className="w-[68%]">{eligibleCriteria?.countercontent}</div>
        </div>
      </div>
    </>
  );
};

export default PHDprogramHero;
