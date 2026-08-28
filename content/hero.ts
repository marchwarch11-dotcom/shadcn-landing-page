import type { ContentAction, SectionCopy } from "@/content/types";

export interface HeroContent extends SectionCopy {
  mediaKey?: string;
  actions: ContentAction[];
}

export const heroContent: HeroContent | null = null;
