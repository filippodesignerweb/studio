'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function Technology() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current || !wrapperRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
      
      const x = (clientX - (left + width / 2)) / (width / 2);
      const y = (clientY - (top + height / 2)) / (height / 2);
      
      gsap.to(wrapperRef.current, {
        rotateY: x * 20,
        rotateX: -y * 20,
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const features = [
    { title: 'Brilho Extremo', desc: 'Imagem nítida sob sol intenso, garantindo visibilidade perfeita em qualquer horário e clima.' },
    { title: 'Alta Fidelidade', desc: 'Cores vivas e uniformes, reproduzindo os seus conteúdos com qualidade fotográfica e sem distorção.' },
    { title: 'Durabilidade', desc: 'Painéis blindados e altamente resistentes contra chuva, variações de calor e poeira.' },
    { title: 'Sistema Modular', desc: 'Totalmente dimensionado sob medida para o seu projeto, permitindo infinitas possibilidades.' }
  ];

  return (
    <section 
      id="tecnologia-profissional" 
      ref={sectionRef}
      className="bg-black py-24 md:py-32 relative overflow-hidden flex items-center justify-center"
      style={{ perspective: '2000px' }}
    >
      <div className="container max-w-[1360px] mx-auto px-6 relative flex flex-col items-center">
        <h2 className="text-center font-bold text-3xl md:text-5xl lg:text-[54px] mb-12 md:mb-20 text-white uppercase tracking-tight z-[60] relative font-headline">
          TECNOLOGIA PROFISSIONAL QUE <br className="hidden md:block" /> <span className="text-gradient-animate font-bold uppercase">GARANTE RESULTADO</span>
        </h2>
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-40">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {features.map((f, i) => (
              <div 
                key={i} 
                className="p-6 md:p-8 rounded-2xl bg-[#1A1822]/80 backdrop-blur-md border border-white/10 shadow-2xl transition-transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(152,0,255,0.2)] group"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white font-headline uppercase tracking-tight">{f.title}</h3>
                <p className="text-white/70 text-sm md:text-base font-body">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2 w-full">
            <div 
              ref={wrapperRef}
              className="relative w-full max-w-[500px] lg:max-w-[600px] aspect-square rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/20 shadow-[0_0_80px_rgba(152,0,255,0.2)] md:shadow-[0_0_100px_rgba(152,0,255,0.3)]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img 
                src="https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/m6_1x.webp" 
                className="w-full h-full object-cover"
                alt="Tech Image 3D"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
