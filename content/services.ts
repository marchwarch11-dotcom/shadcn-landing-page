import type { SectionCopy } from "@/content/types";

export interface Service {
  title: string;
  description?: string;
  badge?: string;
  mediaKey?: string;
}

export const servicesSection: SectionCopy = {
  eyebrow: "Services",
  title: "Property Care",
  description: "Capabilities available for property-care planning. Exact membership allocation is determined during client consultation.",
};

export const services: Service[] = [
  { title: "Mowing" },
  { title: "Snow Removal" },
  { title: "Spring Cleanup" },
  { title: "Fall Cleanup" },
  { title: "Weed Control" },
  { title: "Mulch" },
  { title: "Dead Flower Maintenance" },
  { title: "Gutter Cleanup" },
  { title: "Fertilization" },
];
