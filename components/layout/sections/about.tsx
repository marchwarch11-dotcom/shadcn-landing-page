import Image from "next/image";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { aboutContent } from "@/content/about";
import { media } from "@/content/media";

export const AboutSection = () => {
  if (!aboutContent) {
    return null;
  }

  return (
    <section id="about" className="container py-20 sm:py-24 lg:py-32">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          {aboutContent.eyebrow ? (
            <p className="mb-2 text-lg tracking-wider text-primary">{aboutContent.eyebrow}</p>
          ) : null}
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{aboutContent.title}</h2>
          {aboutContent.description ? (
            <p className="text-lg text-muted-foreground sm:text-xl">{aboutContent.description}</p>
          ) : null}
        </div>

        {aboutContent.people.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {aboutContent.people.map((person) => {
              const personMedia = person.imageKey ? media[person.imageKey] : undefined;

              return (
                <Card key={person.name} className="overflow-hidden">
                  {personMedia ? (
                    <Image
                      src={personMedia.src}
                      alt={personMedia.alt}
                      width={personMedia.width ?? 800}
                      height={personMedia.height ?? 800}
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="aspect-square w-full object-cover"
                    />
                  ) : null}
                  <CardHeader>
                    <CardTitle>{person.name}</CardTitle>
                  </CardHeader>
                  {person.role || person.bio ? (
                    <CardContent className="space-y-2 text-muted-foreground">
                      {person.role ? <p>{person.role}</p> : null}
                      {person.bio ? <p>{person.bio}</p> : null}
                    </CardContent>
                  ) : null}
                </Card>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
};
