import Image from "next/image";
import Link from "next/link";

const PhdImportantNotification = () => {
  return (
    <section className="py-10">
      <div className="max-w-[1320px] mx-auto w-full">
        <h2 className="text-[32px]">Important Notification</h2>
        <div className="custom-border"></div>
        <div className="flex gap-9 mt-10">
          <div className="w-1/2">
            <h2 className="text-lg font-semibold border border-gray-200 rounded-t-md px-4 py-3 bg-white">
              Ph.D. Program and Details for Entrance Test (January 2026 Batch)
            </h2>

            <div className="overflow-x-auto border border-t-0 border-gray-200 rounded-b-md mb-5">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="w-1/2 px-4 py-4 text-sm font-medium border border-gray-200">
                      Application Fee
                    </td>
                    <td className="w-1/2 px-4 py-4 text-sm border border-gray-200">
                      Rs. 1500/- (Rupees One Thousand Five Hundred Only)
                    </td>
                  </tr>

                  <tr className="bg-white">
                    <td className="px-4 py-4 text-sm font-medium border border-gray-200">
                      Last Date of Submission of Application
                    </td>
                    <td className="px-4 py-4 text-sm border border-gray-200">
                      31st December 2026 (Wednesday) – 5:00 PM
                    </td>
                  </tr>

                  <tr className="bg-gray-100">
                    <td className="px-4 py-4 text-sm font-medium border border-gray-200">
                      Date of Entrance Test (Online)
                    </td>
                    <td className="px-4 py-4 text-sm border border-gray-200">
                      17th January 2026 (Saturday)
                    </td>
                  </tr>

                  <tr className="bg-white">
                    <td className="px-4 py-4 text-sm font-medium border border-gray-200">
                      Date of Result Declaration of Entrance Test
                    </td>
                    <td className="px-4 py-4 text-sm border border-gray-200">
                      21st January 2026 (Wednesday)
                    </td>
                  </tr>

                  <tr className="bg-gray-100">
                    <td className="px-4 py-4 text-sm font-medium border border-gray-200">
                      Date for Interview of Qualified Candidates (Online)
                    </td>
                    <td className="px-4 py-4 text-sm border border-gray-200">
                      27th to 30th January 2026 (Tuesday – Friday)
                    </td>
                  </tr>

                  <tr className="bg-white">
                    <td className="px-4 py-4 text-sm font-medium border border-gray-200">
                      Declaration of Final Result
                    </td>
                    <td className="px-4 py-4 text-sm border border-gray-200">
                      7th February 2026 (Saturday)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="leading-[1.5] mb-5">
              <strong>
                Admissions to Ph.D. program (full-time and part-time) for batch
                January 2026
              </strong>
               of K.R. Mangalam University will be made strictly according to
              the UGC guidelines for NET, GATE & other equivalent test qualified
              candidates with valid score. The vacant seats shall be filled as
              per merit and availability of seats in various departments /
              schools through 
              <strong>Entrance Test followed by Interview.</strong>{" "}
            </p>
            <p className="mb-5">
              Ph.D. Ordinance of K.R. Mangalam University. Covered under
              comprehensive research policy available on its website, governs
              the Ph.D. Program. Full-tinie eligible students get{" "}
              <strong>Fellowship</strong> as per K.R. Mangalam University rules.
            </p>
            <p>
              Applications are invited on prescribed application form only,
              which can be filled online/collecting hard copy from
              university/downloading application and sending complete form. the
              admission fee of Rs 1500/- can be either paid online or by demand
              draft in favour of K.R. Mangalam University payable at Greater
              Noida.
            </p>
          </div>
          <div className="w-1/2">
            <div>
              <Image
                src="/landingpage/phd/university.webp"
                width={685}
                height={800}
                alt=""
                className="w-full h-[680px] object-cover"
              />
            </div>
            <div className="mt-2.5">
              <span>For Further Contact (9:00 AM - 5:00 PM) us:</span>
              <span className="flex gap-5">
                <Link
                  href="mailto:welcome@krmangalam.edu.in"
                  className="flex items-center gap-2.5 font-semibold"
                >
                  <Image
                    src="/landingpage/phd/envelope.svg"
                    width={12}
                    height={12}
                    alt="Mail"
                  />{" "}
                  welcome@krmangalam.edu.in
                </Link>
                <Link
                  href="tel:8192888444"
                  className="flex items-center gap-2.5 font-semibold"
                >
                  <Image
                    src="/landingpage/phd/phone.svg"
                    width={12}
                    height={12}
                    alt="Mail"
                  />{" "}
                  8192888444
                </Link>
               
              </span>
              <Link href="" className="inline-block mt-5 py-2.5 px-5 bg-[#005DA9] text-white text-center max-w-[354px] w-full text-xl font-semibold rounded-[10px]">Important Instructions</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhdImportantNotification;
