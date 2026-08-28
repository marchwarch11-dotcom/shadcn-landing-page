import { BenefitsSection } from "@/components/layout/sections/benefits";
import { memberCreditsContent } from "@/content/member-credits";

export const MemberCreditsSection = () => {
  if (!memberCreditsContent || memberCreditsContent.items.length === 0) {
    return null;
  }

  return (
    <BenefitsSection
      id="member-credits"
      eyebrow={memberCreditsContent.eyebrow}
      title={memberCreditsContent.title}
      description={memberCreditsContent.description}
      items={memberCreditsContent.items}
    />
  );
};
