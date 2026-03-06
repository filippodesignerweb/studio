'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function SalesCards() {
  const whatsappUrl = "https://wa.me/55999999999";

  const services = [
    {
      title: 'Venda',
      tag: 'Solução Definitiva',
      desc: 'Ideal para residências, bares, restaurantes e escritórios. Projetos permanentes com suporte contínuo.',
      img: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/m9_1x.webp',
      accentColor: '#9800FF',
      shadowColor: 'rgba(152,0,255,0.1)',
      borderOpacity: 'border-white/5'
    },
    {
      title: 'Locação Fixa',
      tag: 'Longo Prazo',
      desc: 'Indicada para fachadas comerciais, publicidade e academias. Investimento diluído ao longo do tempo.',
      img: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/m8_1x.webp',
      accentColor: '#12CFDB',
      shadowColor: 'rgba(18,207,219,0.15)',
      isHighlight: true,
      borderColor: 'border-[#12CFDB]/30'
    },
    {
      title: 'Locação Eventos',
      tag: 'Projetos Temporários',
      desc: 'Para eventos corporativos, festas e casamentos. Inclui suporte técnico especializado antes e durante o evento.',
      img: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/m7_1x.webp',
      accentColor: '#D4A955',
      shadowColor: 'rgba(212,169,85,0.15)',
      isHighlight: true,
      borderColor: 'border-[#D4A955]/30',
      gradient: 'from-[#D4A955] to-[#fde047]'
    }
  ];

  return (
    <section id="venda-locacao" className="bg-dark pt-24 md:pt-32 pb-16 md:pb-32 relative overflow-hidden">
      <div className="container max-w-[1360px] mx-auto px-6 mb-16 text-center text-white uppercase tracking-tight">
        <h2 className="font-bold text-3xl md:text-5xl lg:text-[54px] font-headline">
          TRABALHAMOS COM <br className="md:hidden" />
          <span className="text-gradient-animate font-bold">VENDA OU LOCAÇÃO</span>
        </h2>
      </div>
      
      <div className="container max-w-[1360px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className={cn(
                "bg-[#1A1822]/50 border rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2",
                service.isHighlight ? "md:-translate-y-4 shadow-xl" : "border-white/5",
                service.borderColor
              )}
              style={{ boxShadow: `0 0 30px ${service.shadowColor}` }}
            >
              {service.gradient && (
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} z-10`}></div>
              )}
              {service.accentColor && service.isHighlight && !service.gradient && (
                <div 
                  className="absolute top-0 left-0 w-full h-1 z-10" 
                  style={{ backgroundColor: service.accentColor }}
                ></div>
              )}
              <div className="h-48 md:h-64 w-full overflow-hidden relative">
                <img src={service.img} className="w-full h-full object-cover" alt={service.title} />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span 
                  className="font-bold text-xs tracking-widest uppercase mb-2 flex items-center gap-2 font-headline"
                  style={{ color: service.accentColor }}
                >
                  {service.isHighlight && <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: service.accentColor }}></span>}
                  {service.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter font-headline">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm mb-8 flex-1 leading-relaxed font-body">
                  {service.desc}
                </p>
                <a 
                  href={whatsappUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow-green w-full !text-white transition-all duration-300"
                  style={{ 
                    borderColor: `${service.accentColor}66`,
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = service.accentColor;
                    e.currentTarget.style.borderColor = service.accentColor;
                    e.currentTarget.style.boxShadow = `0 0 15px ${service.accentColor}`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = `${service.accentColor}66`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Saiba Mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
