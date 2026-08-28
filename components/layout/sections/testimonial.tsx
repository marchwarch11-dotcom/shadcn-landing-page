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
import { testimonials } from "@/content/testimonials";

export const TestimonialSection = () => {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section id="client-proof" className="container py-24 sm:py-32">
      <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Client proof</h2>

      <Carousel
        opts={{ align: "start" }}
        className="relative mx-auto w-[80%] sm:w-[90%] lg:max-w-screen-xl"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => {
            const image = testimonial.imageKey ? media[testimonial.imageKey] : undefined;

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
