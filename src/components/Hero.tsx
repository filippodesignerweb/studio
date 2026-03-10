'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function Hero() {
  const whatsappUrl = "https://tintim.link/whatsapp/0c01772c-61fd-4f99-ab17-e5ef59b8a87b/53fb4310-08e2-4f11-9fcf-64c042748914";
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const transitionLogoRef = useRef<HTMLImageElement>(null);
  const blackOverlayRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    // Observer para o player de vídeo
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (iframeRef.current && iframeRef.current.contentWindow) {
            try {
              if (entry.isIntersecting) {
                iframeRef.current.contentWindow.postMessage('{"method":"play"}', '*');
              } else {
                iframeRef.current.contentWindow.postMessage('{"method":"pause"}', '*');
              }
            } catch (e) {}
          }
        });
      },
      { threshold: 0.05 }
    );

    videoObserver.observe(containerRef.current);

    // Animação de Transição "Boom"
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=100%', // Duração da animação baseada no scroll
          pin: true,     // Fixa a hero na tela durante a animação
          scrub: 0.5,    // Suavidade do scroll
        }
      });

      tl.to(heroContentRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.5
      })
      .to(transitionLogoRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5
      }, "-=0.3")
      .to(transitionLogoRef.current, {
        scale: 35,
        opacity: 0,
        duration: 1,
        ease: "power2.in"
      })
      .to(blackOverlayRef.current, {
        opacity: 1,
        duration: 0.8
      }, "-=0.8");

    }, containerRef);

    return () => {
      videoObserver.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen bg-dark overflow-hidden flex items-center" 
      data-theme="dark"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <iframe
          ref={iframeRef}
          src="https://player.vimeo.com/video/1171839535?background=1&autoplay=1&loop=1&muted=1&api=1"
          className="absolute top-1/2 left-1/2 min-w-[100%] min-h-[100%] w-auto h-auto scale-[1.3] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="LED 4U Background Video"
        ></iframe>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Black Overlay for Transition */}
      <div 
        ref={blackOverlayRef}
        className="absolute inset-0 z-[40] bg-black opacity-0 pointer-events-none"
      />

      {/* Transition Logo (Centered) */}
      <div className="absolute inset-0 z-[50] flex items-center justify-center pointer-events-none">
        <img 
          ref={transitionLogoRef}
          src="https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/led4u.webp" 
          alt="LED 4U Transition" 
          className="w-[200px] md:w-[350px] h-auto opacity-0 scale-[0.8] brightness-0 invert"
        />
      </div>

      {/* Hero Content */}
      <div 
        ref={heroContentRef}
        className="relative z-10 container max-w-[1360px] mx-auto px-6 text-center lg:text-left items-center lg:items-start text-white"
      >
        <h1 className="font-bold leading-[1.1] mb-6 text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] max-w-4xl font-headline uppercase tracking-tight">
          Especialistas em <span className="text-gradient-animate">painéis de LED</span> para Residências, Fachadas e Empresas
        </h1>
        <p className="text-white/90 font-body leading-relaxed mb-10 text-[16px] md:text-[18px] lg:text-[20px] max-w-2xl">
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
