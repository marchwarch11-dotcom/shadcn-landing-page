import { Snowflake } from "lucide-react";

import { SectionHeading } from "@/components/layout/section-heading";
import { SiteMedia } from "@/components/media/site-media";
import { Reveal } from "@/components/motion/reveal";
import { media, visuals } from "@/content/media";
import { snowContent } from "@/content/snow";

export const SnowSection = () => {
  if (!snowContent) {
    return null;
  }

  const snowMedia = snowContent.mediaKey
    ? media[snowContent.mediaKey as keyof typeof media]
    : media[visuals.snow];

  return (
    <section id="snow" className="container py-20 sm:py-24 lg:py-32">
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <SiteMedia
            asset={snowMedia}
            sizes="(max-width: 1024px) 100vw, 48vw"
            aspectClassName="aspect-[4/5] sm:aspect-[4/3]"
            className="rounded-[2rem]"
          />
        </Reveal>

        <Reveal delay={90}>
          <div className="mb-6 flex size-11 items-center justify-center rounded-full bg-secondary">
            <Snowflake className="size-5" aria-hidden="true" />
          </div>
          <SectionHeading
            eyebrow={snowContent.eyebrow}
            title={snowContent.title}
            description={snowContent.description}
          />
          {snowContent.details.length > 0 ? (
            <div className="mt-8 divide-y border-y">
              {snowContent.details.map((detail) => (
                <p key={detail} className="py-5 text-sm leading-6 text-muted-foreground sm:text-base">
                  {detail}
                </p>
              ))}
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
};
