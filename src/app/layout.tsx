import type {Metadata} from 'next';
import './globals.css';
import { WhatsAppFloating } from '@/components/WhatsAppFloating';
import { RevealScript } from '@/components/RevealScript';
import { Bricolage_Grotesque, Unbounded } from 'next/font/google';
import { cn } from '@/lib/utils';
import Script from 'next/script';

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
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5NDV9MG6');`}
        </Script>
        {/* End Google Tag Manager */}
        <link rel="preconnect" href="https://raw.githubusercontent.com" />
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="dns-prefetch" href="https://raw.githubusercontent.com" />
      </head>
      <body className="font-body antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5NDV9MG6"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Tintim Script */}
        <Script id="tintim-script" strategy="afterInteractive">
          {`(function(window, document, script) {
              if (!window.tt) {
                  window.tt = window.tt || {};
                  c = document.getElementsByTagName('head')[0];
                  k = document.createElement('script');
                  k.async = 1;
                  k.src = script;
                  c.appendChild(k);
              }
              window.tt.accountCode = '0c01772c-61fd-4f99-ab17-e5ef59b8a87b';
          })(window, document, '//s.tintim.app/static/core/tintim-1.0.js');`}
        </Script>

        <RevealScript />
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  );
}
