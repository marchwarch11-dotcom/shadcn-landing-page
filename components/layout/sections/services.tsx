import { PrototypeMedia } from "@/components/media/prototype-media";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { media, prototypeVisuals } from "@/content/media";
import { services, servicesSection } from "@/content/services";

export const ServicesSection = () => {
  if (!servicesSection || services.length === 0) {
    return (
      <section id="services" className="container py-20 sm:py-24 lg:py-32">
        <div className="grid gap-4 sm:grid-cols-2">
          {prototypeVisuals.services.map((key) => (
            <PrototypeMedia key={key} asset={media[key]} sizes="(max-width: 640px) 100vw, 50vw" aspectClassName="aspect-[4/3]" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="container py-20 sm:py-24 lg:py-32">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        {servicesSection.eyebrow ? <p className="mb-2 text-lg tracking-wider text-primary">{servicesSection.eyebrow}</p> : null}
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">{servicesSection.title}</h2>
        {servicesSection.description ? <p className="text-lg text-muted-foreground sm:text-xl">{servicesSection.description}</p> : null}
      </div>
      <div className="mx-auto grid w-full gap-4 sm:grid-cols-2 lg:w-[80%]">
        {services.map(({ title, description, badge, mediaKey }) => {
          const serviceMedia = mediaKey ? media[mediaKey as keyof typeof media] : undefined;
          return (
            <Card key={title} className="relative h-full overflow-hidden bg-muted/60">
              {serviceMedia ? <PrototypeMedia asset={serviceMedia} sizes="(max-width: 640px) 100vw, 50vw" aspectClassName="aspect-[4/3]" className="rounded-none" /> : null}
              <CardHeader><CardTitle>{title}</CardTitle>{description ? <CardDescription>{description}</CardDescription> : null}</CardHeader>
              {badge ? <Badge variant="secondary" className="absolute right-3 top-3">{badge}</Badge> : null}
            </Card>
          );
        })}
      </div>
    </section>
  );
};
