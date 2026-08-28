import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { membershipSection, memberships } from "@/content/memberships";
import { cn } from "@/lib/utils";

export const MembershipsSection = () => {
  if (!membershipSection || memberships.length === 0) {
    return null;
  }

  return (
    <section id="memberships" className="container py-20 sm:py-24 lg:py-32">
      <Reveal>
        <SectionHeading
          eyebrow={membershipSection.eyebrow}
          title={membershipSection.title}
          description={membershipSection.description}
          className="mb-12"
        />
      </Reveal>

      <div className="grid gap-px overflow-hidden rounded-[1.75rem] border bg-border lg:grid-cols-3">
        {memberships.map((membership, index) => (
          <Reveal key={membership.name} delay={index * 70} className="h-full">
            <article
              className={cn(
                "flex h-full min-h-80 flex-col bg-background p-7 sm:p-8",
                membership.featured && "bg-primary text-primary-foreground",
              )}
            >
              <div>
                <p
                  className={cn(
                    "text-sm font-medium text-muted-foreground",
                    membership.featured && "text-primary-foreground/65",
                  )}
                >
                  {membership.market}
                </p>
                <h3 className="mt-2 text-3xl font-semibold tracking-[-0.035em]">
                  {membership.name}
                </h3>
                <p
                  className={cn(
                    "mt-5 text-sm leading-6 text-muted-foreground",
                    membership.featured && "text-primary-foreground/70",
                  )}
                >
                  {membership.summary}
                </p>
              </div>

              <p
                className={cn(
                  "mt-auto pt-12 text-base font-medium text-muted-foreground",
                  membership.featured && "text-primary-foreground/85",
                )}
              >
                {membership.credits}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export const PricingSection = MembershipsSection;
