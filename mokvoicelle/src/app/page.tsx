// app/page.tsx
'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import Pricing from '@/components/Pricing'; 
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Faq from '@/components/FAQ';
import Footer from '@/components/Footer';

// Dynamically load client-heavy sliders or components to prevent SSR crashes
const Portfolio = dynamic(() => import('@/components/Portfolio'), { ssr: false });
const TeamSlider = dynamic(() => import('@/components/TeamSlider'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />
      <section id="hero"><HeroSection /></section>
      <section id="services"><ServicesGrid /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="pricing"><Pricing /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="team"><TeamSlider /></section>
      <section id="contact" className="py-24 bg-slate-900/40 text-center px-6 border-t border-slate-800/40"><Contact /></section>
      <section id="faq" className="py-24 bg-slate-900/40 text-center px-6 border-t border-slate-800/40"><Faq /></section>
      <Footer />
    </main>
  );
}