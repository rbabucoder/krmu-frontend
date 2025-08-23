import Image from "next/image";
const ProgrammeHighlightCard = () => {
  return (
    <>
      <div className="proghighcard flex justify-center cursor-pointer rounded-[30px]">
        <div className="w-1/5">
          <Image
            width={127}
            height={144}
            src="/programmes/holistic.jpg"
            alt="ba-hons-psychology-krmu"
            className="w-full h-full object-cover rounded-l-[20px]"
          />
        </div>
        <div className="w-4/5 py-2.5 pr-2.5 pl-5">
          <h5 className="text-xl text-[#0a41a1] hover:text-[#db2a1a] font-medium leading-[1.2] mb-2.5">
            Holistic Curriculum
          </h5>
          <p className="text-[15px] text-[#5c5c5e]">
            Industry Aligned Curriculum that covers both foundational knowledge
            and cutting-edge technologies for a job-ready learning curve.
          </p>
        </div>
      </div>

      {/* <div className="prog_highlight_content_container">
      <div className="prog_highlight_content_inner_container">
        <div className="prog_highlight_img">
          <Image
            width={127}
            height={144}
            src="/programmes/holistic.jpg"
            alt="ba-hons-psychology-krmu"
          />
        </div>
        <div className="prog_highlight_content">
          <h5 className="title">Holistic Curriculum </h5>
          <p className="content">
            A creatively structured curriculum blending theoretical knowledge
            with practical applications, enabling students to understand human
            behaviour, mental processes, and psychological concepts in
            real-world scenarios.
          </p>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default ProgrammeHighlightCard;
