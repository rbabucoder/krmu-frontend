import AdmissionProcess from "../../school-programmes-component/AdmissionProcess";
import Eligibility from "../../school-programmes-component/Eligibility";
import HeroBanner from "../../school-programmes-component/HeroBanner";
import ProgrammeHighlight from "../../school-programmes-component/ProgrammeHighlight";
import ProgrammeScope from "../../school-programmes-component/ProgrammeScope";

const page = () => {
  return (
    <>
      <main className="school-prog-font">
        <HeroBanner />
        <Eligibility />
        <ProgrammeScope />
        <ProgrammeHighlight />
        <AdmissionProcess />
      </main>
    </>
  );
};

export default page;
