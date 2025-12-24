"use client";

import Script from "next/script";

type NoPaperFormsWidgetProps = {
  widgetId: string;        // data-w
  height?: string;         // optional, default provided
};

export default function NoPaperFormsWidget({
  widgetId,
  height = "550px",
}: NoPaperFormsWidgetProps) {
  return (
    <>
      {/* NoPaperForms Widget */}
      <div
        className="npf_wgts lpnpf_wgts_style"
        data-height={height}
        data-w={widgetId}
      />

      {/* Global Variables (load once safely) */}
      <Script id="npf-vars" strategy="afterInteractive">
        {`
          if (!window.npf_c) {
            window.npf_d = "https://admissions.krmangalam.edu.in";
            window.npf_c = "641";
            window.npf_m = "1";
          }
        `}
      </Script>

      {/* Tracking Script */}
      <Script
        src="https://track.nopaperforms.com/js/track.js"
        strategy="afterInteractive"
      />

      {/* Widget Script */}
      <Script
        src="https://widgets.nopaperforms.com/emwgts.js"
        strategy="afterInteractive"
      />
    </>
  );
}
