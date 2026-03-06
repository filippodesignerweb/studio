'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Settings, Shield, Monitor, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CaseItem {
  title: string;
  videoId: string | null;
  image: string;
}

const cases: CaseItem[] = [
  {
    title: 'Academias',
    videoId: '40r9R-KPbhE',
    image: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/export_2026-03-06T14_43_46-504Z/academias_1x.webp',
  },
  {
    title: 'Eventos',
    videoId: 'sL2ULg-7w6I',
    image: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/export_2026-03-06T14_43_46-504Z/eventos_1x.webp',
  },
  {
    title: 'Igrejas',
    videoId: null,
    image: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/export_2026-03-06T14_43_46-504Z/igrejas_1x.webp',
  },
  {
    title: 'Lazer',
    videoId: 'Qrh0mU5F5TQ',
    image: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/export_2026-03-06T14_43_46-504Z/lazer_1x.webp',
  },
  {
    title: 'Outdoors',
    videoId: null,
    image: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/export_2026-03-06T14_43_46-504Z/outdoors_1x.webp',
  },
  {
    title: 'Residências',
    videoId: 'zKpLYOmzUXI',
    image: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/export_2026-03-06T14_43_46-504Z/residencias_1x.webp',
  },
];

export default function CasePage() {
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);

  const whatsappUrl = "https://wa.me/55999999999";

  return (
    <main className="min-h-screen bg-[#0E0D12] text-white font-body antialiased">
      <Header />

      <section className="pt-48 pb-24 px-6 max-w-[1360px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight font-headline">
          Venha conferir nossos <span className="text-gradient-animate">cases de sucesso</span>
        </h2>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light mb-16">
          Veja alguns tipos de painéis que já fizemos!
        </p>

        {/* GRID DE IMAGENS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-accent hover:-translate-y-1"
              onClick={() => setSelectedCase(item)}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-xl font-bold font-headline">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* SEÇÃO: SERVIÇOS */}
        <div className="mt-32 text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center tracking-tight leading-tight font-headline">
            Tipos de serviços que atendemos na <span className="text-gradient-animate">LED4U</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col h-full group transition-all duration-400 hover:-translate-y-2 hover:border-accent hover:shadow-[0_10px_40px_-10px_rgba(152,0,255,0.3)]">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#9800FF]/10 text-[#9800FF] flex items-center justify-center shrink-0 border border-[#9800FF]/20 group-hover:bg-[#9800FF] group-hover:text-white transition-colors duration-300">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold leading-snug mt-1 font-headline">Formas de utilizar seu painel de led</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-8 flex-grow">
                Seu painel de LED pode fazer muito mais do que você imagina. Dá pra usar pra vender publicidade, mostrar promoções, entreter quem passa, criar momentos de interação com o público e até divulgar eventos ou novidades da sua marca. Ele chama atenção de longe e te ajuda a se destacar de verdade. É só usar com criatividade!
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-[#6f2cdb] hover:bg-[#9800FF] text-white text-center rounded-lg font-bold text-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(152,0,255,0.6)] font-headline"
              >
                Solicite um orçamento
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col h-full group transition-all duration-400 hover:-translate-y-2 hover:border-accent hover:shadow-[0_10px_40px_-10px_rgba(152,0,255,0.3)]">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#9800FF]/10 text-[#9800FF] flex items-center justify-center shrink-0 border border-[#9800FF]/20 group-hover:bg-[#9800FF] group-hover:text-white transition-colors duration-300">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold leading-snug mt-1 font-headline">Seja lembrado</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-8 flex-grow">
                Banners ou cartazes estáticos, com o tempo, tornam-se invisíveis. Painéis de LED podem comunicar informações diferentes todos os dias.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-[#6f2cdb] hover:bg-[#9800FF] text-white text-center rounded-lg font-bold text-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(152,0,255,0.6)] font-headline"
              >
                Solicite um orçamento
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col h-full group transition-all duration-400 hover:-translate-y-2 hover:border-accent hover:shadow-[0_10px_40px_-10px_rgba(152,0,255,0.3)]">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#9800FF]/10 text-[#9800FF] flex items-center justify-center shrink-0 border border-[#9800FF]/20 group-hover:bg-[#9800FF] group-hover:text-white transition-colors duration-300">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold leading-snug mt-1 font-headline">Aproveite o espaço</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-8 flex-grow">
                Aproveitar o espaço disponível no seu negócio ou evento é essencial para aumentar suas vendas. Existem diversos painéis de LED que ocupam pouco espaço e proporcionam uma aparência única para o que está sendo anunciado.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-[#6f2cdb] hover:bg-[#9800FF] text-white text-center rounded-lg font-bold text-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(152,0,255,0.6)] font-headline"
              >
                Solicite um orçamento
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedCase && (
        <div
          className="fixed inset-0 bg-black/90 z-[3000] flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-dark border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-4 right-4 text-white text-3xl z-10 hover:text-accent transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="p-8 flex flex-col items-center">
              <h3 className="text-3xl font-bold mb-6 font-headline uppercase">{selectedCase.title}</h3>

              {selectedCase.videoId ? (
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-white/5 mb-8">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedCase.videoId}?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="text-white/60 mb-8 py-12 text-center">
                  Confira os detalhes deste projeto entrando em contato com nossa equipe.
                </div>
              )}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow-green text-lg px-8 py-4"
              >
                Fazer Orçamento
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
