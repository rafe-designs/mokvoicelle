'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, ArrowRight, Zap, ChevronDown, ChevronUp, Mic, Palette, Video, Share2 } from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

const WEB_PRICING: PricingTier[] = [
  {
    id: 'wordpress',
    name: 'Brand New (WordPress)',
    tagline: 'Ideal for fast-launch corporate sites, blogs, and manageable CMS platforms.',
    price: '₦450,000',
    features: [
      'Custom WordPress Architecture',
      '1 Year SEO Support',
      '1 Year Data Analytics Setup',
      'Responsive Mobile & Tablet Design',
      'CMS Training & Client Dashboard',
    ],
    ctaText: 'Get Started',
    ctaHref: '#contact',
  },
  {
    id: 'native',
    name: 'Brand New (Native Build)',
    tagline: 'High-performance React/Next.js custom web application engineered for speed.',
    price: '₦600,000',
    popular: true,
    features: [
      'Native Custom React / Next.js Build',
      '1 Year SEO Support',
      '1 Year Data Analytics Integration',
      'Tailwind CSS Neomorphic/Glassmorphic UI',
      'Ultra-Fast Performance & Optimization',
      'Priority Technical Deployment',
    ],
    ctaText: 'Start Native Build',
    ctaHref: '#contact',
  },
  {
    id: 'revamp',
    name: 'Website Revamping',
    tagline: 'Transform your existing website with a modern design upgrade and performance overhaul.',
    price: '₦250,000',
    features: [
      'UI/UX Design Overhaul',
      'Mobile Responsiveness Fixes',
      'Speed & Performance Optimization',
      'SEO Structure Refinement',
      'Content Alignment & Layout Renewal',
    ],
    ctaText: 'Revamp My Site',
    ctaHref: '#contact',
  },
];

export default function Pricing() {
  const [showFullRateCard, setShowFullRateCard] = useState(false);

  return (
    <section id="pricing" className="py-24 px-6 md:px-12 bg-[#080C1A] text-white relative overflow-hidden border-t border-slate-800/40">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#1E3DF0]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1E3DF0]/40 bg-[#1E3DF0]/10 text-xs font-semibold text-white mb-4 shadow-sm">
            <Zap className="w-3.5 h-3.5" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Web Development Pricing
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            All brand new website builds include <span className="text-white font-semibold">1 Year of SEO</span> and <span className="text-white font-semibold">Data Analytics Support</span>.
          </p>
        </div>

        {/* Website Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {WEB_PRICING.map((tier) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`relative bg-[#121A33]/90 border rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                tier.popular
                  ? 'border-[#1E3DF0] shadow-[0_15px_40px_rgba(30,61,240,0.25)] scale-[1.02]'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#1E3DF0] text-[10px] font-bold tracking-wider uppercase text-white shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Recommended</span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6 min-h-[36px]">
                  {tier.tagline}
                </p>

                <div className="mb-6 pb-6 border-b border-slate-800/60">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                </div>

                <ul className="space-y-3.5 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-slate-300">
                      <div className="p-0.5 rounded-full bg-[#1E3DF0]/20 text-[#1E3DF0] mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={tier.ctaHref}
                className={`w-full py-3.5 px-6 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  tier.popular
                    ? 'bg-[#1E3DF0] hover:bg-[#1832C7] text-white shadow-lg shadow-[#1E3DF0]/40'
                    : 'bg-slate-800/80 hover:bg-slate-700 text-white'
                }`}
              >
                <span>{tier.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Toggle Full Rate Card Drawer */}
        <div className="text-center">
          <button
            onClick={() => setShowFullRateCard(!showFullRateCard)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#1E3DF0]/50 text-xs font-semibold text-slate-300 hover:text-white transition-all shadow-md"
          >
            <span>{showFullRateCard ? 'Hide Full Agency Rate Card' : 'View Full Agency Rate Card (Voiceovers, Design, Media)'}</span>
            {showFullRateCard ? <ChevronUp className="w-4 h-4 text-[#1E3DF0]" /> : <ChevronDown className="w-4 h-4 text-[#1E3DF0]" />}
          </button>
        </div>

        {/* Expanded Agency Rate Card */}
        <AnimatePresence>
          {showFullRateCard && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-12 bg-[#121A33]/60 border border-slate-800 rounded-3xl p-8 overflow-hidden backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-center mb-8">Full MOK Voicelle Services Rate Card</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* Voiceovers */}
                <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-2 text-[#1E3DF0] mb-4">
                    <Mic className="w-5 h-5" />
                    <h4 className="font-bold text-white text-base">Voice Overs</h4>
                  </div>
                  <ul className="space-y-3 text-xs text-slate-300">
                    <li className="flex justify-between border-b border-slate-800 pb-2"><span>Silver Package</span> <strong className="text-white">₦50,000</strong></li>
                    <li className="flex justify-between border-b border-slate-800 pb-2"><span>Gold Package</span> <strong className="text-white">₦70,000</strong></li>
                    <li className="flex justify-between border-b border-slate-800 pb-2"><span>Platinum Package</span> <strong className="text-white">₦100,000</strong></li>
                    <li className="flex justify-between border-b border-slate-800 pb-2"><span>IVR System</span> <strong className="text-white">₦100,000</strong></li>
                    <li className="flex justify-between border-b border-slate-800 pb-2"><span>Audiobook (1-50 pages)</span> <strong className="text-white">₦200,000</strong></li>
                    <li className="flex justify-between border-b border-slate-800 pb-2"><span>Mixing & Mastering</span> <strong className="text-white">₦100,000</strong></li>
                    <li className="flex justify-between pb-1"><span>Script Writing</span> <strong className="text-white">₦20,000</strong></li>
                  </ul>
                </div>

                {/* Graphic Design */}
                <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-2 text-[#1E3DF0] mb-4">
                    <Palette className="w-5 h-5" />
                    <h4 className="font-bold text-white text-base">Graphic Design</h4>
                  </div>
                  <ul className="space-y-3 text-xs text-slate-300">
                    <li className="flex justify-between border-b border-slate-800 pb-2"><span>Logo Design</span> <strong className="text-white">₦50,000</strong></li>
                    <li className="flex justify-between border-b border-slate-800 pb-2"><span>E-Flyers</span> <strong className="text-white">₦30,000</strong></li>
                    <li className="flex justify-between border-b border-slate-800 pb-2"><span>Album Cover</span> <strong className="text-white">₦30,000</strong></li>
                    <li className="flex justify-between border-b border-slate-800 pb-2"><span>Book Cover</span> <strong className="text-white">₦40,000</strong></li>
                    <li className="flex justify-between border-b border-slate-800 pb-2"><span>Brochures (1-5 pages)</span> <strong className="text-white">₦70,000</strong></li>
                    <li className="flex justify-between border-b border-slate-800 pb-2"><span>Brochures (6-8 pages)</span> <strong className="text-white">₦150,000</strong></li>
                    <li className="flex justify-between pb-1"><span>Design Package (5-6)</span> <strong className="text-white">₦150,000</strong></li>
                  </ul>
                </div>

                {/* Animation & Video */}
                <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-2 text-[#1E3DF0] mb-4">
                    <Video className="w-5 h-5" />
                    <h4 className="font-bold text-white text-base">Animation & Video</h4>
                  </div>
                  <ul className="space-y-3 text-xs text-slate-300">
                    <li className="flex justify-between border-b border-slate-800 pb-2"><span>3D Animation (1 Min)</span> <strong className="text-white">₦350,000</strong></li>
                    <li className="flex justify-between border-b border-slate-800 pb-2"><span>Animation Picture</span> <strong className="text-white">₦50,000</strong></li>
                    <li className="flex justify-between border-b border-slate-800 pb-2"><span>Video Editing</span> <strong className="text-white">₦50,000</strong></li>
                    <li className="flex justify-between border-b border-slate-800 pb-2"><span>Shooting & Video Edit</span> <strong className="text-white">₦80,000</strong></li>
                    <li className="flex justify-between pb-1"><span>Montage Video</span> <strong className="text-white">₦100,000</strong></li>
                  </ul>
                </div>

                {/* Social Media & Marketing */}
                <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-2 text-[#1E3DF0] mb-4">
                    <Share2 className="w-5 h-5" />
                    <h4 className="font-bold text-white text-base">Social Media</h4>
                  </div>
                  <ul className="space-y-3 text-xs text-slate-300">
                    <li className="flex justify-between border-b border-slate-800 pb-2"><span>Social Media Mgmt</span> <strong className="text-white">₦150,000 / mo</strong></li>
                    <li className="flex justify-between border-b border-slate-800 pb-2"><span>Email Marketing</span> <strong className="text-white">₦200,000</strong></li>
                  </ul>
                  <div className="mt-6 p-3 rounded-xl bg-[#1E3DF0]/10 border border-[#1E3DF0]/30 text-[11px] text-slate-300">
                    Includes Content Calendar, Design, Reels, Analytics & Ad Setup.
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}