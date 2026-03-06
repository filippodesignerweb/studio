'use client';

import React from 'react';
import { Home, Store, Utensils, Zap } from 'lucide-react';

const targets = [
  {
    icon: <Home className="w-8 h-8 text-primary" />,
    title: 'Residências Luxo',
    desc: 'Cinema imersivo e áreas gourmet diferenciadas com telões de alta definição.'
  },
  {
    icon: <Store className="w-8 h-8 text-accent" />,
    title: 'Fachadas Comerciais',
    desc: 'Destaque sua marca com tecnologia de alto brilho e baixo consumo.'
  },
  {
    icon: <Utensils className="w-8 h-8 text-primary" />,
    title: 'Bares e Restaurantes',
    desc: 'Transmissões de jogos e ambientação digital with qualidade superior.'
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: 'Eventos Especiais',
    desc: 'Ativações memoráveis e projetos temporários de alto impacto visual.'
  }
];

export function Targets() {
  return (
    <section className="bg-dark py-32 border-t border-white/5 relative z-20">
      <div className="container max-w-[1360px] mx-auto px-6">
        <h2 className="text-center font-bold text-3xl md:text-5xl lg:text-6xl mb-24 font-headline tracking-tighter lowercase">
          PARA QUEM É A <span className="text-gradient-animate font-bold">LED 4U</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {targets.map((target, idx) => (
            <div key={idx} className="glass-card p-10 rounded-2xl hover:bg-white/[0.05] transition-all group">
              <div className="mb-8 p-4 rounded-xl bg-white/5 inline-block group-hover:scale-110 transition-transform">
                {target.icon}
              </div>
              <h3 className="text-xl font-headline font-bold text-white mb-4 tracking-tighter">
                {target.title}
              </h3>
              <p className="text-white/60 text-sm font-body leading-relaxed">
                {target.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
