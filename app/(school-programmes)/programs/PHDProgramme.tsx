import { PHDProgrammeData } from "@/lib/types/phd-programmes";
import PHDAdmission from "./phd/comp/PHDAdmission";
import PHDCareer from "./phd/comp/PHDCareer";
import PHDConnectingDream from "./phd/comp/PHDConnectingDream";
import PHDHighlight from "./phd/comp/PHDHighlight";
import PHDOutcome from "./phd/comp/PHDOutcome";
import PHDOverview from "./phd/comp/PHDOverview";
import PHDprogramHero from "./phd/comp/PHDprogramHero";
import PHDProgrammeHighlight from "./phd/comp/PHDProgrammeHighlight";
import PHDPursue from "./phd/comp/PHDPursue";
import PHDScholar from "./phd/comp/PHDScholar";
import PHDSlide from "./phd/comp/PHDSlide";
import PHDTestimonialsAcc from "./phd/comp/PHDTestimonialsAcc";

type Props = {
  phdData: PHDProgrammeData;
};

const PHDProgrammes = ({ phdData }: Props) => {
  return (
    <>
      {phdData?.heading && (
        <PHDprogramHero
          heading={phdData?.heading}
          duration={phdData?.duration}
          feePerYear={phdData?.fee_per_year}
          eligibleCriteria={phdData?.eligibility_criteria}
          bgimg={phdData?.bgimg}
          formfield={phdData?.formfield ?? ""}
        />
      )}
      {phdData?.phdoverview && (
        <PHDOverview overviewData={phdData?.phdoverview} />
      )}
      {phdData?.scholarsponsoredparttime && (
        <PHDScholar scholarShipsData={phdData?.scholarsponsoredparttime} />
      )}
      {phdData?.connectingtalent && (
        <PHDConnectingDream connectingTalent={phdData?.connectingtalent} />
      )}
      {phdData?.phdlogoslide && <PHDSlide logoSlide={phdData?.phdlogoslide} />}
      {phdData?.careeroptions && (
        <PHDCareer careerOptions={phdData?.careeroptions} />
      )}
      {phdData?.phdoutcome && (
        <PHDOutcome phdoutcomecontent={phdData?.phdoutcome} />
      )}
      {phdData?.programmehighlight && (
        <PHDProgrammeHighlight highlightContent={phdData?.programmehighlight} />
      )}
      {phdData?.phdadmissionselect && (
        <PHDAdmission
          title1={phdData?.phdadmissionselect?.title1}
          title2={phdData?.phdadmissionselect?.title2}
          desc1={phdData?.phdadmissionselect?.desc1}
          desc2={phdData?.phdadmissionselect?.desc2}
        />
      )}
      {phdData?.pursue && <PHDPursue pursueContent={phdData?.pursue} />}
      <PHDTestimonialsAcc
        faqTitle={phdData?.phdfaqtitle}
        faqs={phdData?.phdprogrammefaq}
      />
      <PHDHighlight
        heading={phdData?.commence_journey?.heading}
        highlightheading={phdData?.commence_journey?.highlight_heading}
        btn={phdData?.commence_journey?.commence_btn}
        imgUrl={phdData?.commence_journey?.bgimg?.url}
      />
    </>
  );
};

export default PHDProgrammes;
