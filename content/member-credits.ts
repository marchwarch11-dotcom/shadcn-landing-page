import type { SectionCopy } from "@/content/types";

export interface MemberCreditItem {
  membership: string;
  credits: 1 | 2 | 3;
}

export interface MemberCreditsContent extends SectionCopy {
  items: MemberCreditItem[];
  note?: string;
}

export const memberCreditsContent: MemberCreditsContent = {
  status: "provisional",
  eyebrow: "Member Service Credits",
  title: "Flexibility built into every level.",
  description: "Member Service Credits give each membership room for additional eligible service needs as priorities change.",
  note: "Eligible services and final credit rules will be defined with the owners before the program is finalized.",
  items: [
    { membership: "Essential", credits: 1 },
    { membership: "Complete", credits: 2 },
    { membership: "Priority", credits: 3 },
  ],
};
