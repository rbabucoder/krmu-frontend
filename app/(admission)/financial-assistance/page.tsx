import React from "react";
import FinanceAssistanceHero from "./comp/FinanceAssistanceHero";
import BankNbfc from "./comp/BankNbfc";
import FinanceAssistancePointer from "./comp/FinanceAssistancePointer";
import { getFinancialPageData } from "@/lib/api/financialAssistance";

const page = async () => {
  const financialAssistanceData = await getFinancialPageData();

  return (
    <>
      <FinanceAssistanceHero
        heading={financialAssistanceData?.heading}
        subheading={financialAssistanceData?.subheading}
        content={financialAssistanceData?.content}
      />
      <BankNbfc
        bankLoansCards={financialAssistanceData?.bank_loan}
        nbfccardsData={financialAssistanceData?.nbfc_card}
      />

      <FinanceAssistancePointer />
    </>
  );
};

export default page;
