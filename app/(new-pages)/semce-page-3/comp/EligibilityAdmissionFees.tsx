import { instrumentSerif } from "../lib/font";

export default function EligibilityAdmissionFees() {
  return (
    <section className="bg-[#f3f3f3] py-16 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* TITLE */}
        <h2
          className={`text-xl md:text-4xl lg:text-6xl ${instrumentSerif.className} text-center mb-10`}
        >
          Eligibility, admissions and fees
        </h2>

        {/* ELIGIBILITY */}
        <div className="mb-10 max-w-3xl">
          <h3 className="text-red-600 font-semibold mb-2 text-2xl">
            Eligibility
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li>
              Bachelor’s degree in any discipline from a UGC recognised
              university or equivalent institution
            </li>
            <li>Minimum 50 percent aggregate marks</li>
            <li>
              Strong interest in journalism, storytelling, media, digital
              content or related fields
            </li>
          </ul>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* ADMISSION PROCESS */}
          <div className="bg-[#e31e24] text-white rounded-2xl p-8 md:pt-16 md:pb-40 md:px-20 border-2 border-[#2b7fbe]">
            <h3 className={`text-2xl md:text-6xl italic text-center font-light mb-10 ${instrumentSerif.className}`}>
              Admission process
            </h3>

            <ul className="space-y-4 list-disc text-sm md:text-lg font-semibold">
              <li> Step 1 – Submit the online application form</li>
              <li>
                Step 2 – Appear for the university level selection process, as
                applicable (test, portfolio review or interview)
              </li>
              <li>
                Step 3 – Receive admission offer, complete fee payment and
                document verification
              </li>
              <li> Step 4 – Attend orientation and begin classes at SEMCE</li>
            </ul>
          </div>

          {/* FEES */}
          <div className="bg-[#e31e24] text-white rounded-2xl p-8 md:pt-16 md:pb-40 md:px-20 border-2 border-[#2b7fbe]">
            <h3 className={`text-2xl md:text-6xl italic text-center font-light mb-10 ${instrumentSerif.className}`}>
              Fees and scholarships
            </h3>

            <p className="text-sm md:text-base mb-4">
              The MA (Journalism & Mass Communication) is a two year programme
              spread across four semesters. Fees are charged annually and paid
              semester wise.
            </p>

            <p className="font-semibold mb-4">
              Annual Academic Fee (MA JMC): ₹X,XX,XX per year
            </p>

            <p className="text-sm opacity-90">
              (Hostel, transport and other facilities are charged separately as
              per university norms.)
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col md:flex-row gap-6 mt-10">
          <button className="bg-[#1f679f] text-white p-8 text-4xl rounded-xl font-semibold w-4/12">
            Apply Now
          </button>

          <button className="border-2 border-[#1f679f] text-[#1f679f] p-8 text-4xl rounded-xl font-semibold w-8/12">
            Talk to an Academic Counsellor
          </button>
        </div>
      </div>
    </section>
  );
}
