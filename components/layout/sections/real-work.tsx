import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { media } from "@/content/media";
import { realWorkContent } from "@/content/real-work";

export const RealWorkSection = () => {
  if (!realWorkContent || realWorkContent.items.length === 0) {
    return null;
  }

  return (
    <section id="real-work" className="container py-20 sm:py-24 lg:py-32">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        {realWorkContent.eyebrow ? (
          <p className="mb-2 text-lg tracking-wider text-primary">{realWorkContent.eyebrow}</p>
        ) : null}
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">{realWorkContent.title}</h2>
        {realWorkContent.description ? (
          <p className="text-lg text-muted-foreground sm:text-xl">{realWorkContent.description}</p>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {realWorkContent.items.map((item) => {
          const workMedia = media[item.mediaKey];

          if (!workMedia) {
            return null;
          }

          return (
            <Card key={`${item.mediaKey}-${item.caption ?? "work"}`} className="overflow-hidden">
              <Image
                src={workMedia.src}
                alt={workMedia.alt}
                width={workMedia.width ?? 1000}
                height={workMedia.height ?? 750}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="aspect-[4/3] w-full object-cover"
              />
              {item.caption ? (
                <CardContent className="pt-6 text-sm text-muted-foreground">
                  {item.caption}
                </CardContent>
              ) : null}
            </Card>
          );
        })}
      </div>
    </section>
  );
};
