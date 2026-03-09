'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavInvert, setIsNavInvert] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Observer mais preciso para detectar qual seção está no topo do viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Se a seção está cruzando o topo (ou próxima dele)
        if (entry.isIntersecting) {
          const theme = entry.target.getAttribute('data-theme');
          setIsNavInvert(theme === 'light');
        }
      });
    }, { 
      // Monitora o cruzamento com o topo do viewport com margem negativa
      threshold: 0,
      rootMargin: '-10% 0% -90% 0%' 
    });

    document.querySelectorAll('[data-theme]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Quem Somos', href: '/quem-somos' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Case', href: '/case' },
    { name: 'Blog', href: '#' },
  ];

  const whatsappUrl = "https://tintim.link/whatsapp/0c01772c-61fd-4f99-ab17-e5ef59b8a87b/53fb4310-08e2-4f11-9fcf-64c042748914";

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 w-full z-[2000] transition-all duration-500',
          isScrolled 
            ? (isNavInvert ? 'bg-white/95 shadow-sm py-3' : 'bg-dark/80 py-3') 
            : 'bg-transparent py-5 lg:py-8',
          isScrolled && 'backdrop-blur-md',
          isNavInvert && 'nav-invert'
        )}
      >
        <div className="max-w-[1360px] mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 w-[110px] md:w-[130px]">
            <img 
              src="https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/logo%20led4u.svg" 
              alt="Logo LED 4U" 
              className="w-full h-auto logo-img transition-all duration-500"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="nav-link text-xs uppercase tracking-[0.2em] font-bold text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-glow-green !text-xs !px-8 !py-4"
            >
              Fazer Orçamento
            </a>
          </div>

          <button
            id="menu-btn"
            className="lg:hidden p-2 transition-colors duration-500"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-8 h-8 text-white" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-[2100] bg-dark/98 flex flex-col items-center justify-center p-8 transition-transform duration-500 lg:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <button
          className="absolute top-10 right-10 text-white p-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X className="w-10 h-10" />
        </button>

        <nav className="flex flex-col space-y-8 items-center text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold text-white hover:text-primary transition-colors font-headline uppercase"
            >
              {link.name}
            </Link>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-glow-green mt-8 w-full"
          >
            Fazer Orçamento
          </a>
        </nav>
      </div>
    </>
  );
}
