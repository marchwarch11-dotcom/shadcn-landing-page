import type { SectionCopy } from "@/content/types";

export interface MemberCreditItem {
  membership: string;
  credits: 1 | 2 | 3;
}

export interface MemberCreditsContent extends SectionCopy {
  items: MemberCreditItem[];
}

export const memberCreditsContent: MemberCreditsContent = {
  eyebrow: "Member Service Credits",
  title: "Built-in flexibility",
  description: "Flexibility for additional eligible service needs.",
  items: [
    { membership: "Essential", credits: 1 },
    { membership: "Complete", credits: 2 },
    { membership: "Priority", credits: 3 },
  ],
};
