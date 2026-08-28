import { Reveal } from "@/components/motion/reveal";
import { oneTeamContent } from "@/content/one-team";

export const OneTeamSection = () => {
  if (!oneTeamContent) {
    return null;
  }

  return (
    <section id="one-team" className="container py-12 sm:py-16 lg:py-24">
      <Reveal>
        <div className="rounded-[2rem] bg-primary px-6 py-14 text-primary-foreground sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          {oneTeamContent.eyebrow ? (
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/65">
              {oneTeamContent.eyebrow}
            </p>
          ) : null}
          <h2 className="max-w-5xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-7xl">
            {oneTeamContent.title}
          </h2>
          {oneTeamContent.description ? (
            <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/70">
              {oneTeamContent.description}
            </p>
          ) : null}
        </div>
      </Reveal>
    </section>
  );
};
