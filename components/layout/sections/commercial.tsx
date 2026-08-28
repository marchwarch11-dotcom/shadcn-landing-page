import { FeaturesSection } from "@/components/layout/sections/features";
import { commercialContent } from "@/content/commercial";

export const CommercialSection = () => {
  if (!commercialContent || commercialContent.items.length === 0) {
    return null;
  }

  return (
    <FeaturesSection
      id="commercial"
      eyebrow={commercialContent.eyebrow}
      title={commercialContent.title}
      description={commercialContent.description}
      items={commercialContent.items}
    />
  );
};
