'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const theme = entry.target.getAttribute('data-theme');
          setIsNavInvert(theme === 'light');
        }
      });
    }, { 
      threshold: 0,
      rootMargin: '0px 0px -95% 0%'
    });

    document.querySelectorAll('[data-theme]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Quem Somos', href: '/quem-somos' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Cases', href: '/case' },
    { name: 'Blog', href: '#' },
  ];

  const whatsappUrl = "https://tintim.link/whatsapp/0c01772c-61fd-4f99-ab17-e5ef59b8a87b/53fb4310-08e2-4f11-9fcf-64c042748914";

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 w-full z-[2000] transition-all duration-500',
          isScrolled 
            ? (isNavInvert ? 'bg-white/95 shadow-sm py-3' : 'bg-dark/95 py-3') 
            : 'bg-transparent py-5 lg:py-8',
          isScrolled && 'backdrop-blur-md',
          isNavInvert && 'nav-invert'
        )}
      >
        <div className="max-w-[1360px] mx-auto px-6 flex items-center justify-between">
          <div className="flex flex-col">
            <Link href="/" className="flex-shrink-0 block w-[100px] md:w-[130px]">
              <Image 
                src="https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/led4u.webp" 
                alt="Logo LED 4U" 
                width={130}
                height={40}
                className="w-full h-auto logo-img transition-all duration-500"
                priority
              />
            </Link>
          </div>

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
              className="btn-glow-green !text-[12px] !px-8 !py-4"
            >
              Fazer Orçamento
            </a>
          </div>

          <button
            id="menu-btn"
            className="lg:hidden p-2 transition-colors duration-500"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className={cn("w-7 h-7", isNavInvert ? "text-dark" : "text-white")} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-[2100] bg-dark flex flex-col transition-transform duration-500 lg:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-dark">
          <div className="relative w-[100px] h-8">
            <Image 
              src="https://raw.githubusercontent.com/legendragon03453-dot/led4u/main/led4u.webp" 
              alt="Logo LED 4U" 
              fill
              className="object-contain"
            />
          </div>
          <button
            className="text-white p-3 hover:bg-white/5 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Mobile Menu Navigation */}
        <nav className="flex-1 flex flex-col justify-center items-center px-10 py-12 text-center bg-dark">
          <div className="flex flex-col space-y-8 w-full max-w-xs">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-white hover:text-primary transition-all duration-300 font-headline uppercase tracking-tight"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="mt-16 w-full max-w-xs">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-glow-green w-full !py-5"
            >
              Fazer Orçamento
            </a>
          </div>
        </nav>

        {/* Mobile Menu Footer Decoration */}
        <div className="p-10 text-center opacity-20 bg-dark">
          <p className="text-[10px] uppercase tracking-[0.3em] font-headline">LED 4U • 2026</p>
        </div>
      </div>
    </>
  );
}