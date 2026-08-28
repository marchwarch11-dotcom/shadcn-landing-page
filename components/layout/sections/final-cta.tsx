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
    <section id="contact" className="container py-20 sm:py-24 lg:py-32">
      <div className="rounded-2xl border bg-muted/40 px-6 py-12 text-center sm:px-10 sm:py-16">
        {finalCtaContent.eyebrow ? (
          <p className="mb-2 text-lg tracking-wider text-primary">{finalCtaContent.eyebrow}</p>
        ) : null}
        <h2 className="mx-auto max-w-3xl text-3xl font-bold md:text-4xl">
          {finalCtaContent.title}
        </h2>
        {finalCtaContent.description ? (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {finalCtaContent.description}
          </p>
        ) : null}
        {whatsappHref && finalCtaContent.whatsappLabel ? (
          <Button asChild className="mt-8">
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              {finalCtaContent.whatsappLabel}
            </a>
          </Button>
        ) : null}
      </div>
    </section>
  );
};
