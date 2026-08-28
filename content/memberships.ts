export interface Membership {
  name: string;
  description?: string;
  priceLabel?: string;
  credits?: string;
  benefits: string[];
  featured?: boolean;
}

export const memberships: Membership[] = [];
