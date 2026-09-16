'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { TEAM_MEMBERS, TeamMember } from '../data/team';

export default function TeamSlider() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Manual & Automated Scroll Handling
  const scroll = useCallback((direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const cardWidth = 300; // Step distance matching card width + gap
      const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      const currentScroll = carouselRef.current.scrollLeft;

      if (direction === 'right') {
        // Loop back to start if reached end
        if (currentScroll >= maxScrollLeft - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      } else {
        // Loop to end if reached start
        if (currentScroll <= 10) {
          carouselRef.current.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }
      }
    }
  }, []);

  // Automatic Slider Interval (3.5 Seconds)
  useEffect(() => {
    if (isHovered || selectedMember) return;

    const autoSlideInterval = setInterval(() => {
      scroll('right');
    }, 3500);

    return () => clearInterval(autoSlideInterval);
  }, [isHovered, selectedMember, scroll]);

  return (
    <section id="team" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800/40">
      
      {/* Background Brand Lighting Accent */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-[#1E3DF0]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header & Control Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1E3DF0]/40 bg-[#1E3DF0]/10 text-xs font-semibold text-whitemb-3 shadow-sm shadow-[#1E3DF0]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>World-Class Talent</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Meet the Minds Behind MOK</h2>
          </div>

          {/* Active Navigation Controls */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-[#1E3DF0] hover:border-[#1E3DF0] transition-all text-slate-300 hover:text-white shadow-md active:scale-95"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-[#1E3DF0] hover:border-[#1E3DF0] transition-all text-slate-300 hover:text-white shadow-md active:scale-95"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
        >
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-8 pt-2 cursor-grab active:cursor-grabbing"
          >
            {TEAM_MEMBERS.map((member) => (
              <motion.div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="w-[260px] sm:w-[280px] bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden group hover:border-[#1E3DF0]/60 hover:shadow-[0_12px_30px_rgba(30,61,240,0.25)] transition-all duration-300 flex-shrink-0 cursor-pointer"
              >
                {/* Image Container with Top Object Position for Face Visibility */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-800">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 260px, 280px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                </div>

                {/* Card Content Details */}
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider block mb-1">
                      {member.role}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{member.name}</h3>
                    <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <button className="mt-4 text-xs font-semibold text-slate-300 group-hover:text-[#1E3DF0] transition-colors flex items-center gap-1.5">
                    <span>Read Full Bio</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Expanded Bio Modal Overlay */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-slate-900 border border-[#1E3DF0]/40 rounded-2xl p-6 md:p-8 text-white shadow-[0_20px_50px_rgba(30,61,240,0.3)] overflow-hidden"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-[#1E3DF0] transition-all"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#1E3DF0] flex-shrink-0">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    sizes="64px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{selectedMember.name}</h3>
                  <p className="text-[#1E3DF0] text-sm font-semibold">{selectedMember.role}</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {selectedMember.bio}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}