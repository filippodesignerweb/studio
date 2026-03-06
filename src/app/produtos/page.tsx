'use client';

import React from 'react';
import Script from 'next/script';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function ProdutosPage() {
  return (
    <>
      <Script 
        type="module" 
        src="https://unpkg.com/@splinetool/viewer@1.9.7/build/spline-viewer.js" 
        strategy="afterInteractive"
      />
      
      <style jsx global>{`
        spline-viewer::part(logo) {
          display: none !important;
        }
      `}</style>

      <main className="min-h-screen bg-[#0E0D12] text-white">
        <Header />

        <section className="relative w-full min-h-screen flex flex-col items-center justify-start pt-32 pb-24 px-6 text-center">
          {/* Títulos Gigantes */}
          <h1 className="font-black text-6xl md:text-8xl lg:text-[120px] uppercase tracking-tighter leading-[1.1] mb-4 md:mb-6 font-headline">
            Tipos de <br className="md:hidden" />
            <span className="text-gradient-animate">painéis</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-medium max-w-3xl mb-16 md:mb-24 font-body">
            Temos o painel perfeito para o seu negócio ou sua necessidade
          </p>

          {/* Grid de Cards de Painéis */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full max-w-[1360px] mx-auto text-left">
            
            {/* Painel P1 */}
            <div className="bg-white/5 border border-white/10 rounded-[24px] p-6 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 group flex flex-col relative z-10">
              <div className="w-full h-[320px] mb-6 relative rounded-xl overflow-hidden cursor-grab active:cursor-grabbing">
                {/* @ts-ignore */}
                <spline-viewer url="https://prod.spline.design/8U4UcWyiaGJFd-mz/scene.splinecode" class="w-full h-full"></spline-viewer>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors font-headline uppercase tracking-tight">Painéis P1 INDOOR</h3>
              <p className="text-white/70 text-sm leading-relaxed font-body">
                Experimente a máxima nitidez com nossos painéis de LED P1. Com apenas <strong className="text-white">1 milímetro</strong> de distância entre os pixels, eles oferecem uma resolução de imagem impressionante, ideal para visualização a curta distância. Perfeito para salas de controle, estúdios e ambientes de luxo, onde cada detalhe importa.
              </p>
            </div>

            {/* Painel P2.9 */}
            <div className="bg-white/5 border border-white/10 rounded-[24px] p-6 hover:border-[#12CFDB]/50 hover:bg-white/10 transition-all duration-300 group flex flex-col relative z-10">
              <div className="w-full h-[320px] mb-6 relative rounded-xl overflow-hidden cursor-grab active:cursor-grabbing">
                {/* @ts-ignore */}
                <spline-viewer url="https://prod.spline.design/0ifEkHF-jFPVx3Wx/scene.splinecode" class="w-full h-full"></spline-viewer>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#12CFDB] transition-colors font-headline uppercase tracking-tight">Painéis P2.9 INDOOR - OUTDOOR</h3>
              <p className="text-white/70 text-sm leading-relaxed font-body">
                O painel P2.9 é a escolha inteligente para quem busca o equilíbrio perfeito entre qualidade de imagem e custo-benefício. Com <strong className="text-white">2.9mm</strong> de Pixel Pitch, ele entrega uma resolução fantástica para visualização a partir de 2 metros, ideal para lojas, auditórios e recepções.
              </p>
            </div>

            {/* Painel P3.9 */}
            <div className="bg-white/5 border border-white/10 rounded-[24px] p-6 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 group flex flex-col relative z-10">
              <div className="w-full h-[320px] mb-6 relative rounded-xl overflow-hidden cursor-grab active:cursor-grabbing">
                {/* @ts-ignore */}
                <spline-viewer url="https://prod.spline.design/aP31iDGIfRiXjJqF/scene.splinecode" class="w-full h-full"></spline-viewer>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors font-headline uppercase tracking-tight">Painéis P3.9 INDOOR - OUTDOOR</h3>
              <p className="text-white/70 text-sm leading-relaxed font-body">
                O painel P3.9 é a solução ideal para eventos, shows e locações. Com <strong className="text-white">3.9mm</strong> de Pixel Pitch, ele oferece uma qualidade de imagem ótima tanto para ambientes internos quanto externos, garantindo flexibilidade e impacto visual em qualquer situação.
              </p>
            </div>

            {/* Painel P5 */}
            <div className="bg-white/5 border border-white/10 rounded-[24px] p-6 hover:border-[#12CFDB]/50 hover:bg-white/10 transition-all duration-300 group flex flex-col relative z-10">
              <div className="w-full h-[320px] mb-6 relative rounded-xl overflow-hidden cursor-grab active:cursor-grabbing">
                {/* @ts-ignore */}
                <spline-viewer url="https://prod.spline.design/DOwUXZ0t9vy3yP25/scene.splinecode" class="w-full h-full"></spline-viewer>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#12CFDB] transition-colors font-headline uppercase tracking-tight">Painéis P5 OUTDOOR</h3>
              <p className="text-white/70 text-sm leading-relaxed font-body">
                Leve sua publicidade para o próximo nível com o painel P5. Com <strong className="text-white">5mm</strong> de Pixel Pitch e altíssimo brilho, é a escolha perfeita para fachadas de lojas e painéis publicitários urbanos, garantindo que sua mensagem seja vista com clareza e cores vibrantes, mesmo sob a luz do sol.
              </p>
            </div>

          </div>

          {/* Botão Final da Seção */}
          <div className="mt-16 md:mt-24 w-full flex justify-center relative z-20">
            <a 
              href="https://wa.me/55999999999" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow-green text-lg px-10 py-4"
            >
              Fazer Orçamento
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
