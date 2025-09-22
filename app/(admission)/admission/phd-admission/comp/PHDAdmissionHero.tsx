import Image from "next/image";
import Link from "next/link";

const PHDAdmissionHero = () => {
  return (
    <>
      <section className="">
        <div className="max-w-[1664px] mx-auto w-full flex items-center">
          <div className="w-1/2">
            <h1 className="text-[86px] font-semibold">Ph.D. Admission</h1>
            <p className="text-[22px] mb-5">
              <strong>
                The Ph.D. programme is framed according to standards set by UGC
                under the guidance of highly qualified and widely recognised
                faculty in their respective fields.
              </strong>
            </p>
            <p className="mb-10">
              We offer both full time and part time Ph.D. programmes in a wide
              variety of fields. You will work closely with your supervisor on a
              research problem and push the frontiers of human knowledge and
              understanding.
            </p>
            <Link
              href="#"
              className="bg-[#cb000d] text-white rounded-full font-semibold py-[13px] px-[29px]"
            >
              Apply Now
            </Link>
          </div>
          <div className="w-1/2">
            <Image
              src="/admission/phd-admission.webp"
              width={654}
              height={654}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PHDAdmissionHero;
