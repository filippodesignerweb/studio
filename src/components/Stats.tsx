'use client';

import React, { useEffect, useState, useRef } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ end, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, end]);

  return <span ref={countRef}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="w-full bg-dark py-20 lg:py-24 relative z-20 flex flex-col items-center justify-center" data-theme="dark">
      <div className="container max-w-[1360px] mx-auto px-6 text-center text-white">
        <h2 className="font-bold text-2xl md:text-3xl mb-12 uppercase tracking-tight font-headline">O que já entregamos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 font-bold">
          <div className="flex flex-col items-center px-8 border-white/10 md:border-r">
            <span className="text-3xl md:text-4xl lg:text-5xl mb-3 font-headline">
              <Counter end={400} prefix="+" />
            </span>
            <span className="text-white/40 uppercase tracking-widest text-[10px] md:text-xs font-headline max-w-[200px]">clientes empresariais e residenciais atendidos</span>
          </div>
          <div className="flex flex-col items-center px-8 border-white/10 md:border-r">
            <span className="text-3xl md:text-4xl lg:text-5xl mb-3 font-headline text-gradient-animate">
              <Counter end={2000} prefix="+ " />
            </span>
            <span className="text-white/40 uppercase tracking-widest text-[10px] md:text-xs font-headline max-w-[200px]">metros de LED instalados</span>
          </div>
          <div className="flex flex-col items-center px-8">
            <span className="text-3xl md:text-4xl lg:text-5xl mb-3 font-headline">
              <Counter end={150} prefix="+" />
            </span>
            <span className="text-white/40 uppercase tracking-widest text-[10px] md:text-xs font-headline max-w-[200px]">eventos entregues</span>
          </div>
        </div>
      </div>
    </section>
  );
}
