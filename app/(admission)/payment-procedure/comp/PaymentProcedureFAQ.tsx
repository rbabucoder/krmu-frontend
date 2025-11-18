import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PaymentProcedureFAQ = () => {
  return (
    <section className="py-10">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="text-center">
          <h3 className="text-5xl font-semibold mb-10">Frequently Asked Questions</h3>
        </div>

        <div>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="py-5 pl-10 pr-5 text-xl font-semibold text-white bg-[#051630] rounded-none cursor-pointer">
                What should I do if my payment fails?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance p-5 mb-5 text-base">
                <p>
                  If the amount has been deducted from your account, it will be
                  refunded within 2–3 business days. If not received please mail
                  us at accounts@krmangalam.edu.in
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="py-5 pl-10 pr-5 text-xl font-semibold text-white bg-[#051630] rounded-none cursor-pointer">
                How can I check my payment status?{" "}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance p-5 mb-5 text-base">
                <p>
                  For 1st Semester, students may login to the Collexo and can
                  check the status in his/her account. For 2nd Semester onwards
                  you can visit this link- https://krmu.icloudems.com/
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="py-5 pl-10 pr-5 text-xl font-semibold text-white bg-[#051630] rounded-none cursor-pointer">Is there a refund policy?</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance p-5 mb-5 text-base">
                <p>
               Yes, we have a refund policy as per UGC guidelines.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PaymentProcedureFAQ;
