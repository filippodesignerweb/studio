'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutUs() {
  const totemImg = PlaceHolderImages.find(img => img.id === 'totem');

  return (
    <section id="sobre-nos" className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="container max-w-[1360px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="relative w-full lg:w-1/2">
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] md:aspect-[2/3] relative">
            <Image
              src={totemImg?.imageUrl || ''}
              alt="LED 4U Totem Display"
              fill
              className="object-cover"
              data-ai-hint={totemImg?.imageHint}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-start text-dark">
          <div className="inline-block border border-dark/20 rounded-full px-5 py-2 mb-8">
            <span className="text-[10px] md:text-xs font-bold tracking-[4px] uppercase text-dark/60">
              Sobre Nós
            </span>
          </div>

          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.2] mb-10 font-headline lowercase tracking-tighter">
            PROJETOS QUE <br />
            <span className="text-gradient-animate font-bold">IMPACTAM</span>
          </h2>

          <div className="space-y-6 mb-12 text-gray-600 text-lg md:text-xl font-medium font-body">
            <p>
              A <span className="text-primary font-bold">LED 4U</span> é especialista em projetos completos de painéis de LED para ambientes comerciais e residenciais de alto padrão.
            </p>
            <p>
              Não entregamos apenas tecnologia, mas sim soluções visuais que valorizam arquiteturas, potencializam marcas e criam experiências imersivas inesquecíveis.
            </p>
            <p>
              Trabalhamos com estrutura técnica profissional, instalação especializada e suporte contínuo para garantir que seu investimento brilhe por anos.
            </p>
          </div>

          <a href="#assistant" className="btn-glow !text-dark border-dark/20 hover:!text-white hover:border-transparent">
            Agendar Reunião
          </a>
        </div>
      </div>
    </section>
  );
}
