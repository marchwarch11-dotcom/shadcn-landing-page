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
import { teamMembers } from "@/content/team";

export const TeamSection = () => {
  if (teamMembers.length === 0) {
    return null;
  }

  return (
    <section id="team" className="container py-24 sm:py-32 lg:w-[75%]">
      <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Team</h2>

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
