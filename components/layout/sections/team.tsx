import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/layout/section-heading";
import { SiteMedia } from "@/components/media/site-media";
import { Reveal } from "@/components/motion/reveal";
import { media, visuals } from "@/content/media";
import { teamMembers, teamSection } from "@/content/team";

export const TeamSection = () => {
  if (!teamSection) {
    return null;
  }

  return (
    <section id="team" className="container py-20 sm:py-24 lg:py-32">
      <Reveal>
        <SectionHeading
          eyebrow={teamSection.eyebrow}
          title={teamSection.title}
          description={teamSection.description}
          className="mb-10"
        />
      </Reveal>

      {teamMembers.length === 0 ? (
        <Reveal>
          <SiteMedia
            asset={media[visuals.team]}
            sizes="100vw"
            aspectClassName="aspect-[4/3] sm:aspect-[16/8]"
            className="rounded-[2rem]"
          />
        </Reveal>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => {
            const image = member.imageKey
              ? media[member.imageKey as keyof typeof media]
              : undefined;

            return (
              <Reveal key={member.name} delay={index * 60}>
                <article className="overflow-hidden rounded-[1.5rem] border bg-card">
                  {image ? (
                    <div className="relative aspect-square">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    {member.role ? <p className="mt-1 text-sm text-muted-foreground">{member.role}</p> : null}
                    {member.bio ? <p className="mt-4 text-sm leading-6 text-muted-foreground">{member.bio}</p> : null}
                    {member.links.length > 0 ? (
                      <div className="mt-5 flex flex-wrap gap-4">
                        {member.links.map(({ label, href }) => (
                          <Link key={`${member.name}-${label}`} href={href} target="_blank" rel="noreferrer" className="text-sm underline-offset-4 hover:underline">
                            {label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      )}
    </section>
  );
};
