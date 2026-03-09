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
      tag: 'Ideal para:',
      bullets: ['Residências', 'Bares e restaurantes', 'Escritórios', 'Projetos permanentes'],
      desc: 'Solução completa com estrutura, instalação e suporte contínuo.',
      img: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/m9_1x.webp',
      accentColor: '#9800FF',
    },
    {
      title: 'Locação Fixa (Longo Prazo)',
      tag: 'Ideal para:',
      bullets: ['Fachadas comerciais', 'Publicidade', 'Academias', 'Comércios'],
      desc: 'Indicada para clientes que desejam instalar o painel de forma contínua, mas preferem diluir o investimento ao longo do tempo.',
      img: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/m8_1x.webp',
      accentColor: '#12CFDB',
    },
    {
      title: 'Locação para Eventos',
      tag: 'Indicada para:',
      bullets: ['Eventos corporativos', 'Ações promocionais', 'Festas e Casamentos', 'Projetos temporários'],
      desc: 'Inclui montagem, desmontagem e suporte técnico durante o período contratado.',
      img: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/m7_1x.webp',
      accentColor: '#D4A955',
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

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
                    <div className="flex flex-col items-start text-left order-2 lg:order-1">
                      <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter font-headline leading-tight">
                        {service.title}
                      </h3>

                      <div className="mb-6">
                        <span className="font-bold text-xs tracking-[0.2em] uppercase mb-4 block font-headline text-white/40">
                          {service.tag}
                        </span>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-white/80 font-body text-sm md:text-base">
                          {service.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.accentColor }}></span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <p className="text-white/60 text-lg mb-10 leading-relaxed font-body max-w-lg">
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

                    <div className="relative h-[300px] md:h-[500px] rounded-[32px] overflow-hidden group order-1 lg:order-2">
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
