'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Barra de progresso da timeline
      gsap.to(progressRef.current, {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        }
      });

      // Ativação dos itens ao passar por eles
      document.querySelectorAll('.timeline-item').forEach(item => {
        ScrollTrigger.create({
          trigger: item,
          start: 'top center',
          onEnter: () => item.classList.add('active'),
          onLeaveBack: () => item.classList.remove('active')
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const steps = [
    { number: '01', title: 'Consultoria e Visita Técnica', desc: 'Análise técnica detalhada presencialmente.' },
    { number: '02', title: 'Projeto e Estrutura', desc: 'Desenvolvimento da solução completa técnica.' },
    { number: '03', title: 'Instalação Profissional', desc: 'Equipe especializada e agendamento organizado.' },
    { number: '04', title: 'Suporte e Acompanhamento', desc: 'Garantia real e suporte técnico contínuo.' },
  ];

  return (
    <section 
      id="timeline-section" 
      ref={containerRef}
      className="bg-white py-20 md:py-32 relative overflow-hidden" 
      data-theme="light"
    >
      <div className="container max-w-[1360px] mx-auto px-6 text-dark">
        <h2 className="text-center font-bold text-3xl md:text-5xl lg:text-[54px] mb-16 md:mb-24 uppercase tracking-tight font-headline">
          COMO <span className="text-gradient-animate font-bold uppercase">DESENVOLVEMOS</span> SEU PROJETO
        </h2>
        
        <div className="timeline-container relative max-w-[1200px] margin-0 auto pb-12 md:pb-24">
          <div className="absolute left-[20px] md:left-1/2 md:-ml-[2px] top-0 bottom-0 width-[4px] bg-black/5 rounded-[2px] w-[4px]"></div>
          <div 
            ref={progressRef}
            className="absolute left-[20px] md:left-1/2 md:-ml-[2px] top-0 width-[4px] bg-gradient-to-bottom from-accent to-[#12CFDB] rounded-[2px] z-10 w-[4px] h-0"
          ></div>
          
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={cn(
                "timeline-item relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-16 md:mb-32 group",
                idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
              )}
            >
              <div className={cn(
                "flex flex-col justify-center",
                idx % 2 === 0 ? "md:text-right md:pr-16 md:items-end" : "md:pl-16 md:items-start"
              )}>
                <div className="text-accent text-3xl md:text-5xl font-black mb-2 opacity-20 group-[.active]:opacity-100 transition-opacity font-headline">
                  {step.number}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 font-headline uppercase tracking-tight">{step.title}</h3>
                <p className="text-gray-600 text-sm md:text-lg font-body">{step.desc}</p>
              </div>
              <div className="hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
