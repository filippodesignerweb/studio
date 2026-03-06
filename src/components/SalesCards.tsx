'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function SalesCards() {
  const whatsappUrl = "https://wa.me/55999999999";

  const services = [
    {
      title: 'Venda',
      tag: 'Foco Principal',
      desc: 'Ideal para residências, bares, restaurantes e escritórios. Projetos permanentes com suporte contínuo e garantia total.',
      img: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/m9_1x.webp',
      accentColor: '#9800FF',
      shadowColor: 'rgba(152,0,255,0.25)',
      isHighlight: true,
      priority: 1,
      borderColor: 'border-[#9800FF]/40'
    },
    {
      title: 'Locação Fixa',
      tag: 'Longo Prazo',
      desc: 'Indicada para fachadas comerciais, publicidade e academias. Investimento diluído ao longo do tempo com manutenção inclusa.',
      img: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/m8_1x.webp',
      accentColor: '#12CFDB',
      shadowColor: 'rgba(18,207,219,0.15)',
      isHighlight: true,
      priority: 2,
      borderColor: 'border-[#12CFDB]/30'
    },
    {
      title: 'Locação Eventos',
      tag: 'Projetos Temporários',
      desc: 'Para eventos corporativos, festas e casamentos. Inclui suporte técnico especializado antes e durante o evento.',
      img: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/m7_1x.webp',
      accentColor: '#D4A955',
      shadowColor: 'rgba(212,169,85,0.1)',
      isHighlight: false,
      priority: 3,
      borderColor: 'border-white/5'
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
                "bg-[#1A1822]/50 border rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-4 group",
                service.priority === 1 && "md:-translate-y-8 shadow-2xl z-20 scale-105",
                service.priority === 2 && "md:-translate-y-4 shadow-xl z-10",
                service.priority === 3 && "shadow-lg z-0",
                service.borderColor
              )}
              style={{ boxShadow: `0 0 40px ${service.shadowColor}` }}
            >
              <div 
                className="absolute top-0 left-0 w-full h-1 z-10" 
                style={{ backgroundColor: service.accentColor }}
              ></div>
              
              <div className="h-48 md:h-64 w-full overflow-hidden relative">
                <img src={service.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={service.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1822] to-transparent opacity-60"></div>
              </div>

              <div className="p-8 flex flex-col flex-1 relative">
                <span 
                  className="font-bold text-[10px] tracking-[0.2em] uppercase mb-3 flex items-center gap-2 font-headline"
                  style={{ color: service.accentColor }}
                >
                  {service.isHighlight && <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: service.accentColor }}></span>}
                  {service.tag}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tighter font-headline">
                  {service.title}
                </h3>
                
                <p className="text-white/60 text-sm mb-10 flex-1 leading-relaxed font-body">
                  {service.desc}
                </p>
                
                <a 
                  href={whatsappUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow-green w-full !text-white transition-all duration-300 relative overflow-hidden group/btn"
                  style={{ 
                    borderColor: `${service.accentColor}66`,
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = service.accentColor;
                    e.currentTarget.style.borderColor = service.accentColor;
                    e.currentTarget.style.boxShadow = `0 0 25px ${service.accentColor}`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = `${service.accentColor}66`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span className="relative z-10">Saiba Mais</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
