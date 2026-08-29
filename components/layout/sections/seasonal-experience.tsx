import { SectionHeading } from "@/components/layout/section-heading";
import { SiteMedia } from "@/components/media/site-media";
import { Reveal } from "@/components/motion/reveal";
import { media } from "@/content/media";
import { seasonalExperienceContent } from "@/content/seasonal-experience";
import { cn } from "@/lib/utils";

const seasonSurface = {
  spring: "bg-[#edf2e5]",
  summer: "bg-[#e4eee5]",
  fall: "bg-[#eee6d7]",
  winter: "bg-[#e7eceb]",
} as const;

export const SeasonalExperienceSection = () => {
  if (!seasonalExperienceContent || seasonalExperienceContent.seasons.length === 0) {
    return null;
  }

  return (
    <section id="seasonal-experience" className="container py-20 sm:py-24 lg:py-32">
      <Reveal>
        <SectionHeading
          eyebrow={seasonalExperienceContent.eyebrow}
          title={seasonalExperienceContent.title}
          description={seasonalExperienceContent.description}
          align="center"
          className="mb-12"
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {seasonalExperienceContent.seasons.map((season, index) => {
          const seasonMedia = season.mediaKey
            ? media[season.mediaKey as keyof typeof media]
            : undefined;

          return (
            <Reveal key={season.key} delay={index * 70}>
              <article
                className={cn(
                  "group h-full overflow-hidden rounded-[1.5rem] border p-3 transition-transform duration-300 hover:-translate-y-1",
                  seasonSurface[season.key],
                )}
              >
                {seasonMedia ? (
                  <SiteMedia
                    asset={seasonMedia}
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    aspectClassName="aspect-[4/5] sm:aspect-[4/3] xl:aspect-[3/4]"
                    className="rounded-[1.15rem]"
                    imageClassName="transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                ) : null}
                <div className="px-2 pb-3 pt-4">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold tracking-tight">{season.title}</h3>
                    <span className="text-xs font-medium tabular-nums text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {season.description ? (
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {season.description}
                    </p>
                  ) : null}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};
