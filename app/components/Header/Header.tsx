"use client";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Topbar from "./Topbar";

const Header = () => {
  const [showTopbar, setShowTopbar] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 150) setShowTopbar(true);
      if (window.scrollY < 150) setShowTopbar(false);
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-10">
        <div
          className="px-2.5 xl:px-4"
          style={{
            background: showTopbar
              ? "#051730" // when scrolled down
              : "rgba(137, 137, 137, 0.7)", // default
          }}

          
        >
          {showTopbar ? "" : <Topbar />}
          <Navbar />
        </div>
      </header>
    </>
  );
};

export default Header;
