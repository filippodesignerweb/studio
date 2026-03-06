'use client';

import React from 'react';

export function Portfolio() {
  return (
    <section 
      id="section-portfolio" 
      className="relative w-full bg-white py-24 md:py-32 flex items-center justify-center border-t border-gray-100" 
      data-theme="light"
    >
      <div className="container max-w-[1360px] mx-auto px-6 text-dark text-center">
        <h2 className="font-black text-4xl md:text-7xl lg:text-[100px] uppercase tracking-tighter leading-[1.1] font-headline">
          PROJETOS <br /> <span className="text-gradient-animate italic">REALIZADOS</span>
        </h2>
      </div>
    </section>
  );
}
