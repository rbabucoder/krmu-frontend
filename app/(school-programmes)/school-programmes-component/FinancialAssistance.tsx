import Image from "next/image";

const FinancialAssistance = () => {
  return (
    <section className="prog-global-padding bg-[#f8f9fd]">
      <div className="max-w-[1320px] mx-auto w-full">
        <div className="common-prog-container">
          <h2 className="heading">
            Financial <span className="prog-highlight-text">Assistance</span>
          </h2>
          <p className="sub-heading">
            K.R. Mangalam University has collaborated with leading banks to
            offer convenient Education Loan options, making it easier for
            students to finance their academic aspirations. These loans come
            with a moratorium period, allowing you to begin repayment either one
            year after course completion or six months after securing a job
            (whichever comes first). This ensures you can focus on your studies
            now and manage repayments when you're financially ready.
          </p>
        </div>
        <div>
          <div className="flex justify-between gap-6 mt-6">
            <div
              className="px-5 py-[30px] font-medium text-base text-[#db2a1a] text-center rounded-[35px] flex items-center justify-center w-2/12"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              Quick & Instant <br />
              Disbursal{" "}
            </div>
            <div
              className="px-5 py-[30px] font-medium text-base text-[#db2a1a] text-center rounded-[35px]  flex items-center justify-center w-5/12"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              Includes tuition fees, books cost, hostel fees, and airfare
            </div>
            <div
              className="px-5 py-[30px] font-medium text-base text-[#db2a1a] text-center rounded-[35px]  flex items-center justify-center w-4/12"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              Pan India loan availability
            </div>
            <div className="w-1/12"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between gap-6 mt-6">
            <div
              className="px-5 py-[30px] font-medium text-base text-[#db2a1a] text-center rounded-[35px] flex items-center justify-center w-3/12"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              Concessional rate of interest
            </div>
            <div
              className="px-5 py-[30px] font-medium text-base text-[#db2a1a] text-center rounded-[35px]  flex items-center justify-center w-4/12"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              Speedy disposal of loan applications
            </div>
            <div
              className="px-5 py-[30px] font-medium text-base text-[#db2a1a] text-center rounded-[35px]  flex items-center justify-center w-5/12"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              Up to 100% loan with a lower interest rate and zero processing{" "}
              <br />
              fees
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-6">
          <div
            className="px-5 py-[30px] font-medium text-base text-[#db2a1a] text-center rounded-[35px] flex items-center justify-center w-4/12"
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            Repayment tenure ranging from 5-15 years
          </div>
          <div className="grid grid-cols-6 items-center gap-5 w-8/12">
            <Image src="/programmes/idfc.webp" width={126} height={41} alt="IDFC" />
            <Image src="/programmes/propeeld.webp" width={126} height={41} alt="propeeld" />
            <Image src="/programmes/grayquest.webp" width={126} height={41} alt="Grayquest" />
            <Image src="/programmes/icici.webp" width={126} height={41} alt="ICICI" />
            <Image src="/programmes/axis.webp" width={126} height={41} alt="AXIS" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialAssistance;
