import { PHDProgrammeData } from "@/lib/types/phd-programmes";
import PHDAdmission from "../programs/phd-computer-science-engineering/comp/PHDAdmission";
import PHDCareer from "../programs/phd-computer-science-engineering/comp/PHDCareer";
import PHDConnectingDream from "../programs/phd-computer-science-engineering/comp/PHDConnectingDream";
import PHDHighlight from "../programs/phd-computer-science-engineering/comp/PHDHighlight";
import PHDOutcome from "../programs/phd-computer-science-engineering/comp/PHDOutcome";
import PHDOverview from "../programs/phd-computer-science-engineering/comp/PHDOverview";
import PHDprogramHero from "../programs/phd-computer-science-engineering/comp/PHDprogramHero";
import PHDProgrammeHighlight from "../programs/phd-computer-science-engineering/comp/PHDProgrammeHighlight";
import PHDPursue from "../programs/phd-computer-science-engineering/comp/PHDPursue";
import PHDScholar from "../programs/phd-computer-science-engineering/comp/PHDScholar";
import PHDSlide from "../programs/phd-computer-science-engineering/comp/PHDSlide";
import PHDTestimonialsAcc from "./phd-computer-science-engineering/comp/PHDTestimonialsAcc";

type Props = {
  phdData: PHDProgrammeData;
};

const PHDProgrammes = ({ phdData }: Props) => {
  return (
    <>
      <PHDprogramHero
        heading={phdData?.heading}
        duration={phdData?.duration}
        feePerYear={phdData?.fee_per_year}
        eligibleCriteria={phdData?.eligibility_criteria}
      />
      <PHDOverview overviewData={phdData?.phdoverview} />
      <PHDScholar scholarShipsData={phdData?.scholarsponsoredparttime} />
      <PHDConnectingDream connectingTalent={phdData?.connectingtalent} />
      <PHDSlide logoSlide={phdData?.phdlogoslide} />
      <PHDCareer careerOptions={phdData?.careeroptions} />
      <PHDOutcome phdoutcomecontent={phdData?.phdoutcome} />
      <PHDProgrammeHighlight highlightContent={phdData?.programmehighlight} />
      <PHDAdmission
        title1={phdData?.phdadmissionselect?.title1}
        title2={phdData?.phdadmissionselect?.title2}
        desc1={phdData?.phdadmissionselect?.desc1}
        desc2={phdData?.phdadmissionselect?.desc2}
      />
      <PHDPursue pursueContent={phdData?.pursue} />
      <PHDTestimonialsAcc
        faqTitle={phdData?.phdfaqtitle}
        faqs={phdData?.phdprogrammefaq}
      />
      <PHDHighlight />
    </>
  );
};

export default PHDProgrammes;
