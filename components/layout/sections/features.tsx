import type { LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface FeatureItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface FeaturesSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  items: FeatureItem[];
}

export const FeaturesSection = ({
  id = "features",
  eyebrow,
  title,
  description,
  items,
}: FeaturesSectionProps) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <section id={id} className="container py-20 sm:py-24 lg:py-32">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        {eyebrow ? (
          <p className="mb-2 text-lg tracking-wider text-primary">{eyebrow}</p>
        ) : null}
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
        {description ? (
          <p className="text-lg text-muted-foreground sm:text-xl">{description}</p>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title: itemTitle, description: itemDescription }) => (
          <Card key={itemTitle} className="h-full border-0 bg-background shadow-none">
            <CardHeader className="items-center text-center">
              {Icon ? (
                <div className="mb-4 rounded-full bg-primary/20 p-2 ring-8 ring-primary/10">
                  <Icon className="size-6 text-primary" aria-hidden="true" />
                </div>
              ) : null}
              <CardTitle>{itemTitle}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              {itemDescription}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
