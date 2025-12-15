import React from "react";
import HostelHero from "./comp/HostelHero";
import HostelFacilities from "./comp/HostelFacilities";
import HostelWarden from "./comp/HostelWarden";

const page = () => {
  return (
    <>
      <HostelHero />
      <HostelFacilities />
      <HostelWarden />
    </>
  );
};

export default page;
