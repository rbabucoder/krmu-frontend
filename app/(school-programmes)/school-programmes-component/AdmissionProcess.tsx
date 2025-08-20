import Image from "next/image";

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
      <div className="max-w-[1320px] mx-auto w-full mt-2.5">
        <Image src="/programmes/admis_proc.webp" width={1296} height={170} alt="admission process" />
        <div className="admis_proc_btn_grid_items">
              <div className="admis_proc_btn_grid_item">
                <div className="admis_proc_btn_content">
                  <button className="btn_text">Start your application </button>
                  <a href="http://admissions.krmangalam.edu.in" target="_blank" rel="noopener noreferrer">
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
                  <button className="btn_text">Personal Interview  </button>
                  <p className="admis_btn_below_text">
                    Attend our Faculty-Led Interview
                  </p>
                </div>
              </div>
              <div className="admis_proc_btn_grid_item">
                <div className="admis_proc_btn_content">
                  <button className="btn_text">Admission Offer</button>
                  <p className="admis_btn_below_text">
                    Receive the offer letter after a successful personal interview      </p>
                </div>
              </div>
              <div className="admis_proc_btn_grid_item">
                <div className="admis_proc_btn_content">
                  <button className="btn_text">Get Enrolled</button>
                  <p className="admis_btn_below_text">
                    Embark on your journey with K.R. Mangalam University    </p>
                </div>
              </div>
            </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
