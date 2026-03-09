'use client';

import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function SalesCards() {
  const whatsappUrl = "https://tintim.link/whatsapp/0c01772c-61fd-4f99-ab17-e5ef59b8a87b/53fb4310-08e2-4f11-9fcf-64c042748914";

  const services = [
    {
      title: 'Venda',
      tag: 'Foco Principal',
      desc: 'Ideal para residências, bares, restaurantes e escritórios. Projetos permanentes com suporte contínuo e garantia total.',
      img: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/m9_1x.webp',
      accentColor: '#9800FF',
    },
    {
      title: 'Locação Fixa',
      tag: 'Longo Prazo',
      desc: 'Indicada para fachadas comerciais, publicidade e academias. Investimento diluído ao longo do tempo com manutenção inclusa.',
      img: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/m8_1x.webp',
      accentColor: '#12CFDB',
    },
    {
      title: 'Locação Eventos',
      tag: 'Projetos Temporários',
      desc: 'Para eventos corporativos, festas e casamentos. Inclui suporte técnico especializado antes e durante o evento.',
      img: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/m7_1x.webp',
      accentColor: '#D4A955',
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="venda-locacao" className="bg-dark pt-24 md:pt-32 pb-16 md:pb-32 relative overflow-hidden" data-theme="dark">
      <div className="container max-w-[1360px] mx-auto px-6 mb-16 text-center text-white uppercase tracking-tight">
        <h2 className="font-bold text-3xl md:text-5xl lg:text-[54px] font-headline">
          TRABALHAMOS COM <br className="md:hidden" />
          <span className="text-gradient-animate font-bold">VENDA OU LOCAÇÃO</span>
        </h2>
      </div>
      
      <div className="container max-w-[1360px] mx-auto px-6 relative z-10">
        <div className="relative group/carousel">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#1A1822]/40 border border-white/5 rounded-[40px] p-8 md:p-12 lg:p-16 mx-4">
                    <div className="flex flex-col items-start text-left">
                      <span 
                        className="font-bold text-xs tracking-[0.2em] uppercase mb-6 flex items-center gap-3 font-headline"
                        style={{ color: service.accentColor }}
                      >
                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: service.accentColor }}></span>
                        {service.tag}
                      </span>
                      
                      <h3 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter font-headline leading-tight">
                        {service.title}
                      </h3>
                      
                      <p className="text-white/60 text-lg md:text-xl mb-12 leading-relaxed font-body max-w-lg">
                        {service.desc}
                      </p>
                      
                      <a 
                        href={whatsappUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glow-green"
                      >
                        Saiba Mais
                      </a>
                    </div>

                    <div className="relative h-[300px] md:h-[500px] rounded-[32px] overflow-hidden group">
                      <img 
                        src={service.img} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                        alt={service.title} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 lg:-translate-x-full w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-dark transition-all duration-300 z-20 backdrop-blur-md"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button 
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 lg:translate-x-full w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-dark transition-all duration-300 z-20 backdrop-blur-md"
            aria-label="Próximo"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
