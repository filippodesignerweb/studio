'use client';

import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqItems = [
  {
    question: "Qual é o prazo médio para a entrega e instalação de um painel?",
    answer: "O prazo varia de acordo com a complexidade da estrutura e o local. Em média, projetos residenciais levam de 10 a 15 dias úteis, enquanto projetos comerciais de grande escala podem levar até 30 dias úteis."
  },
  {
    question: "Os painéis da LED 4U podem ficar expostos ao tempo (chuva e sol)?",
    answer: "Sim! Utilizamos tecnologia Outdoor de alta durabilidade com proteção IP65, resistente à chuva e maresia. Nossas telas mantêm o brilho perfeito mesmo sob sol direto."
  },
  {
    question: "Como funciona o suporte técnico e a garantia?",
    answer: "Oferecemos garantia real e suporte técnico contínuo. Possuímos equipe própria de manutenção que atende rapidamente qualquer chamado, garantindo a disponibilidade do seu painel."
  },
  {
    question: "É possível locar um painel apenas para um evento de 1 dia?",
    answer: "Sim, trabalhamos com locação para eventos corporativos, sociais e ativações pontuais. O serviço inclui montagem completa, operação técnica e desmontagem ágil."
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const whatsappUrl = "https://tintim.link/whatsapp/0c01772c-61fd-4f99-ab17-e5ef59b8a87b/53fb4310-08e2-4f11-9fcf-64c042748914";

  return (
    <section id="faq" className="bg-white py-20 md:py-24 border-t border-gray-100" data-theme="light">
      <div className="container max-w-[900px] mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-dark uppercase mb-4 tracking-tighter font-headline">FAQ</h2>
          <p className="text-gray-500 font-medium italic text-sm md:text-base">Encontre respostas para as principais dúvidas sobre nossos projetos</p>
        </div>
        
        <div className="space-y-2">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-100 group">
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="flex justify-between items-center py-6 w-full text-left"
              >
                <span className="text-base md:text-lg font-bold text-dark group-hover:text-accent transition-colors font-headline uppercase tracking-tight pr-4">
                  {item.question}
                </span>
                <ChevronDown className={cn(
                  "w-6 h-6 text-dark/30 transition-transform duration-300",
                  activeIndex === index && "rotate-180"
                )} />
              </button>
              <div className={cn(
                "overflow-hidden transition-all duration-400 ease-in-out",
                activeIndex === index ? "max-h-[250px] pb-6" : "max-h-0"
              )}>
                <p className="text-gray-600 text-sm md:text-base font-body">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 flex flex-col items-center gap-6">
          <p className="text-dark font-bold text-base md:text-lg">Ainda tem dúvidas?</p>
          <a 
            href={whatsappUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow-green flex gap-3 items-center"
          >
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}