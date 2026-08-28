import Image from "next/image";

import type { MediaAsset } from "@/content/media";
import { cn } from "@/lib/utils";

interface PrototypeMediaProps {
  asset: MediaAsset;
  sizes: string;
  aspectClassName: string;
  priority?: boolean;
  className?: string;
}

export const PrototypeMedia = ({
  asset,
  sizes,
  aspectClassName,
  priority = false,
  className,
}: PrototypeMediaProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-muted",
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
        className="object-cover"
      />
      {asset.temporary ? (
        <span className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm">
          Prototype stock
        </span>
      ) : null}
    </div>
  );
};
