import HelpDesk from "./comp/HelpDesk";
import OnlineFee from "./comp/OnlineFee";
import PaymentProcedureFAQ from "./comp/PaymentProcedureFAQ";
import PaymentProcedureHero from "./comp/PaymentProcedureHero";

const page = () => {
  return (
    <>
      <PaymentProcedureHero />
      <OnlineFee />
      <PaymentProcedureFAQ />
      <HelpDesk />  
    </>
  );
};

export default page;
