import type { ContentAction, SectionCopy } from "@/content/types";

export interface HeroContent extends SectionCopy {
  mediaKey?: string;
  actions: ContentAction[];
}

export const heroContent: HeroContent = {
  eyebrow: "Garitas Property Care",
  title: "One Membership. Every Season.",
  description: "Your property. Taken care of.",
  mediaKey: "hero-primary",
  actions: [],
};
