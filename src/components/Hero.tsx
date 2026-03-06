'use client';

import React from 'react';

export function Hero() {
  const whatsappUrl = "https://wa.me/55999999999";

  return (
    <section id="hero" className="relative w-full h-screen bg-dark overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://rtlxptnormal.easybuilder.com.br/wp-content/uploads/2025/12/Image_fx-3.webp" 
          className="w-full h-full object-cover"
          alt="LED 4U Background"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 container max-w-[1360px] mx-auto px-6 text-center lg:text-left items-center lg:items-start text-white">
        <h1 className="font-bold leading-[1.1] mb-6 text-[32px] md:text-[50px] lg:text-[64px] max-w-4xl font-headline uppercase tracking-tight">
          Especialistas em <span className="text-gradient-animate">painéis de LED</span> para Residências, Fachadas e Empresas
        </h1>
        <p className="text-white/90 font-body leading-relaxed mb-10 text-[18px] md:text-[20px] max-w-2xl">
          Projetos sob medida, instalação completa e suporte técnico especializado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a 
            href={whatsappUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow-green"
          >
            Solicitar Avaliação Técnica
          </a>
        </div>
      </div>
    </section>
  );
}
