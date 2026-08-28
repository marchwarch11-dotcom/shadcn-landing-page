import type { LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface BenefitItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface BenefitsSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  items: BenefitItem[];
}

export const BenefitsSection = ({
  id = "benefits",
  eyebrow,
  title,
  description,
  items,
}: BenefitsSectionProps) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <section id={id} className="container py-20 sm:py-24 lg:py-32">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          {eyebrow ? (
            <p className="mb-2 text-lg tracking-wider text-primary">{eyebrow}</p>
          ) : null}
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
          {description ? (
            <p className="text-lg text-muted-foreground sm:text-xl">{description}</p>
          ) : null}
        </div>

        <div className="grid w-full gap-4 sm:grid-cols-2">
          {items.map(({ icon: Icon, title: itemTitle, description: itemDescription }, index) => (
            <Card
              key={itemTitle}
              className="group/number bg-muted/50 transition-colors hover:bg-background"
            >
              <CardHeader>
                <div className="flex justify-between gap-4">
                  {Icon ? <Icon className="mb-6 size-8 text-primary" aria-hidden="true" /> : <span />}
                  <span className="text-5xl font-medium text-muted-foreground/15 transition-colors group-hover/number:text-muted-foreground/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <CardTitle>{itemTitle}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {itemDescription}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
