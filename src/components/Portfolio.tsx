
'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainImgRef = useRef<HTMLDivElement>(null);
  const secondaryImgsRef = useRef<HTMLDivElement[]>([]);
  const gradientRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const zoomTL = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        }
      });

      // Animação das imagens secundárias sumindo
      secondaryImgsRef.current.forEach(img => {
        if (img) {
          zoomTL.to(img, { scale: 3, opacity: 0, ease: 'none' }, 0);
        }
      });

      // Zoom na imagem principal para ocupar a tela toda
      zoomTL.to(mainImgRef.current, {
        width: '100vw',
        height: '100vh',
        borderWidth: 0,
        borderRadius: 0,
        duration: 1,
        ease: 'power2.inOut'
      }, 0);

      // Mostrar gradiente e texto
      zoomTL.to(gradientRef.current, { opacity: 1, duration: 0.4 }, 0.6)
            .to(contentRef.current, { opacity: 1, y: 0, duration: 0.4 }, 0.6);
    });

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !secondaryImgsRef.current.includes(el)) {
      secondaryImgsRef.current.push(el);
    }
  };

  return (
    <section 
      id="section-4" 
      ref={containerRef}
      className="relative w-full h-[200vh] bg-white z-5" 
      data-theme="light"
    >
      <div className="sticky top-0 h-10vh w-full overflow-hidden flex items-center justify-center min-h-screen">
        <div 
          ref={mainImgRef}
          className="absolute z-[35] w-[25vw] h-[25vh] rounded-lg shadow-2xl border-4 border-white overflow-hidden flex items-center justify-center"
        >
          <img 
            src="https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/m14_1x.webp" 
            className="w-full h-full object-cover"
            alt="Main Project"
          />
        </div>
        
        <div 
          ref={addToRefs}
          className="absolute secondary-zoom z-10 w-[20vw] h-[30vh] -translate-x-[35vw] -translate-y-[20vh]"
        >
          <img src="https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/m1_1x.webp" className="w-full h-full object-cover rounded-lg shadow-xl" alt="Side Project 1" />
        </div>
        <div 
          ref={addToRefs}
          className="absolute secondary-zoom z-10 w-[22vw] h-[25vh] translate-x-[38vw] -translate-y-[10vh]"
        >
          <img src="https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/m2_1x.webp" className="w-full h-full object-cover rounded-lg shadow-xl" alt="Side Project 2" />
        </div>
        
        <div 
          ref={gradientRef}
          className="absolute bottom-0 left-0 w-full h-[70vh] z-[38] opacity-0 pointer-events-none" 
          style={{ background: 'linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0.95) 30%, rgba(255,255,255,0.7) 60%, transparent 100%)' }}
        ></div>

        <div 
          ref={contentRef}
          className="absolute inset-0 z-40 opacity-0 flex items-end justify-center pb-[10vh] md:pb-[15vh] pointer-events-none px-6 text-dark"
        >
          <h2 className="font-black text-4xl md:text-7xl lg:text-[100px] uppercase tracking-tighter text-center leading-[1.1] font-headline">
            PROJETOS <br /> <span className="animate-gradient-text italic">REALIZADOS</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
