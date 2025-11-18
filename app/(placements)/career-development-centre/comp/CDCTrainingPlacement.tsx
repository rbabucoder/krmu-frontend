import CDCCard from "../global-comp/CDCCard";

const CDCTrainingPlacement = () => {
  return (
    <>
      <section className="px-4">
        <div className="max-w-[1664px] mx-auto w-full">
          <p className="text-xl my-10 text-center md:text-left">
            <strong>
              The Career Development Center at KRMU offers training and
              placement assistance to students through various initiatives
              including:
            </strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <CDCCard />
            <CDCCard />
          </div>

          <div className="my-5 cdccard-ul">
            <h3 className="text-3xl sm:text-4xl font-semibold text-center md:text-left">
              Career Training Modules & Methodology
            </h3>
            <br />
            <ul>
              <li>Quantitative Aptitude and Logical Reasoning</li>
              <li>
                Soft Skills (Body Language, Professional Grooming & Etiquettes)
              </li>
              <li>VARC (Verbal Ability and Reading Comprehension)</li>
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-10">
                <CDCCard />
                <CDCCard />
                <CDCCard />
            </div>
          </div>
          <div className="my-10 cdccard-ul">
            <h3 className="text-3xl sm:text-4xl font-semibold text-center md:text-left">
             Skill-Building Opportunities at a Glance

            </h3>
            <br />
            <ul>
              <li>Quantitative Aptitude and Logical Reasoning</li>
              <li>
                Soft Skills (Body Language, Professional Grooming & Etiquettes)
              </li>
              <li>VARC (Verbal Ability and Reading Comprehension)</li>
            </ul>
            <div className="grid grid-cols-1  md:grid=cols-2 lg:grid-cols-4 my-5 gap-10">
                <CDCCard />
                <CDCCard />
                <CDCCard />
                <CDCCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CDCTrainingPlacement;
