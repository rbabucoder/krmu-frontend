import PHDTestimonial from "./PHDTestimonial";

const PHDCareer = () => {
  return (
    <section className="py-[60px]">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-[64px] text-[#0060aa] font-semibold">
          Career Options
        </h3>
        <p>
          Students who complete their Ph.D. in Computer Science & Engineering
          will be able to secure handsome job profiles at various leading MNCs,
          PSUs and research institutions:
        </p>
      </div>
      <div className="max-w-[1664px] mx-auto w-full mt-10 flex gap-10">
        <div className="w-1/2">
          <ul className="text-xl ml-5">
            <li
              className="relative before:content-[''] before:absolute before:top-[11px] before:left-[-25px] before:bg-[url(/phdtick.svg)] before:w-[30px] before:h-[20px] before:bg-contain
             before:bg-no-repeat py-1.5
            "
            >
              <span className="text-[#0060aa]">Computer Scientist :</span>
              Computer scientists focus on understanding, designing, and
              developing new algorithms, computational systems, and performance
              optimization techniques.
            </li>
            <li
              className="relative before:content-[''] before:absolute before:top-[11px] before:left-[-25px] before:bg-[url(/phdtick.svg)] before:w-[30px] before:h-[20px] before:bg-contain
             before:bg-no-repeat py-1.5
            "
            >
              <span className="text-[#0060aa]">Big Data Analyst :</span>
              Big Data Analysts use statistical tools and analytics software to
              analyze, process, and model data, then report back to influence
              decision-making processes.
            </li>
            <li
              className="relative before:content-[''] before:absolute before:top-[11px] before:left-[-25px] before:bg-[url(/phdtick.svg)] before:w-[30px] before:h-[20px] before:bg-contain
             before:bg-no-repeat py-1.5
            "
            >
              <span className="text-[#0060aa]">
                Lecturer/Professor/Academician :
              </span>
              Lecturer/Professor/Academician in this field assist students to
              gain invaluable knowledge of computer science. They involve
              students in extensive research where students are not only able to
              expand their knowledge but also learn essential skills.
            </li>
            <li
              className="relative before:content-[''] before:absolute before:top-[11px] before:left-[-25px] before:bg-[url(/phdtick.svg)] before:w-[30px] before:h-[20px] before:bg-contain
             before:bg-no-repeat py-1.5
            "
            >
              <span className="text-[#0060aa]">Data Science Engineer :</span>
              Data Science Engineers incorporate their skills in software
              engineering with knowledge of algorithms and data processing
              techniques to allow data scientists to execute models and analyses
              efficiently.
            </li>
          </ul>
        </div>
        <div className="w-1/2">
            <div className="py-[50px] px-[70px] bg-[#051630] rounded-[58px]">
                <h4 className="text-2xl font-semibold text-center text-white mb-5">Hear straight from our Students</h4>
                <PHDTestimonial />
            </div>
        </div>
      </div>
    </section>
  );
};

export default PHDCareer;
