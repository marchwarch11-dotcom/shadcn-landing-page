import { SectionHeading } from "@/components/layout/section-heading";
import { SiteMedia } from "@/components/media/site-media";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/content/hero";
import { media, visuals } from "@/content/media";

export const HeroSection = () => {
  if (!heroContent) {
    return null;
  }

  const heroMedia = heroContent.mediaKey
    ? media[heroContent.mediaKey as keyof typeof media]
    : media[visuals.hero];

  return (
    <section id="hero" className="container pb-16 pt-5 sm:pb-20 sm:pt-8 lg:pb-28">
      <Reveal>
        <SiteMedia
          asset={heroMedia}
          sizes="(max-width: 768px) 100vw, 1280px"
          aspectClassName="min-h-[36rem] sm:min-h-[40rem] lg:min-h-[44rem]"
          className="rounded-[2rem] border border-black/10 shadow-[0_35px_100px_-55px_rgba(10,35,22,0.8)]"
          imageClassName="scale-[1.01]"
          priority
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />
          <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white sm:p-10 lg:p-14">
            <SectionHeading
              eyebrow={heroContent.eyebrow}
              title={heroContent.title}
              description={heroContent.description}
              className="max-w-4xl [&_h2]:text-4xl [&_h2]:font-semibold [&_h2]:text-white sm:[&_h2]:text-6xl lg:[&_h2]:text-7xl [&_p]:text-white/75"
            />

            {heroContent.actions.length > 0 ? (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {heroContent.actions.map((action, index) => (
                  <Button
                    key={`${action.label}-${action.href}`}
                    asChild
                    variant={index === 0 ? "secondary" : "outline"}
                    className="rounded-full"
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
        </SiteMedia>
      </Reveal>
    </section>
  );
};
