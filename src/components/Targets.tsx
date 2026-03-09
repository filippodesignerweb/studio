'use client';

import React from 'react';
import Link from 'next/link';

export function Targets() {
  const targets = [
    { title: 'Residências Luxo', desc: 'Cinema imersivo e áreas gourmet diferenciadas.' },
    { title: 'Fachadas Comerciais', desc: 'Destaque sua marca com tecnologia de alto brilho.' },
    { title: 'Bares e Restaurantes', desc: 'Transmissões de jogos com qualidade de imagem superior.' },
    { title: 'Eventos Especiais', desc: 'Ativações memoráveis e projetos temporários de impacto.' }
  ];

  return (
    <section 
      id="section-targets" 
      className="relative w-full bg-dark flex flex-col items-center justify-center py-24 md:py-32 z-20 overflow-hidden text-white border-t border-white/5"
    >
      <div className="relative z-30 w-full px-6 mb-16">
        <h2 className="text-center font-bold text-3xl md:text-5xl lg:text-[54px] drop-shadow-2xl uppercase font-headline tracking-tighter">
          PARA QUEM É A <span className="text-gradient-animate font-bold">LED 4U</span>?
        </h2>
      </div>
      
      <div className="container max-w-[1360px] mx-auto px-6 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {targets.map((target, idx) => (
            <div 
              key={idx} 
              className="target-card p-8 md:p-10 rounded-2xl bg-[#1A1822]/80 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 group"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 font-headline uppercase tracking-tight">
                {target.title}
              </h3>
              <p className="text-white/70 text-base font-body leading-relaxed">
                {target.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/case" className="btn-glow-green">
            Saiba Mais
          </Link>
        </div>
      </div>
    </section>
  );
}