'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { 
  ArrowRight, 
  ChevronDown, 
  Church, 
  Mic2, 
  Home as HomeIcon, 
  Maximize, 
  Building2
} from 'lucide-react';

export default function QuemSomosPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const requestRef = useRef<number>(null);

  const categories = [
    { title: "Igrejas", icon: Church },
    { title: "Eventos e palestras", icon: Mic2 },
    { title: "Residências", icon: HomeIcon },
    { title: "Outdoors", icon: Maximize },
    { title: "Empresas e negócios locais", icon: Building2 }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      
      requestRef.current = requestAnimationFrame(() => {
        const vh = window.innerHeight;
        const scrollY = window.scrollY;
        const endZoom = vh * 1.5;
        const progress = Math.min(Math.max(scrollY / endZoom, 0), 1);
        setScrollProgress(progress);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <style jsx global>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-float-1 { animation: float 6s ease-in-out infinite; }
          .animate-float-2 { animation: float 7s ease-in-out infinite 1.5s; }
          .animate-float-3 { animation: float 5.5s ease-in-out infinite 0.7s; }
          
          @keyframes marquee-custom {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-custom {
            display: flex;
            width: max-content;
            animation: marquee-custom 40s linear infinite;
          }
          .animate-marquee-custom:hover {
            animation-play-state: paused;
          }
          
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

          .smooth-gpu { 
            transform: translate3d(0,0,0); 
            backface-visibility: hidden; 
            will-change: transform, opacity;
          }
        `}
      </style>

      <div className="min-h-screen bg-dark text-white selection:bg-[#9800FF]/30 font-body">
        
        <Header />

        <div className="relative w-full" style={{ height: '200vh' }} data-theme="dark">
          <div className="sticky top-0 w-full h-screen overflow-hidden bg-dark">
            
            <div
              className="absolute inset-0 w-full h-full flex flex-col items-center justify-end z-10 smooth-gpu"
              style={{
                transform: `scale(${1 + Math.pow(scrollProgress, 2.5) * 45})`,
                transformOrigin: '50% 65%',
                opacity: scrollProgress > 0.85 ? Math.max(0, 1 - (scrollProgress - 0.85) * 6) : 1,
              }}
            >
              <div 
                className="absolute bottom-0 w-full max-w-7xl h-[75vh] rounded-t-[48px] border border-b-0 border-white/10 bg-[#0f0f0f] flex flex-col items-center justify-center overflow-hidden"
              >
                {/* No Texture Effect */}
              </div>

              <div className="absolute bottom-0 w-full h-[75vh] z-20 flex flex-col items-center justify-center px-4 font-headline">
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.1] text-center uppercase">
                  <span>Tudo que você precisa <br className="hidden md:block" /> saber sobre a</span>
                  <br />
                  <span className="text-gradient-animate italic inline-block py-6 px-12">Led4U!</span>
                </h1>
              </div>

              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: Math.max(0, 1 - scrollProgress * 3) }}>
                <span className="text-xs text-white/40 tracking-widest uppercase font-semibold font-headline">Scroll</span>
                <ChevronDown className="h-6 w-6 text-white/60 animate-bounce" />
              </div>
            </div>

            <div
              className="absolute inset-0 z-[5] pointer-events-none transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, #9800FF 0%, #12CFDB 100%)',
                opacity: scrollProgress > 0.6 ? Math.min(1, (scrollProgress - 0.6) * 2.5) : 0,
              }}
            />
          </div>
        </div>

        <div className="relative z-50 w-full" style={{ background: 'linear-gradient(135deg, #9800FF 0%, #12CFDB 100%)' }} data-theme="dark">
          
          <div className="w-full flex flex-col items-center py-20">
            
            <div className="px-4 md:px-6 w-full max-w-5xl mx-auto flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tighter text-center max-w-4xl text-white drop-shadow-xl mb-12 leading-tight font-headline uppercase">
                O que nós fazemos e que talvez <br className="hidden md:block" />
                você não conhecia?
              </h2>
              
              <div className="space-y-8 text-white/95 text-lg md:text-xl font-medium leading-relaxed font-body">
                <p>Com sede própria em São Paulo, no tradicional bairro da Mooca, e uma estrutura de mais de 2.000m², a Led4U é movida pelo desejo constante de inovação.</p>
                <p>Integrando um grupo empresarial com mais de 27 anos de trajetória, a Led4U carrega um legado de experiência e visão estratégica acumulado ao longo de décadas de atuação no mercado.</p>
                <p>Somos especialistas em transformar espaços por meio da tecnologia em LED. Para nós, um painel não é apenas uma tela é uma ferramenta de impacto visual, valorização de marca e criação de experiências imersivas.</p>
                <p>Atendemos projetos residenciais, corporativos, eventos e soluções personalizadas indoor e outdoor, sempre com materiais de primeira linha, equipamentos atualizados e rigoroso padrão de qualidade.</p>
                <p>Mais do que instalar painéis, desenvolvemos soluções completas, com planejamento técnico, acompanhamento especializado e compromisso com a excelência em cada detalhe.</p>
                <p className="font-bold text-2xl pt-4">Led4U. Tecnologia que transforma ambientes e eleva experiências.</p>
              </div>

              <div className="flex flex-row md:justify-center items-center w-full overflow-x-auto pt-20 pb-20 gap-4 md:gap-8 snap-x snap-mandatory scrollbar-hide">
                <div className="snap-center shrink-0 transform -rotate-6 translate-y-10 transition-all duration-500 hover:rotate-0 hover:translate-y-2">
                  <div className="animate-float-1 w-[220px] h-[380px] md:w-[280px] md:h-[460px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/30 bg-[#0f0f0f] relative isolate">
                    <iframe src="https://player.vimeo.com/video/1170334926?background=1&autoplay=1&loop=1&muted=1" className="absolute top-0 left-0 w-full h-full scale-[1.1] pointer-events-none" frameBorder="0"></iframe>
                  </div>
                </div>
                <div className="snap-center shrink-0 transform z-10 -translate-y-6 transition-all duration-500 hover:-translate-y-10 hover:scale-105">
                  <div className="animate-float-2 w-[220px] h-[380px] md:w-[280px] md:h-[460px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/40 bg-[#0f0f0f] relative isolate">
                    <iframe src="https://player.vimeo.com/video/1170334880?background=1&autoplay=1&loop=1&muted=1" className="absolute top-0 left-0 w-full h-full scale-[1.2] pointer-events-none" frameBorder="0"></iframe>
                  </div>
                </div>
                <div className="snap-center shrink-0 transform rotate-6 translate-y-10 transition-all duration-500 hover:rotate-0 hover:translate-y-2">
                  <div className="animate-float-3 w-[220px] h-[380px] md:w-[280px] md:h-[460px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/30 bg-[#0f0f0f] relative isolate">
                    <iframe src="https://player.vimeo.com/video/1170334831?background=1&autoplay=1&loop=1&muted=1" className="absolute top-0 left-0 w-full h-full scale-[1.1] pointer-events-none" frameBorder="0"></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col items-center overflow-hidden mt-32">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-[30px] text-center drop-shadow-lg px-4 font-headline uppercase">
                Fazemos painéis de led para:
              </h3>
              
              <div className="w-full relative flex items-center overflow-hidden pb-4">
                <div className="animate-marquee-custom gap-6 px-3">
                  {[...categories, ...categories].map((item, index) => (
                    <div 
                      key={index}
                      className="group flex flex-col items-center justify-center w-[280px] md:w-[320px] p-10 rounded-[2.5rem] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)] transition-all duration-500 cursor-default"
                    >
                      <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-[#9800FF]/10 to-[#12CFDB]/10 group-hover:from-[#9800FF]/20 group-hover:to-[#12CFDB]/20 transition-colors duration-500">
                        <item.icon className="w-10 h-10 text-[#9800FF]" strokeWidth={1.5} />
                      </div>
                      <span className="text-xl md:text-2xl font-black text-black text-center tracking-tighter whitespace-normal font-headline uppercase">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <section className="w-full bg-white relative py-24 md:py-32 lg:py-40 mt-32 overflow-hidden" data-theme="light">
              <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center relative z-10">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#3A3A3A] tracking-tighter leading-[1.1] mb-8 font-headline uppercase">
                  Venha conhecer alguns produtos que a Led4U oferece para você!
                </h2>
                <p className="text-[#3A3A3A]/70 text-lg md:text-xl font-medium max-w-2xl mb-12 leading-relaxed font-body">
                  Transforme seu espaço com o brilho e a tecnologia que só a Led4U proporciona. Painéis de alta resolução adaptados para cada necessidade do seu negócio ou residência.
                </p>
                <Link href="/produtos" className="btn-glow-green">
                  Ver Produtos
                </Link>
              </div>
            </section>

          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
