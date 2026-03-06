
'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function LogoMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    
    // Duplicar conteúdo para loop infinito perfeito
    if (!track.dataset.duplicated) {
      const items = Array.from(track.children);
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
      });
      track.dataset.duplicated = "true";
    }

    const ctx = gsap.context(() => {
      gsap.to(track, {
        xPercent: -50,
        repeat: -1,
        duration: 25,
        ease: 'none',
      });
    });
    
    return () => ctx.revert();
  }, []);

  const logos = [
    'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/LOGOS%20LED4U/2_1_1x.webp',
    'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/LOGOS%20LED4U/4_1x.webp',
    'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/LOGOS%20LED4U/arnec_1x.webp',
    'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/LOGOS%20LED4U/michelin_1x.webp'
  ];

  return (
    <section 
      id="section-logos" 
      className="bg-white py-16 md:py-24 relative z-50 overflow-hidden" 
      data-theme="light"
    >
      <div className="w-full overflow-hidden">
        <div ref={trackRef} className="flex gap-[100px] md:gap-[150px] items-center w-max">
          {logos.map((src, i) => (
            <img 
              key={i} 
              src={src} 
              className="h-24 md:h-32 w-auto object-contain transition-transform duration-300 hover:scale-110" 
              alt={`Parceiro ${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
