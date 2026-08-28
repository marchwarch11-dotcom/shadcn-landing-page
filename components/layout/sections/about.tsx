import { SectionHeading } from "@/components/layout/section-heading";
import { PrototypeMedia } from "@/components/media/prototype-media";
import { Reveal } from "@/components/motion/reveal";
import { aboutContent } from "@/content/about";
import { media, prototypeVisuals } from "@/content/media";

export const AboutSection = () => {
  if (!aboutContent) {
    return null;
  }

  const aboutMedia = aboutContent.mediaKey
    ? media[aboutContent.mediaKey as keyof typeof media]
    : media[prototypeVisuals.about];

  return (
    <section id="about" className="container py-20 sm:py-24 lg:py-32">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Reveal>
          <PrototypeMedia
            asset={aboutMedia}
            sizes="(max-width: 1024px) 100vw, 58vw"
            aspectClassName="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]"
            className="rounded-[2rem]"
          />
        </Reveal>

        <Reveal delay={90}>
          <SectionHeading
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.title}
            description={aboutContent.description}
          />

          {aboutContent.people.length > 0 ? (
            <div className="mt-8 divide-y border-y">
              {aboutContent.people.map((person) => (
                <div key={person.name} className="py-5">
                  <p className="font-semibold">{person.name}</p>
                  {person.role ? <p className="mt-1 text-sm text-muted-foreground">{person.role}</p> : null}
                  {person.bio ? <p className="mt-3 text-sm leading-6 text-muted-foreground">{person.bio}</p> : null}
                </div>
              ))}
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
};
