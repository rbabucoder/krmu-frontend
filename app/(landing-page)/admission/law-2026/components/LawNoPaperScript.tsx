"use client";

import Script from "next/script";

export default function LawNoPaperScript() {
  return (
    <>
      {/* NoPaperForms Widget */}
      <div
        className="npf_wgts"
        data-height="550px"
        data-w="c0114ca224eb934f081f37dbc9fde07f"
      />

      {/* NoPaperForms Global Variables */}
      <Script id="npf-vars" strategy="afterInteractive">
        {`
          window.npf_d = "https://admissions.krmangalam.edu.in";
          window.npf_c = "641";
          window.npf_m = "1";
        `}
      </Script>

      {/* NoPaperForms Tracking Script */}
      <Script
        src="https://track.nopaperforms.com/js/track.js"
        strategy="afterInteractive"
      />

      {/* NoPaperForms Widget Script */}
      <Script
        src="https://widgets.nopaperforms.com/emwgts.js"
        strategy="afterInteractive"
      />
    </>
  );
}
