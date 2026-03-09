'use client';

import React from 'react';
import Link from 'next/link';

export function Targets() {
  const whatsappUrl = "https://tintim.link/whatsapp/0c01772c-61fd-4f99-ab17-e5ef59b8a87b/53fb4310-08e2-4f11-9fcf-64c042748914";

  const targets = [
    { 
      title: 'Residências de Alto Padrão', 
      desc: 'Transforme sua área gourmet ou cinema em uma experiência imersiva.',
      btn: 'Ver Soluções Residenciais',
      href: '/case'
    },
    { 
      title: 'Fachadas Comerciais', 
      desc: 'Aumente sua visibilidade e destaque sua marca com painéis de LED outdoor de alto impacto visual.',
      btn: 'Ver Soluções para Fachadas',
      href: '/case'
    },
    { 
      title: 'Bares e Restaurantes', 
      desc: 'Transmissões profissionais de jogos e eventos com qualidade superior de imagem.',
      btn: 'Ver Soluções para Bares',
      href: '/case'
    },
    { 
      title: 'Eventos', 
      desc: 'Soluções completas em painéis de LED para eventos empresariais, ativações de marca e projetos estruturados.',
      btn: 'Solicitar Avaliação para Evento',
      href: whatsappUrl,
      isExternal: true
    }
  ];

  return (
    <section 
      id="section-targets" 
      className="relative w-full bg-dark flex flex-col items-center justify-center py-24 md:py-32 z-20 overflow-hidden text-white border-t border-white/5"
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
              className="target-card p-8 md:p-10 rounded-2xl bg-[#1A1822]/80 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 group"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 font-headline uppercase tracking-tight min-h-[60px]">
                {target.title}
              </h3>
              <p className="text-white/70 text-sm font-body leading-relaxed mb-8 flex-grow">
                {target.desc}
              </p>
              
              {target.isExternal ? (
                <a 
                  href={target.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors flex items-center gap-2 group/btn font-headline"
                >
                  {target.btn}
                  <span className="block w-4 h-px bg-current transition-all group-hover/btn:w-8"></span>
                </a>
              ) : (
                <Link 
                  href={target.href}
                  className="text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors flex items-center gap-2 group/btn font-headline"
                >
                  {target.btn}
                  <span className="block w-4 h-px bg-current transition-all group-hover/btn:w-8"></span>
                </Link>
              )}
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
