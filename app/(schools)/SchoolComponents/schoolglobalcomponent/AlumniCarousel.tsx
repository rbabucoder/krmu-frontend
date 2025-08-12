"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import AlumniLogoCard from "./AlumniLogoCard";
import { StrapiMedia } from "@/lib/types/common";

type Props = {
  AluLogos: StrapiMedia[];
};

const AlumniCarousel = ({ AluLogos }: Props) => {

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 1000,
        }),
      ]}
    >
      <CarouselContent>
        {AluLogos &&
          AluLogos.map((logo) => {
            return (
              <CarouselItem
                key={logo.id}
                className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <AlumniLogoCard
                  logoUrl={logo.url}
                  altText={logo.alternativeText || ""}
                />
              </CarouselItem>
            );
          })}
      </CarouselContent>
    </Carousel>
  );
};

export default AlumniCarousel;
