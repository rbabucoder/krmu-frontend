"use client";
import { useEffect } from "react";

export default function DynamicScriptRunner({ code }: { code?: string }) {
  useEffect(() => {
    if (!code) return;

    try {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.innerHTML = code;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } catch (err) {
      console.error("CMS Script Error:", err);
    }
  }, [code]);

  return null;
}
