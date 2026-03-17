'use client';

import React from 'react';

export function Portfolio() {
  return (
    <section 
      id="section-portfolio" 
      className="relative w-full bg-white pt-20 md:pt-32 pb-4 flex items-center justify-center border-t border-gray-100" 
      data-theme="light"
    >
      <div className="container max-w-[1360px] mx-auto px-6 text-dark text-center">
        <h2 className="font-black text-3xl md:text-5xl lg:text-6xl xl:text-[70px] uppercase tracking-tighter leading-[1.3] font-headline mb-5">
          EMPRESAS QUE <br className="hidden sm:block" /> 
          <span className="text-gradient-animate italic inline-block py-4 md:py-6 px-8 md:px-12">
            JÁ ATENDEMOS
          </span>
        </h2>
      </div>
    </section>
  );
}
