import type { SectionCopy } from "@/content/types";

export interface MemberCreditItem {
  title: string;
  description: string;
}

export interface MemberCreditsContent extends SectionCopy {
  items: MemberCreditItem[];
}

export const memberCreditsContent: MemberCreditsContent | null = null;
