'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-led');

  return (
    <section className="relative w-full h-screen overflow-hidden bg-dark">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ''}
          alt="LED 4U Background"
          fill
          className="object-cover opacity-40"
          priority
          data-ai-hint={heroImg?.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col justify-end pb-24 md:pb-32 h-full max-w-[1360px] mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold leading-[1.05] mb-8">
            Especialistas em <br />
            <span className="text-gradient-animate">painéis de LED</span> <br />
            <span className="text-white/80">sob medida</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 font-body leading-relaxed">
            Projetos residenciais de luxo, fachadas comerciais e eventos memoráveis com tecnologia de ponta e suporte técnico especializado.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#assistant" className="btn-glow !bg-primary !border-primary text-white">
              Avaliação Técnica Grátis
            </a>
            <a href="#venda-locacao" className="btn-glow">
              Conheça Soluções
            </a>
          </div>
        </div>
      </div>

      {/* Stats Quick View */}
      <div className="absolute bottom-0 right-0 hidden lg:block p-12 z-10">
        <div className="flex gap-16">
          <div>
            <div className="text-4xl font-headline font-bold">+400</div>
            <div className="text-xs uppercase tracking-widest text-white/50">Clientes Atendidos</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold">+2k m²</div>
            <div className="text-xs uppercase tracking-widest text-white/50">LED Instalados</div>
          </div>
        </div>
      </div>
    </section>
  );
}
