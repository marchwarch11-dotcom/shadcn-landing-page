import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { memberCreditsContent } from "@/content/member-credits";

export const MemberCreditsSection = () => {
  if (!memberCreditsContent || memberCreditsContent.items.length === 0) {
    return null;
  }

  return (
    <section id="member-credits" className="container py-20 sm:py-24 lg:py-32">
      <Reveal>
        <SectionHeading
          eyebrow={memberCreditsContent.eyebrow}
          title={memberCreditsContent.title}
          description={memberCreditsContent.description}
          className="mb-12"
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        {memberCreditsContent.items.map((item, index) => (
          <Reveal key={item.membership} delay={index * 80}>
            <article className="rounded-[1.5rem] border bg-card p-7 sm:p-8">
              <p className="text-sm font-medium text-muted-foreground">{item.membership}</p>
              <div className="mt-12 flex items-end justify-between gap-4">
                <span className="text-7xl font-semibold leading-none tracking-[-0.06em] sm:text-8xl">
                  {item.credits}
                </span>
                <span className="max-w-24 pb-1 text-right text-sm leading-5 text-muted-foreground">
                  Member Service {item.credits === 1 ? "Credit" : "Credits"}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {memberCreditsContent.note ? (
        <Reveal>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-muted-foreground">
            {memberCreditsContent.note}
          </p>
        </Reveal>
      ) : null}
    </section>
  );
};
