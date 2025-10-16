// let npfScriptLoaded = false;
// loadNpfScript.ts
export const loadNpfScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") return resolve();

    // Already loaded
    if (window.NpfWidgetsInit) return resolve();

    const script = document.createElement("script");
    script.src = "https://cdn.npfs.co/js/widget/npfwpopup.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = (err) => reject(err);

    document.body.appendChild(script);
  });
};

// export function loadNpfScript(): Promise<void> {
//   return new Promise((resolve, reject) => {
//     if (npfScriptLoaded) {
//       resolve();
//       return;
//     }

//     const existingScript = document.getElementById("npf-popup-script");
//     if (existingScript) {
//       npfScriptLoaded = true;
//       resolve();
//       return;
//     }

//     const script = document.createElement("script");
//     script.id = "npf-popup-script";
//     script.src = "https://cdn.npfs.co/js/widget/npfwpopup.js";
//     script.async = true;
//     script.onload = () => {
//       npfScriptLoaded = true;
//       resolve();
//     };
//     script.onerror = reject;

//     document.body.appendChild(script);
//   });
// }
