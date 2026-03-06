
'use client';

import React from 'react';

const logos = [
  'Michelin', 'Arnec', 'Nespresso', 'RedBull', 'Nike', 'BMW', 'Apple', 'Coca-Cola'
];

export function LogoMarquee() {
  return (
    <section className="bg-white py-16 relative z-50 overflow-hidden border-y border-gray-100">
      <div className="logo-marquee-container">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Double the logos for continuous scroll */}
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="mx-16 flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <span className="text-3xl font-headline font-bold text-dark tracking-tighter uppercase">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
