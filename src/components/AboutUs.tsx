'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const whatsappUrl = "https://tintim.link/whatsapp/0c01772c-61fd-4f99-ab17-e5ef59b8a87b/53fb4310-08e2-4f11-9fcf-64c042748914";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="sobre-nos" className="bg-white py-24 md:py-32 relative overflow-hidden reveal" data-theme="light">
      <div className="container max-w-[1360px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="relative w-full lg:w-1/2">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <img 
              src="https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/QUEM%20SOMOS%201.webp" 
              alt="Sobre a LED 4U" 
              className="w-full h-auto object-cover min-h-[350px] md:min-h-[400px]" 
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-start text-dark">
          <div className="inline-block border border-dark/20 rounded-full px-5 py-2 mb-6 md:mb-8">
            <span className="text-[10px] md:text-xs font-bold tracking-[4px] uppercase text-dark/60 font-headline">Sobre Nós</span>
          </div>
          
          <h2 className="font-black text-2xl md:text-3xl lg:text-[34px] leading-[1.3] mb-8 md:mb-10 font-headline uppercase tracking-tight">
            A <span className="text-gradient-animate font-black">LED 4U</span> é especializada em projetos completos de <span className="text-gradient-animate font-black">painéis de LED</span> para ambientes comerciais e residenciais de alto padrão.
          </h2>
          
          <div className="space-y-4 md:space-y-6 mb-10 md:mb-12 text-gray-600 text-base md:text-lg font-medium font-body">
            <p>Trabalhamos com estrutura técnica profissional, instalação especializada e soluções sob medida.</p>
            <p>Atendemos clientes que buscam qualidade, segurança e impacto real — não soluções improvisadas.</p>
          </div>

          <Link 
            href="/quem-somos" 
            className="btn-glow-green"
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </section>
  );
}