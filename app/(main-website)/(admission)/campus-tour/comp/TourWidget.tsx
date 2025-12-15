"use client";

import { useEffect } from "react";

const TourWidget = () => {
  useEffect(() => {
    // Load widget script only once
    const existingScript = document.getElementById("npf-script");

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "npf-script";
      script.src = "https://assets.tumblr.com/post.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="npf_wgts"
      style={{ overflow: "hidden", maxWidth: "750px" }}
      data-height="600px"
      data-w="3361934ae196b2866c52648f2f212f58"
    ></div>
  );
};

export default TourWidget;
