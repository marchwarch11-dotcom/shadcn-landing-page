import Image from "next/image";
import { Star } from "lucide-react";

import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { media } from "@/content/media";
import { testimonials, testimonialsSection } from "@/content/testimonials";

export const TestimonialsSection = () => {
  if (!testimonialsSection) {
    return null;
  }

  return (
    <section id="testimonials" className="container py-20 sm:py-24 lg:py-32">
      <Reveal>
        <SectionHeading
          eyebrow={testimonialsSection.eyebrow}
          title={testimonialsSection.title}
          description={testimonialsSection.description}
          className="mb-10"
        />
      </Reveal>

      {testimonials.length === 0 ? (
        <Reveal>
          <div className="rounded-[1.5rem] border border-dashed bg-card/50 px-6 py-10 sm:px-8 sm:py-12">
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              {testimonialsSection.emptyState}
            </p>
          </div>
        </Reveal>
      ) : (
        <Carousel opts={{ align: "start" }} className="relative mx-auto w-[82%] sm:w-[90%] lg:max-w-screen-xl">
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const image = testimonial.imageKey
                ? media[testimonial.imageKey as keyof typeof media]
                : undefined;

              return (
                <CarouselItem key={`${testimonial.name}-${testimonial.quote}`} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-card">
                    <CardContent className="pt-6">
                      {testimonial.rating ? (
                        <div className="mb-6 flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                          {Array.from({ length: testimonial.rating }, (_, index) => (
                            <Star key={index} className="size-4 fill-primary text-primary" aria-hidden="true" />
                          ))}
                        </div>
                      ) : null}
                      <p>&ldquo;{testimonial.quote}&rdquo;</p>
                    </CardContent>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        {image ? (
                          <Image src={image.src} alt={image.alt} width={48} height={48} className="size-12 rounded-full object-cover" />
                        ) : null}
                        <div>
                          <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                          {testimonial.role ? <CardDescription>{testimonial.role}</CardDescription> : null}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </section>
  );
};

export const TestimonialSection = TestimonialsSection;
