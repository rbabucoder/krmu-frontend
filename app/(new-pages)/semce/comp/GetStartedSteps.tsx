export default function GetStartedSteps() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1664px] mx-auto px-4">
        {/* HEADING */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Get started in 6 Simple Steps
        </h2>

        {/* BLUE CONTAINER */}
        <div className="bg-[#0F4C81] rounded-xl p-6 md:p-10 space-y-6">
          {/* STEP 1 */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 bg-[#D21F26] text-white rounded-full px-8 py-5 flex flex-col md:flex-row md:items-center md:gap-6">
              <h3 className="text-xl font-semibold">Start Your Application</h3>
              <p className="text-sm italic opacity-90">
                Apply online at admissions.krmangalam.edu.in
              </p>
            </div>
            <div className="w-16 h-16 rounded-full border-2 border-white"></div>
          </div>

          {/* STEP 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-white text-white rounded-full px-8 py-5">
              <h4 className="font-semibold text-lg">
                Complete Application & Fee Payment
              </h4>
              <p className="text-sm italic opacity-90">
                Fill in your details and submit the application fee
              </p>
            </div>

            <div className="border-2 border-white text-white rounded-full px-8 py-5">
              <h4 className="font-semibold text-lg">Entrance Test</h4>
              <p className="text-sm italic opacity-90">
                Appear for K.R. Mangalam University Entrance Examination (KREE)
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#D21F26]"></div>
            <div className="flex-1 bg-[#D21F26] text-white rounded-full px-8 py-5">
              <h3 className="text-xl font-semibold">Personal Interaction</h3>
              <p className="text-sm italic opacity-90">
                Attend a faculty-led interaction to understand your interests
                and goals
              </p>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-white text-white rounded-full px-8 py-5">
              <h4 className="font-semibold text-lg">Admission Offer</h4>
              <p className="text-sm italic opacity-90">
                Receive your official offer letter after successful evaluation
              </p>
            </div>

            <div className="border-2 border-white text-white rounded-full px-8 py-5">
              <h4 className="font-semibold text-lg">Get Enrolled</h4>
              <p className="text-sm italic opacity-90">
                Confirm your seat and begin your journey at SEMCE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
