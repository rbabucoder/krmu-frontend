import React from "react";

const PHDprogramHero = () => {
  return (
    <>
      <section className="py-[8%] bg-[url(/phdbg.webp)] bg-no-repeat bg-cover">
        <div className="max-w-[1664px] mx-auto w-full flex items-center h-[784px]">
          <div className="w-1/2 text-white text-5xl font-semibold p-5">
            <h1>Ph.D. in Computer Science and Engineering</h1>
          </div>
          <div className="w-1/2"></div>
        </div>
      </section>
      <div className="max-w-[1664px] mx-auto w-full flex  gap-1.5 relative z-10 -mt-[33px]">
        <div
          className="w-[20%] flex items-center justify-center text-2xl font-semibold h-[130px] bg-white"
          style={{
            boxShadow:
              "0px 1.96475px 2.21381px 0px rgba(0,0,0,.02),0px 4.72157px 5.32008px 0px rgba(0,0,0,.03),0px 8.8903px 10.01724px 0px rgba(0,0,0,.04),0px 15.85878px 17.86905px 0px rgba(0,0,0,.04),0px 29.6621px 33.42209px 0px rgba(0,0,0,.05),0px 71px 80px 0px rgba(0,0,0,.07)",
            borderRadius: "30px",
          }}
        >
          Duration: Min. 3 Years
        </div>
        <div
          className="w-[25%] flex items-center justify-center text-2xl font-semibold h-[130px] p-5 bg-white"
          style={{
            boxShadow:
              "0px 1.96475px 2.21381px 0px rgba(0,0,0,.02),0px 4.72157px 5.32008px 0px rgba(0,0,0,.03),0px 8.8903px 10.01724px 0px rgba(0,0,0,.04),0px 15.85878px 17.86905px 0px rgba(0,0,0,.04),0px 29.6621px 33.42209px 0px rgba(0,0,0,.05),0px 71px 80px 0px rgba(0,0,0,.07)",
            borderRadius: "30px",
          }}
        >
          <div className="w-1/2">Programme Fee Per Year:</div>
          <div className="w-1/2">Rs.1,20,000/-</div>
        </div>
        <div
          className="w-[50%] flex items-center justify-center h-[130px] p-5 bg-white"
          style={{
            boxShadow:
              "0px 1.96475px 2.21381px 0px rgba(0,0,0,.02),0px 4.72157px 5.32008px 0px rgba(0,0,0,.03),0px 8.8903px 10.01724px 0px rgba(0,0,0,.04),0px 15.85878px 17.86905px 0px rgba(0,0,0,.04),0px 29.6621px 33.42209px 0px rgba(0,0,0,.05),0px 71px 80px 0px rgba(0,0,0,.07)",
            borderRadius: "30px",
          }}
        >
          <div className="text-2xl font-semibold w-[32%]">
            Eligibility Criteria:
          </div>
          <div className="w-[68%]">
            The candidate should have a postgraduate degree or its equivalent
            from a recognized University, in a respective discipline, with a
            minimum ...Read More
          </div>
        </div>
      </div>
    </>
  );
};

export default PHDprogramHero;
