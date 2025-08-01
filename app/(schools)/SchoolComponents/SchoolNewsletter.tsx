import Link from "next/link";

const SchoolNewsletter = () => {
  return (
    <section className="bg-[url(/schools/excited-bg.webp)] bg-cover bg-center py-14 mt-14">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="w-2/3 text-white text-center">
          <h4 className="text-8xl font-medium">Our Newsletters</h4>
          <p className="text-[32px] font-normal mb-5">
            Stay Updated with the Latest Events at KRMU
          </p>
          <div className="flex justify-center gap-12">
            <Link
              href="#"
              className="py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm inline-block"
            >
              Download Prospectus
            </Link>
            <Link
              href="#"
              className="py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm inline-block"
            >
              Download Prospectus
            </Link>
            <Link
              href="#"
              className="py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm inline-block"
            >
              Download Prospectus
            </Link>
          </div>
        </div>
        <div className="w-1/3"></div>
      </div>
    </section>
  );
};

export default SchoolNewsletter;
