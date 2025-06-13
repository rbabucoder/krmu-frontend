import Link from "next/link";

const VisitExplore = () => {
  return (
    <section className="py-12 px-5 lg:py-20 lg:px-8 bg-[#051630]">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="text-white text-center max-w-[1045px] mx-auto w-full">
          <h4 className="text-4xl md:text-6xl xl:text-[80px] font-light leading-[1.13] my-5">
            Visit and Explore <br />
            K.R. Mangalam University
          </h4>
          <p className="mb-5">
            Located in Gurugram’s tech hub and the expansive NCR, K.R. Mangalam
            University is a blend of urban innovation and natural beauty.
            Schedule a campus visit or take our online 360-degree tour to
            experience our inspiring environment, surrounded by the tranquil
            Aravalli hills.
          </p>
          <div className="flex flex-wrap gap-8 items-center justify-center">
            <Link href="/" className="py-2.5 px-[18px] text-white bg-[#cb000d] hover:bg-[#034272] inline-block rounded-md text-base md:text-xl font-bold">Schedule your visit to KRMU Campus</Link>
            <Link href="/" className="py-2.5 px-[18px] text-white bg-[#cb000d] hover:bg-[#034272] inline-block rounded-md text-base md:text-xl font-bold">Take 360° Virtual Tour</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitExplore;
