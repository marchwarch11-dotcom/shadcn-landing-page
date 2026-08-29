import Image from "next/image";
import type { ReactNode } from "react";

import type { MediaAsset } from "@/content/media";
import { cn } from "@/lib/utils";

interface SiteMediaProps {
  asset: MediaAsset;
  sizes: string;
  aspectClassName: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  children?: ReactNode;
}

export const SiteMedia = ({
  asset,
  sizes,
  aspectClassName,
  priority = false,
  className,
  imageClassName,
  children,
}: SiteMediaProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-muted",
        aspectClassName,
        className,
      )}
    >
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imageClassName)}
      />
      {children}
    </div>
  );
};
