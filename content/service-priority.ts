import type { SectionCopy } from "@/content/types";

export interface ServicePriorityItem {
  title: string;
  description: string;
}

export interface ServicePriorityContent extends SectionCopy {
  items: ServicePriorityItem[];
}

export const servicePriorityContent: ServicePriorityContent | null = null;
