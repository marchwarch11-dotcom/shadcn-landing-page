import { PrototypeMedia } from "@/components/media/prototype-media";
import { FeaturesSection } from "@/components/layout/sections/features";
import { commercialContent } from "@/content/commercial";
import { media, prototypeVisuals } from "@/content/media";

export const CommercialSection = () => {
  if (!commercialContent || commercialContent.items.length === 0) {
    return (
      <section id="commercial" className="container py-20 sm:py-24 lg:py-32">
        <PrototypeMedia asset={media[prototypeVisuals.commercial]} sizes="100vw" aspectClassName="aspect-[4/3] sm:aspect-[16/9]" />
      </section>
    );
  }

  return <FeaturesSection id="commercial" eyebrow={commercialContent.eyebrow} title={commercialContent.title} description={commercialContent.description} items={commercialContent.items} />;
};
