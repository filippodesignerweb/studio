'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle, Instagram, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const whatsappUrl = "https://tintim.link/whatsapp/0c01772c-61fd-4f99-ab17-e5ef59b8a87b/53fb4310-08e2-4f11-9fcf-64c042748914";

  return (
    <footer id="footer" className="bg-white pt-20 pb-10 border-t border-gray-200 text-dark" data-theme="light">
      <div className="container max-w-[1360px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        <div className="flex flex-col items-start">
          <img 
            src="https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/led4u.webp" 
            alt="Logo LED 4U" 
            className="w-36 mb-6 brightness-0" 
          />
          <p className="text-gray-600 text-sm leading-relaxed font-medium font-body max-w-xs mb-4">
            A solução definitiva em painéis de LED para ambientes comerciais e residenciais de alto padrão.
          </p>
          <div className="text-[10px] uppercase font-bold text-gray-400 leading-relaxed">
            Led4u Paineis de led ltda <br />
            CNPJ: 61.511.646/0001-28
          </div>
        </div>

        <div>
          <h4 className="font-black text-lg mb-6 uppercase tracking-wider text-dark font-headline">Links Úteis</h4>
          <ul className="space-y-3 text-gray-600 font-medium text-sm font-body">
            <li><Link href="/" className="hover:text-accent transition-colors">Início</Link></li>
            <li><Link href="/quem-somos" className="hover:text-accent transition-colors">Quem Somos</Link></li>
            <li><Link href="/case" className="hover:text-accent transition-colors">Projetos Realizados</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Políticas de Privacidade</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Termos de Uso</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-lg mb-6 uppercase tracking-wider text-dark font-headline">Contato</h4>
          <ul className="space-y-4 text-gray-600 font-medium text-sm font-body">
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                <MessageCircle className="w-5 h-5 text-accent flex-shrink-0" />
                WhatsApp
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/led_4u/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5 text-accent flex-shrink-0" />
                @led_4u
              </a>
            </li>
            <li>
              <a href="mailto:contato@led4u.com.br" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                contato@led4u.com.br
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-lg mb-6 uppercase tracking-wider text-dark font-headline">Endereço</h4>
          <div className="flex items-start gap-3 text-gray-600 font-medium text-sm font-body leading-relaxed">
            <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="uppercase">
              AV. PAES DE BARROS, 1219.<br />
              MOOCA - SÃO PAULO
            </p>
          </div>
        </div>
        
      </div>
      
      <div className="container max-w-[1360px] mx-auto px-6 mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium font-body uppercase tracking-widest">
        <p>&copy; 2026 LED 4U. Todos os direitos reservados.</p>
        <p className="mt-2 md:mt-0">Desenvolvido com tecnologia e precisão.</p>
      </div>
    </footer>
  );
}