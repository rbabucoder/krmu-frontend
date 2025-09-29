import { PHDOutcome as phdoutcomedata } from "@/lib/types/phd-programmes";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

type Props = {
  phdoutcomecontent: phdoutcomedata;
};

const PHDOutcome = ({ phdoutcomecontent }: Props) => {
  return (
    <>
      <section
        style={{
          background:
            "linear-gradient(98.91deg,#0000b2 -76.74%,#061731 36.74%,#ab192d 154.6%)",
        }}
      >
        <div className="max-w-[1664px] mx-auto w-full">
          <h3 className="text-[64px] text-white font-semibold text-center">
            {phdoutcomecontent?.title}
          </h3>

          <div className="flex gap-10">
            {phdoutcomecontent?.phdoutcome &&
              phdoutcomecontent?.phdoutcome?.map((phdoutcome) => {
                return (
                  <div
                    key={phdoutcome?.id}
                    className="w-1/3 program-outcome-new relative text-white h-64 px-5"
                  >
                    <BlocksRenderer content={phdoutcome?.outcomedesc} />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PHDOutcome;
