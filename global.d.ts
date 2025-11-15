export {};

declare global {
  interface Window {
    NpfWidgetsInit?: () => void;
  }
}