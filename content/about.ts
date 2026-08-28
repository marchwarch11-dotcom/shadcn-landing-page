import type { SectionCopy } from "@/content/types";

export interface AboutPerson {
  name: string;
  role?: string;
  bio?: string;
  imageKey?: string;
}

export interface AboutContent extends SectionCopy {
  mediaKey?: string;
  people: AboutPerson[];
}

export const aboutContent: AboutContent = {
  eyebrow: "About Us",
  title: "Alex & Raimundo",
  mediaKey: "about-pair",
  people: [],
};
