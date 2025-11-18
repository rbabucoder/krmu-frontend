import ProgrammeAlumniSlides from "./ProgrammeAlumniSlides";

const ProgrammesAlumni = () => {
  return (
    <section className="py-[50px]">
      <div className="max-w-[600px] mx-auto w-full text-center">
        <h3 className="text-[40px] font-semibold text-center mb-5 leading-[1.2] text-[#0a41a1]">
          Voices of <span className="text-[#e61f21]">Our Alumni</span>
        </h3>
        <p className="text-base text-[#544d5d] font-medium">
          Our Success Stories
        </p>
      </div>
      <div className="mt-5">
        <ProgrammeAlumniSlides />
      </div>
    </section>
  );
};

export default ProgrammesAlumni;
