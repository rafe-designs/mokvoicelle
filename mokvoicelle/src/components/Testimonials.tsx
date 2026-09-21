'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
  projectTag: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote:
      'MOK Voicelle transformed our entire social media presence with absolutely stunning and breath-taking designs.The results were immediate and impressive.',
    author: 'Benestelle',
    role: 'Ceo & Founder',
    company: 'Benestelle',
    rating: 5,
    avatar: '/images/testimonials/benestelle.jpeg',
    projectTag: 'Native Web Build',
  },
  {
    id: '2',
    quote:
      'Our luxury concierge portal needed a high-end UI redesign that reflected our brand value. They delivered an incredible neomorphic interface well ahead of schedule.',
    author: 'Sarah Jenkins',
    role: 'Head of Operations',
    company: 'Aura Concierge',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    projectTag: 'Web UI & Systems',
  },
  {
    id: '3',
    quote:
      'The voiceover quality and 3D animation work exceeded all expectations for our media campaign. Combining media assets with our web redesign made everything seamless.',
    author: 'Tunde Bakare',
    role: 'Marketing Lead',
    company: 'Apex Media & Health',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    projectTag: 'Animation & Voiceovers',
  },
  {
    id: '4',
    quote:
      'Their complete brand overhaul and social media content management completely revitalized our customer engagement metrics within two months of launch.',
    author: 'Pop-Up Lagos',
    role: 'CEO & Founder',
    company: 'Pop-Up Lagos Restaurant and Events',
    rating: 5,
    avatar: '/images/testimonials/popup.jpeg',
    projectTag: 'Logo Design',
  },
  {
    id: '5',
    quote:
      'Working with MOK Voicelle was effortless. The logo was quite beautiful and it sits perfectly on my IG.',
    author: 'Mrs Lara Johnson',
    role: 'Ceo & Founder',
    company: 'Relationship Focus',
    rating: 5,
    avatar: '/images/testimonials/lara.jpeg',
    projectTag: 'Logo Design',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Auto-play toggle logic (5-second intervals)
  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handleNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Get current set of 3 visible cards for desktop
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(TESTIMONIALS[(currentIndex + i) % TESTIMONIALS.length]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-[#080C1A] text-white relative overflow-hidden border-t border-slate-800/40">
      
      {/* Background Glow Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#1E3DF0]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1E3DF0]/40 bg-[#1E3DF0]/10 text-xs font-semibold text-white mb-4 shadow-sm">
            <Quote className="w-3.5 h-3.5" />
            <span>Client Impact</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            What Our Partners Say
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Real feedback from businesses powered by our web engineering, UI systems, and digital content production.
          </p>
        </div>

        {/* Dynamic 3D Neomorphic Slider Area */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch min-h-[320px]">
            <AnimatePresence mode="popLayout">
              {getVisibleTestimonials().map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -15 }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="relative group bg-[#10172D] rounded-3xl p-8 flex flex-col justify-between
                    border border-slate-800/80
                    shadow-[10px_10px_30px_rgba(4,7,17,0.8),-8px_-8px_25px_rgba(255,255,255,0.02)]
                    hover:shadow-[14px_14px_40px_rgba(4,7,17,0.9),-10px_-10px_30px_rgba(30,61,240,0.15)]
                    hover:border-[#1E3DF0]/50 transition-all duration-300"
                >
                  {/* Top Badge & Stars */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center text-[10px] font-semibold text-white bg-[#1E3DF0]/10 px-3 py-1 rounded-full border border-[#1E3DF0]/30 shadow-inner">
                      {item.projectTag}
                    </span>
                    
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-8 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  {/* Author Meta */}
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-800/60">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#1E3DF0]/40 shadow-md shrink-0"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#1E3DF0] transition-colors">
                        {item.author}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-medium">
                        {item.role} &bull; <span className="text-slate-300">{item.company}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="p-3 rounded-full bg-[#10172D] border border-slate-800 hover:border-[#1E3DF0] text-slate-400 hover:text-white transition-all shadow-[6px_6px_16px_rgba(4,7,17,0.8),-6px_-6px_16px_rgba(255,255,255,0.02)] active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAutoplay(false);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-8 bg-[#1E3DF0] shadow-[0_0_12px_rgba(30,61,240,0.8)]'
                      : 'w-2 bg-slate-800 hover:bg-slate-700'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="p-3 rounded-full bg-[#10172D] border border-slate-800 hover:border-[#1E3DF0] text-slate-400 hover:text-white transition-all shadow-[6px_6px_16px_rgba(4,7,17,0.8),-6px_-6px_16px_rgba(255,255,255,0.02)] active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}