import type { SectionCopy } from "@/content/types";

export interface RealWorkItem {
  mediaKey: string;
  caption?: string;
}

export interface RealWorkContent extends SectionCopy {
  items: RealWorkItem[];
}

export const realWorkContent: RealWorkContent = {
  status: "provisional",
  eyebrow: "Real work",
  title: "The proof belongs in the property.",
  description: "This section is ready for real Garitas work photography. Stock photography remains in place until approved project images are supplied.",
  items: [],
};
