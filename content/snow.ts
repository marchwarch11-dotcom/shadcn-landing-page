import type { SectionCopy } from "@/content/types";

export interface SnowContent extends SectionCopy {
  mediaKey?: string;
  details: string[];
}

export const snowContent: SnowContent = {
  eyebrow: "Winter",
  title: "Snow",
  description: "Snow removal begins at 2 inches.",
  mediaKey: "snow-removal",
  details: [
    "Commercial snow service normally involves two visits during a snow event, generally around opening and closing, subject to the customer’s operational needs and agreement.",
  ],
};
