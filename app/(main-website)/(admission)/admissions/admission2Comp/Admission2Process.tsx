import Image from "next/image";
import Link from "next/link";

const Admission2Process = () => {
  return (
    <section className="pb-[200px] lg:py-section bg-krmu-gray-50 px-4">
      <div className="max-w-content mx-auto w-full hidden lg:block">
        <h3 className="text-h1 text-krmu-blue-dark font-semibold text-center mb-5">
          Admission{" "}
          <span className="text-krmu-red font-semibold">Process</span>
        </h3>
        <p className="text-center text-[#544d5d] font-semibold">
          Step by step Guide
        </p>
        <div>
          <Image
            src="/admission2/ap.png"
            width={1296}
            height={310}
            alt="Admission Process"
          />
          <div className="admission-process flex gap-6 text-center">
            <div className="w-1/4">
              <p className="ap_badge">Registration</p>
              <span className="badge-content">
                Register Online Through Our Portal
              </span>
            </div>
            <div className="w-1/4">
              <p className="ap_badge">Application Form</p>
              <span className="badge-content">
                Submit Your Academic Credentials & Application Fee
              </span>
            </div>
            <div className="w-1/4">
              <p className="ap_badge">Entrance Exam</p>
              <span className="badge-content">
                Appear for the University Entrance Exam (If Applicable)
              </span>
            </div>
            <div className="w-1/4">
              <p className="ap_badge">Admission Offer</p>
              <span className="badge-content">
                Receive Your Admission Offer
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[540px] mx-auto w-full flex lg:hidden items-center justify-center md:px-4">
        <div className="grid grid-cols-2 gap-2.5 md:gap-6">
          <div
            className={`w-full text-center relative  mob_admis_proc_col flex flex-col justify-end h-[150px] md:h-[180px]`}
          >
            <h4 className="text-lg text-krmu-red z-10 break-all font-semibold">
              Registration
            </h4>
            <p className="z-10 leading-[1] text-sm">
              <span>Register Online Through Our Portal</span>
            </p>
          </div>
          <div
            className={`w-full text-center relative  mob_admis_proc_col flex flex-col justify-end h-[150px] md:h-[180px]`}
          >
            <div className="z-10 relative -mt-[50px]">
              <h4 className="text-lg text-krmu-red z-10 font-semibold">
                Application Form
              </h4>
              <p className="z-10 leading-[1] text-sm">
                <span>Submit Your Academic Credentials & Application Fee</span>
              </p>
            </div>
          </div>
          <div
            className={`w-full text-center relative  mob_admis_proc_col flex flex-col justify-end h-[150px] md:h-[180px] mt-10`}
          >
            <div className="z-10 relative -mb-[50px]">
              <h4 className="text-lg text-krmu-red z-10 font-semibold">
                Admission Offer
              </h4>
              <p className="z-10 leading-[1] text-sm">
                <span>Receive Your Admission Offer</span>
              </p>
            </div>
          </div>
          <div
            className={`w-full text-center relative  mob_admis_proc_col flex flex-col justify-end h-[150px] md:h-[180px] mt-10`}
          >
            <div className="z-10 relative -mb-[50px]">
              <h4 className="text-lg text-krmu-red z-10 font-semibold">
                Entrance Exam
              </h4>
              <p className="z-10 leading-[1] text-sm">
                <span>
                  Appear for the University Entrance Exam (If Applicable)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission2Process;
