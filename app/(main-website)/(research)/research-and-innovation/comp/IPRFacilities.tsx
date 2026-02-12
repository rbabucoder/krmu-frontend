import Link from "next/link";

const IPRFacilities = () => {
  return (
    <section className="py-section bg-[url(/research/facbg.webp)] bg-cover bg-center px-4">
      <div className="max-w-main mx-auto w-full">
        <h4 className="text-3xl md:text-5xl text-white font-semibold mb-5">
          Facilities
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="bg-[url(/research/cardbg-1.webp)] bg-no-repeat bg-cover rounded-pill flex items-center justify-center text-center p-5 min-h-[121px]">
            <Link
              href="/patent"
              className="text-white text-base font-semibold"
              target="_blank"
            >
              Patent
            </Link>
          </div>
          <div className="bg-[url(/research/cardbg-1.webp)] bg-no-repeat bg-cover rounded-pill flex items-center justify-center text-center p-5 min-h-[121px]">
            <Link
              href="/industrial-design"
              className="text-white text-base font-semibold"
              target="_blank"
            >
              Industrial Design
            </Link>
          </div>
          <div className="bg-[url(/research/cardbg-1.webp)] bg-no-repeat bg-cover rounded-pill flex items-center justify-center text-center p-5 min-h-[121px]">
            <Link
              href="/copyright"
              className="text-white text-base font-semibold"
              target="_blank"
            >
              Copyright
            </Link>
          </div>
          <div className="bg-[url(/research/cardbg-1.webp)] bg-no-repeat bg-cover rounded-pill flex items-center justify-center text-center p-5 min-h-[121px]">
            <Link
              href="/trade-mark"
              className="text-white text-base font-semibold"
              target="_blank"
            >
              Trademark
            </Link>
          </div>
          <div className="bg-[url(/research/cardbg-1.webp)] bg-no-repeat bg-cover rounded-pill flex items-center justify-center text-center p-5 min-h-[121px]">
            <Link
              href="/ip-process-at-k-r-mangalam-university"
              className="text-white text-base font-semibold"
              target="_blank"
            >
              IP Filing Processing at KRMU
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IPRFacilities;
