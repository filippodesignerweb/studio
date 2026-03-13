'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChevronDown, ChevronUp, Instagram, Facebook, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProdutosPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  const whatsappUrl = "https://tintim.link/whatsapp/0c01772c-61fd-4f99-ab17-e5ef59b8a87b/53fb4310-08e2-4f11-9fcf-64c042748914";

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

        {/* Tipos de Painéis */}
        <section className="pt-40 pb-24 px-6 max-w-[1360px] mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 font-headline">Tipos de painéis</h1>
            <p className="text-lg text-white/60 font-medium">Temos o painel perfeito para o seu negócio ou sua necessidade</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* P1 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col h-full">
              <div className="aspect-square mb-6 rounded-2xl overflow-hidden bg-black/40">
                {isMounted && (
                  /* @ts-ignore */
                  <spline-viewer url="https://prod.spline.design/8U4UcWyiaGJFd-mz/scene.splinecode" className="w-full h-full"></spline-viewer>
                )}
              </div>
              <h3 className="text-xl font-bold mb-4 font-headline uppercase">Painéis P1 INDOOR</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Experimente a máxima nitidez com nossos painéis de LED P1. Com apenas <strong>1 milímetro</strong> de distância entre os pixels, eles oferecem uma resolução de imagem impressionante, ideal para visualização a curta distância. Perfeito para salas de controle, estúdios e ambientes de luxo, onde cada detalhe importa.
              </p>
            </div>

            {/* P2.9 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col h-full">
              <div className="aspect-square mb-6 rounded-2xl overflow-hidden bg-black/40">
                {isMounted && (
                  /* @ts-ignore */
                  <spline-viewer url="https://prod.spline.design/0ifEkHF-jFPVx3Wx/scene.splinecode" className="w-full h-full"></spline-viewer>
                )}
              </div>
              <h3 className="text-xl font-bold mb-4 font-headline uppercase">Painéis P2.9 INDOOR - OUTDOOR</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                O painel P2 é a escolha inteligente para quem busca o equilíbrio perfeito entre qualidade de imagem e custo-benefício. Com 2mm de Pixel Pitch, ele entrega uma resolução fantástica para visualização a partir de 2 metros, ideal para lojas, auditórios e recepções.
              </p>
            </div>

            {/* P3.9 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col h-full">
              <div className="aspect-square mb-6 rounded-2xl overflow-hidden bg-black/40">
                {isMounted && (
                  /* @ts-ignore */
                  <spline-viewer url="https://prod.spline.design/aP31iDGIfRiXjJqF/scene.splinecode" className="w-full h-full"></spline-viewer>
                )}
              </div>
              <h3 className="text-xl font-bold mb-4 font-headline uppercase">Painéis P3.9 INDOOR - OUTDOOR</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                O painel P3.9 é a solução ideal para eventos, shows e locações. Com 3.9mm de Pixel Pitch, ele oferece uma qualidade de imagem ótima tanto para ambientes internos quanto externos, garantindo flexibilidade e impacto visual em qualquer situação.
              </p>
            </div>

            {/* P5 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col h-full">
              <div className="aspect-square mb-6 rounded-2xl overflow-hidden bg-black/40">
                {isMounted && (
                  /* @ts-ignore */
                  <spline-viewer url="https://prod.spline.design/DOwUXZ0t9vy3yP25/scene.splinecode" className="w-full h-full"></spline-viewer>
                )}
              </div>
              <h3 className="text-xl font-bold mb-4 font-headline uppercase">Painéis P5 OUTDOOR</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Leve sua publicidade para o próximo nível com o painel P5. Com 5mm de Pixel Pitch e altíssimo brilho, é a escolha perfeita para fachadas de lojas e painéis publicitários urbanos, garantindo que sua mensagem seja vista com clareza e cores vibrantes, mesmo sob a luz do sol.
              </p>
            </div>
          </div>
        </section>

        {/* Como funciona um Led */}
        <section className="py-24 bg-white text-black" data-theme="light">
          <div className="container max-w-[1360px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black mb-8 font-headline uppercase tracking-tighter">Como funciona <span className="text-gradient-animate italic">um Led</span></h2>
              <p className="text-gray-600 text-lg leading-relaxed font-body">
                A LED4U nasceu da paixão por iluminação eficiente e inovadora. Fundada com o objetivo de democratizar o acesso à tecnologia LED, a LED4U dedica-se a oferecer soluções de iluminação de alta qualidade, durabilidade e design para os mais diversos ambientes. Acreditamos que a iluminação LED é o futuro, proporcionando economia de energia significativa e contribuindo para um planeta mais sustentável.
              </p>
            </div>
            <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] relative">
              {isMounted && (
                /* @ts-ignore */
                <spline-viewer url="https://prod.spline.design/3rlqmkkXW1n7mGSg/scene.splinecode" className="w-full h-full"></spline-viewer>
              )}
            </div>
          </div>
        </section>

        {/* FAQ & Address Section */}
        <section className="py-24 bg-black border-t border-white/10">
          <div className="container max-w-[1360px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
              
              {/* FAQ */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-black mb-12 font-headline uppercase">FAQ - Perguntas Frequentes</h2>
                <div className="space-y-4">
                  {productFaqs.map((faq, index) => (
                    <div key={index} className="border-b border-white/10 pb-4">
                      <button 
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                        className="w-full flex justify-between items-center py-4 text-left group"
                      >
                        <span className="text-lg font-bold font-headline uppercase group-hover:text-primary transition-colors">
                          {faq.question}
                        </span>
                        {activeFaq === index ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-white/30" />}
                      </button>
                      <div className={cn(
                        "overflow-hidden transition-all duration-300",
                        activeFaq === index ? "max-h-[200px] mt-2 pb-4" : "max-h-0"
                      )}>
                        <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Address & Links */}
              <div className="space-y-16">
                <div>
                  <h2 className="text-2xl font-black mb-8 font-headline uppercase">Links Úteis</h2>
                  <div className="flex flex-col gap-4 text-white/60 font-bold uppercase text-sm tracking-widest">
                    <Link href="/quem-somos" className="hover:text-primary transition-colors">Sobre nós</Link>
                    <Link href="/case" className="hover:text-primary transition-colors">Cases</Link>
                    <Link href="/produtos" className="text-white">Produtos</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Contato</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Termos & Uso</Link>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-black mb-8 font-headline uppercase">Nosso endereço</h2>
                  <p className="text-white/60 font-bold uppercase text-sm leading-relaxed tracking-wider">
                    AV. PAES DE BARROS, 1219. MOOCA - SÃO PAULO
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-black mb-8 font-headline uppercase">Redes Sociais</h2>
                  <div className="flex gap-6">
                    <a href="https://www.instagram.com/led_4u/" target="_blank" className="p-3 bg-white/5 rounded-xl hover:bg-primary transition-all duration-300">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-primary transition-all duration-300">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-primary transition-all duration-300">
                      <Twitter className="w-6 h-6" />
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
