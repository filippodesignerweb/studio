
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
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    if (!containerRef.current) return;

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

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=100%', 
          pin: true,     
          scrub: 1,    
        }
      });

      tl.to(heroContentRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.5
      })
      .to(transitionLogoRef.current, {
        opacity: 1,
        scale: 1.1, 
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.2")
      .to(transitionLogoRef.current, {
        opacity: 0,
        scale: 1.2,
        duration: 0.5,
        ease: "power2.in"
      })
      .to(blackOverlayRef.current, {
        opacity: 1,
        duration: 0.8
      }, "-=0.5");

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
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <iframe
          ref={iframeRef}
          src="https://player.vimeo.com/video/1171839535?background=1&autoplay=1&loop=1&muted=1&api=1"
          className="absolute top-1/2 left-1/2 min-w-[177.77vh] min-h-[100vh] md:min-w-[100vw] md:min-h-[56.25vw] w-auto h-auto scale-[1.1] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="LED 4U Background Video"
        ></iframe>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div 
        ref={blackOverlayRef}
        className="absolute inset-0 z-[40] bg-black opacity-0 pointer-events-none"
      />

      <div className="absolute inset-0 z-[50] flex items-center justify-center pointer-events-none">
        <img 
          ref={transitionLogoRef}
          src="https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/led4u.webp" 
          alt="LED 4U Transition" 
          className="w-[140px] md:w-[200px] lg:w-[250px] h-auto opacity-0 scale-[0.9] brightness-0 invert"
        />
      </div>

      <div 
        ref={heroContentRef}
        className="relative z-10 container max-w-[1360px] mx-auto px-6 text-center lg:text-left flex flex-col items-center lg:items-start text-white pt-20 md:pt-32 lg:pt-0"
      >
        <h1 className="font-bold leading-[1.1] mb-6 text-[24px] sm:text-[32px] md:text-[40px] lg:text-[44px] xl:text-[54px] max-w-4xl font-headline uppercase tracking-tight">
          Especialistas em <span className="text-gradient-animate">painéis de LED</span> para Residências, Fachadas e Empresas
        </h1>
        <p className="text-white/90 font-body leading-relaxed mb-8 text-[14px] md:text-[16px] lg:text-[18px] max-w-2xl">
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
