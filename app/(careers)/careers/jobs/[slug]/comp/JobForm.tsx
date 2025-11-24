const JobForm = () => {
  return (
    <form
      action=""
      className="p-[25px] rounded-[5px]"
      style={{
        boxShadow: `0px 0px 18px -4px #e3e3e3`,
      }}
    >
      <div>
        <h2 className="leading-[1.89] text-[38px] font-semibold mb-[30px]">
          Apply for this position
        </h2>
      </div>
      <div className="mb-5">
        <label
          htmlFor="awsm-applicant-name"
          className="block font-medium mb-2.5 text-base"
        >
          Candidate Name <span className="text-[#db4c4c]">*</span>
        </label>
        <input
          type="text"
          className="px-[15px] border border-[#f2f3f5s] w-full h-[50px] awsm-job-form-field awsm-job-form-control rounded-[6px]"
          id="awsm-applicant-name"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="awsm_applicant_phone"
          className="block font-medium mb-2.5 text-base"
        >
          Contact No. <span className="text-[#db4c4c]">*</span>
        </label>
        <input
          type="tel"
          name="awsm_applicant_phone"
          className="px-[15px] border border-[#f2f3f5s] w-full h-[50px] awsm-job-form-field awsm-job-form-control rounded-[6px]"
          required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="" className="block font-medium mb-2.5 text-base">
          Mail ID <span className="text-[#db4c4c]">*</span>
        </label>
        <input
          type="email"
          name="awsm-applicant-email"
          className="px-[15px] border border-[#f2f3f5s] w-full h-[50px] awsm-job-form-field awsm-job-form-control rounded-[6px]"
          data-msg-email="Please enter a valid email address."
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="awsm_text_1"
          className="block font-medium mb-2.5 text-base"
        >
          Current Location <span className="text-[#db4c4c]">*</span>
        </label>
        <input
          type="text"
          name="awsm_text_1"
          id="awsm_text_1"
          className="px-[15px] border border-[#f2f3f5s] w-full h-[50px] awsm-job-form-field awsm-job-form-control rounded-[6px]"
          data-msg-required="This field is required."
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="awsm_text_4"
          className="block font-medium mb-2.5 text-base"
        >
          Native Location <span className="text-[#db4c4c]">*</span>
        </label>
        <input
          type="text"
          name="awsm_text_4"
          id="awsm_text_4"
          className="px-[15px] border border-[#f2f3f5s] w-full h-[50px] awsm-job-form-field awsm-job-form-control rounded-[6px]"
          data-msg-required="This field is required."
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="awsm_text_5"
          className="block font-medium mb-2.5 text-base"
        >
          Education with Percentage (Bachelor,Master,P.HD){" "}
          <span className="text-[#db4c4c]">*</span>
        </label>
        <input
          type="text"
          name="awsm_text_5"
          id="awsm_text_5"
          className="px-[15px] border border-[#f2f3f5s] w-full h-[50px] awsm-job-form-field awsm-job-form-control rounded-[6px]"
          data-msg-required="This field is required."
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="awsm_text_6"
          className="block font-medium mb-2.5 text-base"
        >
          Current Organization <span className="text-[#db4c4c]">*</span>
        </label>
        <input
          type="text"
          name="awsm_text_6"
          id="awsm_text_6"
          className="px-[15px] border border-[#f2f3f5s] w-full h-[50px] awsm-job-form-field awsm-job-form-control rounded-[6px]"
          data-msg-required="This field is required."
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="awsm_text_2"
          className="block font-medium mb-2.5 text-base"
        >
          Current Salary <span className="text-[#db4c4c]">*</span>
        </label>
        <input
          type="text"
          name="awsm_text_2"
          id="awsm_text_2"
          className="px-[15px] border border-[#f2f3f5s] w-full h-[50px] awsm-job-form-field awsm-job-form-control rounded-[6px]"
          data-msg-required="This field is required."
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="awsm_text_3"
          className="block font-medium mb-2.5 text-base"
        >
          Expected Salary <span className="text-[#db4c4c]">*</span>
        </label>
        <input
          type="text"
          name="awsm_text_3"
          id="awsm_text_3"
          className="px-[15px] border border-[#f2f3f5s] w-full h-[50px] awsm-job-form-field awsm-job-form-control rounded-[6px]"
          data-msg-required="This field is required."
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="awsm_text_7"
          className="block font-medium mb-2.5 text-base"
        >
          Notice Period <span className="text-[#db4c4c]">*</span>
        </label>
        <input
          type="text"
          name="awsm_text_7"
          id="awsm_text_7"
          className="px-[15px] border border-[#f2f3f5s] w-full h-[50px] awsm-job-form-field awsm-job-form-control rounded-[6px]"
          data-msg-required="This field is required."
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="awsm_file"
          className="block font-medium mb-2.5 text-base"
        >
          Upload CV/Resume <span className="text-[#db4c4c]">*</span>
        </label>
        <div className="p-4 border border-dashed border-[#0000004d]">
          <div className="py-7 text-center">
            <span className="text-base text-[#0b0b0b] block">
              Drop files here or click to upload
            </span>
            <span className="text-xs text-[#707070]">
              Maximum allowed file size is 5 MB.
            </span>
          </div>
        </div>
        <small>Allowed Type(s): .pdf, .doc, .docx</small>
      </div>
      <div className="mb-5 flex items-center">
        <input
          name="awsm_form_privacy_policy"
          className="awsm-job-form-field my-[3px] mx-[5px] block"
          id="awsm_form_privacy_policy"
          value="yes"
          type="checkbox"
          data-msg-required="This field is required."
          aria-required="true"
          required
        />
        <label htmlFor="awsm_form_privacy_policy text-base">
          <span>
            By using this form you agree with the storage and handling of your
            data by this website. <span className="text-[#db4c4c]">*</span>
          </span>
        </label>
      </div>
      <div>
        <input
          type="submit"
          value="Submit"
          name="awsm-application-submit-btn"
          className="text-base font-semibold rounded-full py-[15px] px-10 bg-[#cb000d] text-white"
        />
        <div className="awsm-application-message hidden"></div>
      </div>
    </form>
  );
};

export default JobForm;
