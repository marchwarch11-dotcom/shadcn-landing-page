import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
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
                "flex h-full min-h-72 flex-col bg-background p-7 sm:p-8",
                membership.featured && "bg-primary text-primary-foreground",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p
                    className={cn(
                      "text-sm font-medium text-muted-foreground",
                      membership.featured && "text-primary-foreground/65",
                    )}
                  >
                    {membership.description}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-[-0.035em]">
                    {membership.name}
                  </h3>
                </div>
                {membership.provisional ? (
                  <Badge variant={membership.featured ? "secondary" : "outline"}>Provisional</Badge>
                ) : null}
              </div>

              {membership.credits ? (
                <p
                  className={cn(
                    "mt-auto pt-16 text-base font-medium text-muted-foreground",
                    membership.featured && "text-primary-foreground/80",
                  )}
                >
                  {membership.credits}
                </p>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export const PricingSection = MembershipsSection;
