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

export const seasonalExperienceContent: SeasonalExperienceContent = {
  eyebrow: "Seasonal Experience",
  title: "Spring → Summer → Fall → Winter",
  seasons: [
    { key: "spring", title: "Spring", mediaKey: "season-spring" },
    { key: "summer", title: "Summer", mediaKey: "season-summer" },
    { key: "fall", title: "Fall", mediaKey: "season-fall" },
    { key: "winter", title: "Winter", mediaKey: "season-winter" },
  ],
};
