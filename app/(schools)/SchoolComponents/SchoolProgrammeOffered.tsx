import ProgrammeInfo from "./schoolglobalcomponent/ProgrammeInfo";

type Props = {
  degName: string;
  schoolCategoryName: string;
};

const SchoolProgrammeOffered = ({ degName, schoolCategoryName }: Props) => {
  return (
    <>
      <section className="px-4">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="text-center mb-10">
            <h3 className="text-3xl mb-5 md:text-5xl lg:text-[64px] font-medium">
              Programmes Offered
            </h3>
            <p>
              At the School of Engineering & Technology, we offer diverse
              programmes with various specialisations. Each programme is
              designed to equip students with the essential knowledge and skills
              needed to excel in their chosen fields.
            </p>
          </div>
          <ProgrammeInfo degName={degName} catName={schoolCategoryName} />
        </div>
      </section>
    </>
  );
};

export default SchoolProgrammeOffered;
