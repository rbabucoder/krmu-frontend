import Image from "next/image";
import Link from "next/link";

const AdmissionProcess = () => {
  return (
    <section className="prog-global-padding bg-[#f9f9f9]">
      <div className="common-prog-container">
        <h2 className="heading">
          Admission <span className="prog-highlight-text">Process</span>
        </h2>
        <p className="sub-heading">
          Commence your Journey in just 6 simple steps
        </p>
      </div>
      <div className="max-w-[1320px] mx-auto w-full mt-2.5 hidden lg:block px-4">
        <Image
          src="/programmes/admis_proc.webp"
          width={1296}
          height={170}
          alt="admission process"
        />
        <div className="admis_proc_btn_grid_items">
          <div className="admis_proc_btn_grid_item">
            <div className="admis_proc_btn_content">
              <button className="btn_text">Start your application </button>
              <a
                href="http://admissions.krmangalam.edu.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="admis_btn_below_text">
                  admissions.krmangalam.edu.in
                </p>
              </a>
            </div>
          </div>
          <div className="admis_proc_btn_grid_item">
            <div className="admis_proc_btn_content">
              <button className="btn_text">Payment</button>
              <p className="admis_btn_below_text">
                Pay the required application fee of ₹1,000
              </p>
            </div>
          </div>
          <div className="admis_proc_btn_grid_item">
            <div className="admis_proc_btn_content">
              <button className="btn_text">Entrance Test</button>
              <p className="admis_btn_below_text">
                Appear for the K.R. Mangalam University Entrance Exam
              </p>
            </div>
          </div>
          <div className="admis_proc_btn_grid_item">
            <div className="admis_proc_btn_content">
              <button className="btn_text">Personal Interview </button>
              <p className="admis_btn_below_text">
                Attend our Faculty-Led Interview
              </p>
            </div>
          </div>
          <div className="admis_proc_btn_grid_item">
            <div className="admis_proc_btn_content">
              <button className="btn_text">Admission Offer</button>
              <p className="admis_btn_below_text">
                Receive the offer letter after a successful personal interview{" "}
              </p>
            </div>
          </div>
          <div className="admis_proc_btn_grid_item">
            <div className="admis_proc_btn_content">
              <button className="btn_text">Get Enrolled</button>
              <p className="admis_btn_below_text">
                Embark on your journey with K.R. Mangalam University{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[540px] mx-auto w-full flex lg:hidden items-center justify-center px-2.5 md:px-4">
        <div className="grid grid-cols-2 gap-2.5 gap-6">
          <div className="w-full text-center relative after:content-['01'] mob_admis_proc_col flex flex-col justify-end h-[150px] md:h-[180px]">
            <h4 className="text-lg text-[#e61f21] z-10 break-all">
              Start Your Application
            </h4>
            <Link
              href="mailto:admissions.krmangalam.edu.in"
              className="z-10 leading-[1] text-sm text-[#0d6efd] break-all"
            >
              admissions.krmangalam.edu.in
            </Link>
          </div>
          <div className="w-full text-center relative after:content-['02'] mob_admis_proc_col flex flex-col justify-end h-[150px] md:h-[180px]">
            <h4 className="text-lg text-[#e61f21] z-10 break-all">Payment</h4>
            <p className="z-10 leading-[1] text-sm text-[#0d6efd] break-all">
              Pay the required application fee of ₹1,000
            </p>
          </div>
          <div className="w-full text-center relative after:content-['03'] mob_admis_proc_col flex flex-col justify-end h-[150px] md:h-[180px]">
            <h4 className="text-lg text-[#e61f21] z-10 break-all">Entrance Test</h4>
            <p className="z-10 leading-[1] text-sm text-[#0d6efd] break-all">
              Attend our Faculty-Led Interview
            </p>
          </div>
          <div className="w-full text-center relative after:content-['04'] mob_admis_proc_col flex flex-col justify-end h-[150px] md:h-[180px]">
            <h4 className="text-lg text-[#e61f21] z-10 break-all">
              Start Your Application
            </h4>
            <Link
              href="mailto:admissions.krmangalam.edu.in"
              className="z-10 leading-[1] text-sm text-[#0d6efd] break-all"
            >
              admissions.krmangalam.edu.in
            </Link>
          </div>
          <div className="w-full text-center relative after:content-['05'] mob_admis_proc_col flex flex-col justify-end h-[150px] md:h-[180px]">
            <h4 className="text-lg text-[#e61f21] z-10 break-all">Admission Offer </h4>
            <p className="z-10 leading-[1] text-sm text-[#0d6efd] break-all">
              Receive the offer letter after a successful personal interview
            </p>
          </div>
          <div className="w-full text-center relative after:content-['06'] mob_admis_proc_col flex flex-col justify-end h-[150px] md:h-[180px]">
            <h4 className="text-lg text-[#e61f21] z-10 break-all">
              Start Your Application
            </h4>
            <Link
              href="mailto:admissions.krmangalam.edu.in"
              className="z-10 leading-[1] text-sm text-[#0d6efd] break-all"
            >
              admissions.krmangalam.edu.in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
