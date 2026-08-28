import type { SectionCopy } from "@/content/types";

export interface Membership {
  name: string;
  description?: string;
  priceLabel?: string;
  credits?: string;
  benefits: string[];
  featured?: boolean;
  provisional?: boolean;
}

export const membershipSection: SectionCopy = {
  eyebrow: "Memberships",
  title: "Membership levels",
};

export const memberships: Membership[] = [
  {
    name: "Essential",
    description: "Residential",
    credits: "1 Member Service Credit",
    benefits: [],
    provisional: true,
  },
  {
    name: "Complete",
    description: "Residential",
    credits: "2 Member Service Credits",
    benefits: [],
    provisional: true,
  },
  {
    name: "Priority",
    description: "Commercial",
    credits: "3 Member Service Credits",
    benefits: [],
    featured: true,
    provisional: true,
  },
];
