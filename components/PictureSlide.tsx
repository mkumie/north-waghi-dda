import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { pictures } from "@/utils";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";

export function PictureSlide() {
  // const [emblaRef, emblaApi] = useEmblaCarousel({
  //   plugins: [Autoplay({ delay: 2000 })]
  // })
  return (
    <Carousel
      className="w-full max-w-screen-sm"
      opts={{ align: "center", loop: true }}
      // plugins={[
      //   Autoplay({
      //     delay: 2000,
      //   }),
      // ]}
    >
      <CarouselContent>
        {pictures.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="items-center justify-center p-2 text-center">
                  <span className="text-xl font-semibold">{item.title}</span>
                  <Image src={item.href} height={200} width={1000} alt="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
