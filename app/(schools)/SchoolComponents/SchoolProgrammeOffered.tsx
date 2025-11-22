import ProgrammeInfo from "./schoolglobalcomponent/ProgrammeInfo";

type Props = {
  degName: string;
  schoolCategoryName: string;
  title: string;
  content: string;
};

const SchoolProgrammeOffered = ({
  degName,
  schoolCategoryName,
  title,
  content,
}: Props) => {
  return (
    <>
      <section className="px-4" id="Explore-Courses"> 
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="text-center mb-10">
            <h3 className="text-3xl mb-5 md:text-5xl lg:text-[64px] font-medium">
              {title}
            </h3>
            <p>{content}</p>
          </div>
          <ProgrammeInfo degName={degName} catName={schoolCategoryName} />
        </div>
      </section>
    </>
  );
};

export default SchoolProgrammeOffered;
