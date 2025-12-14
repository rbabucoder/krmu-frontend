"use client";

import { FETCH_STRAPI_URL } from "@/app/constant";
import { useState } from "react";

const ContactUsForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.agree) {
      setError(
        "Please agree to receive information before submitting the form."
      );
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch(`${FETCH_STRAPI_URL}/api/contact-forms`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            name: form.name,
            email: form.email,
            phone: form.phone,
            agree: form.agree,
          },
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess("Thank you! Your application has been submitted.");
      setForm({
        name: "",
        email: "",
        phone: "",
        agree: false,
      });
    } catch {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="Reach-Out-to-Us-form">
        <div className="title">
          <p>Reach Out to Us</p>
        </div>

        <p className="field description">
          <br />
          For any inquiries or information, feel free to connect with us. Our
          team is ready to assist you with your academic journey.
        </p>

        {/* Name */}
        <div className="field name">
          <label className="field_label">Name:</label>
          <p>
            <span className="contactUsformField">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                maxLength={400}
                className="field_text text-black"
                required
              />
            </span>
          </p>
        </div>

        {/* Email */}
        <div className="field email">
          <label className="field_label">E-Mail ID:</label>
          <p>
            <span className="contactUsformField">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                maxLength={400}
                className="field_email text-black"
                required
              />
            </span>
          </p>
        </div>

        {/* Phone */}
        <div className="field phone">
          <label className="field_label">Mobile Number:</label>
          <p>
            <span className="contactUsformField">
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                maxLength={11}
                minLength={10}
                className="field_phone text-black"
                required
              />
            </span>
          </p>
        </div>

        {/* Checkbox */}
        <div className="field checkbox">
          <p>
            <span className="contactUsformField">
              <label className="field_label flex gap-2 items-start">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                />
                <span>
                  I agree to receive information regarding my submitted
                  application by signing up on{" "}
                  <strong>KR Mangalam University</strong>
                </span>
              </label>
            </span>
          </p>
        </div>

        {/* Submit */}
        <div className="field submit pt-5">
          <p>
            <input
              className="field_submit"
              type="submit"
              value={loading ? "Submitting..." : "Submit"}
              disabled={loading}
            />
          </p>
        </div>

        {/* Messages */}
        {success && <p className="text-green-600 pt-3">{success}</p>}
        {error && <p className="text-red-600 pt-3">{error}</p>}
      </div>
    </form>
  );
};

export default ContactUsForm;
