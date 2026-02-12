import { Adm2Alumni } from "@/lib/types/admission2";
import Admission2AlumniSlides from "./Admission2AlumniSlides";


type Props = {
  admAlumni: Adm2Alumni[];
};

const Admission2Alumni = ({ admAlumni }: Props) => {
  return (
    <section className="py-section px-4">
      <div className="max-w-[600px] mx-auto w-full text-center">
        <h3 className="text-h1 font-semibold text-center mb-5 leading-[1.2] text-krmu-blue-dark">
          Voices of <span className="text-krmu-red">Our Alumni</span>
        </h3>
        <p className="text-base text-[#544d5d] font-medium">
          Our Success Stories
        </p>
      </div>
      <div className="mt-5">
        <Admission2AlumniSlides alumniData={admAlumni} />
      </div>
    </section>
  );
};

export default Admission2Alumni;
