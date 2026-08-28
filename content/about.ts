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
  status: "provisional",
  eyebrow: "About us",
  title: "Alex & Raimundo",
  description: "The people at the center of Garitas Property Care. Their individual roles, background, and full story will be added once the owners approve the final narrative.",
  mediaKey: "about-pair",
  people: [
    { name: "Alex" },
    { name: "Raimundo" },
  ],
};
