const PHDAdmission = () => {
  return (
    <section
      className="py-[50px]"
      style={{
        background:
          "linear-gradient(245.65deg,#0161ab -18.61%,#061731 46.18%,#ab192d 112.29%)",
      }}
    >
      <div className="max-w-[1664px] mx-auto w-full flex items-center">
        <div className="w-1/2 px-[100px] text-white">
          <h3 className="text-5xl text-white font-semibold mb-10">
            Ph.D. Admission <br /> Process
          </h3>
          <div className="admission-process-section relative p-5">
            <p>
              Candidates are required to download the Ph.D. admission form from
              the university website{" "}
              <a
                className="red-a-link"
                target="_blank"
                rel="noopener"
                download=""
              >
                (click here)
              </a>{" "}
              and submit it completely filled in all respects with copies of all
              the documents. Shortlisted candidates will be called for written
              examination and interview. They will be required to pay a
              Registration-cum-Processing fee of INR 5000 (Refundable).
            </p>
            <br />
            <p>
              Admission to Ph.D. in CSE programme will be based on the overall
              performance in Post Graduate degree, Entrance Examination,
              Personal Interview and positions available. Preference will be
              given to CSIR/UGC NET qualified candidates and those having
              sponsored projects.
            </p>
          </div>
        </div>
        <div className="w-1/2 px-[100px] text-white">
          <h3 className="text-5xl text-white font-semibold mb-10">
            Selection <br />
            Process
          </h3>
          <div className="selection-process-section relative p-5">
            <p>
              WRITTEN ENTRANCE EXAMINATION
              <br /> It will broadly test the research aptitude and ability to
              comprehend. Candidates with NET, GATE, M Phil. or equivalent
              qualifications may be exempted from the entrance examination.
            </p>
            <br />
            <p>
              PERSONAL INTERVIEW
              <br /> Candidates who clear the written entrance examination will
              be selected for the personal interview. The interview will be
              conducted by the Interview Board of the University to
              comprehensively judge in-depth knowledge in the concerned
              subject/area and ability to do research.
            </p>
            <br />
            <p>
              Admitted candidates will be required to pay the first installment
              of the Ph.D.programme fee and security deposit within the
              specified time to confirm admission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PHDAdmission;
