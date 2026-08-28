import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services, servicesSection } from "@/content/services";

export const ServicesSection = () => {
  if (!servicesSection || services.length === 0) {
    return null;
  }

  return (
    <section id="services" className="container py-20 sm:py-24 lg:py-32">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        {servicesSection.eyebrow ? (
          <p className="mb-2 text-lg tracking-wider text-primary">{servicesSection.eyebrow}</p>
        ) : null}
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">{servicesSection.title}</h2>
        {servicesSection.description ? (
          <p className="text-lg text-muted-foreground sm:text-xl">{servicesSection.description}</p>
        ) : null}
      </div>

      <div className="mx-auto grid w-full gap-4 sm:grid-cols-2 lg:w-[80%]">
        {services.map(({ title, description, badge }) => (
          <Card key={title} className="relative h-full bg-muted/60">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              {description ? <CardDescription>{description}</CardDescription> : null}
            </CardHeader>
            {badge ? (
              <Badge variant="secondary" className="absolute -right-3 -top-2">
                {badge}
              </Badge>
            ) : null}
          </Card>
        ))}
      </div>
    </section>
  );
};
