import type { SectionCopy } from "@/content/types";

export interface AboutPerson {
  name: string;
  role?: string;
  bio?: string;
  imageKey?: string;
}

export interface AboutContent extends SectionCopy {
  people: AboutPerson[];
}

export const aboutContent: AboutContent | null = null;
