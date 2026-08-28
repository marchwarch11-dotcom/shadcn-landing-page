import type { SectionCopy } from "@/content/types";

export interface RealWorkItem {
  mediaKey: string;
  caption?: string;
}

export interface RealWorkContent extends SectionCopy {
  items: RealWorkItem[];
}

export const realWorkContent: RealWorkContent | null = null;
