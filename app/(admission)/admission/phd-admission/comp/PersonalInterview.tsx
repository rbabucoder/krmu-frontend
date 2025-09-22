import Image from "next/image";
import Link from "next/link";
const PersonalInterview = () => {
  return (
    <>
      <section className="py-[48px] bg-[#051630] mt-24">
        <div className="max-w-[1664px] mx-auto w-full flex items-start">
          <div className="w-1/2 text-white">
            <h4 className="text-[64px] font-semibold">Personal Interview</h4>
            <p>
              Candidates who clear the written entrance examination will be
              selected for Personal Interview. The interview will be conducted
              by the Interview Board of the University to comprehensively judge
              in depth of knowledge in the concerned subject/area and ability to
              do research. Admitted candidates will be required to pay the first
              Installment of the Ph.D. programme fee and security deposit within
              the specified time to confirm the admission.
            </p>
            <h6 className="font-semibold mt-5 mb-2.5">
              For Further Queries, Contact
            </h6>
            <div className="flex">
              <div className="flex gap-2.5 w-1/2">
                <div>
                  <Image
                    src="/admission/blue-loc-pin.svg"
                    width={28}
                    height={28}
                    alt=""
                  />
                </div>
                <div>
                  <p>
                    <strong>Ph.D. Coordinators</strong>
                  </p>
                  <p>K.R. Mangalam University Sohna Road, Gurugram – 122 103</p>
                </div>
              </div>
              <div className="w-1/2 flex flex-col">
                <div className="flex items-center gap-2.5">
                  <div>
                    <Image
                      src="/admission/blue-call.svg"
                      width={28}
                      height={28}
                      alt=""
                    />
                  </div>
                  <div>
                    <Link href="tel:918800697009">91 880-069-7009</Link>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 mt-2.5">
                  <div>
                    <Image
                      src="/admission/blue-envelope.svg"
                      width={28}
                      height={28}
                      alt=""
                    />
                  </div>
                  <div>
                    <Link href="mailto:phdadmissions@krmangalam.edu.in">
                      phdadmissions@krmangalam.edu.in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src="/admission/Personal-Interview.webp"
              width={800}
              height={606}
              alt=""
              className="-mt-52"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalInterview;
