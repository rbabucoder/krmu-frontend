import React from "react";
import TopbarMenu from "../Navbar/TopbarMenu";
import SocialIcons from "./SocialIcons";

const Topbar = () => {
  return (
    <>
      <div
        className="max-w-[1850px] mx-auto w-full py-1.5 flex items-center justify-center lg:justify-end gap-4"
        style={{ borderBottom: "1px solid rgba(156,156,156,.41)" }}
      >
        <div className="hidden md:block">
        <TopbarMenu />
        </div>
        <SocialIcons />
      </div>
    </>
  );
};

export default Topbar;
