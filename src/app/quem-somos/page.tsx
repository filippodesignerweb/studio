'use client';

import React, { useState, useEffect, Suspense, lazy } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ChevronDown, 
  Menu, 
  X, 
  Church, 
  Mic2, 
  Home, 
  Maximize, 
  Building2
} from 'lucide-react';

const Dithering = lazy(() =>
  import('@paper-design/shaders-react')
    .then((mod) => {
      if (mod && (mod as any).Dithering) {
        return { default: (mod as any).Dithering };
      }
      throw new Error('Dithering component not found');
    })
    .catch(() => ({
      default: ({ colorFront }: { colorFront: string }) => (
        <div
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, ${colorFront}60 0%, transparent 60%), url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '100% 100%, 150px 150px',
          }}
        />
      ),
    }))
);

export default function QuemSomosPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const categories = [
    { title: "Igrejas", icon: Church },
    { title: "Eventos e palestras", icon: Mic2 },
    { title: "Residências", icon: Home },
    { title: "Outdoors", icon: Maximize },
    { title: "Empresas e negócios locais", icon: Building2 }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const scrollY = window.scrollY;
      
      const endZoom = vh * 1.2;
      const progress = Math.min(Math.max(scrollY / endZoom, 0), 1);
      
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
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
            animation: marquee-custom 30s linear infinite;
          }
          .animate-marquee-custom:hover {
            animation-play-state: paused;
          }
          
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

          .smooth-gpu { transform: translate3d(0,0,0); backface-visibility: hidden; }
        `}
      </style>

      <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#9800FF]/30 font-body">
        
        {/* ================= NAVBAR ================= */}
        <nav className="fixed top-0 left-0 right-0 z-[100] px-6 lg:px-12 py-5 flex items-center justify-between mix-blend-difference">
          <div className="flex items-center">
            <Link href="/">
              <img
                src="https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/logo%20led4u.svg"
                alt="Led4U Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-10 text-sm font-semibold tracking-wide text-white font-headline">
            <Link href="/" className="hover:opacity-70 transition-opacity">INICIO</Link>
            <Link href="/quem-somos" className="hover:opacity-70 transition-opacity">QUEM SOMOS</Link>
            <Link href="/produtos" className="hover:opacity-70 transition-opacity">PRODUTOS</Link>
            <Link href="/case" className="hover:opacity-70 transition-opacity">CASE</Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">BLOG</Link>
          </div>

          <div className="hidden md:block">
            <a 
              href="https://wa.me/55999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-white rounded-xl text-sm font-bold tracking-wide hover:bg-white hover:text-black transition-all duration-300 font-headline"
            >
              FAZER ORÇAMENTO
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[2000] bg-[#0a0a0a] flex flex-col items-center justify-center p-8 text-center font-headline">
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-10 right-10">
              <X className="w-8 h-8" />
            </button>
            <nav className="flex flex-col space-y-8 text-2xl font-bold">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>INICIO</Link>
              <Link href="/quem-somos" onClick={() => setIsMobileMenuOpen(false)}>QUEM SOMOS</Link>
              <Link href="/produtos" onClick={() => setIsMobileMenuOpen(false)}>PRODUTOS</Link>
              <Link href="/case" onClick={() => setIsMobileMenuOpen(false)}>CASE</Link>
              <a href="https://wa.me/55999999999" className="mt-8 px-8 py-4 border border-white rounded-xl">ORÇAMENTO</a>
            </nav>
          </div>
        )}

        {/* ================= AREA DE ZOOM (STICKY) ================= */}
        <div className="relative w-full" style={{ height: '150vh' }}>
          <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#0a0a0a]">
            
            <div
              className="absolute inset-0 w-full h-full flex flex-col items-center justify-end z-10 smooth-gpu"
              style={{
                transform: `scale(${1 + Math.pow(scrollProgress, 3) * 60})`,
                transformOrigin: '50% 65%',
                opacity: scrollProgress > 0.8 ? Math.max(0, 1 - (scrollProgress - 0.8) * 5) : 1,
              }}
            >
              {/* Card Dithering */}
              <div 
                className="absolute bottom-0 w-full max-w-7xl h-[75vh] rounded-t-[48px] border border-b-0 border-white/10 bg-[#0f0f0f] flex flex-col items-center justify-center overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Suspense fallback={<div className="absolute inset-0 bg-[#9800FF]/10 animate-pulse" />}>
                  <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen">
                    <Dithering 
                      colorBack="#00000000" 
                      colorFront="#9800FF" 
                      shape="warp" 
                      type="4x4" 
                      speed={isHovered ? 0.6 : 0.2} 
                      className="size-full" 
                      minPixelRatio={1} 
                    />
                  </div>
                </Suspense>
              </div>

              {/* Texto Hero */}
              <div className="absolute bottom-0 w-full h-[75vh] z-20 flex flex-col items-center justify-center px-4 font-headline">
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.1] text-center uppercase">
                  <span>Tudo que você precisa <br className="hidden md:block" /> saber sobre a</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#9800FF] to-[#12CFDB] bg-clip-text text-transparent font-extrabold italic">Led4U!</span>
                </h1>
              </div>

              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 1 - scrollProgress * 2 }}>
                <span className="text-xs text-white/40 tracking-widest uppercase font-semibold font-headline">Scroll</span>
                <ChevronDown className="h-6 w-6 text-white/60 animate-bounce" />
              </div>
            </div>

            <div
              className="absolute inset-0 z-[5] pointer-events-none transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, #9800FF 0%, #12CFDB 100%)',
                opacity: scrollProgress > 0.5 ? Math.min(1, (scrollProgress - 0.5) * 2) : 0,
              }}
            />
          </div>
        </div>

        {/* ================= CONTEÚDO PÓS-ZOOM ================= */}
        <div className="relative z-50 w-full" style={{ background: 'linear-gradient(135deg, #9800FF 0%, #12CFDB 100%)' }}>
          
          <div className="w-full flex flex-col items-center py-20">
            
            <div className="px-4 md:px-6 w-full max-w-7xl mx-auto flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tighter text-center max-w-4xl text-white drop-shadow-xl mb-4 leading-tight font-headline uppercase">
                O que nós fazemos e que talvez <br className="hidden md:block" />
                você não conhecia?
              </h2>
              
              <p className="max-w-2xl text-center text-base md:text-lg font-medium mb-12 text-white/95 drop-shadow-md">
                Criamos projetos personalizados para venda e locação, com a solução completa para o seu negócio, residência ou evento.
              </p>

              <div className="flex flex-row md:justify-center items-center w-full overflow-x-auto pt-10 pb-20 gap-4 md:gap-8 snap-x snap-mandatory scrollbar-hide">
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

            {/* ================= SESSÃO 4: CTA PRODUTOS ================= */}
            <section className="w-full bg-white relative py-24 md:py-32 lg:py-40 mt-32 overflow-hidden">
              
              <div className="absolute top-[10%] left-[5%] w-24 md:w-44 h-auto transform rotate-[17deg] hidden lg:block hover:scale-110 transition-transform duration-500">
                <img 
                  src="https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/11_1x.webp" 
                  alt="Led4U Produto 1" 
                  className="rounded-2xl shadow-2xl border border-gray-100 hover:grayscale-0 grayscale transition-all duration-700 aspect-video object-cover"
                />
              </div>
              <div className="absolute top-[10%] right-[5%] w-24 md:w-44 h-auto transform -rotate-[17deg] hidden lg:block hover:scale-110 transition-transform duration-500">
                <img 
                  src="https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/2_1x.webp" 
                  alt="Led4U Produto 2" 
                  className="rounded-2xl shadow-2xl border border-gray-100 hover:grayscale-0 grayscale transition-all duration-700 aspect-video object-cover"
                />
              </div>
              <div className="absolute bottom-[10%] left-[8%] w-24 md:w-44 h-auto transform -rotate-[44deg] hidden lg:block hover:scale-110 transition-transform duration-500">
                <img 
                  src="https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/4_1x.webp" 
                  alt="Led4U Produto 3" 
                  className="rounded-2xl shadow-2xl border border-gray-100 hover:grayscale-0 grayscale transition-all duration-700 aspect-video object-cover"
                />
              </div>
              <div className="absolute bottom-[10%] right-[8%] w-24 md:w-44 h-auto transform rotate-[17deg] hidden lg:block hover:scale-110 transition-transform duration-500">
                <img 
                  src="https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/FOTOS%20LED4U/6_1x.webp" 
                  alt="Led4U Produto 4" 
                  className="rounded-2xl shadow-2xl border border-gray-100 hover:grayscale-0 grayscale transition-all duration-700 aspect-video object-cover"
                />
              </div>

              <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center relative z-10">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#3A3A3A] tracking-tighter leading-[1.1] mb-8 font-headline uppercase">
                  Venha conhecer alguns produtos que a Led4U oferece para você!
                </h2>
                
                <p className="text-[#3A3A3A]/70 text-lg md:text-xl font-medium max-w-2xl mb-12 leading-relaxed">
                  Transforme seu espaço com o brilho e a tecnologia que só a Led4U proporciona. Painéis de alta resolução adaptados para cada necessidade do seu negócio ou residência.
                </p>
                
                <a 
                  href="https://wa.me/55999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-10 py-5 font-black text-black tracking-tighter overflow-hidden border-2 border-[#9800FF] rounded-2xl transition-all duration-300 hover:text-white font-headline"
                >
                  <span className="absolute inset-0 w-0 bg-[#9800FF] transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative flex items-center gap-3">
                    FAZER ORÇAMENTO
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>

            </section>

          </div>
        </div>

      </div>
    </>
  );
}
