"use client";

import { useEffect } from "react";

const NoPaperForm = () => {
  useEffect(() => {
    // Avoid adding the script multiple times
    if (document.querySelector('script[src="https://widgets.nopaperforms.com/emwgts.js"]')) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.nopaperforms.com/emwgts.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="npf_wgts npfblog-form"
      data-height="550px"
      data-w="0d2d6e28c86e4213b353bfe132035965"
    ></div>
  );
};

export default NoPaperForm;
