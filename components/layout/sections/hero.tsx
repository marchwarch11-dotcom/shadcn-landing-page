import Image from "next/image";

import { Button } from "@/components/ui/button";
import { heroContent } from "@/content/hero";
import { media } from "@/content/media";

export const HeroSection = () => {
  if (!heroContent) {
    return null;
  }

  const heroMedia = heroContent.mediaKey ? media[heroContent.mediaKey] : undefined;

  return (
    <section id="hero" className="container py-16 sm:py-24 lg:py-32">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-2xl">
          {heroContent.eyebrow ? (
            <p className="mb-3 text-lg tracking-wider text-primary">{heroContent.eyebrow}</p>
          ) : null}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {heroContent.title}
          </h1>
          {heroContent.description ? (
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              {heroContent.description}
            </p>
          ) : null}

          {heroContent.actions.length > 0 ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {heroContent.actions.map((action, index) => (
                <Button
                  key={`${action.label}-${action.href}`}
                  asChild
                  variant={index === 0 ? "default" : "outline"}
                >
                  <a
                    href={action.href}
                    target={action.external ? "_blank" : undefined}
                    rel={action.external ? "noreferrer" : undefined}
                  >
                    {action.label}
                  </a>
                </Button>
              ))}
            </div>
          ) : null}
        </div>

        {heroMedia ? (
          <div className="overflow-hidden rounded-2xl border bg-muted/30">
            <Image
              src={heroMedia.src}
              alt={heroMedia.alt}
              width={heroMedia.width ?? 1200}
              height={heroMedia.height ?? 900}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};
