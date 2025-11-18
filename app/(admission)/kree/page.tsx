import KREEAdmissionOnline from "./comp/KREEAdmissionOnline";
import KREEApplyOnline from "./comp/KREEApplyOnline";
import KREEEnroll from "./comp/KREEEnroll";
import KREEExaminationPattern from "./comp/KREEExaminationPattern";
import { KREEHero } from "./comp/KREEHero";

const page = () => {
  return (
    <>
        <KREEHero />
        <KREEEnroll />
        <KREEApplyOnline />
        <KREEAdmissionOnline />
        <KREEExaminationPattern />
    </>
  );
};

export default page;
