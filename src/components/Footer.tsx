
'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-200 text-dark">
      <div className="container max-w-[1360px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col items-start">
          <Link href="/" className="mb-8">
            <div className="text-3xl font-headline font-bold text-dark tracking-tighter">
              LED <span className="text-primary">4U</span>
            </div>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed font-medium max-w-xs">
            A solução definitiva em painéis de LED para ambientes comerciais e residenciais de alto padrão. Transformamos espaços em experiências digitais vibrantes.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-8 uppercase tracking-widest font-headline">Links Úteis</h4>
          <ul className="space-y-4 text-gray-500 font-medium text-sm">
            <li><Link href="#" className="hover:text-primary transition-colors">Início</Link></li>
            <li><Link href="#sobre-nos" className="hover:text-primary transition-colors">Quem Somos</Link></li>
            <li><Link href="#assistant" className="hover:text-primary transition-colors">Orçamento Inteligente</Link></li>
            <li><Link href="#faq" className="hover:text-primary transition-colors">Perguntas Frequentes</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-8 uppercase tracking-widest font-headline">Contato</h4>
          <ul className="space-y-4 text-gray-500 font-medium text-sm">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary" />
              <span>(99) 9999-9999</span>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="w-4 h-4 text-primary" />
              <span>@led4u</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              <span>contato@led4u.com.br</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span>São Paulo, SP - Brasil</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-8 uppercase tracking-widest font-headline">Pagamento</h4>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
             <div className="grid grid-cols-3 gap-4 opacity-50 grayscale">
                <div className="h-8 bg-gray-400 rounded-sm" />
                <div className="h-8 bg-gray-400 rounded-sm" />
                <div className="h-8 bg-gray-400 rounded-sm" />
                <div className="h-8 bg-gray-400 rounded-sm" />
                <div className="h-8 bg-gray-400 rounded-sm" />
             </div>
             <p className="mt-4 text-[10px] uppercase tracking-widest text-gray-400 text-center font-bold">Aceitamos Cartões e Pix</p>
          </div>
        </div>
      </div>

      <div className="container max-w-[1360px] mx-auto px-6 mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
        <p>&copy; 2026 LED 4U. Todos os direitos reservados.</p>
        <p className="mt-4 md:mt-0">Desenvolvido com Tecnologia e Precisão.</p>
      </div>
    </footer>
  );
}
