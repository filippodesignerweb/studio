
'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function LogoMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const originalContent = track.innerHTML;
    track.innerHTML = originalContent + originalContent;
    
    gsap.to(track, {
      xPercent: -50,
      repeat: -1,
      duration: 30,
      ease: 'none',
    });
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
      className="bg-white py-12 md:py-16 relative z-50 border-t border-gray-100 overflow-hidden" 
      data-theme="light"
    >
      <div className="w-full overflow-hidden px-0 -webkit-mask-image:linear-gradient(to right,transparent,black 15%,black 85%,transparent);mask-image:linear-gradient(to right,transparent,black 15%,black 85%,transparent)">
        <div ref={trackRef} className="flex gap-[120px] items-center w-max">
          {logos.map((src, i) => (
            <img 
              key={i} 
              src={src} 
              className="h-20 w-auto grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              alt={`Partner ${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
