import type { SectionCopy } from "@/content/types";

export interface Membership {
  name: string;
  description?: string;
  priceLabel?: string;
  credits?: string;
  benefits: string[];
  featured?: boolean;
}

export const membershipSection: SectionCopy | null = null;
export const memberships: Membership[] = [];
