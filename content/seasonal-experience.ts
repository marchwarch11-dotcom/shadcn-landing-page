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
  status: "provisional",
  eyebrow: "Every season",
  title: "Care that moves with the property.",
  description: "A year-round approach that keeps seasonal needs connected instead of treating each one like a separate project.",
  seasons: [
    {
      key: "spring",
      title: "Spring",
      description: "Cleanup and a fresh start as the property comes out of winter.",
      mediaKey: "season-spring",
    },
    {
      key: "summer",
      title: "Summer",
      description: "Lawn and landscape care through the heart of the growing season.",
      mediaKey: "season-summer",
    },
    {
      key: "fall",
      title: "Fall",
      description: "Cleanup and preparation as the property transitions toward winter.",
      mediaKey: "season-fall",
    },
    {
      key: "winter",
      title: "Winter",
      description: "Snow service and winter-focused property care when conditions change.",
      mediaKey: "season-winter",
    },
  ],
};
