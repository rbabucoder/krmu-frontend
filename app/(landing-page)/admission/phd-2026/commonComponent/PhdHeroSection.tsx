import Image from "next/image";
import NoPaperFormsWidget from "../../CommonComponent2026/NoPaperFormsWidget";

type Props = {
  formId: string;
};

const PhdHeroSection = ({ formId }: Props) => {
  return (
    <section className="bg-[url(/landingpage/phd/phd-hero-bg.webp)] bg-cover bg-no-repeat bg-center pt-[84px] pb-[120px]">
      <div className="max-w-[1300px] mx-auto w-full flex items-center">
        <div className="w-1/3">
          <h1 className="text-[40px] text-white leading-[1] font-semibold">
            Admissions Open for <br />
            <span className="text-[190px] font-bold">Ph.D</span> <br />
            <span>Programmes 2026</span>
          </h1>
          <h3 className="text-4xl font-semibold bg-white p-5 w-fit my-5">
            FULL TIME | PART TIME
          </h3>
          <h4 className="text-white text-2xl">
            25+ Disciplines | Attractive Fellowship
          </h4>
        </div>
        <div className="w-1/3">
          <Image src="/landingpage/phd/hero-main.webp" width={570} height={735} alt="Hero" className="-mb-10" />
        </div>
        <div className="w-1/3 flex justify-end">
          {formId && <NoPaperFormsWidget widgetId={formId} height="520px" formClass="phdForm" />}
        </div>
      </div>
    </section>
  );
};

export default PhdHeroSection;
