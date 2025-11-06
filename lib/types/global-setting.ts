export type GlobalDownloadProspectusResponse = {
  data: GlobalProspectusSetting;
  meta: Record<string, unknown>;
};

export type GlobalProspectusSetting = {
  id: number;
  documentId: string;
  download_prospectus_enable_disable: boolean;
};
