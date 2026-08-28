import Image from "next/image";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { media } from "@/content/media";
import { seasonalExperienceContent } from "@/content/seasonal-experience";

export const SeasonalExperienceSection = () => {
  if (!seasonalExperienceContent || seasonalExperienceContent.seasons.length === 0) {
    return null;
  }

  return (
    <section id="seasonal-experience" className="container py-20 sm:py-24 lg:py-32">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        {seasonalExperienceContent.eyebrow ? (
          <p className="mb-2 text-lg tracking-wider text-primary">
            {seasonalExperienceContent.eyebrow}
          </p>
        ) : null}
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          {seasonalExperienceContent.title}
        </h2>
        {seasonalExperienceContent.description ? (
          <p className="text-lg text-muted-foreground sm:text-xl">
            {seasonalExperienceContent.description}
          </p>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {seasonalExperienceContent.seasons.map((season) => {
          const seasonMedia = season.mediaKey ? media[season.mediaKey] : undefined;

          return (
            <Card key={season.key} className="h-full overflow-hidden">
              {seasonMedia ? (
                <Image
                  src={seasonMedia.src}
                  alt={seasonMedia.alt}
                  width={seasonMedia.width ?? 800}
                  height={seasonMedia.height ?? 600}
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              ) : null}
              <CardHeader>
                <CardTitle>{season.title}</CardTitle>
              </CardHeader>
              {season.description ? (
                <CardContent className="text-muted-foreground">{season.description}</CardContent>
              ) : null}
            </Card>
          );
        })}
      </div>
    </section>
  );
};
