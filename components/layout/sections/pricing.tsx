import { Check } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { membershipSection, memberships } from "@/content/memberships";

export const MembershipsSection = () => {
  if (!membershipSection || memberships.length === 0) {
    return null;
  }

  return (
    <section id="memberships" className="container py-20 sm:py-24 lg:py-32">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        {membershipSection.eyebrow ? (
          <p className="mb-2 text-lg tracking-wider text-primary">{membershipSection.eyebrow}</p>
        ) : null}
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">{membershipSection.title}</h2>
        {membershipSection.description ? (
          <p className="text-lg text-muted-foreground sm:text-xl">
            {membershipSection.description}
          </p>
        ) : null}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {memberships.map(({ name, description, priceLabel, credits, benefits, featured }) => (
          <Card
            key={name}
            className={featured ? "border-[1.5px] border-primary shadow-lg" : undefined}
          >
            <CardHeader>
              <CardTitle className="pb-2">{name}</CardTitle>
              {description ? <CardDescription>{description}</CardDescription> : null}
              {priceLabel ? <p className="text-3xl font-bold">{priceLabel}</p> : null}
              {credits ? <p className="text-sm text-muted-foreground">{credits}</p> : null}
            </CardHeader>

            {benefits.length > 0 ? (
              <CardContent className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </CardContent>
            ) : null}
          </Card>
        ))}
      </div>
    </section>
  );
};

export const PricingSection = MembershipsSection;
