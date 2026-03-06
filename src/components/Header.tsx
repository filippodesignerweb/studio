
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Quem Somos', href: '#sobre-nos' },
    { name: 'Produtos', href: '#venda-locacao' },
    { name: 'Cases', href: '#section-4' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 w-full z-[2000] transition-all duration-500 py-6',
          isScrolled ? 'bg-dark/80 backdrop-blur-md py-4' : 'bg-transparent'
        )}
      >
        <div className="max-w-[1360px] mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <div className="text-2xl font-headline font-bold text-white tracking-tighter">
              LED <span className="text-primary">4U</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="#assistant" className="btn-glow">
              Orçamento
            </Link>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[2100] bg-dark flex flex-col items-center justify-center p-8 transition-transform duration-500 lg:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <button
          className="absolute top-8 right-8 text-white p-2"
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
              className="text-3xl font-headline font-bold text-white hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#assistant"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-glow mt-8 w-full"
          >
            Orçamento
          </Link>
        </nav>
      </div>
    </>
  );
}
