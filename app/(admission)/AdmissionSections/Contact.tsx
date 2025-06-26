import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div id="contact">
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-red-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-white rounded-full px-6 py-3 shadow-md mb-6">
                <span className="text-university-blue text-sm uppercase tracking-wide">
                  Visit Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-800 font-bold">
                Find{" "}
                <span className="text-university-red">
                  K.R. Mangalam University
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Strategically located in the heart of Gurugram with excellent
                connectivity to Delhi NCR
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start break-all">
              <div className="space-y-8">
                <div
                  data-slot="card"
                  className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-xl"
                >
                  <div
                    data-slot="card-content"
                    className="[&:last-child]:pb-6 p-8"
                  >
                    <h3 className="text-2xl mb-6 text-gray-800">
                      Contact Information
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center">
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
                            className="lucide lucide-map-pin w-6 h-6 text-white"
                            aria-hidden="true"
                          >
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        </div>
                        <div>
                          <h4 className="mb-2 text-gray-800">Campus Address</h4>
                          <p className="text-gray-600 leading-relaxed">
                            K.R. Mangalam University
                            <br />
                            Sohna Road, Gurugram
                            <br />
                            Haryana - 122103, India
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center">
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
                            className="lucide lucide-phone w-6 h-6 text-white"
                            aria-hidden="true"
                          >
                            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="mb-2 text-gray-800">Phone Numbers</h4>
                          <p className="text-gray-600">
                            Admissions: +91-11-48884888
                            <br />
                            General Inquiry: +91-11-48884889
                            <br />
                            Student Support: +91-11-48884890
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center">
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
                            className="lucide lucide-mail w-6 h-6 text-white"
                            aria-hidden="true"
                          >
                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                            <rect
                              x="2"
                              y="4"
                              width="20"
                              height="16"
                              rx="2"
                            ></rect>
                          </svg>
                        </div>
                        <div>
                          <h4 className="mb-2 text-gray-800">
                            Email Addresses
                          </h4>
                          <p className="text-gray-600">
                            admissions@krmangalam.edu.in
                            <br />
                            info@krmangalam.edu.in
                            <br />
                            placement@krmangalam.edu.in
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center">
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
                            className="lucide lucide-clock w-6 h-6 text-white"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                        </div>
                        <div>
                          <h4 className="mb-2 text-gray-800">Office Hours</h4>
                          <p className="text-gray-600">
                            Monday - Friday: 9:00 AM - 6:00 PM
                            <br />
                            Saturday: 9:00 AM - 2:00 PM
                            <br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-slot="card"
                  className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-xl"
                >
                  <div
                    data-slot="card-content"
                    className="[&amp;:last-child]:pb-6 p-8"
                  >
                    <h3 className="text-2xl mb-6 text-gray-800">
                      How to Reach
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                        <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center">
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
                            className="lucide lucide-car w-6 h-6 text-white"
                            aria-hidden="true"
                          >
                            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                            <circle cx="7" cy="17" r="2"></circle>
                            <path d="M9 17h6"></path>
                            <circle cx="17" cy="17" r="2"></circle>
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-gray-800">By Car</h4>
                          <p className="text-sm text-gray-600">
                            25 mins from Delhi via NH-48, Free parking available
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
                        <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center">
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
                            className="lucide lucide-tram-front w-6 h-6 text-white"
                            aria-hidden="true"
                          >
                            <rect
                              width="16"
                              height="16"
                              x="4"
                              y="3"
                              rx="2"
                            ></rect>
                            <path d="M4 11h16"></path>
                            <path d="M12 3v8"></path>
                            <path d="m8 19-2 3"></path>
                            <path d="m18 22-2-3"></path>
                            <path d="M8 15h.01"></path>
                            <path d="M16 15h.01"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-gray-800">By Metro</h4>
                          <p className="text-sm text-gray-600">
                            Huda City Centre Metro + 20 mins bus ride
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                        <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center">
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
                            className="lucide lucide-bus w-6 h-6 text-white"
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
                        <div>
                          <h4 className="text-gray-800">By Bus</h4>
                          <p className="text-sm text-gray-600">
                            Regular bus service from ISBT Gurugram
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div
                  data-slot="card"
                  className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-xl overflow-hidden"
                >
                  <div className="relative">
                    <Image
                      src="/campus-location.webp"
                      alt="K.R. Mangalam University Campus Location - Sohna Road, Gurugram"
                      className="w-full h-80 object-cover"
                      width={552}
                      height={320}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="text-lg mb-2">Campus Location</h4>
                      <p className="text-sm bg-black/50 rounded-lg px-3 py-2 backdrop-blur-sm">
                        📍 Sohna Road, Gurugram - Prime location with excellent
                        connectivity
                      </p>
                    </div>
                  </div>
                  <div
                    data-slot="card-content"
                    className="[&amp;:last-child]:pb-6 p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg text-gray-800">
                          Interactive Map
                        </h4>
                        <p className="text-sm text-gray-600">
                          Get directions and explore nearby amenities
                        </p>
                      </div>
                      <button className="bg-university-red hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm transition-colors duration-300">
                        Open in Maps
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-slot="card"
                  className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-xl"
                >
                  <div
                    data-slot="card-content"
                    className="[&amp;:last-child]:pb-6 p-8"
                  >
                    <h3 className="text-2xl mb-6 text-gray-800">
                      Campus Highlights
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center mx-auto mb-2">
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
                            className="lucide lucide-building2 lucide-building-2 w-6 h-6 text-white"
                            aria-hidden="true"
                          >
                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                            <path d="M10 6h4"></path>
                            <path d="M10 10h4"></path>
                            <path d="M10 14h4"></path>
                            <path d="M10 18h4"></path>
                          </svg>
                        </div>
                        <h4 className="text-sm text-gray-800">
                          Modern Buildings
                        </h4>
                      </div>
                      <div className="text-center p-4 bg-red-50 rounded-lg">
                        <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center mx-auto mb-2">
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
                            className="lucide lucide-trees w-6 h-6 text-white"
                            aria-hidden="true"
                          >
                            <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"></path>
                            <path d="M7 16v6"></path>
                            <path d="M13 19v3"></path>
                            <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"></path>
                          </svg>
                        </div>
                        <h4 className="text-sm text-gray-800">Green Campus</h4>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center mx-auto mb-2">
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
                            className="lucide lucide-car w-6 h-6 text-white"
                            aria-hidden="true"
                          >
                            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                            <circle cx="7" cy="17" r="2"></circle>
                            <path d="M9 17h6"></path>
                            <circle cx="17" cy="17" r="2"></circle>
                          </svg>
                        </div>
                        <h4 className="text-sm text-gray-800">Free Parking</h4>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center mx-auto mb-2">
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
                            className="lucide lucide-activity w-6 h-6 text-white"
                            aria-hidden="true"
                          >
                            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                          </svg>
                        </div>
                        <h4 className="text-sm text-gray-800">
                          Sports Complex
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-slot="card"
                  className="flex flex-col gap-6 rounded-xl border-0 shadow-xl bg-gradient-to-r from-university-blue to-university-red text-white"
                >
                  <div
                    data-slot="card-content"
                    className="[&amp;:last-child]:pb-6 p-8 text-center"
                  >
                    <h3 className="text-2xl mb-4">Virtual Campus Tour</h3>
                    <p className="mb-6 text-blue-100">
                      {`Can't visit in person? Take our interactive virtual tour
                      and explore our beautiful campus from anywhere.`}
                    </p>
                    <button className="bg-white text-university-blue hover:bg-gray-100 px-8 py-3 rounded-full transition-colors duration-300">
                      Start Virtual Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl text-gray-800 mb-2 font-bold">
                  Why Our Location Matters
                </h3>
                <p className="text-gray-600">
                  Strategic advantages of our Gurugram campus
                </p>
              </div>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl text-university-blue mb-2 font-bold">
                    40 min
                  </div>
                  <p className="text-gray-600 text-sm">From Delhi Airport</p>
                </div>
                <div>
                  <div className="text-3xl text-university-red mb-2 font-bold">
                    500+
                  </div>
                  <p className="text-gray-600 text-sm">IT Companies Nearby</p>
                </div>
                <div>
                  <div className="text-3xl text-university-blue mb-2 font-bold">
                    36 Min
                  </div>
                  <p className="text-gray-600 text-sm">From Metro </p>
                </div>
                <div>
                  <div className="text-3xl text-university-red mb-2 font-bold">
                    100+
                  </div>
                  <p className="text-gray-600 text-sm">MNC Offices in 20km</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
