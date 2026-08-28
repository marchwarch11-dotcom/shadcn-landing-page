import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { media } from "@/content/media";
import { teamMembers, teamSection } from "@/content/team";

export const TeamSection = () => {
  if (!teamSection || teamMembers.length === 0) {
    return null;
  }

  return (
    <section id="team" className="container py-20 sm:py-24 lg:py-32">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        {teamSection.eyebrow ? (
          <p className="mb-2 text-lg tracking-wider text-primary">{teamSection.eyebrow}</p>
        ) : null}
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">{teamSection.title}</h2>
        {teamSection.description ? (
          <p className="text-lg text-muted-foreground sm:text-xl">{teamSection.description}</p>
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teamMembers.map((member) => {
          const image = member.imageKey ? media[member.imageKey] : undefined;

          return (
            <Card key={member.name} className="flex h-full flex-col overflow-hidden bg-muted/60">
              <CardHeader className={image ? "gap-0 p-0" : undefined}>
                {image ? (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width ?? 600}
                    height={image.height ?? 600}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="aspect-square w-full object-cover"
                  />
                ) : null}
                <CardTitle className={image ? "px-6 pb-4 pt-6" : undefined}>
                  {member.name}
                </CardTitle>
              </CardHeader>

              {member.role || member.bio ? (
                <CardContent className="space-y-2 text-muted-foreground">
                  {member.role ? <p>{member.role}</p> : null}
                  {member.bio ? <p>{member.bio}</p> : null}
                </CardContent>
              ) : null}

              {member.links.length > 0 ? (
                <CardFooter className="mt-auto flex flex-wrap gap-4">
                  {member.links.map(({ label, href }) => (
                    <Link
                      key={`${member.name}-${label}`}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm underline-offset-4 hover:underline"
                    >
                      {label}
                    </Link>
                  ))}
                </CardFooter>
              ) : null}
            </Card>
          );
        })}
      </div>
    </section>
  );
};
