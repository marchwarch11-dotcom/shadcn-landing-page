export interface MediaAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const media: Record<string, MediaAsset> = {};
