import AdmissionProcess from "../../school-programmes-component/AdmissionProcess";
import BeyondClassroom from "../../school-programmes-component/BeyondClassroom";
import CareerProspects from "../../school-programmes-component/CareerProspects";
import { ConnectWithUs } from "../../school-programmes-component/ConnectWithUs";
import Curriculum from "../../school-programmes-component/Curriculum";
import DreamCareer from "../../school-programmes-component/DreamCareer";
import Eligibility from "../../school-programmes-component/Eligibility";
import FinancialAssistance from "../../school-programmes-component/FinancialAssistance";
import HeroBanner from "../../school-programmes-component/HeroBanner";
import LabsFacilities from "../../school-programmes-component/LabsFacilities";
import OurLocation from "../../school-programmes-component/OurLocation";
import ProgrammeHighlight from "../../school-programmes-component/ProgrammeHighlight";
import ProgrammeScope from "../../school-programmes-component/ProgrammeScope";
import Specialisation from "../../school-programmes-component/Specialisation";
import TableOfContent from "../../school-programmes-component/TableOfContent";

const page = () => {
  return (
    <>
      <main className="school-prog-font">
        <HeroBanner />
        <Eligibility />
        <ProgrammeScope />
        <ProgrammeHighlight />
        <Specialisation />
        <AdmissionProcess />
        <Curriculum />
        <LabsFacilities />
        <BeyondClassroom />
        <CareerProspects />
        <DreamCareer />
        <FinancialAssistance />
        <TableOfContent />
        <OurLocation />
        <ConnectWithUs />
      </main>
    </>
  );
};

export default page;
