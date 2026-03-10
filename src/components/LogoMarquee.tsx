'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function LogoMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    
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
        duration: 35, // Aumentado ligeiramente o tempo para compensar o tamanho maior das logos
        ease: 'none',
      });
    });
    
    return () => ctx.revert();
  }, []);

  const logos = [
    'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/logos%20new%20led4u/2%201_1x.webp',
    'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/logos%20new%20led4u/4_1x.webp',
    'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/logos%20new%20led4u/7_1x.webp',
    'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/logos%20new%20led4u/Castelo_1x.webp',
    'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/logos%20new%20led4u/Chevrolet-Logo%201_1x.webp',
    'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/logos%20new%20led4u/GbM8NiN5Hn7kBYIpqj4ux38JiYCIGrJXNnaGnErU-563-568%202_1x.webp',
    'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/logos%20new%20led4u/Ipiranga_Logo%201_1x.webp',
    'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/logos%20new%20led4u/Logo-Sanol-Pro%201_1x.webp',
    'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/logos%20new%20led4u/SANOL_1x.webp',
    'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/logos%20new%20led4u/bio-extratus-logo-png_seeklogo-236890%201_1x.webp',
    'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/logos%20new%20led4u/michelin_1x.webp'
  ];

  return (
    <section 
      id="section-logos" 
      className="bg-white py-20 md:py-32 relative z-50 overflow-hidden" 
      data-theme="light"
    >
      <div className="w-full overflow-hidden">
        <div ref={trackRef} className="flex gap-[120px] md:gap-[180px] items-center w-max">
          {logos.map((src, i) => (
            <img 
              key={i} 
              src={src} 
              className="h-36 md:h-52 w-auto object-contain transition-transform duration-300 hover:scale-105" 
              alt={`Parceiro ${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}