import { PrototypeMedia } from "@/components/media/prototype-media";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { aboutContent } from "@/content/about";
import { media, prototypeVisuals } from "@/content/media";

export const AboutSection = () => {
  if (!aboutContent) {
    return (
      <section id="about" className="container py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <PrototypeMedia asset={media[prototypeVisuals.about]} sizes="100vw" aspectClassName="aspect-[4/3] sm:aspect-[16/9]" />
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="container py-20 sm:py-24 lg:py-32">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          {aboutContent.eyebrow ? <p className="mb-2 text-lg tracking-wider text-primary">{aboutContent.eyebrow}</p> : null}
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{aboutContent.title}</h2>
          {aboutContent.description ? <p className="text-lg text-muted-foreground sm:text-xl">{aboutContent.description}</p> : null}
        </div>
        {aboutContent.people.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {aboutContent.people.map((person) => {
              const personMedia = person.imageKey ? media[person.imageKey as keyof typeof media] : undefined;
              return (
                <Card key={person.name} className="overflow-hidden">
                  {personMedia ? <PrototypeMedia asset={personMedia} sizes="(max-width: 640px) 100vw, 50vw" aspectClassName="aspect-square" className="rounded-none" /> : null}
                  <CardHeader><CardTitle>{person.name}</CardTitle></CardHeader>
                  {person.role || person.bio ? <CardContent className="space-y-2 text-muted-foreground">{person.role ? <p>{person.role}</p> : null}{person.bio ? <p>{person.bio}</p> : null}</CardContent> : null}
                </Card>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
};
