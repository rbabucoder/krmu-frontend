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
        <label htmlFor="" className="block font-medium mb-2.5 text-base">
          Candidate Name <span className="text-[#db4c4c]">*</span>
        </label>
        <input
          type="text"
          className="px-[15px] border border-[#f2f3f5s] w-full h-[50px] awsm-job-form-field awsm-job-form-control rounded-[6px]"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="" className="block font-medium mb-2.5 text-base">
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
          type="tel"
          name="awsm_applicant_phone"
          className="px-[15px] border border-[#f2f3f5s] w-full h-[50px] awsm-job-form-field awsm-job-form-control rounded-[6px]"
          required
        />
      </div>
    </form>
  );
};

export default JobForm;
