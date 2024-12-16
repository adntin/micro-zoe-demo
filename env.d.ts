declare global {
  interface Window {
    __MICRO_APP_ENVIRONMENT__: boolean;
    __MICRO_APP_NAME__: boolean;
    __MICRO_APP_BASE_APPLICATION__: boolean;
  }
}
