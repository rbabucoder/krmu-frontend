"use client";

import { FETCH_STRAPI_URL } from "@/app/constant";
import { useState, FormEvent } from "react";

type Props = {
  buttonText: string;
  buttonClassName?: string;
  redirectUrl: string;
};

const CommonLeadPopup = ({
  buttonText,
  buttonClassName,
  redirectUrl,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      mobile: data.get("mobile"),
      page_url: window.location.href,
    };

    try {
      const res = await fetch(`${FETCH_STRAPI_URL}/api/prospect-leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: payload }),
      });

      if (!res.ok) throw new Error("Failed");

      // Open PDF / URL
      const link = document.createElement("a");
      link.href = redirectUrl;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      link.remove();

      setOpen(false);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button onClick={() => setOpen(true)} className={buttonClassName}>
        {buttonText}
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-[520px] rounded-2xl shadow-2xl relative">
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center text-purple-600 text-xl font-bold"
            >
              ✕
            </button>

            {/* Header */}
            <div className="bg-[#005da9] text-white text-center py-3 rounded-t-2xl text-lg font-semibold">
              Download Prospectus
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <input
                name="name"
                required
                placeholder="Your Name*"
                className="w-full h-12 px-4 rounded-lg border border-gray-300 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email Address*"
                className="w-full h-12 px-4 rounded-lg border border-gray-300 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                name="mobile"
                required
                placeholder="Enter Mobile Number*"
                className="w-full h-12 px-4 rounded-lg border border-gray-300 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Checkbox */}
              <label className="flex items-start gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  required
                  className="mt-1 accent-blue-600"
                />
                I agree to receive information about my enquiry by signing up at
                K.R. Mangalam University.
              </label>

              {error && <p className="text-red-600 text-sm">{error}</p>}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-[#e11c2a] text-white rounded-lg font-semibold tracking-wide hover:bg-red-700 transition disabled:opacity-60"
              >
                {loading ? "Please wait..." : "DOWNLOAD PROSPECTUS"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CommonLeadPopup;
