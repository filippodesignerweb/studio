'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  useEffect(() => {
    if (!isMounted || !containerRef.current || !progressRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(progressRef.current, {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 60%',
          end: 'bottom 60%',
          scrub: 0.5,
        }
      });

      const items = gsap.utils.toArray('.timeline-item');
      items.forEach((item: any) => {
        ScrollTrigger.create({
          trigger: item,
          start: 'top 60%',
          onEnter: () => item.classList.add('active'),
          onLeaveBack: () => item.classList.remove('active')
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isMounted]);

  const steps = [
    { number: '01', title: 'Consultoria e Visita Técnica', desc: 'Análise técnica detalhada presencialmente.' },
    { number: '02', title: 'Projeto e Estrutura', desc: 'Desenvolvimento da solução completa técnica.' },
    { number: '03', title: 'Instalação Profissional', desc: 'Equipe especializada e agendamento organizado.' },
    { number: '04', title: 'Suporte e Acompanhamento', desc: 'Garantia real e suporte técnico contínuo.' },
  ];

  if (!isMounted) return <section className="bg-white py-20 min-h-[500px]" />;

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
        
        <div className="timeline-container relative max-w-[1200px] mx-auto pb-12 md:pb-24">
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[4px] bg-black/5 rounded-full"></div>
          
          <div 
            ref={progressRef}
            className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 w-[4px] bg-gradient-to-b from-accent to-[#12CFDB] rounded-full z-10 h-0"
          ></div>
          
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={cn(
                "timeline-item relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-16 md:mb-32 group opacity-20 transition-all duration-700 scale-95",
                "[&.active]:opacity-100 [&.active]:scale-100"
              )}
            >
              <div className={cn(
                "hidden md:flex flex-col justify-center text-right pr-16 items-end",
                idx % 2 !== 0 && "invisible"
              )}>
                {idx % 2 === 0 && (
                  <>
                    <div className="text-accent text-3xl md:text-5xl font-black mb-2 font-headline">{step.number}</div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 font-headline uppercase tracking-tight">{step.title}</h3>
                    <p className="text-gray-600 text-sm md:text-lg font-body">{step.desc}</p>
                  </>
                )}
              </div>

              <div className={cn(
                "hidden md:flex flex-col justify-center text-left pl-16 items-start",
                idx % 2 === 0 && "invisible"
              )}>
                {idx % 2 !== 0 && (
                  <>
                    <div className="text-accent text-3xl md:text-5xl font-black mb-2 font-headline">{step.number}</div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 font-headline uppercase tracking-tight">{step.title}</h3>
                    <p className="text-gray-600 text-sm md:text-lg font-body">{step.desc}</p>
                  </>
                )}
              </div>

              <div className="md:hidden pl-12 flex flex-col justify-center">
                <div className="text-accent text-3xl font-black mb-2 font-headline">{step.number}</div>
                <h3 className="text-xl font-bold mb-2 font-headline uppercase tracking-tight">{step.title}</h3>
                <p className="text-gray-600 text-sm font-body">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
