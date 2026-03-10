import type {Metadata} from 'next';
import './globals.css';
import { WhatsAppFloating } from '@/components/WhatsAppFloating';

export const metadata: Metadata = {
  title: 'LED 4U - Soluções em Painéis de LED',
  description: 'Especialistas em painéis de LED para Residências, Fachadas e Empresas. Projetos sob medida e instalação profissional.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Unbounded:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  );
}
