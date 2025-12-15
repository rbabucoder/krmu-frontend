import PrintCoverageHero from "./comp/PrintCoverageHero";
import PrintCoverageTabs from "./comp/PrintCoverageTabs";

const page = async () => {
  return (
    <>
      <PrintCoverageHero />
      <PrintCoverageTabs />
    </>
  );
};

export default page;
