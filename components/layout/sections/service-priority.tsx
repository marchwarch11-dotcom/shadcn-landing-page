import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { servicePriorityContent } from "@/content/service-priority";
import { cn } from "@/lib/utils";

const levelWidth = {
  1: "w-1/3",
  2: "w-2/3",
  3: "w-full",
} as const;

export const ServicePrioritySection = () => {
  if (!servicePriorityContent || servicePriorityContent.items.length === 0) {
    return null;
  }

  return (
    <section id="service-priority" className="container py-20 sm:py-24 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow={servicePriorityContent.eyebrow}
            title={servicePriorityContent.title}
            description={servicePriorityContent.description}
          />
        </Reveal>

        <div className="space-y-7">
          {servicePriorityContent.items.map((item, index) => (
            <Reveal key={item.membership} delay={index * 80}>
              <div>
                <div className="mb-3 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold">{item.membership}</p>
                    <p className="text-sm text-muted-foreground">{item.market}</p>
                  </div>
                  {item.note ? (
                    <p className="text-sm font-medium text-primary">{item.note}</p>
                  ) : null}
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div className={cn("h-full rounded-full bg-primary", levelWidth[item.level])} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
