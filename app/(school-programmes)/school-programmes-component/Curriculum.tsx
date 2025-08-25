import { Year } from "@/lib/types/school-programme";
import ProgrammeStructure from "../school-prog-global-comps/ProgrammeStructure";

type Props = {
  heading: string;
  highlight: string;
  desc: string;
  programStruct: Year[];
};

const Curriculum = ({ heading, highlight, desc, programStruct }: Props) => {
  return (
    <>
      <section className="prog-global-padding">
        <div className="max-w-[1320px] mx-auto w-full">
          <div className="common-prog-container">
            <h2 className="heading">
              {heading} <span className="prog-highlight-text">{highlight}</span>
            </h2>
            <p className="sub-heading">{desc}</p>
          </div>
          <ProgrammeStructure programStruct={programStruct} />
        </div>
      </section>
    </>
  );
};

export default Curriculum;
