import type { SectionCopy } from "@/content/types";

export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  imageKey?: string;
}

export const testimonialsSection: SectionCopy | null = null;
export const testimonials: Testimonial[] = [];
