import type { SectionCopy } from "@/content/types";

export interface CommercialContent extends SectionCopy {
  mediaKey?: string;
}

export const commercialContent: CommercialContent = {
  status: "provisional",
  eyebrow: "Commercial / Priority",
  title: "Year-round care with the highest service priority.",
  description: "Priority is the commercial membership level, built around coordinated property care across the seasons. Exact operating arrangements are aligned with the customer’s needs and agreement.",
  mediaKey: "commercial-property",
};
