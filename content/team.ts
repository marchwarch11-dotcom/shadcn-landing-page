import type { SectionCopy } from "@/content/types";

export interface TeamLink {
  label: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role?: string;
  bio?: string;
  imageKey?: string;
  links: TeamLink[];
}

export const teamSection: SectionCopy = {
  status: "provisional",
  eyebrow: "The team",
  title: "Hands-on care, carried out by a local team.",
  description: "Property care comes down to people doing the work and paying attention to the details. Individual team profiles will be added when approved.",
};

export const teamMembers: TeamMember[] = [];
