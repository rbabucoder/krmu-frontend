import { HiglightCard } from "@/lib/types/school-programme";
import ProgramHighlightSlider from "../school-prog-global-comps/ProgramHighlightSlider";
import ProgrammeHighlightCard from "../school-prog-global-comps/ProgrammeHighlightCard";

type Props = {
  heading: string;
  highlightHeading: string;
  desc: string;
  highlights: HiglightCard[];
};

const ProgrammeHighlight = ({
  heading,
  highlightHeading,
  desc,
  highlights,
}: Props) => {
  return (
    <section className="prog-global-padding">
      <div className="max-w-[1320px] mx-auto w-full">
        <div className="common-prog-container">
          <h2 className="heading">
            {heading}{" "}
            <span className="prog-highlight-text">{highlightHeading}</span>
          </h2>
          <p className="sub-heading">{desc}</p>
        </div>
        <div className="hidden lg:grid grid-cols-2 gap-5 mt-12">
          {highlights &&
            highlights.map((highlight) => (
              <ProgrammeHighlightCard
                key={highlight.id}
                title={highlight?.title}
                desc={highlight?.subtitle}
                highlightimg={highlight?.highlightimage}
              />
            ))}
        </div>
        <div className="lg:hidden">
          <ProgramHighlightSlider highlights={highlights} />

          {/* <ProgramHighlightSlider /> */}
        </div>
      </div>
    </section>
  );
};

export default ProgrammeHighlight;
