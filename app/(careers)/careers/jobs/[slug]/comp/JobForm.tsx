"use client";
import { useState, useRef } from "react";

type Props = { jobId: number };

const JobForm = ({ jobId }: Props) => {
  const [formData, setFormData] = useState({
    awsm_applicant_name: "",
    awsm_applicant_phone: "",
    awsm_applicant_email: "",
    awsm_text_1: "",
    awsm_text_4: "",
    awsm_text_5: "",
    awsm_text_6: "",
    awsm_text_2: "",
    awsm_text_3: "",
    awsm_text_7: "",
    awsm_form_privacy_policy: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ALLOWED FILE TYPES
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  // ------------------ VALIDATION ------------------
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "awsm_form_privacy_policy" && !value) {
        newErrors[key] = "This field is required";
      }
    });

    if (!formData.awsm_form_privacy_policy) {
      newErrors.awsm_form_privacy_policy = "You must accept the privacy policy";
    }

    if (!file) {
      newErrors.awsm_file = "Resume is required";
    } else if (!allowedTypes.includes(file.type)) {
      newErrors.awsm_file = "Only PDF, DOC, DOCX allowed";
    } else if (file.size > 5 * 1024 * 1024) {
      newErrors.awsm_file = "File size must be less than 5MB";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ------------------ INPUT HANDLERS ------------------
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({ ...prev, [name]: "" })); // remove error live
  };

  const handleFileSelect = (e: any) => {
    const uploaded = e.target.files[0];
    if (!uploaded) return;

    if (!allowedTypes.includes(uploaded.type)) {
      setErrors({ awsm_file: "Only PDF, DOC, DOCX allowed" });
      return;
    }

    setFile(uploaded);
    setErrors({ awsm_file: "" });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateForm()) return;

    const fd = new FormData();
    fd.append("action", "awsm_applicant_form_submission");
    fd.append("awsm_job_id", jobId.toString());

    Object.entries(formData).forEach(([key, value]) => {
      if (key === "awsm_form_privacy_policy") {
        fd.append(key, value ? "yes" : ""); // convert boolean → string
      } else {
        fd.append(key, String(value)); // ensures value is always string
      }
    });

    if (file) fd.append("awsm_file_1", file);

    const response = await fetch("/api/submit-job", {
      method: "POST",
      body: fd,
    });
    const result = await response.json();

    if (!result.success) {
      alert("Submission failed");
      console.error(result.error);
      return;
    }

    alert("Form submitted successfully!");
  };

  const fields = [
    { label: "Candidate Name", name: "awsm_applicant_name" },
    { label: "Contact No.", name: "awsm_applicant_phone" },
    { label: "Mail ID", name: "awsm_applicant_email", type: "email" },
    { label: "Current Location", name: "awsm_text_1" },
    { label: "Native Location", name: "awsm_text_4" },
    { label: "Education with Percentage (Bachelor,Master,P.HD) *", name: "awsm_text_5" },
    { label: "Current Organization", name: "awsm_text_6" },
    { label: "Current Salary", name: "awsm_text_2" },
    { label: "Expected Salary", name: "awsm_text_3" },
    { label: "Notice Period", name: "awsm_text_7" },
  ];

  return (
    <form
      data-jobform-id={jobId}
      onSubmit={handleSubmit}
      className="p-5 md:p-[25px] rounded-[5px]"
      style={{ boxShadow: `0 0 18px -4px #e3e3e3` }}
    >
      <h2 className="text-4xl font-semibold mb-[30px]">
        Apply for this position
      </h2>

      {/* FIELDS */}
      {fields.map((field, i) => (
        <div className="mb-5" key={i}>
          <label className="block font-medium mb-2.5 text-base">
            {field.label} <span className="text-[#db4c4c]">*</span>
          </label>

          <input
            type={field.type || "text"}
            name={field.name}
            value={(formData as any)[field.name]}
            onChange={handleChange}
            className="px-[15px] border w-full h-[50px] rounded-[6px]"
          />

          {errors[field.name] && (
            <p className="text-red-600 text-sm mt-1">{errors[field.name]}</p>
          )}
        </div>
      ))}

      {/* FILE UPLOAD */}
      <div className="mb-5">
        <label className="block font-medium mb-2.5 text-base">
          Upload CV/Resume <span className="text-[#db4c4c]">*</span>
        </label>

        <div
          className="p-4 border border-dashed border-[#0000004d] cursor-pointer rounded-md"
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="py-7 text-center">
            {file ? (
              <span className="font-medium text-green-600">
                Selected: {file.name}
              </span>
            ) : (
              "Click to upload (PDF, DOC, DOCX)"
            )}
          </div>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={handleFileSelect}
        />
        <span className="text-xs">Allowed Type(s): .pdf, .doc, .docx</span>
        {errors.awsm_file && (
          <p className="text-red-600 text-sm mt-1">{errors.awsm_file}</p>
        )}
      </div>

      {/* PRIVACY POLICY */}
      <div className="mb-5 flex items-center">
        <input
          type="checkbox"
          name="awsm_form_privacy_policy"
          checked={formData.awsm_form_privacy_policy}
          onChange={handleChange}
          className="mr-2"
        />
        <label className="text-base">
          By using this form you agree with the storage and handling of your
          data by this website.
          <span className="text-[#db4c4c]">*</span>
        </label>
      </div>
      {errors.awsm_form_privacy_policy && (
        <p className="text-red-600 text-sm mt-1">
          {errors.awsm_form_privacy_policy}
        </p>
      )}

      {/* SUBMIT */}
      <button
        type="submit"
        className="bg-[#cb000d] text-white py-[15px] px-10 rounded-full font-semibold"
      >
        Submit
      </button>
    </form>
  );
};

export default JobForm;
