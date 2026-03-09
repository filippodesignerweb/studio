'use client';

import React, { useEffect, useRef } from 'react';

export function Hero() {
  const whatsappUrl = "https://tintim.link/whatsapp/0c01772c-61fd-4f99-ab17-e5ef59b8a87b/53fb4310-08e2-4f11-9fcf-64c042748914";
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (iframeRef.current && iframeRef.current.contentWindow) {
            try {
              // Usando a API do Vimeo para controlar o player via postMessage
              if (entry.isIntersecting) {
                iframeRef.current.contentWindow.postMessage('{"method":"play"}', '*');
              } else {
                iframeRef.current.contentWindow.postMessage('{"method":"pause"}', '*');
              }
            } catch (e) {
              // Silencioso se o frame ainda não estiver pronto
            }
          }
        });
      },
      { threshold: 0.05 } // Inicia a ação assim que 5% da hero estiver visível
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative w-full h-screen bg-dark overflow-hidden flex items-center" 
      data-theme="dark"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Background Vimeo Video - Adicionado param api=1 para controle via JS */}
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

      <div className="relative z-10 container max-w-[1360px] mx-auto px-6 text-center lg:text-left items-center lg:items-start text-white">
        {/* Heading adaptável com escalas de tamanho mais suaves para responsividade */}
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
