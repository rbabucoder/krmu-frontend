import { getExaminationPageData } from "@/lib/api/examination";
import ExaminationABCDigilocker from "./comp/ExaminationABCDigilocker";
import ExaminationDownload from "./comp/ExaminationDownload";
import ExaminationFAQ from "./comp/ExaminationFAQ";
import ExaminationHero from "./comp/ExaminationHero";
import ExaminationApplyOnline from "./comp/ExaminationApplyOnline";

const page = async () => {
  const examinationData = await getExaminationPageData();


  return (
    <>
      {examinationData?.examination_hero && (
        <ExaminationHero
          title={examinationData?.examination_hero?.title}
          bgImgUrl={examinationData?.examination_hero?.bgimg?.url}
        />
      )}
      {examinationData?.imp_download && (
        <ExaminationDownload
          heading={examinationData?.imp_download?.heading}
          downloadCards={examinationData?.imp_download?.imp_download_card}
        />
      )}
      {examinationData?.abc_nad_digilocker && (
        <ExaminationABCDigilocker
          heading={examinationData?.abc_nad_digilocker?.heading}
          url={examinationData?.abc_nad_digilocker?.url}
          btns={examinationData?.abc_nad_digilocker?.abc_nad_btns}
        />
      )}
      {examinationData?.apply_online && (
        <ExaminationApplyOnline
          applyContent={examinationData?.apply_online?.apply_online_content}
        />
      )}
      {examinationData?.examination_faq && (
        <ExaminationFAQ
          heading={examinationData?.examination_faq?.heading}
          faqs={examinationData?.examination_faq?.faq_accordion}
        />
      )}
    </>
  );
};

export default page;
