import { FooterSection } from "@/components/layout/sections/footer";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export default function Home() {
  return (
    <>
      <main id="main-content" className="min-h-[50vh]">
        <ServicesSection />
        <PricingSection />
        <TeamSection />
        <TestimonialSection />
      </main>
      <FooterSection />
    </>
  );
}
