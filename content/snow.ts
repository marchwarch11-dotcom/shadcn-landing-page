import type { SectionCopy } from "@/content/types";

export interface SnowContent extends SectionCopy {
  mediaKey?: string;
  details: string[];
}

export const snowContent: SnowContent = {
  status: "provisional",
  eyebrow: "Winter care",
  title: "Snow becomes the priority when conditions call for it.",
  description: "Snow service begins at 2 inches.",
  mediaKey: "snow-removal",
  details: [
    "Commercial snow service is normally performed twice during a snow event, typically around opening and closing.",
    "Exact timing and operational arrangements can be agreed with the commercial customer based on their needs.",
  ],
};
