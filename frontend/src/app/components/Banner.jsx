'use client';

import * as React from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';

function Banner() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const images = [
    '/b.png',
    '/b2.png',
    '/b3.png',
    '/b4.png',
    '/b5.png',
  ];

  return (
    <div className="w-full">
  <Carousel
    plugins={[plugin.current]}
    className="w-full"
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}
  >
    <Link href="/products">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index} className="basis-full">
            <div className="w-full px-4 sm:px-8">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={1520}
                height={500}
                className="w-full h-[160px] sm:h-[300px] md:h-[500px] object-cover rounded-xl"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Link>
    {/* <CarouselPrevious />
    <CarouselNext /> */}
  </Carousel>
</div>

  );
}

export default Banner;
