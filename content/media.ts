export type MediaSection =
  | "hero"
  | "seasonal-experience"
  | "memberships"
  | "services"
  | "member-credits"
  | "service-priority"
  | "about"
  | "team"
  | "real-work"
  | "testimonials"
  | "commercial"
  | "snow"
  | "final-cta";

export interface MediaAsset {
  section: MediaSection;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const media: Record<string, MediaAsset> = {};
