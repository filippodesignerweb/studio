'use client';

import React, { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChevronDown, ChevronUp, Instagram, Facebook, Twitter, Settings, Shield, Monitor, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProdutosPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    setIsMounted(true);

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

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const productFaqs = [
    {
      question: "Qual valor de um painel de LED?",
      answer: "O valor pode variar de acordo com o tamanho, modelo e período de locação. Por isso, o ideal é solicitar um orçamento personalizado, assim conseguimos indicar a melhor solução para sua necessidade."
    },
    {
      question: "Quais formas de pagamento?",
      answer: "Aceitamos pagamentos via transferência bancária, Pix e também parcelamos no cartão de crédito, dependendo do valor e das condições do contrato."
    },
    {
      question: "Pode tomar chuva?",
      answer: "Sim! Nossos painéis de LED possuem proteção contra chuva e condições climáticas adversas, sendo ideais tanto para ambientes internos quanto externos."
    },
    {
      question: "O que preciso para a instalação de um painel?",
      answer: "É necessário um ponto de energia adequado e um espaço que comporte o tamanho do painel. Nossa equipe cuida de toda a parte técnica e logística para garantir a instalação segura e eficiente."
    },
    {
      question: "Qual a vida útil do painel?",
      answer: "A vida útil de um painel de LED pode chegar a até 100 mil horas de uso, dependendo do modelo, da frequência de uso e da manutenção realizada."
    }
  ];

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

      <main className="min-h-screen bg-black text-white font-body">
        <Header />

        <section ref={addToRefs} className="pt-32 md:pt-44 pb-20 md:pb-32 px-6 max-w-[1360px] mx-auto reveal">
          <div className="text-center mb-12 md:mb-20">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4 font-headline text-white">Tipos de painéis</h1>
            <p className="text-base md:text-lg text-white/60 font-medium">Temos o painel perfeito para o seu negócio ou sua necessidade</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* P1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col h-full group hover:border-primary/50 transition-all duration-300">
              <div className="w-full h-[400px] md:h-[600px] mb-8 rounded-xl md:rounded-2xl overflow-hidden bg-black/40 p-4 md:p-8 flex items-center justify-center">
                {isMounted && (
                  /* @ts-ignore */
                  <spline-viewer url="https://prod.spline.design/8U4UcWyiaGJFd-mz/scene.splinecode" className="w-full h-full"></spline-viewer>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 font-headline uppercase text-white">Painéis P1 INDOOR</h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Experimente a máxima nitidez com nossos painéis de LED P1. Com apenas <strong>1 milímetro</strong> de distância entre os pixels, eles oferecem uma resolução de imagem impressionante, ideal para visualização a curta distância. Perfeito para salas de controle, estúdios e ambientes de luxo, onde cada detalhe importa.
              </p>
            </div>

            {/* P2.9 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col h-full group hover:border-primary/50 transition-all duration-300">
              <div className="w-full h-[400px] md:h-[600px] mb-8 rounded-xl md:rounded-2xl overflow-hidden bg-black/40 p-4 md:p-8 flex items-center justify-center">
                {isMounted && (
                  /* @ts-ignore */
                  <spline-viewer url="https://prod.spline.design/0ifEkHF-jFPVx3Wx/scene.splinecode" className="w-full h-full"></spline-viewer>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 font-headline uppercase text-white">Painéis P2.9 INDOOR - OUTDOOR</h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                O painel P2 é a escolha inteligente para quem busca o equilíbrio perfeito entre qualidade de imagem e custo-benefício. Com 2mm de Pixel Pitch, ele entrega uma resolução fantástica para visualização a partir de 2 metros, ideal para lojas, auditórios e recepções.
              </p>
            </div>

            {/* P3.9 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col h-full group hover:border-primary/50 transition-all duration-300">
              <div className="w-full h-[400px] md:h-[600px] mb-8 rounded-xl md:rounded-2xl overflow-hidden bg-black/40 p-4 md:p-8 flex items-center justify-center">
                {isMounted && (
                  /* @ts-ignore */
                  <spline-viewer url="https://prod.spline.design/aP31iDGIfRiXjJqF/scene.splinecode" className="w-full h-full"></spline-viewer>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 font-headline uppercase text-white">Painéis P3.9 INDOOR - OUTDOOR</h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                O painel P3.9 é a solução ideal para eventos, shows e locações. Com 3.9mm de Pixel Pitch, ele oferece uma qualidade de imagem ótima tanto para ambientes internos quanto externos, garantindo flexibilidade e impacto visual em qualquer situação.
              </p>
            </div>

            {/* P5 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col h-full group hover:border-primary/50 transition-all duration-300">
              <div className="w-full h-[400px] md:h-[600px] mb-8 rounded-xl md:rounded-2xl overflow-hidden bg-black/40 p-4 md:p-8 flex items-center justify-center">
                {isMounted && (
                  /* @ts-ignore */
                  <spline-viewer url="https://prod.spline.design/DOwUXZ0t9vy3yP25/scene.splinecode" className="w-full h-full"></spline-viewer>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 font-headline uppercase text-white">Painéis P5 OUTDOOR</h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Leve sua publicidade para o próximo nível com o painel P5. Com 5mm de Pixel Pitch e altíssimo brilho, é a escolha perfeita para fachadas de lojas e painéis publicitários urbanos, garantindo que sua mensagem seja vista con clareza e cores vibrantes, mesmo sob a luz do sol.
              </p>
            </div>
          </div>
        </section>

        <section ref={addToRefs} className="py-20 md:py-32 bg-black border-t border-white/10 reveal">
          <div className="container max-w-[1360px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-4xl font-black mb-10 font-headline uppercase">FAQ - Perguntas Frequentes</h2>
                <div className="space-y-4">
                  {productFaqs.map((faq, index) => (
                    <div key={index} className="border-b border-white/10 pb-4">
                      <button 
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                        className="w-full flex justify-between items-center py-4 text-left group"
                      >
                        <span className="text-base md:text-lg font-bold font-headline uppercase group-hover:text-primary transition-colors">
                          {faq.question}
                        </span>
                        {activeFaq === index ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-white/30" />}
                      </button>
                      <div className={cn(
                        "overflow-hidden transition-all duration-300",
                        activeFaq === index ? "max-h-[300px] mt-2 pb-4" : "max-h-0"
                      )}>
                        <p className="text-white/60 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-12 md:space-y-16">
                <div>
                  <h2 className="text-xl md:text-2xl font-black mb-6 md:mb-8 font-headline uppercase">Links Úteis</h2>
                  <div className="flex flex-col gap-4 text-white/60 font-bold uppercase text-xs md:text-sm tracking-widest">
                    <Link href="/quem-somos" className="hover:text-primary transition-colors">Sobre nós</Link>
                    <Link href="/case" className="hover:text-primary transition-colors">Cases</Link>
                    <Link href="/produtos" className="text-white">Produtos</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Contato</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Termos & Uso</Link>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-black mb-6 md:mb-8 font-headline uppercase">Nosso endereço</h2>
                  <p className="text-white/60 font-bold uppercase text-xs md:text-sm leading-relaxed tracking-wider">
                    AV. PAES DE BARROS, 1219. MOOCA - SÃO PAULO
                  </p>
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-black mb-6 md:mb-8 font-headline uppercase">Redes Sociais</h2>
                  <div className="flex gap-5">
                    <a href="https://www.instagram.com/led_4u/" target="_blank" className="p-3 bg-white/5 rounded-xl hover:bg-primary transition-all duration-300">
                      <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                    <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-primary transition-all duration-300">
                      <Facebook className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                    <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-primary transition-all duration-300">
                      <Twitter className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
