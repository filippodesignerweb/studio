
'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Targets() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center center',
          end: '+=500',
          scrub: 0.5,
          pin: true,
        }
      });

      tl.to(titleRef.current, { opacity: 0, duration: 0.2 }, 0)
        .to(gridRef.current, { 
          scale: 0, 
          filter: 'brightness(10)', 
          opacity: 0, 
          duration: 0.4, 
          ease: 'power2.inOut' 
        }, 0)
        .to(portalRef.current, { 
          scale: 1500, 
          duration: 0.8, 
          ease: 'power2.in' 
        }, 0.2);
    });

    return () => ctx.revert();
  }, []);

  const targets = [
    { title: 'Residências Luxo', desc: 'Cinema imersivo e áreas gourmet diferenciadas.' },
    { title: 'Fachadas Comerciais', desc: 'Destaque sua marca com tecnologia de alto brilho.' },
    { title: 'Bares e Restaurantes', desc: 'Transmissões de jogos com qualidade de imagem superior.' },
    { title: 'Eventos Especiais', desc: 'Ativações memoráveis e projetos temporários de impacto.' }
  ];

  return (
    <section 
      id="section-3" 
      ref={sectionRef} 
      className="relative w-full min-h-screen bg-dark flex flex-col items-center justify-center py-24 md:py-32 z-20 overflow-hidden text-white border-t border-white/5"
    >
      <div 
        id="portal-circle" 
        ref={portalRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full z-[100] pointer-events-none shadow-[0_0_50px_#fff] scale-0 opacity-100"
      ></div>

      <div className="relative z-30 w-full px-6 mb-12">
        <h2 
          ref={titleRef}
          className="text-center font-bold text-3xl md:text-5xl lg:text-[54px] drop-shadow-2xl uppercase font-headline tracking-tighter"
        >
          PARA QUEM É A <span className="animate-gradient-text font-bold">LED 4U</span>?
        </h2>
      </div>
      
      <div 
        id="target-grid-wrapper" 
        ref={gridRef}
        className="container max-w-[1360px] mx-auto px-6 relative z-30"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((target, idx) => (
            <div 
              key={idx} 
              className="target-card p-6 md:p-8 rounded-2xl bg-[#1A1822]/80 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-2 group"
            >
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 font-headline uppercase tracking-tight">
                {target.title}
              </h3>
              <p className="text-white/70 text-sm font-body">
                {target.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
