import { PrototypeMedia } from "@/components/media/prototype-media";
import { media, prototypeVisuals } from "@/content/media";
import { snowContent } from "@/content/snow";

export const SnowSection = () => {
  if (!snowContent) {
    return (
      <section id="snow" className="container py-20 sm:py-24 lg:py-32">
        <PrototypeMedia asset={media[prototypeVisuals.snow]} sizes="100vw" aspectClassName="aspect-[4/3] sm:aspect-[16/9]" />
      </section>
    );
  }

  const snowMedia = snowContent.mediaKey ? media[snowContent.mediaKey as keyof typeof media] : undefined;

  return (
    <section id="snow" className="container py-20 sm:py-24 lg:py-32">
      <div className="grid items-center gap-10 rounded-2xl border bg-muted/30 p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-12">
        <div>
          {snowContent.eyebrow ? <p className="mb-2 text-lg tracking-wider text-primary">{snowContent.eyebrow}</p> : null}
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{snowContent.title}</h2>
          {snowContent.description ? <p className="text-lg text-muted-foreground sm:text-xl">{snowContent.description}</p> : null}
        </div>
        {snowMedia ? <PrototypeMedia asset={snowMedia} sizes="(max-width: 1024px) 100vw, 50vw" aspectClassName="aspect-[4/3]" /> : null}
      </div>
    </section>
  );
};
