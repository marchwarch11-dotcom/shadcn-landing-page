import { FeaturesSection } from "@/components/layout/sections/features";
import { servicePriorityContent } from "@/content/service-priority";

export const ServicePrioritySection = () => {
  if (!servicePriorityContent || servicePriorityContent.items.length === 0) {
    return null;
  }

  return (
    <FeaturesSection
      id="service-priority"
      eyebrow={servicePriorityContent.eyebrow}
      title={servicePriorityContent.title}
      description={servicePriorityContent.description}
      items={servicePriorityContent.items}
    />
  );
};
