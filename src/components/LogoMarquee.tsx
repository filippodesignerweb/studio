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
        duration: 35, 
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
    'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/logos%20new%20led4u/SANOL_1x.webp',
    'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/logos%20new%20led4u/bio-extratus-logo-png_seeklogo-236890%201_1x.webp',
    'https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/logos%20new%20led4u/michelin_1x.webp'
  ];

  return (
    <section 
      id="section-logos" 
      className="bg-white pt-2 md:pt-4 pb-16 md:pb-24 relative z-50 overflow-hidden" 
      data-theme="light"
    >
      <div className="w-full overflow-hidden">
        <div ref={trackRef} className="flex gap-12 md:gap-16 items-center w-max">
          {logos.map((src, i) => (
            <div key={i} className="flex items-center justify-center w-40 h-20 md:w-60 md:h-30">
              <img 
                src={src} 
                className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110" 
                alt={`Parceiro ${i}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}