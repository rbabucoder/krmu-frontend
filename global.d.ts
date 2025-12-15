export {};

declare global {
  interface Window {
    NpfWidgetsInit?: new (config: {
      widgetId: string;
      baseurl: string;
      formTitle?: string;
    }) => void;
  }
}

// export {};

// declare global {
//   interface Window {
//     NpfWidgetsInit?: () => void;
//   }
// }
