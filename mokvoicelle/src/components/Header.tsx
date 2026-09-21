// src/components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-[#1E3DF0]/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Image Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-10 h-10 group-hover:scale-105 transition-transform flex-shrink-0">
            <Image
              src="/images/team/moklogo.png"
              alt="MOK VOICELLE Logo"
              fill
              sizes="1080px"
              className="object-contain"
              priority
            />
          </div>
          <h2 className="text-lg font-bold text-white">MOK <span className="text-[#1E3DF0]">Voicelle</span></h2>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-[#1E3DF0] transition-colors py-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Primary Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1E3DF0] hover:bg-[#1832C7] font-semibold text-sm text-white transition-all shadow-md shadow-[#1E3DF0]/20 active:scale-95"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-2xl px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-200 hover:text-[#1E3DF0] py-2 border-b border-slate-900/60 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1E3DF0] hover:bg-[#1832C7] font-semibold text-white transition-all"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}