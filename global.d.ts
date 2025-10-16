export {};

declare global {
  interface Window {
    NpfWidgetsInit?: (options: unknown) => void;
  }
}
