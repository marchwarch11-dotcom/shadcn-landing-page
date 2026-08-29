import type { SectionCopy } from "@/content/types";

export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  imageKey?: string;
}

export interface TestimonialsSectionContent extends SectionCopy {
  emptyState: string;
}

export const testimonialsSection: TestimonialsSectionContent = {
  status: "provisional",
  eyebrow: "Testimonials",
  title: "Client feedback belongs here when it is real.",
  description: "No customer quotes are being fabricated.",
  emptyState: "Approved Garitas testimonials have not been added yet.",
};

export const testimonials: Testimonial[] = [];
