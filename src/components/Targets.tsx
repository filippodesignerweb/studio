'use client';

import React from 'react';
import Link from 'next/link';

export function Targets() {
  const targets = [
    { 
      title: 'Residências de Alto Padrão', 
      desc: 'Transforme sua área gourmet ou cinema em uma experiência imersiva.',
      image: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/para%20quem%20e%CC%81/pag%201%20residen%201_1x.webp'
    },
    { 
      title: 'Fachadas Comerciais', 
      desc: 'Aumente sua visibilidade e destaque sua marca com painéis de LED outdoor de alto impacto visual.',
      image: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/para%20quem%20e%CC%81/pag%201%20fachad%201_1x.webp'
    },
    { 
      title: 'Bares e Restaurantes', 
      desc: 'Transmissões profissionais de jogos e eventos com qualidade superior de imagem.',
      image: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/para%20quem%20e%CC%81/pag%201%20bares%20%201_1x.webp'
    },
    { 
      title: 'Eventos', 
      desc: 'Soluções completas em painéis de LED para eventos empresariais, ativações de marca e projetos estruturados.',
      image: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/para%20quem%20e%CC%81/pag%201%20eventos%201_1x.webp'
    }
  ];

  return (
    <section 
      id="section-targets" 
      className="relative w-full bg-dark flex flex-col items-center justify-center py-24 md:py-32 z-20 overflow-hidden text-white border-t border-white/5 reveal"
      data-theme="dark"
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
              className="target-card rounded-2xl bg-[#1A1822]/80 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 group overflow-hidden h-full"
            >
              <div className="w-full h-48 overflow-hidden bg-white/5">
                <img 
                  src={target.image} 
                  alt={target.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="eager"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-4 font-headline uppercase tracking-tight min-h-[60px]">
                  {target.title}
                </h3>
                <p className="text-white/70 text-sm font-body leading-relaxed">
                  {target.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/case" className="btn-glow-green">
            VER MAIS
          </Link>
        </div>
      </div>
    </section>
  );
}