'use client';

import React from 'react';

export function Portfolio() {
  return (
    <section 
      id="section-portfolio" 
      className="relative w-full bg-white pt-24 md:pt-32 pb-4 md:pb-6 flex items-center justify-center border-t border-gray-100" 
      data-theme="light"
    >
      <div className="container max-w-[1360px] mx-auto px-6 text-dark text-center">
        <h2 className="font-black text-4xl md:text-7xl lg:text-[80px] uppercase tracking-tighter leading-[1.1] font-headline mb-5">
          EMPRESAS QUE <br /> <span className="text-gradient-animate italic">JÁ ATENDEMOS</span>
        </h2>
      </div>
    </section>
  );
}
