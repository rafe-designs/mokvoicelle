// src/app/pricing/page.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, ArrowRight, Zap, Mic, Palette, Video, Share2, Globe, ShieldCheck, ArrowLeft, Smartphone } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type PricingCategory = 'all' | 'web' | 'mobile' | 'voice' | 'design' | 'animation' | 'social';

interface ServiceItem {
  id: string;
  name: string;
  price: string;
  description: string;
  features?: string[];
  popular?: boolean;
}

const CATEGORIZED_PRICING: Record<PricingCategory, { title: string; subtitle: string; icon: React.ReactNode; items: ServiceItem[] }> = {
  all: {
    title: 'Complete Master Rate Card',
    subtitle: 'Transparent, upfront pricing across all digital engineering, mobile apps, creative production, and media services.',
    icon: <Zap className="w-5 h-5" />,
    items: [],
  },
  web: {
    title: 'Web Engineering & Digital Solutions',
    subtitle: 'High-performance digital platforms engineered for speed, security, and conversion.',
    icon: <Globe className="w-5 h-5" />,
    items: [
      {
        id: 'web-1',
        name: 'Brand New Website (Native Build)',
        price: '₦600,000',
        description: 'High-performance React/Next.js custom web application engineered for speed with neomorphic/glassmorphic UI.',
        features: ['Native Custom React / Next.js Build', '1 Year SEO Support', '1 Year Data Analytics Integration', 'Tailwind CSS UI Styling', 'Priority Technical Deployment'],
        popular: true,
      },
      {
        id: 'web-2',
        name: 'Brand New Website (WordPress / CMS)',
        price: '₦450,005',
        description: 'Ideal for fast-launch corporate sites, blogs, and easily manageable CMS platforms.',
        features: ['Custom WordPress Architecture', '1 Year SEO Support', '1 Year Data Analytics Setup', 'Responsive Mobile & Tablet Design', 'CMS Training & Client Dashboard'],
      },
      {
        id: 'web-3',
        name: 'Website Revamping',
        price: '₦250,000',
        description: 'Transform your existing website with a modern design upgrade and performance overhaul.',
        features: ['UI/UX Design Overhaul', 'Mobile Responsiveness Fixes', 'Speed & Performance Optimization', 'SEO Structure Refinement', 'Content Alignment & Layout Renewal'],
      },
    ],
  },
  mobile: {
    title: 'Mobile App Development',
    subtitle: 'High-performance native, cross-platform mobile apps, and rapid startup MVPs.',
    icon: <Smartphone className="w-5 h-5" />,
    items: [
      {
        id: 'mob-1',
        name: 'iOS App Development',
        price: '₦1,200,000',
        description: 'Dedicated native iOS application built with Swift optimized for performance and App Store deployment.',
        features: ['Native Swift Development', 'Apple App Store Submission', 'Custom UI/UX Implementation', 'Secure Authentication & Storage', '1 Year Maintenance Support'],
      },
      {
        id: 'mob-2',
        name: 'Android App Development',
        price: '₦1,200,000',
        description: 'Robust native Android application built with Kotlin optimized for Google Play Store standards.',
        features: ['Native Kotlin Development', 'Google Play Console Launch', 'Custom Material UI Design', 'API Integration & Local Database', '1 Year Maintenance Support'],
      },
      {
        id: 'mob-3',
        name: 'Cross-Platform App Development',
        price: '₦1,200,000',
        description: 'Simultaneous iOS and Android application deployment built using React Native or Flutter.',
        features: ['React Native / Flutter Framework', 'Single Codebase Efficiency', 'Both App Store & Play Store Launch', 'Responsive UI & Native Features', '1 Year Maintenance Support'],
        popular: true,
      },
      {
        id: 'mob-4',
        name: 'Mobile App UI/UX Overhaul',
        price: '₦500,000',
        description: 'Complete user interface redesign and user experience enhancement for existing mobile apps.',
        features: ['Figma Wireframing & Prototyping', 'Modern Dark/Light Glassmorphism UI', 'User Journey Optimization', 'Design System Hand-off'],
      },
      {
        id: 'mob-5',
        name: 'Startup Mobile App MVP',
        price: '₦1,500,000',
        description: 'Minimum Viable Product to test your startup idea fast in the market with core functionality.',
        features: ['Core Feature Implementation', 'Cross-Platform Build (iOS & Android)', 'User Auth & Database Backend', 'Payment Gateway Integration', 'Rapid Go-To-Market Delivery'],
      },
    ],
  },
  voice: {
    title: 'Voice Overs & Audio Production',
    subtitle: 'Studio-grade voice acting, narration, and professional audio engineering.',
    icon: <Mic className="w-5 h-5" />,
    items: [
      {
        id: 'voice-1',
        name: 'Silver Package',
        price: '₦50,000',
        description: 'Professional voicing and pristine audio editing. Client provides the script. (Duration: 1 Minute)',
        features: ['Professional Voicing', 'Audio Editing & Mastering', 'Client Provides Script', 'Up to 1 Minute Duration'],
      },
      {
        id: 'voice-2',
        name: 'Gold Package',
        price: '₦70,000',
        description: 'Complete end-to-end voiceover production including professional script writing. (Duration: 1 Minute)',
        features: ['Professional Voicing', 'Audio Editing & Mastering', 'Custom Scriptwriting Included', 'Up to 1 Minute Duration'],
        popular: true,
      },
      {
        id: 'voice-3',
        name: 'Platinum Package',
        price: '₦100,000',
        description: 'Premium multi-voice production for advanced commercial spots. (Duration: 1 Minute)',
        features: ['Professional Voicing', 'Audio Editing & Mastering', 'Custom Scriptwriting Included', 'Up to Two Voices on Project', 'Up to 1 Minute Duration'],
      },
      {
        id: 'voice-4',
        name: 'Interactive Voice Response (IVR)',
        price: '₦100,000',
        description: 'Professional telephony prompts and automated attendant voice recordings for corporate phone systems.',
      },
      {
        id: 'voice-5',
        name: 'Audiobook Voicing (1-50 Pages)',
        price: '₦200,000',
        description: 'Engaging, long-form audiobook narration and chapter editing. *Above 50 pages attracts additional cost.',
      },
      {
        id: 'voice-6',
        name: 'Mixing & Mastering',
        price: '₦100,000',
        description: 'Professional audio cleanup, vocal tuning, EQ balance, and master output processing.',
      },
      {
        id: 'voice-7',
        name: 'Biography Reading',
        price: '₦50,000',
        description: 'Expressive narration for personal memoirs, tributes, or company history profiles.',
      },
      {
        id: 'voice-8',
        name: 'Standalone Script Writing',
        price: '₦20,000',
        description: 'Compelling commercial, promotional, or explainer script writing tailored to your brand voice.',
      },
    ],
  },
  design: {
    title: 'Graphic Design & Brand Identity',
    subtitle: 'Striking visual assets engineered for high brand recall and audience engagement.',
    icon: <Palette className="w-5 h-5" />,
    items: [
      {
        id: 'des-1',
        name: 'Logo Design',
        price: '₦50,000',
        description: 'Distinctive brand mark design complete with brand guidelines and multi-format vector exports.',
      },
      {
        id: 'des-2',
        name: 'E-Flyers & Promotional Art',
        price: '₦30,000',
        description: 'High-impact digital event flyers optimized for Instagram, TikTok, and Facebook campaigns.',
        popular: true,
      },
      {
        id: 'des-3',
        name: 'Album Cover Art',
        price: '₦30,000',
        description: 'Captivating single or album cover artwork designed for streaming platforms and physical distribution.',
      },
      {
        id: 'des-4',
        name: 'Book Cover Design',
        price: '₦40,000',
        description: 'Professional front, spine, and back cover layouts for published books and Kindle editions.',
      },
      {
        id: 'des-5',
        name: 'Brochures & EPKs (1-5 Pages)',
        price: '₦70,000',
        description: 'Electronic Press Kits or corporate brochures designed to showcase artist or business credentials.',
      },
      {
        id: 'des-6',
        name: 'Brochures & EPKs (6-8 Pages)',
        price: '₦150,000',
        description: 'Comprehensive multi-page corporate layout for detailed proposals or agency profiles.',
      },
      {
        id: 'des-7',
        name: 'Design Package (5-6 Designs Bundle)',
        price: '₦150,000',
        description: 'Discounted bundle covering cohesive promotional graphics and marketing collateral.',
      },
    ],
  },
  animation: {
    title: 'Animation & Video Production',
    subtitle: 'Cinematic motion graphics, video editing, and immersive 3D visual assets.',
    icon: <Video className="w-5 h-5" />,
    items: [
      {
        id: 'anim-1',
        name: '3D Animation (1 Minute)',
        price: '₦350,000',
        description: 'High-end 3D character or cybernetic animation showreel production.',
        popular: true,
      },
      {
        id: 'anim-2',
        name: 'Animation Picture Design',
        price: '₦50,000',
        description: 'Stunning animated still artwork for social feeds and digital displays.',
      },
      {
        id: 'anim-3',
        name: 'Standard Video Editing',
        price: '₦50,000',
        description: 'Professional cutdowns, color grading, and transition editing for raw footage.',
      },
      {
        id: 'anim-4',
        name: 'Shooting & Video Editing',
        price: '₦80,000',
        description: 'On-site or location video capture paired with full post-production editing.',
      },
      {
        id: 'anim-5',
        name: 'Montage Video',
        price: '₦100,000',
        description: 'Rhythmic, high-energy event or brand montage synchronized with custom sound design.',
      },
    ],
  },
  social: {
    title: 'Social Media & Digital Marketing',
    subtitle: 'Comprehensive online presence management, calendar planning, and growth strategy.',
    icon: <Share2 className="w-5 h-5" />,
    items: [
      {
        id: 'soc-1',
        name: 'Social Media Management',
        price: '₦150,000 / mo',
        description: 'Monthly content calendar, graphic asset design, still and moving pictures, and data analytics.',
        features: ['Monthly Content Calendar', 'Content Design & Reels', 'Instagram, Facebook, TikTok', 'Data Analysis & Insights', 'Active Engagement Management'],
        popular: true,
      },
      {
        id: 'soc-2',
        name: 'Email Marketing Campaigns',
        price: '₦200,000',
        description: 'Strategic email sequence design, copywriting, list segmentation, and automated campaign deployment.',
      },
    ],
  },
};

export default function PricingHubPage() {
  const [activeTab, setActiveTab] = useState<PricingCategory>('all');

  // Flatten items for 'all' tab
  const allItems = [
    ...CATEGORIZED_PRICING.web.items,
    ...CATEGORIZED_PRICING.mobile.items,
    ...CATEGORIZED_PRICING.voice.items,
    ...CATEGORIZED_PRICING.design.items,
    ...CATEGORIZED_PRICING.animation.items,
    ...CATEGORIZED_PRICING.social.items,
  ];

  const displayedItems = activeTab === 'all' ? allItems : CATEGORIZED_PRICING[activeTab].items;

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 border-b border-slate-800/60 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[#1E3DF0]/10 rounded-full blur-[170px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors mb-8 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-[#1E3DF0]/10 border border-[#1E3DF0]/20 text-white mb-4 inline-block">
              Transparent Master Rate Card
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Investment & Service Pricing
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Explore our complete, transparent pricing catalog for digital web development, mobile apps, voiceover packages, graphic design, animation, and social media management.
            </p>
          </div>

          {/* Category Navigation Tabs */}
          <div className="flex flex-wrap gap-2.5 mt-12 p-2 rounded-2xl bg-[#121A33] border border-slate-800 backdrop-blur-xl">
            {(
              [
                { id: 'all', label: 'All Services' },
                { id: 'web', label: 'Web Engineering' },
                { id: 'mobile', label: 'Mobile Apps' },
                { id: 'voice', label: 'Voice Overs' },
                { id: 'design', label: 'Graphic Design' },
                { id: 'animation', label: 'Animation & Video' },
                { id: 'social', label: 'Social Media' },
              ] as { id: PricingCategory; label: string }[]
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#1E3DF0] text-white shadow-lg shadow-[#1E3DF0]/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          {activeTab !== 'all' && (
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3 text-white">
                <span className="p-2 rounded-xl bg-[#1E3DF0]/10 text-[#1E3DF0] border border-[#1E3DF0]/20">
                  {CATEGORIZED_PRICING[activeTab].icon}
                </span>
                {CATEGORIZED_PRICING[activeTab].title}
              </h2>
              <p className="text-slate-400 text-sm">{CATEGORIZED_PRICING[activeTab].subtitle}</p>
            </div>
          )}

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {displayedItems.map((item, index) => (
                <motion.div
                  key={item.id || index}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`relative bg-[#121A33]/90 border rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                    item.popular
                      ? 'border-[#1E3DF0] shadow-[0_15px_40px_rgba(30,61,240,0.25)] scale-[1.02]'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {item.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#1E3DF0] text-[10px] font-bold tracking-wider uppercase text-white shadow-lg flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Recommended Tier</span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-6 min-h-[40px]">
                      {item.description}
                    </p>

                    <div className="mb-6 pb-6 border-b border-slate-800/60">
                      <span className="text-3xl font-extrabold text-white">{item.price}</span>
                    </div>

                    {item.features && item.features.length > 0 && (
                      <ul className="space-y-3 mb-8">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-xs text-slate-300">
                            <div className="p-0.5 rounded-full bg-[#1E3DF0]/20 text-[#1E3DF0] mt-0.5 shrink-0">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <a
                    href="/contact"
                    className={`w-full py-3.5 px-6 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                      item.popular
                        ? 'bg-[#1E3DF0] hover:bg-[#1832C7] text-white shadow-lg shadow-[#1E3DF0]/40'
                        : 'bg-slate-800/80 hover:bg-slate-700 text-white'
                    }`}
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Terms Note */}
          <div className="mt-16 p-6 rounded-2xl bg-[#121A33]/50 border border-slate-800 text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#1E3DF0] shrink-0" />
              <p>
                <strong className="text-white">Project Terms:</strong> Graphic design packages include a maximum of three (3) correction stages. Audiobook voicing above 50 pages and longer durations attract additional charges.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-xl bg-[#1E3DF0] hover:bg-[#1832C7] text-white font-semibold whitespace-nowrap shadow-md transition-all"
            >
              Get Custom Quote
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}