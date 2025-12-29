"use client";

import { useState } from "react";
import Image from "next/image";

type TabKey = "overview" | "eligibility" | "faq";

const programmes = [
  {
    id: 1,
    title: "Ph.D - Allied Health Sciences",
    overview: `
      K.R. Mangalam University's doctoral programme in Allied Health Sciences
      focuses on multidisciplinary research and advanced training in healthcare,
      physiotherapy, radiology, public health, and biomedical sciences.
    `,
    eligibility: `
      Candidates must possess a postgraduate degree in Allied Health Sciences
      or related disciplines with minimum marks as prescribed by the university.
    `,
    faq: [
      "Is an entrance exam mandatory? – Yes, followed by an interview.",
      "Is part-time Ph.D available? – Yes for working professionals.",
      "Is NET mandatory? – NET is exempted for eligible candidates.",
    ],
  },
  {
    id: 2,
    title: "Ph.D - Engineering",
    overview: `
      The Ph.D in Engineering is designed for research scholars aiming to solve
      complex industrial and technological challenges through innovation.
    `,
    eligibility: `
      Applicants must hold an M.Tech / ME degree in a relevant engineering
      discipline from a recognized university.
    `,
    faq: [
      "Is industry sponsorship allowed? – Yes.",
      "What is the duration? – Minimum 3 years.",
    ],
  },
];

const tabs = [
  { key: "overview", label: "Programme Overview" },
  { key: "eligibility", label: "Eligibility Criteria" },
  { key: "faq", label: "Frequently Asked Questions (FAQs)" },
] as const;

const PhdProgrammeOfferedAccordionTab = () => {
  const [selectedProgramme, setSelectedProgramme] = useState(programmes[0]);
  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  return (
    <section className="bg-[#F8F9FA] py-10">
      <div className="max-w-[1300px] mx-auto px-4">

        {/* ---------------- SELECT PROGRAMME ---------------- */}
        <div className="bg-white p-8 rounded-[10px] mb-10">
          <h4 className="text-3xl font-semibold mb-6">
            Select Your Ph.D Programme
          </h4>

          <div className="relative w-full md:w-3/5">
            <select
              className="w-full bg-[#F1F1F1] py-3 px-5 rounded-md appearance-none"
              value={selectedProgramme.id}
              onChange={(e) => {
                const p = programmes.find(
                  (item) => item.id === Number(e.target.value)
                );
                if (p) {
                  setSelectedProgramme(p);
                  setActiveTab("overview");
                }
              }}
            >
              {programmes.map((programme) => (
                <option key={programme.id} value={programme.id}>
                  {programme.title}
                </option>
              ))}
            </select>

            <Image
              src="/landingpage/phd/chevron.svg"
              width={14}
              height={16}
              alt=""
              className="absolute right-5 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        {/* ---------------- TABS ---------------- */}
        <div>
          <ul className="flex flex-wrap border-b border-[#E2E8F0]">
            {tabs.map((tab) => (
              <li
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-3 cursor-pointer text-sm md:text-base ${
                  activeTab === tab.key
                    ? "border-b-2 border-black font-semibold"
                    : "text-gray-600"
                }`}
              >
                {tab.label}
              </li>
            ))}
          </ul>

          {/* ---------------- TAB CONTENT ---------------- */}
          <div
            className="mt-6 bg-white rounded-[4px] p-6"
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            {activeTab === "overview" && (
              <p className="text-gray-700 leading-relaxed">
                {selectedProgramme.overview}
              </p>
            )}

            {activeTab === "eligibility" && (
              <p className="text-gray-700 leading-relaxed">
                {selectedProgramme.eligibility}
              </p>
            )}

            {activeTab === "faq" && (
              <ul className="list-disc pl-5 space-y-3 text-gray-700">
                {selectedProgramme.faq.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PhdProgrammeOfferedAccordionTab;
