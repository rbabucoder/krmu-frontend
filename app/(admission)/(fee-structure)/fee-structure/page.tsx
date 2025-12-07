import FeeStructureTable from "./FeeStructureTable";
import FeeStructureHero from "./FeeStructureHero";
import FeeStructurePaymentProc from "./FeeStructurePaymentProc";
import FeeStructureSaarc from "./FeeStructureSaarc";
import { getFeeStructurePageData } from "@/lib/api/feestructure";
import FeeStructureSearch from "./FeeStructureSearch";

const page = async () => {
  const feeStructure = await getFeeStructurePageData();

  console.log('feeStructure', feeStructure);

  // API response → fee_structure_tab array
  const feeStructTab = feeStructure?.fee_structure_tab;
  const feeStructHero = feeStructure?.fee_structure_hero;
  const feeStructSAARC = feeStructure?.fee_structure_saarc;

  return (
    <>
      <FeeStructureHero feeStructHero={feeStructHero} />
      <FeeStructureSearch />
      <FeeStructureTable feeStructTab={feeStructTab} />
      <FeeStructurePaymentProc />
      <FeeStructureSaarc feeStructSAARC={feeStructSAARC} />
    </>
  );
};

export default page;
