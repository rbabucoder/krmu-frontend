"use client";

import { useState } from "react";
import { Semester } from "../admission/mca-2026/contentType";
import ProgramCard from "./ProgramCard";

type Props = {
  semesters: Semester[];
};

const SemesterTabs = ({ semesters }: Props) => {
  const [active, setActive] = useState(semesters[0].id);
  const current = semesters.find((s) => s.id === active)!;

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
        {/* Left Tabs */}
        <div className="space-y-4">
          {semesters.map((sem) => (
            <button
              key={sem.id}
              // onClick={() => setActive(sem.id)}
              className="bg-white text-black hover:bg-[#0A1B3D] hover:text-white w-full text-left rounded-xl p-5 transition border"
              // className={`w-full text-left rounded-xl p-5 transition border
              //   ${
              //     active === sem.id
              //       ? "bg-[#0A1B3D] text-white"
              //       : "bg-white hover:bg-gray-50"
              //   }`}
            >
              <p className="text-sm opacity-80">
                {sem.title}
                <span className="block">{sem.duration}</span>
              </p>
              <h4 className="mt-2 font-semibold">{sem.subtitle}</h4>
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <ProgramCard
            image="/landingpage/common/dummy.png"
            title="Master of Computer Applications (MCA)"
            description="K.R. Mangalam University offers cutting-edge equipment, state-of-the-art labs, and industry-focused education to improve hands-on learning. Through projects, internships, and seminars, the curriculum places a strong emphasis on professional abilities, creativity, and problem-solving. Graduates are equipped for a variety of professions in the quickly changing IT sector across international technology-driven organisations, such as software developers, system analysts, data specialists, or entrepreneurs."
            format=""
            duration="2 Years"
            eligibility="Any graduation degree with Mathematics at 10+2 level or at Graduation level with minimum 50% aggregate marks."
            focus=""
            annualFee="Rs 1,20,000"
          />
          <ProgramCard
            image="/landingpage/common/dummy.png"
            title="MCA (AI & ML) with academic support of IBM and powered by Microsoft Certifications"
            description="MCA in Artificial Intelligence and Machine Learning is a specialised postgraduate program offered by the K.R. Mangalam University. The program is designed with academic support of IBM and powered by Microsoft Certifications, ensuring strong industry alignment. Students learn core computer science along with AI, ML, data science, cloud computing, and analytics."
            format=""
            duration="2 Years"
            eligibility="Any graduation degree with Mathematics at 10+2 level or at Graduation level with minimum 50% aggregate marks."
            focus=""
            annualFee="Rs 1,50,000"
          />

          {/* <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            {current.heading}
          </h2>
          <p className="text-gray-600 max-w-3xl mb-8">
            {current.description}
          </p> */}

          {/* {current.courses.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {current.courses.map((course) => (
                <div
                  key={course.id}
                  className={`${course.color} rounded-xl p-6 relative`}
                >
                  <span className="absolute top-4 right-4 text-2xl font-bold opacity-20">
                    {course.id}
                  </span>
                  <h4 className="font-semibold mb-2">{course.title}</h4>
                  <p className="text-sm text-gray-700">{course.desc}</p>
                </div>
              ))}
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default SemesterTabs;
