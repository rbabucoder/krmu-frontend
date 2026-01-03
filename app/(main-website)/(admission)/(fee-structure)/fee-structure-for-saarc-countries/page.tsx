import FeeStructureSearch from "../fee-structure/FeeStructureSearch";
import { getFeeStructureSAARCPageData } from "@/lib/api/feestructuresaarc";
import FeeStructureSAARCTable from "./FeeStructureSAARCTable";
import FeeStructureSAARCHero from "./FeeStructureSAARCHero";
import FeeStructureSaarcApproval from "./FeeStructureSaarcApproval";

const page = async () => {
  const feeStructureSAARC = await getFeeStructureSAARCPageData();

  // API response → fee_structure_tab array
  const feeStructSAARCTab = feeStructureSAARC?.fee_structure_saarc_tab;

  // const feeStructHero = feeStructureSAARC?.fee_structure_hero;
  const feeStructSAARCApproval = feeStructureSAARC?.fee_struct_saarc_approval;

  return (
    <>
      <FeeStructureSAARCHero
        heading={feeStructureSAARC?.heading}
        url={feeStructureSAARC?.saarc_url}
        subHeading={feeStructureSAARC?.subheading}
      />
      <FeeStructureSearch />
      <FeeStructureSAARCTable feeStructSAARCTab={feeStructSAARCTab} />
      <FeeStructureSaarcApproval
        feeStructSAARCApproval={feeStructSAARCApproval}
      />
    </>
  );
};

export default page;
