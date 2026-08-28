import type { SectionCopy } from "@/content/types";

export interface Service {
  title: string;
  description?: string;
  badge?: string;
  mediaKey?: string;
}

export const servicesSection: SectionCopy | null = null;
export const services: Service[] = [];
