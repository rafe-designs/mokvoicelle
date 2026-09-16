'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#060A17] text-white border-t border-slate-800/80 relative overflow-hidden">
      {/* Subtle Brand Glow */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[120px] bg-[#1E3DF0]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 relative z-10">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-slate-800/60">
          
          {/* Left Column: Logo & Tagline */}
          <div className="md:col-span-7 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/team/moklogo.png"
                alt="MOK Voicelle Logo"
                width={550}
                height={100}
                style={{ width: 'auto', height: '48px' }}
                className="object-contain brightness-120"
                priority
              />
            </Link>
            
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-md font-normal">
              Bringing your content to life with high-impact web design, voiceovers, and media production.
            </p>
          </div>

          {/* Right Column: Cleanly Left-Aligned List Pinned to Right Grid */}
          <div className="md:col-span-5 md:flex md:justify-end">
            <div className="space-y-3 text-xs md:text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#1E3DF0] shrink-0" />
                <span>College road Ogba, Lagos, Nigeria.</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#1E3DF0] shrink-0" />
                <a
                  href="tel:+2348132760432"
                  className="hover:text-[#1E3DF0] transition-colors"
                >
                  +234-813-276-0432 <br/> +234-903-873-2877
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#1E3DF0] shrink-0" />
                <a
                  href="mailto:Mokvoicelle@gmail.com"
                  className="hover:text-[#1E3DF0] transition-colors"
                >
                  Mokvoicelle@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Tagline with Right-Padding for Floating WhatsApp Button */}
        <div className="pt-6 pr-16 md:pr-20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} MOK Voicelle. All rights reserved.</p>
          <p className="text-[11px] text-slate-400">Crafted for high performance & impact.</p>
        </div>

      </div>
    </footer>
  );
}