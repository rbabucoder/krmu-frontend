import React from "react";
import YRCHero from "./comp/YRCHero";
import YRCCommittee from "./comp/YRCCommittee";
import YRCMagazines from "./comp/YRCMagazines";
import YRCBenefits from "./comp/YRCBenefits";
import YRCCriteria from "./comp/YRCCriteria";
import Committee from "./comp/Committee";
import YRCAward from "./comp/YRCAward";
import YRCMotto from "./comp/YRCMotto";
import YRCFuturePlan from "./comp/YRCFuturePlan";
import YRCGlimpse from "./comp/YRCGlimpse";
import YRCContactUs from "./comp/YRCContactUs";

const page = () => {
  return (
    <>
      <YRCHero />
      <YRCCommittee />
      <YRCMagazines />
      <YRCBenefits />
      <YRCCriteria />
      <Committee />
      <YRCAward />
      <YRCMotto />
      <YRCFuturePlan />
      <YRCGlimpse />
      <YRCContactUs />
    </>
  );
};

export default page;
