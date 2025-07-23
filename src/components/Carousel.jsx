import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ brands, title }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="my-12">
      {/* ===== ALTERAÇÃO APLICADA AQUI ===== */}
      <h3 className="text-3xl font-bold text-ambev-yellow mb-10 text-center">{title}</h3>
      <div className="relative group">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {brands.map((brand, index) => (
              <div 
                className="embla__slide flex flex-col items-center justify-center pl-8" 
                key={index} 
                style={{ flex: '0 0 13rem' }}
              >
                <img   
                  alt={`Logo da marca ${brand.name}`}
                  className="h-29 w-full object-contain" // OBS: h-29 não é uma classe padrão do Tailwind, talvez você queira usar h-28 ou h-32, ou um valor arbitrário como h-[7.25rem]
                  src={brand.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 hover:bg-white/30 rounded-full p-2 z-10"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 hover:bg-white/30 rounded-full p-2 z-10"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;