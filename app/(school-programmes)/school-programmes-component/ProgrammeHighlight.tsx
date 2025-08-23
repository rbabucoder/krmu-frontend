import ProgramHighlightSlider from "../school-prog-global-comps/ProgramHighlightSlider";
import ProgrammeHighlightCard from "../school-prog-global-comps/ProgrammeHighlightCard";

const ProgrammeHighlight = () => {
  return (
    <section className="prog-global-padding">
      <div className="max-w-[1320px] mx-auto w-full">
        <div className="common-prog-container">
          <h2 className="heading">
            Programme <span className="prog-highlight-text">Highlights</span>
          </h2>
          <p className="sub-heading">Key Feature</p>
        </div>
        <div className="hidden lg:grid grid-cols-2 gap-5 mt-12">
          <ProgrammeHighlightCard />
          <ProgrammeHighlightCard />
          <ProgrammeHighlightCard />
          <ProgrammeHighlightCard />
          <ProgrammeHighlightCard />
          <ProgrammeHighlightCard />
        </div>
        <div className="lg:hidden">
          <ProgramHighlightSlider />
        </div>
      </div>
    </section>
  );
};

export default ProgrammeHighlight;
