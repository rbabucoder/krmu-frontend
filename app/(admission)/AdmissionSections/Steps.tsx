import { getAdmissionPageData } from "@/lib/api/admission";
import React from "react";

const Steps = async () => {

    const stepsData = await getAdmissionPageData();

    const steps = stepsData.find(component => component.__component === "admissionpage-components.steps");

    

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        <div
          data-slot="card"
          className="bg-card text-card-foreground flex flex-col gap-6 border-0 shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 rounded-3xl"
        >
          <div
            data-slot="card-content"
            className="[&amp;:last-child]:pb-6 p-6 md:p-6 lg:p-8 h-full bg-gradient-to-br from-blue-200 via-blue-100 to-cyan-100 text-gray-700 relative"
          >
            <div className="mb-4 md:mb-4 lg:mb-6">
              <span className="text-3xl md:text-4xl lg:text-5xl opacity-40 text-gray-500 font-bold">
                01
              </span>
            </div>
            <div className="mb-4 md:mb-4 lg:mb-6">
              <div className="w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user-check w-6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 text-gray-600"
                  aria-hidden="true"
                >
                  <path d="m16 11 2 2 4-4"></path>
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            <div className="space-y-3 md:space-y-3 lg:space-y-4">
              <h3 className="text-lg md:text-lg lg:text-2xl text-university-red font-bold leading-tight">
                Registration
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-sm lg:text-base">
                Register Online Through Our Portal
              </p>
            </div>
          </div>
        </div>
        <div
          data-slot="card"
          className="bg-card text-card-foreground flex flex-col gap-6 border-0 shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 rounded-3xl"
        >
          <div
            data-slot="card-content"
            className="[&amp;:last-child]:pb-6 p-6 md:p-6 lg:p-8 h-full bg-gradient-to-br from-blue-100 via-purple-100 to-blue-200 text-gray-700 relative"
          >
            <div className="mb-4 md:mb-4 lg:mb-6">
              <span className="text-3xl md:text-4xl lg:text-5xl opacity-40 text-gray-500 font-bold">
                02
              </span>
            </div>
            <div className="mb-4 md:mb-4 lg:mb-6">
              <div className="w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-file-text w-6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 text-gray-600"
                  aria-hidden="true"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
              </div>
            </div>
            <div className="space-y-3 md:space-y-3 lg:space-y-4">
              <h3 className="text-lg md:text-lg lg:text-2xl text-university-red font-bold leading-tight">
                Application Form
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-sm lg:text-base">
                Submit Your Academic Credentials &amp; Application Fee
              </p>
            </div>
          </div>
        </div>
        <div
          data-slot="card"
          className="bg-card text-card-foreground flex flex-col gap-6 border-0 shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 rounded-3xl"
        >
          <div
            data-slot="card-content"
            className="[&amp;:last-child]:pb-6 p-6 md:p-6 lg:p-8 h-full bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100 text-gray-700 relative"
          >
            <div className="mb-4 md:mb-4 lg:mb-6">
              <span className="text-3xl md:text-4xl lg:text-5xl opacity-40 text-gray-500 font-bold">
                03
              </span>
            </div>
            <div className="mb-4 md:mb-4 lg:mb-6">
              <div className="w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-pen-tool w-6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 text-gray-600"
                  aria-hidden="true"
                >
                  <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path>
                  <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path>
                  <path d="m2.3 2.3 7.286 7.286"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </div>
            </div>
            <div className="space-y-3 md:space-y-3 lg:space-y-4">
              <h3 className="text-lg md:text-lg lg:text-2xl text-university-red font-bold leading-tight">
                Entrance Exam
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-sm lg:text-base">
                Appear for the University Entrance Exam (If Applicable)
              </p>
            </div>
          </div>
        </div>
        <div
          data-slot="card"
          className="bg-card text-card-foreground flex flex-col gap-6 border-0 shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 rounded-3xl"
        >
          <div
            data-slot="card-content"
            className="[&amp;:last-child]:pb-6 p-6 md:p-6 lg:p-8 h-full bg-gradient-to-br from-red-200 via-orange-100 to-pink-100 text-gray-700 relative"
          >
            <div className="mb-4 md:mb-4 lg:mb-6">
              <span className="text-3xl md:text-4xl lg:text-5xl opacity-40 text-gray-500 font-bold">
                04
              </span>
            </div>
            <div className="mb-4 md:mb-4 lg:mb-6">
              <div className="w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-award w-6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 text-gray-600"
                  aria-hidden="true"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>
            </div>
            <div className="space-y-3 md:space-y-3 lg:space-y-4">
              <h3 className="text-lg md:text-lg lg:text-2xl text-university-red font-bold leading-tight">
                Admission Offer
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-sm lg:text-base">
                Receive Your Admission Offer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
