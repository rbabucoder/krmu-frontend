import ProgrammeStructure from "../school-prog-global-comps/ProgrammeStructure";

const Curriculum = () => {
  return (
    <>
      <section className="prog-global-padding">
        <div className="max-w-[1320px] mx-auto w-full">
          <div className="common-prog-container">
            <h2 className="heading">
              Curriculum & <span className="prog-highlight-text">Syllabus</span>
            </h2>
            <p className="sub-heading">Programme Structure</p>
          </div>
          <ProgrammeStructure />
        </div>
      </section>
    </>
  );
};

export default Curriculum;
