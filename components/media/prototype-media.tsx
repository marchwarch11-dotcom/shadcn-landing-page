import Image from "next/image";
import type { ReactNode } from "react";

import type { MediaAsset } from "@/content/media";
import { cn } from "@/lib/utils";

interface PrototypeMediaProps {
  asset: MediaAsset;
  sizes: string;
  aspectClassName: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  children?: ReactNode;
}

export const PrototypeMedia = ({
  asset,
  sizes,
  aspectClassName,
  priority = false,
  className,
  imageClassName,
  children,
}: PrototypeMediaProps) => {
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
      {asset.temporary ? (
        <span className="absolute right-3 top-3 z-20 rounded-full border border-white/20 bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
          Prototype stock
        </span>
      ) : null}
    </div>
  );
};
