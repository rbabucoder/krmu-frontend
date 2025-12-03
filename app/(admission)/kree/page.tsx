import { getKREEData } from "@/lib/api/kree";
import KREEAdmissionOnline from "./comp/KREEAdmissionOnline";
import KREEApplyOnline from "./comp/KREEApplyOnline";
import KREEEnroll from "./comp/KREEEnroll";
import KREEExaminationPattern from "./comp/KREEExaminationPattern";
import { KREEHero } from "./comp/KREEHero";
import KREEOnlineExam from "./comp/KREEOnlineExam";
import KREESection from "./comp/KREESection";

const page = async () => {
  const kreeData = await getKREEData();
  const kreeEnrol = kreeData?.kree_enrol;

  const applyOnline = kreeData?.kree_apply_online

  return (
    <>
      <KREEHero />
      <KREEEnroll kreeEnrolData={kreeEnrol} />
      <KREEApplyOnline appl_btn={applyOnline?.apply_btn} />
      <KREEAdmissionOnline />
      <KREEExaminationPattern />
      <KREESection />
      <KREEOnlineExam />
    </>
  );
};

export default page;
