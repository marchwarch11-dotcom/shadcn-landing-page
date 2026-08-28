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
  eyebrow: "Service Priority",
  title: "Priority increases with membership level",
  description: "Higher membership levels receive higher service priority.",
  items: [
    { membership: "Essential", market: "Residential", level: 1 },
    { membership: "Complete", market: "Residential", level: 2 },
    { membership: "Priority", market: "Commercial", level: 3, note: "Highest priority" },
  ],
};
