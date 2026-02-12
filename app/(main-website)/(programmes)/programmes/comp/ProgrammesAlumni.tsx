import { ProgrammeAlumniData } from "@/lib/types/programme";
import ProgrammeAlumniSlides from "./ProgrammeAlumniSlides";

type Props = {
  alumniData: ProgrammeAlumniData[];
};

const ProgrammesAlumni = ({ alumniData }: Props) => {
  return (
    <section className="py-section">
      <div className="max-w-[600px] mx-auto w-full text-center">
        <h3 className="text-h1 font-semibold text-center mb-5 leading-[1.2] text-krmu-blue-dark">
          Voices of <span className="text-krmu-red">Our Alumni</span>
        </h3>
        <p className="text-base text-[#544d5d] font-medium">
          Our Success Stories
        </p>
      </div>
      <div className="mt-5">
        <ProgrammeAlumniSlides alumniData={alumniData} />
      </div>
    </section>
  );
};

export default ProgrammesAlumni;
