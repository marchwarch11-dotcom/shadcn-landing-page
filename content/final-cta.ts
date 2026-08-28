import type { SectionCopy } from "@/content/types";

export interface FinalCtaContent extends SectionCopy {
  whatsappLabel?: string;
  whatsappMessage?: string;
}

export const finalCtaContent: FinalCtaContent = {
  eyebrow: "Plan",
  title: "Let’s build your plan.",
  whatsappLabel: "WhatsApp",
};
