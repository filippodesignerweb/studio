'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function SalesCards() {
  const cardImages = [
    PlaceHolderImages.find(img => img.id === 'portfolio-1'),
    PlaceHolderImages.find(img => img.id === 'portfolio-2'),
    PlaceHolderImages.find(img => img.id === 'portfolio-3'),
  ];

  const services = [
    {
      title: 'Venda',
      tag: 'Solução Definitiva',
      desc: 'Ideal para residências, bares, restaurantes e escritórios. Projetos permanentes com suporte contínuo e garantia estendida.',
      color: 'primary',
      borderColor: 'border-primary/30',
      tagColor: 'text-primary',
      img: cardImages[0]
    },
    {
      title: 'Locação Fixa',
      tag: 'Longo Prazo',
      desc: 'Indicada para fachadas comerciais e publicidade. Investimento diluído ao longo do tempo com manutenção inclusa.',
      color: 'accent',
      borderColor: 'border-accent/30',
      tagColor: 'text-accent',
      img: cardImages[1],
      highlight: true
    },
    {
      title: 'Locação Eventos',
      tag: 'Projetos Temporários',
      desc: 'Para eventos corporativos e sociais. Inclui montagem, operação técnica e desmontagem ágil para sua tranquilidade.',
      color: 'yellow-500',
      borderColor: 'border-yellow-500/30',
      tagColor: 'text-yellow-500',
      img: cardImages[2]
    }
  ];

  return (
    <section id="venda-locacao" className="bg-dark pt-32 pb-32 relative overflow-hidden">
      <div className="container max-w-[1360px] mx-auto px-6 mb-20 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold mb-6">
          VENDA OU <span className="text-gradient-animate">LOCAÇÃO</span>
        </h2>
        <p className="text-white/60 font-body max-w-xl mx-auto">
          Flexibilidade total para atender as necessidades do seu negócio or residência.
        </p>
      </div>

      <div className="container max-w-[1360px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`flex flex-col rounded-2xl overflow-hidden glass-card transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${service.highlight ? 'ring-2 ring-primary/20 scale-105 z-10' : ''}`}
          >
            <div className="h-64 relative">
              <Image
                src={service.img?.imageUrl || ''}
                alt={service.title}
                fill
                className="object-cover"
                data-ai-hint={service.img?.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1822] to-transparent" />
            </div>
            <div className="p-10 flex flex-col flex-1">
              <span className={`${service.tagColor} text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block`}>
                {service.tag}
              </span>
              <h3 className="text-2xl font-headline font-bold mb-6 text-white tracking-tighter">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm font-body leading-relaxed mb-10 flex-1">
                {service.desc}
              </p>
              <a href="#assistant" className="btn-glow w-full !text-white !border-white/10 hover:!border-primary">
                Saiba Mais
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
