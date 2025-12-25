import Link from "next/link";

const WardenHostel = () => {
  return (
    <section className="w-full py-10 md:py-20 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-[40px] leading-tight font-semibold text-[#0b2b6a] mb-6">
            Connect with the Warden
          </h2>

          <p className="text-[#4b5563] text-[16px] leading-7 max-w-[620px] mb-10">
            The super friendly and responsible wardens at our hostels ensure
            that decorum is maintained inside the hostel premises. Moreover, the
            wardens also plan and host recreational activities and events to
            keep the entertainment going and help your child make the most out
            of their hostel life.
          </p>

          {/* Combined Pill Button */}
          <div className="inline-flex flex-col md:flex-row gap-5 md:gap-0 md:rounded-full overflow-hidden bg-[#071d3c] text-white">
            <Link
              href="tel:8800697005"
              className="px-8 py-3 font-medium border-r border-white/30"
            >
              Boys: 8800697005
            </Link>
            <Link href="tel:8800697006" className="px-8 py-3 font-medium">
              Girls: 8800697006
            </Link>
          </div>
        </div>

        {/* RIGHT HOSTEL FEES */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-[22px] font-semibold mb-6">Hostel Fees</h3>

          <div className="border border-black max-w-[600px] overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b border-black">
                  <td className="px-6 py-4 font-medium">
                    Hostel Fee (to be collected upfront)
                  </td>
                  <td className="px-6 py-4 font-semibold text-right">
                    Rs. 160000/-
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-medium">
                    Hostel Security Deposit (Refundable)
                  </td>
                  <td className="px-6 py-4 font-semibold text-right">
                    Rs. 20000/-
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WardenHostel;
