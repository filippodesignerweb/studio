
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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

  // Monitora se o scroll está em uma seção de tema claro
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsNavInvert(entry.target.getAttribute('data-theme') === 'light');
        }
      });
    }, { threshold: 0.1, rootMargin: '-80px 0px 0px 0px' });

    document.querySelectorAll('[data-theme]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Quem Somos', href: '#sobre-nos' },
    { name: 'Produtos', href: '#venda-locacao' },
    { name: 'Case', href: '#section-4' },
    { name: 'Blog', href: '#' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 w-full z-[2000] transition-all duration-400',
          isScrolled ? 'bg-dark/80 backdrop-blur-md py-4' : 'bg-transparent py-5 lg:py-8',
          isNavInvert && 'nav-invert'
        )}
      >
        <div className="max-w-[1360px] mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 w-[120px]">
            <img 
              src="https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/logo%20led4u.svg" 
              alt="Logo LED 4U" 
              className="w-full h-auto logo-img transition-all duration-400"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="nav-link text-sm uppercase tracking-widest font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="#assistant" className="btn-glow-green">
              Fazer Orçamento
            </Link>
          </div>

          <button
            id="menu-btn"
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
              className="text-2xl font-bold text-white hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#assistant"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-glow-green mt-8 w-full"
          >
            Fazer Orçamento
          </Link>
        </nav>
      </div>
    </>
  );
}
