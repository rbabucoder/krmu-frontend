import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const Admission2Fee = () => {
  return (
    <section className="py-section px-4">
      <div className="max-w-content mx-auto w-full pt-12 pb-20">
        <h4 className="text-h3 mb-12 text-krmu-blue-dark font-semibold">
          Fee Details
        </h4>

        <div className="mt-6">
          {/* THIS MAKES THE TABS VERTICAL */}
          <Tabs
            defaultValue="item-1"
            orientation="vertical"
            className="flex flex-col lg:flex-row"
          >
            {/* Vertical tab list */}
            <div className="w-full lg:w-1/2">
              <TabsList className="flex flex-col w-full lg:mt-24 bg-none bg-transparent">
                <TabsTrigger
                  value="item-1"
                  className="fee_tab w-full py-section-sm px-5 break-all md:text-xl"
                >
                  Application Fee <br className="md:hidden" /> and Registration
                  Fee
                </TabsTrigger>
                <TabsTrigger
                  value="item-2"
                  className="fee_tab w-full py-section-sm px-5 break-all md:text-xl"
                >
                  Hostel Fee
                </TabsTrigger>
                <TabsTrigger
                  value="item-3"
                  className="fee_tab w-full py-section-sm px-5 break-all md:text-xl"
                >
                  Transport Fee
                </TabsTrigger>
                <TabsTrigger
                  value="item-4"
                  className="fee_tab w-full py-section-sm px-5 break-all md:text-xl"
                >
                  Security Deposit
                </TabsTrigger>
              </TabsList>
              <div className="hidden lg:flex items-center justify-center">
                <Link
                  href="/fee-structure"
                  className="mt-40 bg-krmu-red text-white text-lg flex items-center justify-center py-compact px-container-px font-medium w-fit rounded-button"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                >
                  View Fees Structure
                </Link>
              </div>
            </div>
            {/* Content section */}
            <div className="w-full lg:w-1/2 pt-40 lg:pt-0">
              <TabsContent value="item-1">
                <div
                  className="max-w-[636px] mx-auto w-full bg-white rounded-button"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  <div className="flex items-center justify-between bg-krmu-gray-50">
                    <span className="py-compact pr-[25px] pl-5 w-1/2 font-semibold">
                      Fee Type
                    </span>
                    <span className="py-compact pr-[25px] pl-5 w-1/2 font-semibold">
                      Amount
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-[#f2f2f2]">
                    <span className="py-compact pr-[25px] pl-5 w-1/2 md:w-3/4">
                      Application Fee (one time) (Non refundable)
                    </span>
                    <span className="py-compact pr-[25px] pl-5 font-semibold w-1/2 md:w-1/4">
                      ₹ 1000/-
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="py-compact pr-[25px] pl-5 w-1/2 md:w-3/4">
                      Registration Fee (To be paid on offer of Admission,
                      adjusted in Semester Fee)
                    </span>
                    <span className="py-compact pr-[25px] pl-5 w-1/2 md:w-1/4 font-semibold">
                      ₹ 25000/-
                    </span>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="item-2">
                <div
                  className="max-w-[636px] mx-auto w-full bg-white rounded-button"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  <div className="flex items-center justify-between bg-krmu-gray-50">
                    <span className="py-compact pr-[25px] pl-5 w-1/2 font-semibold">
                      Fee Type
                    </span>
                    <span className="py-compact pr-[25px] pl-5 w-1/2 font-semibold">
                      Amount
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-[#f2f2f2]">
                    <span className="py-compact pr-[25px] pl-5 w-1/2 md:w-3/4">
                      Hostel Security Deposit (Refundable)
                    </span>
                    <span className="py-compact pr-[25px] pl-5 font-semibold w-1/2 md:w-1/4">
                      ₹ 20000/-
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="py-compact pr-[25px] pl-5 w-1/2 md:w-3/4">
                      Hostel Fee (per annum)
                    </span>
                    <span className="py-compact pr-[25px] pl-5 w-1/2 md:w-1/4 font-semibold">
                      ₹ 160000/-
                    </span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="item-3">
                <div
                  className="max-w-[636px] mx-auto w-full bg-white rounded-button"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  <div className="flex items-center justify-between bg-krmu-gray-50">
                    <span className="py-compact pr-[25px] pl-5 w-1/2 font-semibold">
                      Fee Type
                    </span>
                    <span className="py-compact pr-[25px] pl-5 w-1/2 font-semibold">
                      Amount
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-[#f2f2f2]">
                    <span className="py-compact pr-[25px] pl-5 w-1/2 md:w-3/4">
                      Transport Fee (per annum)
                    </span>
                    <span className="py-compact pr-[25px] pl-5 font-semibold w-1/2 md:w-1/4">
                      ₹ 50000/-
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="py-compact pr-[25px] pl-5 w-1/2 md:w-3/4">
                      Shuttle Transport (per annum) (From Rajiv Chowk and Huda
                      City Centre to the University)
                    </span>
                    <span className="py-compact pr-[25px] pl-5 w-1/2 md:w-1/4 font-semibold">
                      ₹ 25000/
                    </span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="item-4">
                <div
                  className="max-w-[636px] mx-auto w-full bg-white rounded-button"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  <div className="flex items-center justify-between bg-krmu-gray-50">
                    <span className="py-compact pr-[25px] pl-5 w-1/2 font-semibold">
                      Fee Type
                    </span>
                    <span className="py-compact pr-[25px] pl-5 w-1/2 font-semibold">
                      Amount
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-[#f2f2f2]">
                    <span className="py-compact pr-[25px] pl-5 w-1/2 md:w-3/4">
                      Security Deposit (Refundable)
                    </span>
                    <span className="py-compact pr-[25px] pl-5 font-semibold w-1/2 md:w-1/4">
                      ₹ 10000/-
                    </span>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
        <div className="flex lg:hidden items-center justify-center">
          <Link
            href="/fee-structure"
            className="mt-20 bg-krmu-red text-white text-lg flex items-center justify-center py-compact px-container-px font-medium w-fit rounded-button"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
            target="_blank"
          >
            View Fees Structure
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Admission2Fee;
