export type GlobalDownloadProspectusResponse = {
  data: GlobalProspectusSetting;
  meta: Record<string, unknown>;
};

export type GlobalProspectusSetting = {
  id: number;
  documentId: string;
  download_prospectus_enable_disable: boolean;
  programme_handbook_enable_disable: boolean;
  open_elective_enable_disable: boolean;
  minor_enable_disable: boolean;
};
