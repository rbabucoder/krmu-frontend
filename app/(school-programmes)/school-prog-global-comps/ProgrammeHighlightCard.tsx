import Image from "next/image";
const ProgrammeHighlightCard = () => {
  return (
    <div className="prog_highlight_content_container">
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
    </div>
  );
};

export default ProgrammeHighlightCard;
