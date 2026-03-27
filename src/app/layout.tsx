import type {Metadata} from 'next';
import './globals.css';
import { WhatsAppFloating } from '@/components/WhatsAppFloating';
import { RevealScript } from '@/components/RevealScript';
import { Bricolage_Grotesque, Unbounded } from 'next/font/google';
import { cn } from '@/lib/utils';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  display: 'swap',
});

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
    <html lang="pt-br" className={cn("scroll-smooth", bricolage.variable, unbounded.variable)}>
      <head>
        <link rel="preconnect" href="https://raw.githubusercontent.com" />
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="dns-prefetch" href="https://raw.githubusercontent.com" />
      </head>
      <body className="font-body antialiased">
        <RevealScript />
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  );
}
