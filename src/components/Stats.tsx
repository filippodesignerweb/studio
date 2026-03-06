'use client';

import React from 'react';

export function Stats() {
  return (
    <section className="w-full bg-dark py-20 lg:py-28 relative z-20 flex flex-col items-center justify-center border-t border-white/5">
      <div className="container max-w-[1360px] mx-auto px-6 text-center text-white">
        <h2 className="font-bold text-3xl md:text-5xl mb-10 uppercase tracking-tight font-headline">O que já entregamos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20 font-medium text-lg md:text-xl">
          <div className="py-4 md:py-2">+400 clientes atendidos</div>
          <div className="py-4 md:py-2">+ 2.000m² <span className="text-gradient-animate font-bold">LED instalados</span></div>
          <div className="py-4 md:py-2">+150 eventos entregues</div>
        </div>
      </div>
    </section>
  );
}
