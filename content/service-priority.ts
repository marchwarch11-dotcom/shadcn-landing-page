import type { SectionCopy } from "@/content/types";

export interface ServicePriorityItem {
  membership: string;
  market: "Residential" | "Commercial";
  level: 1 | 2 | 3;
  note?: string;
}

export interface ServicePriorityContent extends SectionCopy {
  items: ServicePriorityItem[];
}

export const servicePriorityContent: ServicePriorityContent = {
  status: "provisional",
  eyebrow: "Service priority",
  title: "Priority rises with the membership level.",
  description: "Priority / Commercial receives the highest service priority, followed by Complete / Residential and Essential / Residential. No response-time guarantee is implied.",
  items: [
    { membership: "Essential", market: "Residential", level: 1 },
    { membership: "Complete", market: "Residential", level: 2 },
    { membership: "Priority", market: "Commercial", level: 3, note: "Highest priority" },
  ],
};
