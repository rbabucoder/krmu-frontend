import { Semester } from "../admission/mca-2026-bk/contentType";
import { ProgramCardType } from "../admission/PGType";
import ProgramCard from "./ProgramCard";

type Props = {
  semesters: Semester[];
  progData: ProgramCardType;
};

const SemesterTabs = ({ semesters, progData }: Props) => {
  // const [active, setActive] = useState(semesters[0].id);
  // const current = semesters.find((s) => s.id === active)!;

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
        {/* Left Tabs */}
        <div className="space-y-4">
          {semesters.map((sem) => (
            <button
              key={sem.id}
              // onClick={() => setActive(sem.id)}
              className="bg-white text-black hover:bg-[#0A1B3D] hover:text-white w-full text-left rounded-xl p-5 transition border"
              // className={`w-full text-left rounded-xl p-5 transition border
              //   ${
              //     active === sem.id
              //       ? "bg-[#0A1B3D] text-white"
              //       : "bg-white hover:bg-gray-50"
              //   }`}
            >
              <p className="text-sm opacity-80">
                {sem.title}
                <span className="block">{sem.duration}</span>
              </p>
              <h4 className="mt-2 font-semibold">{sem.subtitle}</h4>
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {progData.map((program, index) => (
            <ProgramCard
              key={index}
              image={program.image}
              title={program.title}
              description={program.description}
              format={program.format}
              duration={program.duration}
              eligibility={program.eligibility}
              focus={program.focus}
              annualFee={program.annualFee}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SemesterTabs;
