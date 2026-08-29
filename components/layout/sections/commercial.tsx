import { SectionHeading } from "@/components/layout/section-heading";
import { SiteMedia } from "@/components/media/site-media";
import { Reveal } from "@/components/motion/reveal";
import { commercialContent } from "@/content/commercial";
import { media, visuals } from "@/content/media";

export const CommercialSection = () => {
  if (!commercialContent) {
    return null;
  }

  const commercialMedia = commercialContent.mediaKey
    ? media[commercialContent.mediaKey as keyof typeof media]
    : media[visuals.commercial];

  return (
    <section id="commercial" className="container py-20 sm:py-24 lg:py-32">
      <Reveal>
        <div className="grid overflow-hidden rounded-[2rem] border bg-card lg:grid-cols-2">
          <div className="flex items-center p-7 sm:p-10 lg:p-14">
            <SectionHeading
              eyebrow={commercialContent.eyebrow}
              title={commercialContent.title}
              description={commercialContent.description}
            />
          </div>
          <SiteMedia
            asset={commercialMedia}
            sizes="(max-width: 1024px) 100vw, 50vw"
            aspectClassName="aspect-[4/3] lg:min-h-[30rem] lg:aspect-auto"
            className="rounded-none"
          />
        </div>
      </Reveal>
    </section>
  );
};
