'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { Sparkles, Shield, Monitor, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  { 
    id: 1,
    title: 'Brilho de Alto Desempenho', 
    desc: 'Imagem nítida mesmo sob sol intenso. Ideal para fachadas, piscinas e ambientes externos.',
    icon: Zap,
    pos: { top: '30%', left: '35%' },
    labelPos: 'bottom-full mb-4 right-full mr-4' 
  },
  { 
    id: 2,
    title: 'Alta Definição e Fidelidade de Cores', 
    desc: 'Experiência imersiva com cores vivas e imagem uniforme. Perfeito para jogos, filmes e momentos especiais.',
    icon: Monitor,
    pos: { top: '30%', left: '65%' },
    labelPos: 'bottom-full mb-4 left-full ml-4' 
  },
  { 
    id: 3,
    title: 'Painéis Outdoor de Longa Durabilidade', 
    desc: 'Resistência contra chuva, calor e variações climáticas. Projetado para uso contínuo e seguro.',
    icon: Shield,
    pos: { top: '65%', left: '65%' },
    labelPos: 'top-full mt-4 left-full ml-4' 
  },
  { 
    id: 4,
    title: 'Sistema Modular Inteligente', 
    desc: 'Painéis dimensionados sob medida para cada ambiente. Sem adaptações improvisadas.',
    icon: Sparkles,
    pos: { top: '65%', left: '35%' },
    labelPos: 'top-full mt-4 right-full mr-4' 
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
        className="bg-black py-12 md:py-16 relative overflow-hidden flex items-center justify-center min-h-[600px]"
        data-theme="dark"
      >
        <div className="container max-w-[1360px] mx-auto px-6 relative flex flex-col items-center z-10">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="font-bold text-3xl md:text-5xl lg:text-[54px] text-white uppercase tracking-tight font-headline">
              TECNOLOGIA PROFISSIONAL <br className="hidden md:block" /> 
              <span className="text-gradient-animate font-bold uppercase">QUE GARANTE RESULTADO</span>
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto mt-4 font-body text-base md:text-lg leading-relaxed">
              Inovação e qualidade em cada pixel. Nossos painéis são projetados para máxima performance em qualquer ambiente.
            </p>
          </div>
          
          <div className="w-full relative min-h-[400px] md:min-h-[500px] flex items-center justify-center">
            {/* Background image removed per user request to leave only the 3D model */}
            
            <div className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing">
              {isMounted && (
                /* @ts-ignore */
                <spline-viewer 
                  url="https://prod.spline.design/Nto6rsfK7aqoTE1y/scene.splinecode" 
                  className="w-full h-full"
                ></spline-viewer>
              )}
            </div>

            <div className="absolute inset-0 z-20 pointer-events-none">
              <div className="relative w-full h-full max-w-2xl mx-auto">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    className="absolute pointer-events-auto group focus:outline-none"
                    style={{ top: feature.pos.top, left: feature.pos.left }}
                    onMouseEnter={() => setActiveFeature(feature)}
                    onMouseLeave={() => setActiveFeature(null)}
                  >
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-10 h-10 bg-primary/30 rounded-full animate-ping"></div>
                      <div className={cn(
                        "relative w-8 h-8 rounded-full border-2 border-white flex items-center justify-center shadow-xl transition-all duration-300",
                        activeFeature?.id === feature.id ? "bg-primary scale-125" : "bg-primary/80 group-hover:bg-primary"
                      )}>
                        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                      </div>
                      
                      <div className={cn(
                        "absolute opacity-0 group-hover:opacity-100 transition-all duration-300 w-[240px] bg-black/90 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white z-[60] text-left pointer-events-none",
                        feature.labelPos
                      )}>
                        <div className="flex items-center gap-3 mb-2">
                           <feature.icon className="w-4 h-4 text-primary" />
                           <h4 className="text-sm font-bold font-headline uppercase tracking-tight leading-tight">{feature.title}</h4>
                        </div>
                        <p className="text-[11px] font-body text-white/70 leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
