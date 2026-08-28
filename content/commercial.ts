import type { SectionCopy } from "@/content/types";

export interface CommercialItem {
  title: string;
  description: string;
}

export interface CommercialContent extends SectionCopy {
  items: CommercialItem[];
}

export const commercialContent: CommercialContent | null = null;
