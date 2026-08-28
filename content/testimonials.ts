export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  imageKey?: string;
}

export const testimonials: Testimonial[] = [];
