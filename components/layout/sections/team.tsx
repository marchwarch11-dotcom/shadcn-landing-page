import Link from "next/link";

import { PrototypeMedia } from "@/components/media/prototype-media";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { media, prototypeVisuals } from "@/content/media";
import { teamMembers, teamSection } from "@/content/team";

export const TeamSection = () => {
  if (!teamSection || teamMembers.length === 0) {
    return (
      <section id="team" className="container py-20 sm:py-24 lg:py-32">
        <PrototypeMedia asset={media[prototypeVisuals.team]} sizes="100vw" aspectClassName="aspect-[4/3] sm:aspect-[16/9]" />
      </section>
    );
  }

  return (
    <section id="team" className="container py-20 sm:py-24 lg:py-32">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        {teamSection.eyebrow ? <p className="mb-2 text-lg tracking-wider text-primary">{teamSection.eyebrow}</p> : null}
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">{teamSection.title}</h2>
        {teamSection.description ? <p className="text-lg text-muted-foreground sm:text-xl">{teamSection.description}</p> : null}
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teamMembers.map((member) => {
          const image = member.imageKey ? media[member.imageKey as keyof typeof media] : undefined;
          return (
            <Card key={member.name} className="flex h-full flex-col overflow-hidden bg-muted/60">
              {image ? <PrototypeMedia asset={image} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" aspectClassName="aspect-square" className="rounded-none" /> : null}
              <CardHeader><CardTitle>{member.name}</CardTitle></CardHeader>
              {member.role || member.bio ? <CardContent className="space-y-2 text-muted-foreground">{member.role ? <p>{member.role}</p> : null}{member.bio ? <p>{member.bio}</p> : null}</CardContent> : null}
              {member.links.length > 0 ? <CardFooter className="mt-auto flex flex-wrap gap-4">{member.links.map(({ label, href }) => <Link key={`${member.name}-${label}`} href={href} target="_blank" rel="noreferrer" className="text-sm underline-offset-4 hover:underline">{label}</Link>)}</CardFooter> : null}
            </Card>
          );
        })}
      </div>
    </section>
  );
};
