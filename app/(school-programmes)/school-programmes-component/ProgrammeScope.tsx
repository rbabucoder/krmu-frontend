import Image from "next/image";

const ProgrammeScope = () => {
  return (
    <section>
      <div className="flex items-center bg-[#0a41a1]">
        <div className="w-1/2 p-[60px] h-full text-white">
          <h3 className="leading-[1.5] mb-6 text-[42px] font-bold">
            Programme Scope
          </h3>
          <p className="text-2xl leading-[2]">
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
        </div>
        <div className="w-1/2">
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
