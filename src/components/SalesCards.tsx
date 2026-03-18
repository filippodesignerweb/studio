'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SlideData {
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  imageUrl: string;
}

const slides: SlideData[] = [
  {
    title: 'Venda',
    subtitle: 'Residências e Empresas',
    description: 'Solução completa com estrutura, instalação e suporte contínuo. Ideal para bares, restaurantes, escritórios e projetos permanentes que buscam excelência e durabilidade.',
    accent: '#9800FF',
    imageUrl: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/VENDA%201_1x.webp',
  },
  {
    title: 'Locação Fixa',
    subtitle: 'Longo Prazo',
    description: 'Indicada para fachadas comerciais e academias que desejam instalar o painel de forma contínua, diluindo o investimento ao longo do tempo com suporte total.',
    accent: '#12CFDB',
    imageUrl: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/LOCAC%CC%A7A%CC%83O%20FIXA%201_1x.webp',
  },
  {
    title: 'Locação Eventos',
    subtitle: 'Projetos Temporários',
    description: 'Inclui montagem, desmontagem e suporte técnico durante o período contratado. Ideal para corporativos, casamentos e ativações de marca de alto impacto.',
    accent: '#D4A955',
    imageUrl: 'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/LOCAC%CC%A7A%CC%83O%20EVENTOS%201_1x.webp',
  },
];

export function SalesCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [progress, setProgress] = useState(0);
  
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const SLIDE_DURATION = 6000;
  const TRANSITION_DURATION = 800;
  const whatsappUrl = "https://tintim.link/whatsapp/0c01772c-61fd-4f99-ab17-e5ef59b8a87b/53fb4310-08e2-4f11-9fcf-64c042748914";

  const goToSlide = useCallback(
    (index: number, dir?: 'next' | 'prev') => {
      if (isTransitioning || index === currentIndex) return;
      setDirection(dir || (index > currentIndex ? 'next' : 'prev'));
      setIsTransitioning(true);
      setProgress(0);

      setTimeout(() => {
        setCurrentIndex(index);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, TRANSITION_DURATION / 2);
    },
    [isTransitioning, currentIndex]
  );

  const goNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex, 'next');
  }, [currentIndex, goToSlide]);

  const goPrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex, 'prev');
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 100 / (SLIDE_DURATION / 50);
      });
    }, 50);

    intervalRef.current = setInterval(() => {
      goNext();
    }, SLIDE_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [currentIndex, goNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <section 
      id="venda-locacao" 
      className="carousel-wrapper relative overflow-hidden bg-dark"
      data-theme="dark"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="carousel-bg-wash"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${currentSlide.accent}12 0%, transparent 70%)`,
        }}
      />

      <div className="carousel-inner flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 py-12 md:pb-24 pt-24 md:pt-32">
        <div className="carousel-content w-full lg:w-1/2 order-2 lg:order-1 px-4 md:px-0">
          <div className="w-full">
            <div
              className={cn(
                "carousel-collection-num",
                isTransitioning ? "transitioning" : "visible"
              )}
            >
              <span className="carousel-num-line" />
              <span className="carousel-num-text">
                {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            <h2
              className={cn(
                "carousel-title text-3xl md:text-5xl lg:text-6xl xl:text-7xl",
                isTransitioning ? "transitioning" : "visible"
              )}
            >
              <span className="block text-sm md:text-lg lg:text-xl font-medium opacity-60 mb-2 normal-case tracking-normal">trabalhamos com</span>
              {currentSlide.title}
            </h2>

            <p
              className={cn(
                "carousel-subtitle text-base md:text-lg lg:text-xl",
                isTransitioning ? "transitioning" : "visible"
              )}
              style={{ color: currentSlide.accent }}
            >
              {currentSlide.subtitle}
            </p>

            <p
              className={cn(
                "carousel-description text-sm md:text-base lg:text-lg",
                isTransitioning ? "transitioning" : "visible"
              )}
            >
              {currentSlide.description}
            </p>

            <div className={cn(
              "transition-all duration-700 delay-200 mt-6",
              isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            )}>
              <a 
                href={whatsappUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow-green"
              >
                Saiba Mais
              </a>
            </div>

            <div className="carousel-nav-arrows mt-10 md:mt-12">
              <button
                onClick={goPrev}
                className="carousel-arrow-btn"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goNext}
                className="carousel-arrow-btn"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="carousel-image-container w-full lg:w-[45%] order-1 lg:order-2 px-6 md:px-0">
          <div
            className={cn(
              "carousel-image-frame",
              isTransitioning ? "transitioning" : "visible"
            )}
          >
            <img
              src={currentSlide.imageUrl}
              alt={currentSlide.title}
              className="carousel-image w-full h-full object-cover"
            />
            <div
              className="carousel-image-overlay"
              style={{
                background: `linear-gradient(135deg, ${currentSlide.accent}15 0%, transparent 50%)`,
              }}
            />
          </div>

          <div className="carousel-frame-corner carousel-frame-corner--tl" style={{ borderColor: currentSlide.accent }} />
          <div className="carousel-frame-corner carousel-frame-corner--br" style={{ borderColor: currentSlide.accent }} />
        </div>
      </div>

      <div className="carousel-progress-bar hidden md:grid">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "carousel-progress-item group",
              index === currentIndex ? "active" : ""
            )}
            aria-label={`Ir para slide ${index + 1}`}
          >
            <div className="carousel-progress-track">
              <div
                className="carousel-progress-fill"
                style={{
                  width: index === currentIndex ? `${progress}%` : index < currentIndex ? '100%' : '0%',
                  backgroundColor: index === currentIndex ? currentSlide.accent : undefined,
                }}
              />
            </div>
            <span className="carousel-progress-label text-[10px]">{slide.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
