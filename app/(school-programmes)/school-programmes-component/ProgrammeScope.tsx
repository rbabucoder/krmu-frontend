import Image from "next/image";
import Link from "next/link";

const ProgrammeScope = () => {
  return (
    <section>
      <div className="xl:flex items-center sm:bg-[#0a41a1]">
        <div className="w-full xl:w-1/2 pt-10 pb-[30px] px-[30px] sm:p-[60px] h-full sm:text-white text-center sm:text-left">
          <h3 className="leading-[1.2] sm:leading-[1.5] mb-6 text-4xl sm:text-[42px] text-[#e61f21] sm:text-white font-bold">
            Programme Scope
          </h3>
          <p className="text-base sm:text-2xl leading-[2]">
            The BA Hons psychology programme offers diverse career and academic
            opportunities in fields like mental health, education, human
            resources, and social work. Graduates can pursue higher studies such
            as MA Psychology, MSW, or specialised diplomas to become
            counsellors, psychologists, or researchers. With growing awareness
            around mental well-being, the demand for psychology professionals is
            increasing across sectors like healthcare, corporate wellness, NGOs,
            and government services making it a promising and impactful career
            path.
          </p>
          <Link href="#" className="bg-[#0a41a1] text-white text-base sm:bg-white p-[15px] flex items-center justify-center max-w-[220px] w-full mx-auto sm:mx-0 sm:text-[#0a41a1] rounded-md font-semibold mt-6">Download Prospectus</Link>
        </div>
        <div className="w-full xl:w-1/2">
          <Image
            width={1728}
            height={1248}
            src="/programmes/scope.webp"
            className="w-full h-full"
            alt="scope image"
          />
        </div>
      </div>
    </section>
  );
};

export default ProgrammeScope;
