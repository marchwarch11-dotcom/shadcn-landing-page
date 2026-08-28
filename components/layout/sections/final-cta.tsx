import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { finalCtaContent } from "@/content/final-cta";
import { getWhatsAppHref } from "@/lib/whatsapp";

export const FinalCtaSection = () => {
  if (!finalCtaContent) {
    return null;
  }

  const whatsappHref = getWhatsAppHref(
    siteConfig.contact.whatsappNumberE164,
    finalCtaContent.whatsappMessage,
  );

  return (
    <section id="contact" className="container pb-24 pt-20 sm:pb-32 sm:pt-24">
      <Reveal>
        <div className="rounded-[2rem] border bg-foreground px-6 py-16 text-background sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          {finalCtaContent.eyebrow ? (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-background/55">
              {finalCtaContent.eyebrow}
            </p>
          ) : null}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-7xl">
                {finalCtaContent.title}
              </h2>
              {finalCtaContent.description ? (
                <p className="mt-5 max-w-2xl text-lg text-background/65">
                  {finalCtaContent.description}
                </p>
              ) : null}
            </div>

            {whatsappHref && finalCtaContent.whatsappLabel ? (
              <Button asChild variant="secondary" size="lg" className="rounded-full">
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  {finalCtaContent.whatsappLabel}
                  <ArrowUpRight className="ml-2 size-4" aria-hidden="true" />
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
