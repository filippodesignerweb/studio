
'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
  return (
    <section id="faq" className="bg-white py-24 border-t border-gray-100">
      <div className="container max-w-[900px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">FAQ</h2>
          <p className="text-gray-500 font-medium italic">Encontre respostas para as principais dúvidas sobre nossos projetos</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b-dark/10">
              <AccordionTrigger className="text-left text-lg md:text-xl font-bold text-dark hover:text-primary transition-all font-headline lowercase tracking-tighter">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base md:text-lg leading-relaxed pt-2 pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-20 flex flex-col items-center gap-6">
          <p className="text-dark font-bold text-lg">Ainda tem dúvidas?</p>
          <a
            href="https://wa.me/55999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow !bg-[#25D366] !border-[#25D366] !text-white flex gap-3 items-center hover:!bg-[#1ebc59] hover:!border-[#1ebc59] hover:shadow-[0_0_20px_rgba(37,211,102,0.6)]"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
