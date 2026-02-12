import Link from "next/link";

const KEICButtons = () => {
  return (
    <section className="pb-section">
      <div className="max-w-main mx-auto w-full">
        <div className="flex flex-col justify-center items-center">
          <Link
            href="https://www.krmangalam.edu.in/wp-content/uploads/2024/09/Innovation-and-Start-Up-Policy-of-KRMU.pdf"
            className="mt-10 mb-5 py-[11px] px-[23px] bg-krmu-blue text-white rounded-badge text-body-sm inline-block"
            target="_blank"
          >
            Innovation and Startup Policy
          </Link>
          <Link
            href="https://www.krmangalam.edu.in/wp-content/uploads/2024/12/Standard-Operating-Procedure-SOP-for-KEIC-Mart-K.R.-Mangalam-University.pdf"
            className="mt-10 mb-5 py-[11px] px-[23px] bg-krmu-blue text-white rounded-badge text-body-sm inline-block"
            target="_blank"
          >
            Standard Operating Procedure
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KEICButtons;
