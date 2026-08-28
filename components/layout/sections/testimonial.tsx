import Image from "next/image";
import { Star } from "lucide-react";

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
  if (!testimonialsSection || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="container py-20 sm:py-24 lg:py-32">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        {testimonialsSection.eyebrow ? (
          <p className="mb-2 text-lg tracking-wider text-primary">{testimonialsSection.eyebrow}</p>
        ) : null}
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">{testimonialsSection.title}</h2>
        {testimonialsSection.description ? (
          <p className="text-lg text-muted-foreground sm:text-xl">
            {testimonialsSection.description}
          </p>
        ) : null}
      </div>

      <Carousel
        opts={{ align: "start" }}
        className="relative mx-auto w-[80%] sm:w-[90%] lg:max-w-screen-xl"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => {
            const image = testimonial.imageKey
              ? media[testimonial.imageKey as keyof typeof media]
              : undefined;

            return (
              <CarouselItem
                key={`${testimonial.name}-${testimonial.quote}`}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full bg-muted/50">
                  <CardContent className="pt-6">
                    {testimonial.rating ? (
                      <div className="mb-6 flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                        {Array.from({ length: testimonial.rating }, (_, index) => (
                          <Star
                            key={index}
                            className="size-4 fill-primary text-primary"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                    ) : null}
                    <p>&ldquo;{testimonial.quote}&rdquo;</p>
                  </CardContent>

                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {image ? (
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={48}
                          height={48}
                          className="size-12 rounded-full object-cover"
                        />
                      ) : null}
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        {testimonial.role ? (
                          <CardDescription>{testimonial.role}</CardDescription>
                        ) : null}
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
    </section>
  );
};

export const TestimonialSection = TestimonialsSection;
