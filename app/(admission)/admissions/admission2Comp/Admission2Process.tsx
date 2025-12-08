import Image from "next/image";

const Admission2Process = () => {
  return (
    <section className="py-[50px] bg-[#f9f9f9]">
      <div className="max-w-[1320px] mx-auto w-full">
        <h3 className="text-[40px] text-[#0a41a1] font-semibold text-center mb-5">
          Admission{" "}
          <span className="text-[#e61f21] font-semibold">Process</span>
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
    </section>
  );
};

export default Admission2Process;
