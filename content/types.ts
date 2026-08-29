export type ContentStatus = "provisional" | "approved";

export interface SectionCopy {
  eyebrow?: string;
  title: string;
  description?: string;
  status?: ContentStatus;
}

export interface ContentAction {
  label: string;
  href: string;
  external?: boolean;
}
