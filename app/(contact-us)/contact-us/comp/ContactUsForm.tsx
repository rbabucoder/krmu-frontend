"use client";

import { useState } from "react";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  // ---------------- VALIDATION ----------------
  const validate = () => {
    const newErrors: typeof errors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---------------- HANDLERS ----------------
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // clear error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="Reach-Out-to-Us-form">
      <div className="title">
        <p>Reach Out to Us</p>
      </div>
      <div className="text-white my-5">
        <p>
          For any inquiries or information, feel free to connect with us. Our
          team is ready to assist you with your academic journey.
        </p>
      </div>

      {/* ---------------- NAME ---------------- */}
      <div className="field name">
        <label className="field_label">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="field_text"
        />
        {errors.name && (
          <p className="text-red-600 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {/* ---------------- EMAIL ---------------- */}
      <div className="field email">
        <label className="field_label">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="field_text"
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* ---------------- MESSAGE ---------------- */}
      <div className="field message">
        <label className="field_label">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="field_text"
          rows={4}
        />
        {errors.message && (
          <p className="text-red-600 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <button type="submit" className="submit-btn field_submit">
        Submit
      </button>
    </form>
  );
};

export default ContactUsForm;
