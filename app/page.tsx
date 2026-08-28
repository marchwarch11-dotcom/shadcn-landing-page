import { AboutSection } from "@/components/layout/sections/about";
import { CommercialSection } from "@/components/layout/sections/commercial";
import { FinalCtaSection } from "@/components/layout/sections/final-cta";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { MemberCreditsSection } from "@/components/layout/sections/member-credits";
import { OneTeamSection } from "@/components/layout/sections/one-team";
import { MembershipsSection } from "@/components/layout/sections/pricing";
import { RealWorkSection } from "@/components/layout/sections/real-work";
import { SeasonalExperienceSection } from "@/components/layout/sections/seasonal-experience";
import { ServicePrioritySection } from "@/components/layout/sections/service-priority";
import { ServicesSection } from "@/components/layout/sections/services";
import { SnowSection } from "@/components/layout/sections/snow";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialsSection } from "@/components/layout/sections/testimonial";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <HeroSection />
        <SeasonalExperienceSection />
        <OneTeamSection />
        <MembershipsSection />
        <ServicesSection />
        <MemberCreditsSection />
        <ServicePrioritySection />
        <AboutSection />
        <TeamSection />
        <RealWorkSection />
        <TestimonialsSection />
        <CommercialSection />
        <SnowSection />
        <FinalCtaSection />
      </main>
      <FooterSection />
    </>
  );
}
