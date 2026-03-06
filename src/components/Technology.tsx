'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { Sparkles, Shield, Monitor, Zap, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  { 
    id: 1,
    title: 'Brilho Extremo', 
    desc: 'Imagem nítida sob sol intenso, garantindo visibilidade perfeita em qualquer horário e clima.',
    icon: Zap,
    pos: { top: '42%', left: '48%' }
  },
  { 
    id: 2,
    title: 'Alta Fidelidade', 
    desc: 'Cores vivas e uniformes, reproduzindo os seus conteúdos com qualidade fotográfica e sem distorção.',
    icon: Monitor,
    pos: { top: '50%', left: '50%' }
  },
  { 
    id: 3,
    title: 'Durabilidade', 
    desc: 'Painéis blindados e altamente resistentes contra chuva, variações de calor e poeira.',
    icon: Shield,
    pos: { top: '58%', left: '52%' }
  },
  { 
    id: 4,
    title: 'Sistema Modular', 
    desc: 'Totalmente dimensionado sob medida para o seu projeto, permitindo infinitas possibilidades.',
    icon: Sparkles,
    pos: { top: '48%', left: '46%' }
  }
];

export function Technology() {
  const [activeFeature, setActiveFeature] = useState<typeof features[0] | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

      <section 
        id="tecnologia-profissional" 
        className="bg-black py-16 md:py-20 relative overflow-hidden flex items-center justify-center min-h-[700px]"
      >
        <div className="container max-w-[1360px] mx-auto px-6 relative flex flex-col items-center z-10">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="font-bold text-3xl md:text-5xl lg:text-[54px] text-white uppercase tracking-tight font-headline">
              Painéis <br className="hidden md:block" /> 
              <span className="text-gradient-animate font-bold uppercase">P5 OUTDOOR</span>
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto mt-4 font-body text-base md:text-lg leading-relaxed">
              Leve sua publicidade para o próximo nível com o painel P5. Com 5mm de Pixel Pitch e altíssimo brilho, é a escolha perfeita para fachadas de lojas e painéis publicitários urbanos, garantindo que sua mensagem seja vista com clareza e cores vibrantes, mesmo sob a luz do sol.
            </p>
          </div>
          
          <div className="w-full relative min-h-[450px] md:min-h-[550px] flex items-center justify-center">
            {/* Spline Viewer Container */}
            <div className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing">
              {isMounted && (
                /* @ts-ignore */
                <spline-viewer 
                  url="https://prod.spline.design/DOwUXZ0t9vy3yP25/scene.splinecode" 
                  className="w-full h-full"
                ></spline-viewer>
              )}
            </div>

            {/* Hotspots Overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <div className="relative w-full h-full max-w-4xl mx-auto">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    className="absolute pointer-events-auto group focus:outline-none"
                    style={{ top: feature.pos.top, left: feature.pos.left }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveFeature(feature);
                    }}
                    onMouseEnter={() => !activeFeature && setActiveFeature(feature)}
                  >
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-10 h-10 bg-primary/30 rounded-full animate-ping"></div>
                      <div className={cn(
                        "relative w-8 h-8 rounded-full border-2 border-white flex items-center justify-center shadow-xl transition-all duration-300",
                        activeFeature?.id === feature.id ? "bg-primary scale-125" : "bg-primary/80 group-hover:bg-primary group-hover:scale-110"
                      )}>
                        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                      </div>
                      
                      {/* Tooltip Label */}
                      <div className="absolute bottom-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 text-[10px] font-headline uppercase tracking-widest text-white translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        {feature.title}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Content Overlay */}
            {activeFeature && (
              <div className="absolute z-50 bottom-0 md:bottom-12 left-1/2 -translate-x-1/2 w-full max-w-lg px-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pointer-events-none">
                <div className="bg-[#1A1822]/95 backdrop-blur-2xl border border-primary/30 rounded-3xl p-8 shadow-[0_0_60px_rgba(2,158,157,0.3)] pointer-events-auto">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <activeFeature.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold font-headline uppercase tracking-tight text-white">
                        {activeFeature.title}
                      </h3>
                    </div>
                    <button 
                      onClick={() => setActiveFeature(null)}
                      className="text-white/40 hover:text-white transition-colors p-2"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <p className="text-white/80 text-base md:text-lg font-body leading-relaxed">
                    {activeFeature.desc}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Indicators for Desktop */}
          <div className="hidden lg:flex justify-center gap-10 w-full mt-10 z-30">
             {features.map((f) => (
                <button 
                  key={f.id}
                  onMouseEnter={() => setActiveFeature(f)}
                  className={cn(
                    "flex flex-col items-center gap-3 transition-all duration-300",
                    activeFeature?.id === f.id ? "opacity-100 scale-110" : "opacity-40 hover:opacity-70"
                  )}
                >
                  <div className={cn(
                    "w-1 h-1 rounded-full transition-all duration-300",
                    activeFeature?.id === f.id ? "bg-primary w-8" : "bg-white"
                  )}></div>
                  <span className="font-headline text-[10px] uppercase tracking-[0.2em] text-white">
                    {f.title}
                  </span>
                </button>
             ))}
          </div>
        </div>
      </section>
    </>
  );
}