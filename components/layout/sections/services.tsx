import { SectionHeading } from "@/components/layout/section-heading";
import { SiteMedia } from "@/components/media/site-media";
import { Reveal } from "@/components/motion/reveal";
import { media, visuals } from "@/content/media";
import { services, servicesSection } from "@/content/services";

export const ServicesSection = () => {
  if (!servicesSection || services.length === 0) {
    return null;
  }

  const serviceMedia = visuals.services.map((key) => media[key]);

  return (
    <section id="services" className="container py-20 sm:py-24 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow={servicesSection.eyebrow}
              title={servicesSection.title}
              description={servicesSection.description}
              className="lg:sticky lg:top-32"
            />
          </Reveal>
        </div>

        <div className="space-y-10">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {serviceMedia.map((asset, index) => (
                <SiteMedia
                  key={asset.src}
                  asset={asset}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  aspectClassName={index === 0 ? "aspect-[4/5]" : "aspect-[4/3] sm:mt-14"}
                  className="rounded-[1.5rem]"
                />
              ))}
            </div>
          </Reveal>

          <div className="divide-y border-y">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={Math.min(index * 35, 210)}>
                <div className="grid gap-3 py-5 sm:grid-cols-[1fr_1.25fr_auto] sm:items-start sm:gap-6 sm:py-6">
                  <h3 className="text-xl font-medium tracking-tight sm:text-2xl">{service.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground sm:text-base">
                    {service.description}
                  </p>
                  <span className="text-xs font-medium tabular-nums text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
