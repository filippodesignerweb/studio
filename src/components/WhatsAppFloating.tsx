'use client';

import React from 'react';

export function WhatsAppFloating() {
  const whatsappUrl = "https://tintim.link/whatsapp/0c01772c-61fd-4f99-ab17-e5ef59b8a87b/53fb4310-08e2-4f11-9fcf-64c042748914";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[3000] transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <img
        src="https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/wahstapp.webp"
        alt="WhatsApp"
        className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-2xl"
      />
    </a>
  );
}
