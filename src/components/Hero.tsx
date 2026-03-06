
'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textsRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = "https://wa.me/55999999999";

  useEffect(() => {
    if (!wrapperRef.current) return;

    const isMobile = window.innerWidth < 768;
    const targetW = isMobile ? 280 : 350;
    const targetH = isMobile ? 350 : 450;
    const getOffsetLeft = () => isMobile ? 24 : (window.innerWidth - Math.min(1360, window.innerWidth - 48)) / 2;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: '+=1500',
          scrub: 1,
          pin: true,
          onLeave: () => {
            gsap.set(bgRef.current, { visibility: 'hidden' });
            gsap.set(placeholderRef.current, { opacity: 1 });
            if (trackRef.current && !trackRef.current.dataset.duplicated) {
              const track = trackRef.current;
              track.innerHTML += track.innerHTML;
              track.dataset.duplicated = "true";
              gsap.to(track, {
                xPercent: -50,
                repeat: -1,
                duration: 25,
                ease: 'none',
              });
            }
          },
          onEnterBack: () => {
            gsap.set(bgRef.current, { visibility: 'visible' });
            gsap.set(placeholderRef.current, { opacity: 0 });
          }
        }
      });

      tl.to(textsRef.current, { autoAlpha: 0, y: -100, duration: 1 }, 0)
        .to(bgRef.current, {
          width: targetW,
          height: targetH,
          borderRadius: 16,
          top: '50%',
          left: getOffsetLeft(),
          yPercent: -50,
          duration: 3,
          ease: 'power2.inOut'
        }, 0.5)
        .to(marqueeRef.current, { autoAlpha: 1, duration: 0.1 }, 1.5)
        .to('.carousel-item', { x: 0, opacity: 1, stagger: 0.1, duration: 2 }, 2);
    });

    return () => ctx.revert();
  }, []);

  const items = [
    'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/11_1x.webp',
    'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/2_1x.webp',
    'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/4_1x.webp',
    'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/6_1x.webp'
  ];

  return (
    <div id="animation-pin-wrapper" ref={wrapperRef} className="relative w-full h-screen bg-dark overflow-hidden">
      <div 
        id="dynamic-bg" 
        ref={bgRef} 
        className="absolute top-0 left-0 w-full h-full z-0 origin-center overflow-hidden"
      >
        <img 
          src="https://rtlxptnormal.easybuilder.com.br/wp-content/uploads/2025/12/Image_fx-3.webp" 
          className="w-full h-full object-cover"
          alt="LED 4U Background"
        />
        <div id="dynamic-overlay" className="absolute inset-0 bg-black/30"></div>
      </div>

      <div 
        id="hero-texts" 
        ref={textsRef} 
        className="absolute inset-0 z-10 flex flex-col justify-end pb-16 lg:pb-32 container max-w-[1360px] mx-auto px-6 text-center lg:text-left items-center lg:items-start text-white"
      >
        <h1 className="font-bold leading-[1.1] mb-6 text-[32px] md:text-[40px] lg:text-[54px] max-w-4xl lg:max-w-[60%] font-headline uppercase tracking-tight">
          Especialistas em <span className="text-gradient-animate">painéis de LED</span> para Residências, Fachadas e Empresas
        </h1>
        <p className="text-white/90 font-body leading-relaxed mb-10 text-[16px] md:text-[18px] max-w-2xl">
          Projetos sob medida, instalação completa e suporte técnico especializado.
        </p>
        <a 
          href={whatsappUrl} 
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow-green"
        >
          Solicitar Avaliação Técnica
        </a>
      </div>

      <div 
        id="carousel-track-wrapper" 
        ref={marqueeRef} 
        className="absolute top-1/2 left-0 -translate-y-1/2 w-full z-10 opacity-0 pointer-events-none"
      >
        <div className="w-full max-w-[1360px] mx-auto px-6">
          <div id="marquee-group-main" ref={trackRef} className="flex items-center gap-4 md:gap-6 w-max">
            <div 
              id="hero-placeholder" 
              ref={placeholderRef} 
              className="w-[280px] md:w-[350px] h-[350px] md:h-[450px] flex-shrink-0 rounded-[16px] overflow-hidden opacity-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://rtlxptnormal.easybuilder.com.br/wp-content/uploads/2025/12/Image_fx-3.webp')" }}
            ></div>
            {items.map((src, i) => (
              <div 
                key={i} 
                className="carousel-item w-[280px] md:w-[350px] h-[350px] md:h-[450px] flex-shrink-0 rounded-[16px] overflow-hidden opacity-0 translate-x-[100px]"
              >
                <img src={src} className="w-full h-full object-cover" alt={`Portfolio ${i}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
