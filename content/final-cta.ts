import type { SectionCopy } from "@/content/types";

export interface FinalCtaContent extends SectionCopy {
  whatsappLabel?: string;
  whatsappMessage?: string;
}

export const finalCtaContent: FinalCtaContent = {
  status: "provisional",
  eyebrow: "Start with the property",
  title: "Let’s build your plan.",
  description: "Bring the property, the priorities, and the seasonal needs together in one clear plan.",
  whatsappLabel: "Start on WhatsApp",
};
