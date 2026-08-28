import { PrototypeMedia } from "@/components/media/prototype-media";
import { Card, CardContent } from "@/components/ui/card";
import { media, prototypeVisuals } from "@/content/media";
import { realWorkContent } from "@/content/real-work";

export const RealWorkSection = () => {
  if (!realWorkContent || realWorkContent.items.length === 0) {
    return (
      <section id="real-work" className="container py-20 sm:py-24 lg:py-32">
        <div className="grid gap-4 sm:grid-cols-2">
          {prototypeVisuals.realWork.map((key) => <PrototypeMedia key={key} asset={media[key]} sizes="(max-width: 640px) 100vw, 50vw" aspectClassName="aspect-[4/3]" />)}
        </div>
      </section>
    );
  }

  return (
    <section id="real-work" className="container py-20 sm:py-24 lg:py-32">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        {realWorkContent.eyebrow ? <p className="mb-2 text-lg tracking-wider text-primary">{realWorkContent.eyebrow}</p> : null}
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">{realWorkContent.title}</h2>
        {realWorkContent.description ? <p className="text-lg text-muted-foreground sm:text-xl">{realWorkContent.description}</p> : null}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {realWorkContent.items.map((item) => {
          const workMedia = media[item.mediaKey as keyof typeof media];
          if (!workMedia) return null;
          return <Card key={`${item.mediaKey}-${item.caption ?? "work"}`} className="overflow-hidden"><PrototypeMedia asset={workMedia} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" aspectClassName="aspect-[4/3]" className="rounded-none" />{item.caption ? <CardContent className="pt-6 text-sm text-muted-foreground">{item.caption}</CardContent> : null}</Card>;
        })}
      </div>
    </section>
  );
};
