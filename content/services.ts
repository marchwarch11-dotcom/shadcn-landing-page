import type { SectionCopy } from "@/content/types";

export interface Service {
  title: string;
  description: string;
  badge?: string;
  mediaKey?: string;
}

export const servicesSection: SectionCopy = {
  status: "provisional",
  eyebrow: "Property care",
  title: "The capabilities a property can call for across the year.",
  description: "These are service capabilities, not automatic inclusions in every membership. The right mix is determined with the client around the property and its needs.",
};

export const services: Service[] = [
  {
    title: "Mowing",
    description: "Routine lawn mowing capability for a clean, maintained appearance through the growing season.",
  },
  {
    title: "Snow Removal",
    description: "Winter snow-removal capability beginning at the established 2-inch service threshold.",
  },
  {
    title: "Spring Cleanup",
    description: "Seasonal cleanup focused on resetting outdoor areas after winter and preparing the property for spring.",
  },
  {
    title: "Fall Cleanup",
    description: "Seasonal cleanup to clear fallen material and prepare outdoor areas for winter conditions.",
  },
  {
    title: "Weed Control",
    description: "Targeted weed-control capability for lawn and landscape areas as part of the property-care plan.",
  },
  {
    title: "Mulch",
    description: "Mulch installation or refresh work that helps landscape beds look clean, finished, and cared for.",
  },
  {
    title: "Dead Flower Maintenance",
    description: "Removal of spent flowers and dried or dead material, with attention to weeds and the surrounding mulch area to keep beds clean and attractive.",
  },
  {
    title: "Gutter Cleanup",
    description: "Removal of accumulated debris from gutters as an available property-care capability.",
  },
  {
    title: "Fertilization",
    description: "Fertilization capability available when it fits the property-care plan developed with the client.",
  },
];
