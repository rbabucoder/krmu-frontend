export {};

declare global {
  interface Window {
    NpfWidgetsInit?: new (config: {
      widgetId: string;
      baseurl: string;
      formTitle?: string;
      titleColor?: string;
      backgroundColor?: string;
      iframeHeight?: string;
      buttonTextColor?: string;
      target?: HTMLElement;
    }) => void;
  }
}


// export {};

// declare global {
//   interface Window {
//     NpfWidgetsInit?: () => void;
//   }
// }
