import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/content/services";

export const ServicesSection = () => {
  if (services.length === 0) {
    return null;
  }

  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Services</h2>
      <div className="mx-auto grid w-full gap-4 sm:grid-cols-2 lg:w-[70%]">
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
