import Image from "next/image";

import { SectionHeading } from "@/components/layout/section-heading";
import { PrototypeMedia } from "@/components/media/prototype-media";
import { Reveal } from "@/components/motion/reveal";
import { media, prototypeVisuals } from "@/content/media";
import { realWorkContent } from "@/content/real-work";

export const RealWorkSection = () => {
  if (!realWorkContent) {
    return null;
  }

  return (
    <section id="real-work" className="container py-20 sm:py-24 lg:py-32">
      <Reveal>
        <SectionHeading
          eyebrow={realWorkContent.eyebrow}
          title={realWorkContent.title}
          description={realWorkContent.description}
          className="mb-10"
        />
      </Reveal>

      {realWorkContent.items.length === 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {prototypeVisuals.realWork.map((key, index) => (
            <Reveal key={key} delay={index * 90}>
              <PrototypeMedia
                asset={media[key]}
                sizes="(max-width: 768px) 100vw, 50vw"
                aspectClassName={index === 0 ? "aspect-[4/5] md:aspect-[4/3]" : "aspect-[4/3] md:mt-20"}
                className="rounded-[1.75rem]"
              />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {realWorkContent.items.map((item, index) => {
            const workMedia = media[item.mediaKey as keyof typeof media];
            if (!workMedia) {
              return null;
            }

            return (
              <Reveal key={`${item.mediaKey}-${item.caption ?? "work"}`} delay={index * 60}>
                <article className="overflow-hidden rounded-[1.5rem] border bg-card">
                  <div className="relative aspect-[4/3]">
                    <Image src={workMedia.src} alt={workMedia.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
                  </div>
                  {item.caption ? <p className="p-5 text-sm text-muted-foreground">{item.caption}</p> : null}
                </article>
              </Reveal>
            );
          })}
        </div>
      )}
    </section>
  );
};
