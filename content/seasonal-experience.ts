import type { SectionCopy } from "@/content/types";

export type SeasonKey = "spring" | "summer" | "fall" | "winter";

export interface SeasonalExperienceItem {
  key: SeasonKey;
  title: string;
  description?: string;
  mediaKey?: string;
}

export interface SeasonalExperienceContent extends SectionCopy {
  seasons: SeasonalExperienceItem[];
}

export const seasonalExperienceContent: SeasonalExperienceContent | null = null;
