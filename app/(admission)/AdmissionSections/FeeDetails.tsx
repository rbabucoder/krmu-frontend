const FeeDetails = () => {
  return (
    <>
      <section className="py-20 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-university-red to-university-blue text-white rounded-full px-6 py-3 shadow-lg mb-6">
              <span className="text-sm uppercase tracking-wide">
                Financial Information
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-800 font-bold">
              <span className="text-university-red">Fee</span> Details
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent and competitive fee structure designed to make quality
              education accessible
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div
              data-slot="card"
              className="text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white overflow-hidden"
            >
              <div
                data-slot="card-content"
                className="[&amp;:last-child]:pb-6 p-0"
              >
                <div className="p-6 pb-4">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-university-red rounded-full flex items-center justify-center mr-4 shadow-lg">
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
                        className="lucide lucide-credit-card w-8 h-8 text-white"
                        aria-hidden="true"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                        <line x1="2" x2="22" y1="10" y2="10"></line>
                      </svg>
                    </div>
                    <h3 className="text-gray-800 text-xl">
                      Application Fee and Registration Fee
                    </h3>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className="space-y-4">
                    <div className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1 pr-4">
                          <h4 className="text-gray-800 text-base leading-tight mb-1">
                            Application Fee (one time) (Non refundable)
                          </h4>
                        </div>
                        <div className="flex items-center text-lg font-semibold text-gray-800">
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
                            className="lucide lucide-indian-rupee w-5 h-5 mr-1 text-university-red"
                            aria-hidden="true"
                          >
                            <path d="M6 3h12"></path>
                            <path d="M6 8h12"></path>
                            <path d="m6 13 8.5 8"></path>
                            <path d="M6 13h3"></path>
                            <path d="M9 13c6.667 0 6.667-10 0-10"></path>
                          </svg>
                          <span>1,000</span>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1 pr-4">
                          <h4 className="text-gray-800 text-base leading-tight mb-1">
                            Registration Fee (To be paid on offer of Admission,
                            adjusted in Semester Fee)
                          </h4>
                        </div>
                        <div className="flex items-center text-lg font-semibold text-gray-800">
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
                            className="lucide lucide-indian-rupee w-5 h-5 mr-1 text-university-red"
                            aria-hidden="true"
                          >
                            <path d="M6 3h12"></path>
                            <path d="M6 8h12"></path>
                            <path d="m6 13 8.5 8"></path>
                            <path d="M6 13h3"></path>
                            <path d="M9 13c6.667 0 6.667-10 0-10"></path>
                          </svg>
                          <span>25,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div
              data-slot="card"
              className="text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white overflow-hidden"
            >
              <div
                data-slot="card-content"
                className="[&amp;:last-child]:pb-6 p-0"
              >
                <div className="p-6 pb-4">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-university-blue rounded-full flex items-center justify-center mr-4 shadow-lg">
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
                        className="lucide lucide-house w-8 h-8 text-white"
                        aria-hidden="true"
                      >
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      </svg>
                    </div>
                    <h3 className="text-gray-800 text-xl">Hostel Fee</h3>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className="space-y-4">
                    <div className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1 pr-4">
                          <h4 className="text-gray-800 text-base leading-tight mb-1">
                            Hostel Security Deposit (Refundable)
                          </h4>
                          <div className="flex items-center text-green-600 text-sm">
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
                              className="lucide lucide-refresh-cw w-4 h-4 mr-1"
                              aria-hidden="true"
                            >
                              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                              <path d="M21 3v5h-5"></path>
                              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                              <path d="M8 16H3v5"></path>
                            </svg>
                            <span>Refundable</span>
                          </div>
                        </div>
                        <div className="flex items-center text-lg font-semibold text-gray-800">
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
                            className="lucide lucide-indian-rupee w-5 h-5 mr-1 text-university-red"
                            aria-hidden="true"
                          >
                            <path d="M6 3h12"></path>
                            <path d="M6 8h12"></path>
                            <path d="m6 13 8.5 8"></path>
                            <path d="M6 13h3"></path>
                            <path d="M9 13c6.667 0 6.667-10 0-10"></path>
                          </svg>
                          <span>20,000</span>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1 pr-4">
                          <h4 className="text-gray-800 text-base leading-tight mb-1">
                            Hostel Fee (per annum)
                          </h4>
                        </div>
                        <div className="flex items-center text-lg font-semibold text-gray-800">
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
                            className="lucide lucide-indian-rupee w-5 h-5 mr-1 text-university-red"
                            aria-hidden="true"
                          >
                            <path d="M6 3h12"></path>
                            <path d="M6 8h12"></path>
                            <path d="m6 13 8.5 8"></path>
                            <path d="M6 13h3"></path>
                            <path d="M9 13c6.667 0 6.667-10 0-10"></path>
                          </svg>
                          <span>1,60,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div
              data-slot="card"
              className="text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white overflow-hidden"
            >
              <div
                data-slot="card-content"
                className="[&amp;:last-child]:pb-6 p-0"
              >
                <div className="p-6 pb-4">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-university-red to-university-blue rounded-full flex items-center justify-center mr-4 shadow-lg">
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
                        className="lucide lucide-bus w-8 h-8 text-white"
                        aria-hidden="true"
                      >
                        <path d="M8 6v6"></path>
                        <path d="M15 6v6"></path>
                        <path d="M2 12h19.6"></path>
                        <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"></path>
                        <circle cx="7" cy="18" r="2"></circle>
                        <path d="M9 18h5"></path>
                        <circle cx="16" cy="18" r="2"></circle>
                      </svg>
                    </div>
                    <h3 className="text-gray-800 text-xl">Transport Fee</h3>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className="space-y-4">
                    <div className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1 pr-4">
                          <h4 className="text-gray-800 text-base leading-tight mb-1">
                            Transport Fee (per annum)
                          </h4>
                        </div>
                        <div className="flex items-center text-lg font-semibold text-gray-800">
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
                            className="lucide lucide-indian-rupee w-5 h-5 mr-1 text-university-red"
                            aria-hidden="true"
                          >
                            <path d="M6 3h12"></path>
                            <path d="M6 8h12"></path>
                            <path d="m6 13 8.5 8"></path>
                            <path d="M6 13h3"></path>
                            <path d="M9 13c6.667 0 6.667-10 0-10"></path>
                          </svg>
                          <span>50,000</span>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1 pr-4">
                          <h4 className="text-gray-800 text-base leading-tight mb-1">
                            Shuttle Transport (per annum) (From Rajiv Chowk and
                            Huda City Centre to the University)
                          </h4>
                        </div>
                        <div className="flex items-center text-lg font-semibold text-gray-800">
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
                            className="lucide lucide-indian-rupee w-5 h-5 mr-1 text-university-red"
                            aria-hidden="true"
                          >
                            <path d="M6 3h12"></path>
                            <path d="M6 8h12"></path>
                            <path d="m6 13 8.5 8"></path>
                            <path d="M6 13h3"></path>
                            <path d="M9 13c6.667 0 6.667-10 0-10"></path>
                          </svg>
                          <span>25,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div
              data-slot="card"
              className="text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white overflow-hidden"
            >
              <div
                data-slot="card-content"
                className="[&amp;:last-child]:pb-6 p-0"
              >
                <div className="p-6 pb-4">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
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
                        className="lucide lucide-shield w-8 h-8 text-white"
                        aria-hidden="true"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      </svg>
                    </div>
                    <h3 className="text-gray-800 text-xl">Security Deposit</h3>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className="space-y-4">
                    <div className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1 pr-4">
                          <h4 className="text-gray-800 text-base leading-tight mb-1">
                            Security Deposit (Refundable)
                          </h4>
                          <div className="flex items-center text-green-600 text-sm">
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
                              className="lucide lucide-refresh-cw w-4 h-4 mr-1"
                              aria-hidden="true"
                            >
                              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                              <path d="M21 3v5h-5"></path>
                              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                              <path d="M8 16H3v5"></path>
                            </svg>
                            <span>Refundable</span>
                          </div>
                        </div>
                        <div className="flex items-center text-lg font-semibold text-gray-800">
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
                            className="lucide lucide-indian-rupee w-5 h-5 mr-1 text-university-red"
                            aria-hidden="true"
                          >
                            <path d="M6 3h12"></path>
                            <path d="M6 8h12"></path>
                            <path d="m6 13 8.5 8"></path>
                            <path d="M6 13h3"></path>
                            <path d="M9 13c6.667 0 6.667-10 0-10"></path>
                          </svg>
                          <span>10,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
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
                  className="lucide lucide-clock w-6 h-6 text-university-blue mr-2"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <h3 className="text-2xl text-gray-800">Payment Information</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
                All fees are subject to revision as per university policies.
                Students are advised to confirm the latest fee structure at the
                time of admission. Payment plans and financial assistance
                options are available. Contact our admissions office for
                detailed information on payment schedules and available
                scholarships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeeDetails;
