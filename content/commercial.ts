import type { SectionCopy } from "@/content/types";

export interface CommercialContent extends SectionCopy {
  mediaKey?: string;
}

export const commercialContent: CommercialContent = {
  eyebrow: "Commercial",
  title: "Priority",
  description: "Coordinated year-round property care with the highest service priority.",
  mediaKey: "commercial-property",
};
