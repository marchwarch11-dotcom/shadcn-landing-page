import type { SectionCopy } from "@/content/types";

export interface Membership {
  name: string;
  market: "Residential" | "Commercial";
  summary: string;
  priceLabel?: string;
  credits: string;
  benefits: string[];
  featured?: boolean;
}

export const membershipSection: SectionCopy = {
  status: "provisional",
  eyebrow: "Memberships",
  title: "Three levels of care. One year-round approach.",
  description: "Choose the level of flexibility and service priority that best fits the property. Final service allocation is determined through consultation.",
};

export const memberships: Membership[] = [
  {
    name: "Essential",
    market: "Residential",
    summary: "A focused residential level with one Member Service Credit and the standard service-priority position.",
    credits: "1 Member Service Credit",
    benefits: [],
  },
  {
    name: "Complete",
    market: "Residential",
    summary: "A broader residential level with two Member Service Credits and higher service priority.",
    credits: "2 Member Service Credits",
    benefits: [],
  },
  {
    name: "Priority",
    market: "Commercial",
    summary: "A commercial-focused level with three Member Service Credits and the highest service priority.",
    credits: "3 Member Service Credits",
    benefits: [],
    featured: true,
  },
];
